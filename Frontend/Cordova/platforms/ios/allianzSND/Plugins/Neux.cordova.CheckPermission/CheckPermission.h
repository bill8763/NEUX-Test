#import <Cordova/CDVPlugin.h>

@interface CheckPermission : CDVPlugin

- (void)checkContactPermission:(CDVInvokedUrlCommand*)command;

@end