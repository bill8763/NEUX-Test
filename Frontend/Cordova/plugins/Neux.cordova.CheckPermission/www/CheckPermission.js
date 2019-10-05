var exec = require('cordova/exec');
var channel = require('cordova/channel');

var CheckPermission = function(){
}; 

CheckPermission.prototype.grantContactPermission = function (arg0, success, error) {
	console.warn('grantContactPermission')
    exec(success, error, 'CheckPermission', 'grantContactPermission', [arg0]);
};

CheckPermission.prototype.checkContactPermission = function (arg0, success, error) {
	console.warn('checkContactPermission', arg0)
    exec(success, error, 'CheckPermission', 'checkContactPermission', [arg0]);
};

var permission = new CheckPermission();
module.exports = permission; 

