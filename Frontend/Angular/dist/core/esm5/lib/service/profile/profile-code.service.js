/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIFactory } from '../../api/APIFactory';
import { APIDispatch } from '../../api/APIDispatch';
import { TranslateService } from '../../language/translate.service';
import { ProfileCode } from '../../bean/ProfileCode';
import * as i0 from "@angular/core";
import * as i1 from "../../api/APIDispatch";
import * as i2 from "../../language/translate.service";
import * as i3 from "../../api/APIFactory";
var ProfileCodeService = /** @class */ (function () {
    function ProfileCodeService(dispatcher, translateService, APIFactory) {
        this.dispatcher = dispatcher;
        this.translateService = translateService;
        this.APIFactory = APIFactory;
        this.profileCodeTypeMap = new Map();
        this.profileCodeMap = new Map();
    }
    /**
     * @param {?} typeId
     * @return {?}
     */
    ProfileCodeService.prototype.getCodeArray = /**
     * @param {?} typeId
     * @return {?}
     */
    function (typeId) {
        if (this.profileCodeTypeMap.size != 0) {
            /** @type {?} */
            var codeArray = this.profileCodeTypeMap.get(typeId);
            if (codeArray == undefined)
                codeArray = new Array();
            return tslib_1.__spread(codeArray);
        }
        return new Array();
    };
    /**
     * @param {?} typeID
     * @param {?} code
     * @return {?}
     */
    ProfileCodeService.prototype.convertCode2Text = /**
     * @param {?} typeID
     * @param {?} code
     * @return {?}
     */
    function (typeID, code) {
        if (this.profileCodeMap.size != 0 && code != undefined) {
            /** @type {?} */
            var profileCode = this.profileCodeMap.get(typeID + '_' + code);
            if (profileCode != undefined) {
                /** @type {?} */
                var mappingID = profileCode.getMappingID();
                /** @type {?} */
                var text = this.translateService.translate(mappingID);
                return text;
            }
        }
        return code;
    };
    /**
     * @param {?} typeID
     * @param {?} code
     * @return {?}
     */
    ProfileCodeService.prototype.getArgumentsByCode = /**
     * @param {?} typeID
     * @param {?} code
     * @return {?}
     */
    function (typeID, code) {
        if (this.profileCodeMap.size != 0) {
            /** @type {?} */
            var profileCode = this.profileCodeMap.get(typeID + '_' + code);
            if (profileCode != undefined) {
                return profileCode.getArguments();
            }
        }
        return null;
    };
    /**
     * @return {?}
     */
    ProfileCodeService.prototype._fetchCodeData = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var profileCodeAPI = this.APIFactory.getAPI('getProfileCode');
        console.debug('profile-code.service fetchCodeData', profileCodeAPI);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.dispatcher.dispatch(profileCodeAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.profileCodeTypeMap.clear();
                _this.profileCodeMap.clear();
                /** @type {?} */
                var bodyDatas = data['Body'];
                console.log('<--- Datas --->');
                console.log(data);
                for (var i = 0; i < bodyDatas.length; i++) {
                    /** @type {?} */
                    var json = bodyDatas[i];
                    /** @type {?} */
                    var profileCode = Object.create(ProfileCode.prototype);
                    profileCode = Object.assign(profileCode, json);
                    /** @type {?} */
                    var typeId = profileCode.getTypeId();
                    /** @type {?} */
                    var code = profileCode.getCode();
                    /** @type {?} */
                    var mappingID = profileCode.getMappingID();
                    /** @type {?} */
                    var text = _this.translateService.translate(mappingID);
                    profileCode.setDisplayText(text);
                    /** @type {?} */
                    var codeArray = _this.profileCodeTypeMap.get(typeId);
                    if (codeArray == undefined) {
                        codeArray = new Array();
                    }
                    codeArray.push(profileCode);
                    _this.profileCodeMap.set(typeId + '_' + code, profileCode);
                    _this.profileCodeTypeMap.set(typeId, codeArray);
                }
                console.debug('profileCodeMap', _this.profileCodeMap);
                console.debug('profileCodeTypeMap', _this.profileCodeTypeMap);
                observer.next(true);
                observer.complete();
            }));
        }));
    };
    ProfileCodeService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    ProfileCodeService.ctorParameters = function () { return [
        { type: APIDispatch },
        { type: TranslateService },
        { type: APIFactory }
    ]; };
    /** @nocollapse */ ProfileCodeService.ngInjectableDef = i0.defineInjectable({ factory: function ProfileCodeService_Factory() { return new ProfileCodeService(i0.inject(i1.APIDispatch), i0.inject(i2.TranslateService), i0.inject(i3.APIFactory)); }, token: ProfileCodeService, providedIn: "root" });
    return ProfileCodeService;
}());
export { ProfileCodeService };
if (false) {
    /** @type {?} */
    ProfileCodeService.prototype.profileCodeTypeMap;
    /** @type {?} */
    ProfileCodeService.prototype.profileCodeMap;
    /**
     * @type {?}
     * @private
     */
    ProfileCodeService.prototype.dispatcher;
    /**
     * @type {?}
     * @private
     */
    ProfileCodeService.prototype.translateService;
    /**
     * @type {?}
     * @private
     */
    ProfileCodeService.prototype.APIFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1jb2RlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvcHJvZmlsZS9wcm9maWxlLWNvZGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7QUFHckQ7SUFRRSw0QkFBb0IsVUFBdUIsRUFBUyxnQkFBbUMsRUFBUyxVQUFzQjtRQUFsRyxlQUFVLEdBQVYsVUFBVSxDQUFhO1FBQVMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtRQUFTLGVBQVUsR0FBVixVQUFVLENBQVk7UUFIL0csdUJBQWtCLEdBQUcsSUFBSSxHQUFHLEVBQTZCLENBQUM7UUFDMUQsbUJBQWMsR0FBRyxJQUFJLEdBQUcsRUFBc0IsQ0FBQztJQUd0RCxDQUFDOzs7OztJQUVNLHlDQUFZOzs7O0lBQW5CLFVBQW9CLE1BQWU7UUFDakMsSUFBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTs7Z0JBQ2hDLFNBQVMsR0FBd0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFDeEUsSUFBRyxTQUFTLElBQUksU0FBUztnQkFBRSxTQUFTLEdBQUcsSUFBSSxLQUFLLEVBQWUsQ0FBQztZQUNoRSx3QkFBVyxTQUFTLEVBQUU7U0FDdkI7UUFDRCxPQUFPLElBQUks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Q0FBQyxDQUFDO29CQUM1QixLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksRUFBQyxXQUFXLENBQUMsQ0FBQztvQkFDekQsS0FBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsU0FBUyxDQUFDLENBQUM7aUJBQy9DO2dCQUVELE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUNwRCxPQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFDLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUM1RCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7WUFFdEIsQ0FBQyxFQUFDLENBQUE7UUFDSixDQUFDLEVBQUMsQ0FBQTtJQUNKLENBQUM7O2dCQW5GRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Z0JBUFEsV0FBVztnQkFDWCxnQkFBZ0I7Z0JBRmhCLFVBQVU7Ozs2QkFGbkI7Q0E2RkMsQUFyRkQsSUFxRkM7U0FsRlksa0JBQWtCOzs7SUFFN0IsZ0RBQWlFOztJQUNqRSw0Q0FBc0Q7Ozs7O0lBRTFDLHdDQUErQjs7Ozs7SUFBQyw4Q0FBMkM7Ozs7O0lBQUMsd0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQVBJRmFjdG9yeSB9IGZyb20gJy4uLy4uL2FwaS9BUElGYWN0b3J5JztcbmltcG9ydCB7IEFQSURpc3BhdGNoIH0gZnJvbSAnLi4vLi4vYXBpL0FQSURpc3BhdGNoJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9sYW5ndWFnZS90cmFuc2xhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9maWxlQ29kZSB9IGZyb20gJy4uLy4uL2JlYW4vUHJvZmlsZUNvZGUnO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFByb2ZpbGVDb2RlU2VydmljZSB7XG5cbiAgcHVibGljIHByb2ZpbGVDb2RlVHlwZU1hcCA9IG5ldyBNYXA8c3RyaW5nLEFycmF5PFByb2ZpbGVDb2RlPj4oKTtcbiAgcHVibGljIHByb2ZpbGVDb2RlTWFwID0gbmV3IE1hcDxzdHJpbmcsUHJvZmlsZUNvZGU+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkaXNwYXRjaGVyOiBBUElEaXNwYXRjaCxwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2UgOiBUcmFuc2xhdGVTZXJ2aWNlLHByaXZhdGUgQVBJRmFjdG9yeTogQVBJRmFjdG9yeSkge1xuICB9XG5cbiAgcHVibGljIGdldENvZGVBcnJheSh0eXBlSWQgOiBzdHJpbmcpIHtcbiAgICBpZih0aGlzLnByb2ZpbGVDb2RlVHlwZU1hcC5zaXplICE9IDApIHtcbiAgICAgIGxldCBjb2RlQXJyYXkgOiBBcnJheTxQcm9maWxlQ29kZT4gPSB0aGlzLnByb2ZpbGVDb2RlVHlwZU1hcC5nZXQodHlwZUlkKTtcbiAgICAgIGlmKGNvZGVBcnJheSA9PSB1bmRlZmluZWQpIGNvZGVBcnJheSA9IG5ldyBBcnJheTxQcm9maWxlQ29kZT4oKTtcbiAgICAgIHJldHVybiBbLi4uY29kZUFycmF5XTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBBcnJheTxQcm9maWxlQ29kZT4oKTtcbiAgfVxuXG4gIHB1YmxpYyBjb252ZXJ0Q29kZTJUZXh0KHR5cGVJRCA6IHN0cmluZyxjb2RlIDogc3RyaW5nKSA6IHN0cmluZyB7XG4gICAgaWYodGhpcy5wcm9maWxlQ29kZU1hcC5zaXplICE9IDAgJiYgY29kZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGxldCBwcm9maWxlQ29kZSA6IFByb2ZpbGVDb2RlID0gdGhpcy5wcm9maWxlQ29kZU1hcC5nZXQodHlwZUlEICsgJ18nICsgY29kZSk7XG4gICAgICBpZihwcm9maWxlQ29kZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgbGV0IG1hcHBpbmdJRCA6IHN0cmluZyA9IHByb2ZpbGVDb2RlLmdldE1hcHBpbmdJRCgpO1xuICAgICAgICBsZXQgdGV4dCA9IHRoaXMudHJhbnNsYXRlU2VydmljZS50cmFuc2xhdGUobWFwcGluZ0lEKTtcbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvZGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0QXJndW1lbnRzQnlDb2RlKHR5cGVJRCA6IHN0cmluZyAsIGNvZGUgOiBzdHJpbmcpIDogc3RyaW5nIHtcbiAgICBpZih0aGlzLnByb2ZpbGVDb2RlTWFwLnNpemUgIT0gMCkge1xuICAgICAgbGV0IHByb2ZpbGVDb2RlIDogUHJvZmlsZUNvZGUgPSB0aGlzLnByb2ZpbGVDb2RlTWFwLmdldCh0eXBlSUQgKyAnXycgKyBjb2RlKTtcbiAgICAgIGlmKHByb2ZpbGVDb2RlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gcHJvZmlsZUNvZGUuZ2V0QXJndW1lbnRzKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHVibGljIF9mZXRjaENvZGVEYXRhKCkge1xuICAgIGxldCBwcm9maWxlQ29kZUFQSSA6IGFueSA9IHRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoJ2dldFByb2ZpbGVDb2RlJyk7XG5cbiAgICBjb25zb2xlLmRlYnVnKCdwcm9maWxlLWNvZGUuc2VydmljZSBmZXRjaENvZGVEYXRhJyxwcm9maWxlQ29kZUFQSSk7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcik9PntcbiAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChwcm9maWxlQ29kZUFQSSkuc3Vic2NyaWJlKChkYXRhKT0+e1xuICAgICAgICB0aGlzLnByb2ZpbGVDb2RlVHlwZU1hcC5jbGVhcigpO1xuICAgICAgICB0aGlzLnByb2ZpbGVDb2RlTWFwLmNsZWFyKCk7XG5cbiAgICAgICAgbGV0IGJvZHlEYXRhcyA9IGRhdGFbJ0JvZHknXTtcbiAgICAgICAgY29uc29sZS5sb2coJzwtLS0gRGF0YXMgLS0tPicpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgYm9keURhdGFzLmxlbmd0aCA7IGkrKyl7XG4gICAgICAgICAgbGV0IGpzb24gPSBib2R5RGF0YXNbaV07XG4gICAgICAgICAgbGV0IHByb2ZpbGVDb2RlID0gT2JqZWN0LmNyZWF0ZShQcm9maWxlQ29kZS5wcm90b3R5cGUpO1xuICAgICAgICAgIHByb2ZpbGVDb2RlID0gT2JqZWN0LmFzc2lnbihwcm9maWxlQ29kZSxqc29uKTtcblxuICAgICAgICAgIGxldCB0eXBlSWQgPSBwcm9maWxlQ29kZS5nZXRUeXBlSWQoKTtcbiAgICAgICAgICBsZXQgY29kZSA9IHByb2ZpbGVDb2RlLmdldENvZGUoKTtcbiAgICAgICAgICBsZXQgbWFwcGluZ0lEID0gcHJvZmlsZUNvZGUuZ2V0TWFwcGluZ0lEKCk7XG4gICAgICAgICAgbGV0IHRleHQgPSB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudHJhbnNsYXRlKG1hcHBpbmdJRCk7XG4gICAgICAgICAgcHJvZmlsZUNvZGUuc2V0RGlzcGxheVRleHQodGV4dCk7XG5cbiAgICAgICAgICBsZXQgY29kZUFycmF5IDogQXJyYXk8UHJvZmlsZUNvZGU+ID0gdGhpcy5wcm9maWxlQ29kZVR5cGVNYXAuZ2V0KHR5cGVJZCk7XG4gICAgICAgICAgaWYoY29kZUFycmF5ID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29kZUFycmF5ID0gbmV3IEFycmF5PFByb2ZpbGVDb2RlPigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvZGVBcnJheS5wdXNoKHByb2ZpbGVDb2RlKTtcbiAgICAgICAgICB0aGlzLnByb2ZpbGVDb2RlTWFwLnNldCh0eXBlSWQgKyAnXycgKyBjb2RlLHByb2ZpbGVDb2RlKTtcbiAgICAgICAgICB0aGlzLnByb2ZpbGVDb2RlVHlwZU1hcC5zZXQodHlwZUlkLGNvZGVBcnJheSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmRlYnVnKCdwcm9maWxlQ29kZU1hcCcsdGhpcy5wcm9maWxlQ29kZU1hcCk7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ3Byb2ZpbGVDb2RlVHlwZU1hcCcsdGhpcy5wcm9maWxlQ29kZVR5cGVNYXApO1xuICAgICAgICBvYnNlcnZlci5uZXh0KHRydWUpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxufVxuIl19