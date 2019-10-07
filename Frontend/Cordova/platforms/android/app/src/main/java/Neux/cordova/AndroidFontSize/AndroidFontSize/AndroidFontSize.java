package Neux.cordova.AndroidFontSize;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.os.Build;
import android.webkit.WebView;

import java.lang.IllegalAccessException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

/**
 * This class echoes a string called from JavaScript.
 */
public class AndroidFontSize extends CordovaPlugin {
    private AbstractMobileAccessibilityHelper mMobileAccessibilityHelper;

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
            mMobileAccessibilityHelper = new KitKatMobileAccessibilityHelper();
        } else if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN) {
            mMobileAccessibilityHelper = new JellyBeanMobileAccessibilityHelper();
        } else if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.ICE_CREAM_SANDWICH) {
            mMobileAccessibilityHelper = new IceCreamSandwichMobileAccessibilityHelper();
        } else {
            mMobileAccessibilityHelper = new DonutMobileAccessibilityHelper();
        }
        mMobileAccessibilityHelper.initialize(this);
    }

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("removeSystemFontSize")) {
            this.removeSystemFontSize();
            return true;
        }
        return false;
    }

    private  void removeSystemFontSize() {
        cordova.getActivity().runOnUiThread(new Runnable() {
            public void run() {
                mMobileAccessibilityHelper.setTextZoom(100);
            }
        });
    }
}
