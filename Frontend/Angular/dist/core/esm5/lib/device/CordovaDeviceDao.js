/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Observable } from "rxjs";
import { Address } from "./contact/Address";
import { Phone } from "./contact/Phone";
import { ContactItem } from "./contact/ContactItem";
var CordovaDeviceDao = /** @class */ (function () {
    function CordovaDeviceDao() {
    }
    /**
     * @param {?} name
     * @return {?}
     */
    CordovaDeviceDao.prototype.searchcontactsByName = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        var _this = this;
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
        function (observer) {
            _navigator.contacts.find(fields, (/**
             * @param {?} contacts
             * @return {?}
             */
            function (contacts) {
                var e_1, _a;
                console.log('find contacts results:', contacts);
                /** @type {?} */
                var returnObj = {
                    "Body": []
                }
                // var results = [];
                ;
                try {
                    // var results = [];
                    for (var contacts_1 = tslib_1.__values(contacts), contacts_1_1 = contacts_1.next(); !contacts_1_1.done; contacts_1_1 = contacts_1.next()) {
                        var contact = contacts_1_1.value;
                        /** @type {?} */
                        var firstName = contact.name.givenName || '';
                        /** @type {?} */
                        var lastName = contact.name.familyName || '';
                        /** @type {?} */
                        var birthday = contact.name.birthday || null;
                        /** @type {?} */
                        var emails = contact.emails == null ? [] : contact.emails.map((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x.value; }));
                        /** @type {?} */
                        var phones = contact.phoneNumbers == null ? [] : contact.phoneNumbers.map((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return new Phone(x.type, x.value.trim()); }));
                        /** @type {?} */
                        var address = contact.addresses == null ? [] : contact.addresses.map(_this.convertAddress);
                        returnObj['Body'].push(new ContactItem(firstName, lastName, birthday, phones, emails, address));
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (contacts_1_1 && !contacts_1_1.done && (_a = contacts_1.return)) _a.call(contacts_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                observer.next(returnObj);
                observer.complete();
            }), (/**
             * @param {?} contactError
             * @return {?}
             */
            function (contactError) {
                console.log('contacts error:', contactError, options);
                observer.error(contactError);
                observer.complete();
            }), options);
        }));
    };
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    CordovaDeviceDao.prototype.convertAddress = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var type = item.type || null;
        /** @type {?} */
        var address = item.streetAddress || null;
        /** @type {?} */
        var area = item.locality || null;
        /** @type {?} */
        var city = item.reigon || null;
        /** @type {?} */
        var code = item.postalCode || null;
        return new Address(type, city, area, code, address);
    };
    /**
     * @return {?}
     */
    CordovaDeviceDao.prototype.registerNotfiy = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var token;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkNotifyPermission();
                        return [4 /*yield*/, this.getFirbaseToken()];
                    case 1:
                        token = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!(token === null)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.waitnseconds(2000)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.getFirbaseToken()];
                    case 4:
                        token = _a.sent();
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, token];
                }
            });
        });
    };
    /**
     * @param {?} callback
     * @return {?}
     */
    CordovaDeviceDao.prototype.onNotifyTokenRefresh = /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        return window.FirebasePlugin.onTokenRefresh((/**
         * @param {?} token
         * @return {?}
         */
        function (token) {
            callback(token);
        }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            console.warn('token refresh error:', err.message);
        }));
        ;
    };
    /**
     * @param {?} callback
     * @return {?}
     */
    CordovaDeviceDao.prototype.onNotificationOpen = /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        window.FirebasePlugin.onMessageReceived((/**
         * @param {?} notification
         * @return {?}
         */
        function (notification) {
            callback(notification);
        }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            console.warn('notification open error:', err.message);
        }));
    };
    /**
     * @param {?} subject
     * @return {?}
     */
    CordovaDeviceDao.prototype.subscribeSubject = /**
     * @param {?} subject
     * @return {?}
     */
    function (subject) {
        window.FirebasePlugin.subscribe(subject);
    };
    /**
     * @param {?} subject
     * @return {?}
     */
    CordovaDeviceDao.prototype.unsubscribeSubject = /**
     * @param {?} subject
     * @return {?}
     */
    function (subject) {
        window.FirebasePlugin.unsubscribe(subject);
    };
    /**
     * @private
     * @return {?}
     */
    CordovaDeviceDao.prototype.checkNotifyPermission = /**
     * @private
     * @return {?}
     */
    function () {
        window.FirebasePlugin.hasPermission((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (!data.isEnabled) {
                window.FirebasePlugin.grantPermission();
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    CordovaDeviceDao.prototype.getFirbaseToken = /**
     * @private
     * @return {?}
     */
    function () {
        return new Promise((/**
         * @param {?} res
         * @param {?} rej
         * @return {?}
         */
        function (res, rej) {
            window.FirebasePlugin.getToken((/**
             * @param {?} token
             * @return {?}
             */
            function (token) {
                console.log("firebase gettoken:", token);
                res(token);
            }), (/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                console.warn('get token error:', err.message);
                rej(err);
            }));
        }));
    };
    /**
     * @private
     * @param {?} second
     * @return {?}
     */
    CordovaDeviceDao.prototype.waitnseconds = /**
     * @private
     * @param {?} second
     * @return {?}
     */
    function (second) {
        return new Promise((/**
         * @param {?} res
         * @param {?} rej
         * @return {?}
         */
        function (res, rej) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                res();
            }), second);
        }));
    };
    return CordovaDeviceDao;
}());
export { CordovaDeviceDao };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29yZG92YURldmljZURhby5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZGV2aWNlL0NvcmRvdmFEZXZpY2VEYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSXBEO0lBQ0k7SUFBZ0IsQ0FBQzs7Ozs7SUFFViwrQ0FBb0I7Ozs7SUFBM0IsVUFBNEIsSUFBWTtRQUF4QyxpQkFnQ0M7O1lBL0JPLFVBQVUsR0FBRyxDQUFDLG1CQUFLLFNBQVMsRUFBQSxDQUFDOztZQUM3QixNQUFNLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDOztZQUN4RixPQUFPLEdBQUcsSUFBSSxrQkFBa0IsRUFBRTtRQUN0QyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN0QixPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN4QixPQUFPLENBQUMsYUFBYSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDeEwsT0FBTyxVQUFVLENBQUMsTUFBTTs7OztRQUFDLFVBQUMsUUFBUTtZQUM5QixVQUFVLENBQUMs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QyxDQUFDOzs7OztJQUVPLGdEQUFxQjs7OztJQUE3QjtRQUNJLE1BQU0sQ0FBQyxjQUFjLENBQUMsYUFBYTs7OztRQUFDLFVBQVUsSUFBSTtZQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDakIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUMzQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7SUFFTywwQ0FBZTs7OztJQUF2QjtRQUNJLE9BQU8sSUFBSSxPQUFPOzs7OztRQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUc7WUFDeEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFROzs7O1lBQUMsVUFBQyxLQUFLO2dCQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUN6QyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDZixDQUFDOzs7O1lBQUUsVUFBQyxHQUFHO2dCQUNILE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM5QyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDYixDQUFDLEVBQUMsQ0FBQztRQUNQLENBQUMsRUFBQyxDQUFBO0lBQ04sQ0FBQzs7Ozs7O0lBRU8sdUNBQVk7Ozs7O0lBQXBCLFVBQXFCLE1BQU07UUFDdkIsT0FBTyxJQUFJLE9BQU87Ozs7O1FBQUMsVUFBQyxHQUFHLEVBQUUsR0FBRztZQUN4QixVQUFVOzs7WUFBQztnQkFDUCxHQUFHLEVBQUUsQ0FBQztZQUNWLENBQUMsR0FBRSxNQUFNLENBQUMsQ0FBQztRQUNmLENBQUMsRUFBQyxDQUFBO0lBQ04sQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQyxBQTNHRCxJQTJHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElEZXZpY2VEYW8gfSBmcm9tIFwiLi9EZXZpY2VEYW8uaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tIFwiLi9jb250YWN0L0FkZHJlc3NcIjtcbmltcG9ydCB7IFBob25lIH0gZnJvbSBcIi4vY29udGFjdC9QaG9uZVwiO1xuaW1wb3J0IHsgQ29udGFjdEl0ZW0gfSBmcm9tIFwiLi9jb250YWN0L0NvbnRhY3RJdGVtXCI7XG5kZWNsYXJlIHZhciBDb250YWN0RmluZE9wdGlvbnM7XG5kZWNsYXJlIHZhciB3aW5kb3c7XG5cbmV4cG9ydCBjbGFzcyBDb3Jkb3ZhRGV2aWNlRGFvIGltcGxlbWVudHMgSURldmljZURhbyB7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIHB1YmxpYyBzZWFyY2hjb250YWN0c0J5TmFtZShuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICB2YXIgX25hdmlnYXRvciA9ICg8YW55Pm5hdmlnYXRvcik7XG4gICAgICAgIHZhciBmaWVsZHMgPSBbX25hdmlnYXRvci5jb250YWN0cy5maWVsZFR5cGUuZGlzcGxheU5hbWUsIF9uYXZpZ2F0b3IuY29udGFjdHMuZmllbGRUeXBlLm5hbWVdO1xuICAgICAgICB2YXIgb3B0aW9ucyA9IG5ldyBDb250YWN0RmluZE9wdGlvbnMoKTtcbiAgICAgICAgb3B0aW9ucy5maWx0ZXIgPSBuYW1lO1xuICAgICAgICBvcHRpb25zLm11bHRpcGxlID0gdHJ1ZTtcbiAgICAgICAgb3B0aW9ucy5kZXNpcmVkRmllbGRzID0gW19uYXZpZ2F0b3IuY29udGFjdHMuZmllbGRUeXBlLm5hbWUsIF9uYXZpZ2F0b3IuY29udGFjdHMuZmllbGRUeXBlLmVtYWlscywgX25hdmlnYXRvci5jb250YWN0cy5maWVsZFR5cGUuYWRkcmVzc2VzLCBfbmF2aWdhdG9yLmNvbnRhY3RzLmZpZWxkVHlwZS5waG9uZU51bWJlcnNdO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICBfbmF2aWdhdG9yLmNvbnRhY3RzLmZpbmQoZmllbGRzLCAoY29udGFjdHMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZmluZCBjb250YWN0cyByZXN1bHRzOicsIGNvbnRhY3RzKTtcbiAgICAgICAgICAgICAgICB2YXIgcmV0dXJuT2JqID0ge1xuICAgICAgICAgICAgICAgICAgICBcIkJvZHlcIjogW11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjb250YWN0IG9mIGNvbnRhY3RzKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmaXJzdE5hbWUgPSBjb250YWN0Lm5hbWUuZ2l2ZW5OYW1lIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdE5hbWUgPSBjb250YWN0Lm5hbWUuZmFtaWx5TmFtZSB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJpcnRoZGF5ID0gY29udGFjdC5uYW1lLmJpcnRoZGF5IHx8IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlbWFpbHMgPSBjb250YWN0LmVtYWlscyA9PSBudWxsID8gW10gOiBjb250YWN0LmVtYWlscy5tYXAoeCA9PiB4LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBob25lcyA9IGNvbnRhY3QucGhvbmVOdW1iZXJzID09IG51bGwgPyBbXSA6IGNvbnRhY3QucGhvbmVOdW1iZXJzLm1hcCh4ID0+IG5ldyBQaG9uZSh4LnR5cGUsIHgudmFsdWUudHJpbSgpKSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhZGRyZXNzID0gY29udGFjdC5hZGRyZXNzZXMgPT0gbnVsbCA/IFtdIDogY29udGFjdC5hZGRyZXNzZXMubWFwKHRoaXMuY29udmVydEFkZHJlc3MpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybk9ialsnQm9keSddLnB1c2gobmV3IENvbnRhY3RJdGVtKGZpcnN0TmFtZSwgbGFzdE5hbWUsIGJpcnRoZGF5LCBwaG9uZXMsIGVtYWlscywgYWRkcmVzcykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJldHVybk9iaik7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH0sIChjb250YWN0RXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29udGFjdHMgZXJyb3I6JywgY29udGFjdEVycm9yLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5lcnJvcihjb250YWN0RXJyb3IpO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9LCBvcHRpb25zKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbnZlcnRBZGRyZXNzKGl0ZW0pOiBBZGRyZXNzIHtcbiAgICAgICAgbGV0IHR5cGUgPSBpdGVtLnR5cGUgfHwgbnVsbDtcbiAgICAgICAgbGV0IGFkZHJlc3MgPSBpdGVtLnN0cmVldEFkZHJlc3MgfHwgbnVsbDtcbiAgICAgICAgbGV0IGFyZWEgPSBpdGVtLmxvY2FsaXR5IHx8IG51bGw7XG4gICAgICAgIGxldCBjaXR5ID0gaXRlbS5yZWlnb24gfHwgbnVsbDtcbiAgICAgICAgbGV0IGNvZGUgPSBpdGVtLnBvc3RhbENvZGUgfHwgbnVsbDtcbiAgICAgICAgcmV0dXJuIG5ldyBBZGRyZXNzKHR5cGUsIGNpdHksIGFyZWEsIGNvZGUsIGFkZHJlc3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyByZWdpc3Rlck5vdGZpeSgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICB0aGlzLmNoZWNrTm90aWZ5UGVybWlzc2lvbigpO1xuICAgICAgICBsZXQgdG9rZW4gPSBhd2FpdCB0aGlzLmdldEZpcmJhc2VUb2tlbigpO1xuICAgICAgICB3aGlsZSAodG9rZW4gPT09IG51bGwpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMud2FpdG5zZWNvbmRzKDIwMDApO1xuICAgICAgICAgICAgdG9rZW4gPSBhd2FpdCB0aGlzLmdldEZpcmJhc2VUb2tlbigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Ob3RpZnlUb2tlblJlZnJlc2goY2FsbGJhY2spOiB2b2lkIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5GaXJlYmFzZVBsdWdpbi5vblRva2VuUmVmcmVzaCgodG9rZW4pID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKHRva2VuKTtcbiAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCd0b2tlbiByZWZyZXNoIGVycm9yOicsIGVyci5tZXNzYWdlKTtcbiAgICAgICAgfSk7O1xuICAgIH1cblxuICAgIHB1YmxpYyBvbk5vdGlmaWNhdGlvbk9wZW4oY2FsbGJhY2spOiB2b2lkIHtcbiAgICAgICAgd2luZG93LkZpcmViYXNlUGx1Z2luLm9uTWVzc2FnZVJlY2VpdmVkKChub3RpZmljYXRpb24pID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG5vdGlmaWNhdGlvbik7XG4gICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybignbm90aWZpY2F0aW9uIG9wZW4gZXJyb3I6JywgZXJyLm1lc3NhZ2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3Vic2NyaWJlU3ViamVjdChzdWJqZWN0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgd2luZG93LkZpcmViYXNlUGx1Z2luLnN1YnNjcmliZShzdWJqZWN0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdW5zdWJzY3JpYmVTdWJqZWN0KHN1YmplY3Q6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB3aW5kb3cuRmlyZWJhc2VQbHVnaW4udW5zdWJzY3JpYmUoc3ViamVjdCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja05vdGlmeVBlcm1pc3Npb24oKTogdm9pZCB7XG4gICAgICAgIHdpbmRvdy5GaXJlYmFzZVBsdWdpbi5oYXNQZXJtaXNzaW9uKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBpZiAoIWRhdGEuaXNFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LkZpcmViYXNlUGx1Z2luLmdyYW50UGVybWlzc2lvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEZpcmJhc2VUb2tlbigpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cuRmlyZWJhc2VQbHVnaW4uZ2V0VG9rZW4oKHRva2VuKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaXJlYmFzZSBnZXR0b2tlbjpcIiwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIHJlcyh0b2tlbik7XG4gICAgICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdnZXQgdG9rZW4gZXJyb3I6JywgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJlaihlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB3YWl0bnNlY29uZHMoc2Vjb25kKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzKCk7XG4gICAgICAgICAgICB9LCBzZWNvbmQpO1xuICAgICAgICB9KVxuICAgIH1cbn0iXX0=