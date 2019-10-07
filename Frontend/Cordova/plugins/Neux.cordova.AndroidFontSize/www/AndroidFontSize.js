var exec = require('cordova/exec');

var AndroidFontSize = function(){};  

AndroidFontSize.prototype.removeSystemFontSize = function(arg0, success, error) {
    exec(success, error, "AndroidFontSize", "removeSystemFontSize", arg0);
    console.warn('<--- androidFontSize --->')
};

var androidFontSize = new AndroidFontSize();
module.exports = androidFontSize; 