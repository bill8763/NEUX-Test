/********* CheckPermission.m Cordova Plugin Implementation *******/
#import "CheckPermission.h"
#import <Cordova/CDV.h>
#import <Cordova/CDVPluginResult.h>
#import <Contacts/Contacts.h>

@implementation CheckPermission

- (void)grantContactPermission:(CDVInvokedUrlCommand*)command
{
    CNContactStore *contactStore = [[CNContactStore alloc] init];	
    switch ([CNContactStore authorizationStatusForEntityType:CNEntityTypeContacts])
    {
        case CNAuthorizationStatusAuthorized:
            break;
            
        case CNAuthorizationStatusNotDetermined:
        	[contactStore requestAccessForEntityType:CNEntityTypeContacts completionHandler:^(BOOL granted, NSError * _Nullable error) {
            	;
            }];
            break;
        case CNAuthorizationStatusRestricted:
        case CNAuthorizationStatusDenied:
        	[[UIApplication sharedApplication] openURL:[NSURL URLWithString:UIApplicationOpenSettingsURLString]];
            break;
    }
}

- (void)checkContactPermission:(CDVInvokedUrlCommand*)command
{
    CNContactStore *contactStore = [[CNContactStore alloc] init];	
    NSString *msg = [[NSString alloc] init];

    switch ([CNContactStore authorizationStatusForEntityType:CNEntityTypeContacts])
    {
        case CNAuthorizationStatusAuthorized:
    		msg = @"Authorized";
            break;
            
        case CNAuthorizationStatusNotDetermined:
    		msg = @"NotDetermined";
            break;
        case CNAuthorizationStatusRestricted:
        case CNAuthorizationStatusDenied:
        	msg = @"Denied";
            break;
    }
    CDVPluginResult* result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:msg];
    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];

}

@end
