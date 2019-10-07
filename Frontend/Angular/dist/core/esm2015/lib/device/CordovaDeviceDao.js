/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Observable } from "rxjs";
import { Address } from "./contact/Address";
import { Phone } from "./contact/Phone";
import { ContactItem } from "./contact/ContactItem";
export class CordovaDeviceDao {
    constructor() { }
    /**
     * @param {?} name
     * @return {?}
     */
    searchcontactsByName(name) {
        /** @type {?} */
        var _navigator = ((/** @type {?} */ (navigator)));
        /** @type {?} */
        var fields = [_navigator.contacts.fieldType.displayName, _navigator.contacts.fieldType.name];
        /** @type {?} */
        var options = new ContactFindOptions();
        options.filter = name;
        options.multiple = true;
        options.desiredFields = [_navigator.contacts.fieldType.name, _navigator.contacts.fieldType.emails, _navigator.contacts.fieldType.addresses, _navigator.contacts.fieldType.phoneNumbers];
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            _navigator.contacts.find(fields, (/**
             * @param {?} contacts
             * @return {?}
             */
            (contacts) => {
                console.log('find contacts results:', contacts);
                /** @type {?} */
                var returnObj = {
                    "Body": []
                }
                // var results = [];
                ;
                // var results = [];
                for (let contact of contacts) {
                    /** @type {?} */
                    let firstName = contact.name.givenName || '';
                    /** @type {?} */
                    let lastName = contact.name.familyName || '';
                    /** @type {?} */
                    let birthday = contact.name.birthday || null;
                    /** @type {?} */
                    let emails = contact.emails == null ? [] : contact.emails.map((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => x.value));
                    /** @type {?} */
                    let phones = contact.phoneNumbers == null ? [] : contact.phoneNumbers.map((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => new Phone(x.type, x.value.trim())));
                    /** @type {?} */
                    let address = contact.addresses == null ? [] : contact.addresses.map(this.convertAddress);
                    returnObj['Body'].push(new ContactItem(firstName, lastName, birthday, phones, emails, address));
                }
                observer.next(returnObj);
                observer.complete();
            }), (/**
             * @param {?} contactError
             * @return {?}
             */
            (contactError) => {
                console.log('contacts error:', contactError, options);
                observer.error(contactError);
                observer.complete();
            }), options);
        }));
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    convertAddress(item) {
        /** @type {?} */
        let type = item.type || null;
        /** @type {?} */
        let address = item.streetAddress || null;
        /** @type {?} */
        let area = item.locality || null;
        /** @type {?} */
        let city = item.reigon || null;
        /** @type {?} */
        let code = item.postalCode || null;
        return new Address(type, city, area, code, address);
    }
    /**
     * @return {?}
     */
    registerNotfiy() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.checkNotifyPermission();
            /** @type {?} */
            let token = yield this.getFirbaseToken();
            while (token === null) {
                yield this.waitnseconds(2000);
                token = yield this.getFirbaseToken();
            }
            return token;
        });
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    onNotifyTokenRefresh(callback) {
        return window.FirebasePlugin.onTokenRefresh((/**
         * @param {?} token
         * @return {?}
         */
        (token) => {
            callback(token);
        }), (/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            console.warn('token refresh error:', err.message);
        }));
        ;
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    onNotificationOpen(callback) {
        window.FirebasePlugin.onMessageReceived((/**
         * @param {?} notification
         * @return {?}
         */
        (notification) => {
            callback(notification);
        }), (/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            console.warn('notification open error:', err.message);
        }));
    }
    /**
     * @param {?} subject
     * @return {?}
     */
    subscribeSubject(subject) {
        window.FirebasePlugin.subscribe(subject);
    }
    /**
     * @param {?} subject
     * @return {?}
     */
    unsubscribeSubject(subject) {
        window.FirebasePlugin.unsubscribe(subject);
    }
    /**
     * @private
     * @return {?}
     */
    checkNotifyPermission() {
        window.FirebasePlugin.hasPermission((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (!data.isEnabled) {
                window.FirebasePlugin.grantPermission();
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    getFirbaseToken() {
        return new Promise((/**
         * @param {?} res
         * @param {?} rej
         * @return {?}
         */
        (res, rej) => {
            window.FirebasePlugin.getToken((/**
             * @param {?} token
             * @return {?}
             */
            (token) => {
                console.log("firebase gettoken:", token);
                res(token);
            }), (/**
             * @param {?} err
             * @return {?}
             */
            (err) => {
                console.warn('get token error:', err.message);
                rej(err);
            }));
        }));
    }
    /**
     * @private
     * @param {?} second
     * @return {?}
     */
    waitnseconds(second) {
        return new Promise((/**
         * @param {?} res
         * @param {?} rej
         * @return {?}
         */
        (res, rej) => {
            setTimeout((/**
             * @return {?}
             */
            () => {
                res();
            }), second);
        }));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29yZG92YURldmljZURhby5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZGV2aWNlL0NvcmRvdmFEZXZpY2VEYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSXBELE1BQU07SUFDRixnQkFBZ0IsQ0FBQzs7Ozs7SUFFVixvQkFBb0IsQ0FBQyxJQUFZOztZQUNoQyxVQUFVLEdBQUcsQ0FBQyxtQkFBSyxTQUFTLEVBQUEsQ0FBQzs7WUFDN0IsTUFBTSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzs7WUFDeEYsT0FBTyxHQUFHLElBQUksa0JBQWtCLEVBQUU7UUFDdEMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDdEIsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDeEIsT0FBTyxDQUFDLGFBQWEsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hMLE9BQU8sVUFBVSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ2xDLFVBQVUsQ0FBQyxRQUFRLENB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QUMsZUFBZSxFQUFFLENBQUM7YUFDM0M7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7O0lBRU8sZUFBZTtRQUNuQixPQUFPLElBQUksT0FBTzs7Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUM1QixNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVE7Ozs7WUFBQyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUN6QyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDZixDQUFDOzs7O1lBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDUCxPQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsQ0FBQyxFQUFDLENBQUM7UUFDUCxDQUFDLEVBQUMsQ0FBQTtJQUNOLENBQUM7Ozs7OztJQUVPLFlBQVksQ0FBQyxNQUFNO1FBQ3ZCLE9BQU8sSUFBSSxPQUFPOzs7OztRQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQzVCLFVBQVU7OztZQUFDLEdBQUcsRUFBRTtnQkFDWixHQUFHLEVBQUUsQ0FBQztZQUNWLENBQUMsR0FBRSxNQUFNLENBQUMsQ0FBQztRQUNmLENBQUMsRUFBQyxDQUFBO0lBQ04sQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSURldmljZURhbyB9IGZyb20gXCIuL0RldmljZURhby5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgQWRkcmVzcyB9IGZyb20gXCIuL2NvbnRhY3QvQWRkcmVzc1wiO1xuaW1wb3J0IHsgUGhvbmUgfSBmcm9tIFwiLi9jb250YWN0L1Bob25lXCI7XG5pbXBvcnQgeyBDb250YWN0SXRlbSB9IGZyb20gXCIuL2NvbnRhY3QvQ29udGFjdEl0ZW1cIjtcbmRlY2xhcmUgdmFyIENvbnRhY3RGaW5kT3B0aW9ucztcbmRlY2xhcmUgdmFyIHdpbmRvdztcblxuZXhwb3J0IGNsYXNzIENvcmRvdmFEZXZpY2VEYW8gaW1wbGVtZW50cyBJRGV2aWNlRGFvIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgcHVibGljIHNlYXJjaGNvbnRhY3RzQnlOYW1lKG5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHZhciBfbmF2aWdhdG9yID0gKDxhbnk+bmF2aWdhdG9yKTtcbiAgICAgICAgdmFyIGZpZWxkcyA9IFtfbmF2aWdhdG9yLmNvbnRhY3RzLmZpZWxkVHlwZS5kaXNwbGF5TmFtZSwgX25hdmlnYXRvci5jb250YWN0cy5maWVsZFR5cGUubmFtZV07XG4gICAgICAgIHZhciBvcHRpb25zID0gbmV3IENvbnRhY3RGaW5kT3B0aW9ucygpO1xuICAgICAgICBvcHRpb25zLmZpbHRlciA9IG5hbWU7XG4gICAgICAgIG9wdGlvbnMubXVsdGlwbGUgPSB0cnVlO1xuICAgICAgICBvcHRpb25zLmRlc2lyZWRGaWVsZHMgPSBbX25hdmlnYXRvci5jb250YWN0cy5maWVsZFR5cGUubmFtZSwgX25hdmlnYXRvci5jb250YWN0cy5maWVsZFR5cGUuZW1haWxzLCBfbmF2aWdhdG9yLmNvbnRhY3RzLmZpZWxkVHlwZS5hZGRyZXNzZXMsIF9uYXZpZ2F0b3IuY29udGFjdHMuZmllbGRUeXBlLnBob25lTnVtYmVyc107XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIF9uYXZpZ2F0b3IuY29udGFjdHMuZmluZChmaWVsZHMsIChjb250YWN0cykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmaW5kIGNvbnRhY3RzIHJlc3VsdHM6JywgY29udGFjdHMpO1xuICAgICAgICAgICAgICAgIHZhciByZXR1cm5PYmogPSB7XG4gICAgICAgICAgICAgICAgICAgIFwiQm9keVwiOiBbXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGNvbnRhY3Qgb2YgY29udGFjdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpcnN0TmFtZSA9IGNvbnRhY3QubmFtZS5naXZlbk5hbWUgfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0TmFtZSA9IGNvbnRhY3QubmFtZS5mYW1pbHlOYW1lIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYmlydGhkYXkgPSBjb250YWN0Lm5hbWUuYmlydGhkYXkgfHwgbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVtYWlscyA9IGNvbnRhY3QuZW1haWxzID09IG51bGwgPyBbXSA6IGNvbnRhY3QuZW1haWxzLm1hcCh4ID0+IHgudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGhvbmVzID0gY29udGFjdC5waG9uZU51bWJlcnMgPT0gbnVsbCA/IFtdIDogY29udGFjdC5waG9uZU51bWJlcnMubWFwKHggPT4gbmV3IFBob25lKHgudHlwZSwgeC52YWx1ZS50cmltKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFkZHJlc3MgPSBjb250YWN0LmFkZHJlc3NlcyA9PSBudWxsID8gW10gOiBjb250YWN0LmFkZHJlc3Nlcy5tYXAodGhpcy5jb252ZXJ0QWRkcmVzcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuT2JqWydCb2R5J10ucHVzaChuZXcgQ29udGFjdEl0ZW0oZmlyc3ROYW1lLCBsYXN0TmFtZSwgYmlydGhkYXksIHBob25lcywgZW1haWxzLCBhZGRyZXNzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmV0dXJuT2JqKTtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfSwgKGNvbnRhY3RFcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb250YWN0cyBlcnJvcjonLCBjb250YWN0RXJyb3IsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGNvbnRhY3RFcnJvcik7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH0sIG9wdGlvbnMpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgY29udmVydEFkZHJlc3MoaXRlbSk6IEFkZHJlc3Mge1xuICAgICAgICBsZXQgdHlwZSA9IGl0ZW0udHlwZSB8fCBudWxsO1xuICAgICAgICBsZXQgYWRkcmVzcyA9IGl0ZW0uc3RyZWV0QWRkcmVzcyB8fCBudWxsO1xuICAgICAgICBsZXQgYXJlYSA9IGl0ZW0ubG9jYWxpdHkgfHwgbnVsbDtcbiAgICAgICAgbGV0IGNpdHkgPSBpdGVtLnJlaWdvbiB8fCBudWxsO1xuICAgICAgICBsZXQgY29kZSA9IGl0ZW0ucG9zdGFsQ29kZSB8fCBudWxsO1xuICAgICAgICByZXR1cm4gbmV3IEFkZHJlc3ModHlwZSwgY2l0eSwgYXJlYSwgY29kZSwgYWRkcmVzcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHJlZ2lzdGVyTm90Zml5KCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHRoaXMuY2hlY2tOb3RpZnlQZXJtaXNzaW9uKCk7XG4gICAgICAgIGxldCB0b2tlbiA9IGF3YWl0IHRoaXMuZ2V0RmlyYmFzZVRva2VuKCk7XG4gICAgICAgIHdoaWxlICh0b2tlbiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy53YWl0bnNlY29uZHMoMjAwMCk7XG4gICAgICAgICAgICB0b2tlbiA9IGF3YWl0IHRoaXMuZ2V0RmlyYmFzZVRva2VuKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbk5vdGlmeVRva2VuUmVmcmVzaChjYWxsYmFjayk6IHZvaWQge1xuICAgICAgICByZXR1cm4gd2luZG93LkZpcmViYXNlUGx1Z2luLm9uVG9rZW5SZWZyZXNoKCh0b2tlbikgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2sodG9rZW4pO1xuICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ3Rva2VuIHJlZnJlc2ggZXJyb3I6JywgZXJyLm1lc3NhZ2UpO1xuICAgICAgICB9KTs7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTm90aWZpY2F0aW9uT3BlbihjYWxsYmFjayk6IHZvaWQge1xuICAgICAgICB3aW5kb3cuRmlyZWJhc2VQbHVnaW4ub25NZXNzYWdlUmVjZWl2ZWQoKG5vdGlmaWNhdGlvbikgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2sobm90aWZpY2F0aW9uKTtcbiAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdub3RpZmljYXRpb24gb3BlbiBlcnJvcjonLCBlcnIubWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdWJzY3JpYmVTdWJqZWN0KHN1YmplY3Q6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB3aW5kb3cuRmlyZWJhc2VQbHVnaW4uc3Vic2NyaWJlKHN1YmplY3QpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1bnN1YnNjcmliZVN1YmplY3Qoc3ViamVjdDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHdpbmRvdy5GaXJlYmFzZVBsdWdpbi51bnN1YnNjcmliZShzdWJqZWN0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrTm90aWZ5UGVybWlzc2lvbigpOiB2b2lkIHtcbiAgICAgICAgd2luZG93LkZpcmViYXNlUGx1Z2luLmhhc1Blcm1pc3Npb24oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGlmICghZGF0YS5pc0VuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuRmlyZWJhc2VQbHVnaW4uZ3JhbnRQZXJtaXNzaW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0RmlyYmFzZVRva2VuKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5GaXJlYmFzZVBsdWdpbi5nZXRUb2tlbigodG9rZW4pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlIGdldHRva2VuOlwiLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgcmVzKHRva2VuKTtcbiAgICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2dldCB0b2tlbiBlcnJvcjonLCBlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmVqKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIHdhaXRuc2Vjb25kcyhzZWNvbmQpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXMoKTtcbiAgICAgICAgICAgIH0sIHNlY29uZCk7XG4gICAgICAgIH0pXG4gICAgfVxufSJdfQ==