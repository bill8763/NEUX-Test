package Neux.cordova.CheckPermission;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.PluginResult;
import org.apache.cordova.PermissionHelper;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.Manifest;

/**
 * This class echoes a string called from JavaScript.
 */
public class CheckPermission extends CordovaPlugin {

    public static final String READ_CONTACTS = Manifest.permission.READ_CONTACTS;

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("grantContactPermission")) {
            if(!PermissionHelper.hasPermission(this, READ_CONTACTS)) {
                PermissionHelper.requestPermission(this, 0, READ_CONTACTS);
            }

            return true;
        }

        if (action.equals("checkContactPermission")) {
            if(PermissionHelper.hasPermission(this, READ_CONTACTS)) {
                    PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, "Authorized");
                    pluginResult.setKeepCallback(true);
                    callbackContext.sendPluginResult(pluginResult);
            } else {
                    PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, "Denied");
                    pluginResult.setKeepCallback(true);
                    callbackContext.sendPluginResult(pluginResult);
            }

            
        }
        return false;
    }

}
