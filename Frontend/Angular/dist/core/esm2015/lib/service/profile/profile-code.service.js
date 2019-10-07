/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class ProfileCodeService {
    /**
     * @param {?} dispatcher
     * @param {?} translateService
     * @param {?} APIFactory
     */
    constructor(dispatcher, translateService, APIFactory) {
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
    getCodeArray(typeId) {
        if (this.profileCodeTypeMap.size != 0) {
            /** @type {?} */
            let codeArray = this.profileCodeTypeMap.get(typeId);
            if (codeArray == undefined)
                codeArray = new Array();
            return [...codeArray];
        }
        return new Array();
    }
    /**
     * @param {?} typeID
     * @param {?} code
     * @return {?}
     */
    convertCode2Text(typeID, code) {
        if (this.profileCodeMap.size != 0 && code != undefined) {
            /** @type {?} */
            let profileCode = this.profileCodeMap.get(typeID + '_' + code);
            if (profileCode != undefined) {
                /** @type {?} */
                let mappingID = profileCode.getMappingID();
                /** @type {?} */
                let text = this.translateService.translate(mappingID);
                return text;
            }
        }
        return code;
    }
    /**
     * @param {?} typeID
     * @param {?} code
     * @return {?}
     */
    getArgumentsByCode(typeID, code) {
        if (this.profileCodeMap.size != 0) {
            /** @type {?} */
            let profileCode = this.profileCodeMap.get(typeID + '_' + code);
            if (profileCode != undefined) {
                return profileCode.getArguments();
            }
        }
        return null;
    }
    /**
     * @return {?}
     */
    _fetchCodeData() {
        /** @type {?} */
        let profileCodeAPI = this.APIFactory.getAPI('getProfileCode');
        console.debug('profile-code.service fetchCodeData', profileCodeAPI);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.dispatcher.dispatch(profileCodeAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                this.profileCodeTypeMap.clear();
                this.profileCodeMap.clear();
                /** @type {?} */
                let bodyDatas = data['Body'];
                console.log('<--- Datas --->');
                console.log(data);
                for (let i = 0; i < bodyDatas.length; i++) {
                    /** @type {?} */
                    let json = bodyDatas[i];
                    /** @type {?} */
                    let profileCode = Object.create(ProfileCode.prototype);
                    profileCode = Object.assign(profileCode, json);
                    /** @type {?} */
                    let typeId = profileCode.getTypeId();
                    /** @type {?} */
                    let code = profileCode.getCode();
                    /** @type {?} */
                    let mappingID = profileCode.getMappingID();
                    /** @type {?} */
                    let text = this.translateService.translate(mappingID);
                    profileCode.setDisplayText(text);
                    /** @type {?} */
                    let codeArray = this.profileCodeTypeMap.get(typeId);
                    if (codeArray == undefined) {
                        codeArray = new Array();
                    }
                    codeArray.push(profileCode);
                    this.profileCodeMap.set(typeId + '_' + code, profileCode);
                    this.profileCodeTypeMap.set(typeId, codeArray);
                }
                console.debug('profileCodeMap', this.profileCodeMap);
                console.debug('profileCodeTypeMap', this.profileCodeTypeMap);
                observer.next(true);
                observer.complete();
            }));
        }));
    }
}
ProfileCodeService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ProfileCodeService.ctorParameters = () => [
    { type: APIDispatch },
    { type: TranslateService },
    { type: APIFactory }
];
/** @nocollapse */ ProfileCodeService.ngInjectableDef = i0.defineInjectable({ factory: function ProfileCodeService_Factory() { return new ProfileCodeService(i0.inject(i1.APIDispatch), i0.inject(i2.TranslateService), i0.inject(i3.APIFactory)); }, token: ProfileCodeService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1jb2RlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvcHJvZmlsZS9wcm9maWxlLWNvZGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDcEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7OztBQU1yRCxNQUFNOzs7Ozs7SUFLSixZQUFvQixVQUF1QixFQUFTLGdCQUFtQyxFQUFTLFVBQXNCO1FBQWxHLGVBQVUsR0FBVixVQUFVLENBQWE7UUFBUyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW1CO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUgvRyx1QkFBa0IsR0FBRyxJQUFJLEdBQUcsRUFBNkIsQ0FBQztRQUMxRCxtQkFBYyxHQUFHLElBQUksR0FBRyxFQUFzQixDQUFDO0lBR3RELENBQUM7Ozs7O0lBRU0sWUFBWSxDQUFDLE1BQWU7UUFDakMsSUFBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTs7Z0JBQ2hDLFNBQVMsR0FBd0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFDeEUsSUFBRyxTQUFTLElBQUksU0FBUztnQkFBRSxTQUFTLEdBQUcsSUFBSSxLQUFLLEVBQWUsQ0FBQztZQUNoRSxPQUFPLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQztTQUN2QjtRQUNE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QzVCLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxFQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUN6RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxTQUFTLENBQUMsQ0FBQztpQkFDL0M7Z0JBRUQsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQ3BELE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQzVELFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUV0QixDQUFDLEVBQUMsQ0FBQTtRQUNKLENBQUMsRUFBQyxDQUFBO0lBQ0osQ0FBQzs7O1lBbkZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBUFEsV0FBVztZQUNYLGdCQUFnQjtZQUZoQixVQUFVOzs7OztJQVdqQixnREFBaUU7O0lBQ2pFLDRDQUFzRDs7Ozs7SUFFMUMsd0NBQStCOzs7OztJQUFDLDhDQUEyQzs7Ozs7SUFBQyx3Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBUElGYWN0b3J5IH0gZnJvbSAnLi4vLi4vYXBpL0FQSUZhY3RvcnknO1xuaW1wb3J0IHsgQVBJRGlzcGF0Y2ggfSBmcm9tICcuLi8uLi9hcGkvQVBJRGlzcGF0Y2gnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4uLy4uL2xhbmd1YWdlL3RyYW5zbGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2ZpbGVDb2RlIH0gZnJvbSAnLi4vLi4vYmVhbi9Qcm9maWxlQ29kZSc7XG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUHJvZmlsZUNvZGVTZXJ2aWNlIHtcblxuICBwdWJsaWMgcHJvZmlsZUNvZGVUeXBlTWFwID0gbmV3IE1hcDxzdHJpbmcsQXJyYXk8UHJvZmlsZUNvZGU+PigpO1xuICBwdWJsaWMgcHJvZmlsZUNvZGVNYXAgPSBuZXcgTWFwPHN0cmluZyxQcm9maWxlQ29kZT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpc3BhdGNoZXI6IEFQSURpc3BhdGNoLHByaXZhdGUgdHJhbnNsYXRlU2VydmljZSA6IFRyYW5zbGF0ZVNlcnZpY2UscHJpdmF0ZSBBUElGYWN0b3J5OiBBUElGYWN0b3J5KSB7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29kZUFycmF5KHR5cGVJZCA6IHN0cmluZykge1xuICAgIGlmKHRoaXMucHJvZmlsZUNvZGVUeXBlTWFwLnNpemUgIT0gMCkge1xuICAgICAgbGV0IGNvZGVBcnJheSA6IEFycmF5PFByb2ZpbGVDb2RlPiA9IHRoaXMucHJvZmlsZUNvZGVUeXBlTWFwLmdldCh0eXBlSWQpO1xuICAgICAgaWYoY29kZUFycmF5ID09IHVuZGVmaW5lZCkgY29kZUFycmF5ID0gbmV3IEFycmF5PFByb2ZpbGVDb2RlPigpO1xuICAgICAgcmV0dXJuIFsuLi5jb2RlQXJyYXldO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEFycmF5PFByb2ZpbGVDb2RlPigpO1xuICB9XG5cbiAgcHVibGljIGNvbnZlcnRDb2RlMlRleHQodHlwZUlEIDogc3RyaW5nLGNvZGUgOiBzdHJpbmcpIDogc3RyaW5nIHtcbiAgICBpZih0aGlzLnByb2ZpbGVDb2RlTWFwLnNpemUgIT0gMCAmJiBjb2RlICE9IHVuZGVmaW5lZCkge1xuICAgICAgbGV0IHByb2ZpbGVDb2RlIDogUHJvZmlsZUNvZGUgPSB0aGlzLnByb2ZpbGVDb2RlTWFwLmdldCh0eXBlSUQgKyAnXycgKyBjb2RlKTtcbiAgICAgIGlmKHByb2ZpbGVDb2RlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBsZXQgbWFwcGluZ0lEIDogc3RyaW5nID0gcHJvZmlsZUNvZGUuZ2V0TWFwcGluZ0lEKCk7XG4gICAgICAgIGxldCB0ZXh0ID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnRyYW5zbGF0ZShtYXBwaW5nSUQpO1xuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29kZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBcmd1bWVudHNCeUNvZGUodHlwZUlEIDogc3RyaW5nICwgY29kZSA6IHN0cmluZykgOiBzdHJpbmcge1xuICAgIGlmKHRoaXMucHJvZmlsZUNvZGVNYXAuc2l6ZSAhPSAwKSB7XG4gICAgICBsZXQgcHJvZmlsZUNvZGUgOiBQcm9maWxlQ29kZSA9IHRoaXMucHJvZmlsZUNvZGVNYXAuZ2V0KHR5cGVJRCArICdfJyArIGNvZGUpO1xuICAgICAgaWYocHJvZmlsZUNvZGUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBwcm9maWxlQ29kZS5nZXRBcmd1bWVudHMoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwdWJsaWMgX2ZldGNoQ29kZURhdGEoKSB7XG4gICAgbGV0IHByb2ZpbGVDb2RlQVBJIDogYW55ID0gdGhpcy5BUElGYWN0b3J5LmdldEFQSSgnZ2V0UHJvZmlsZUNvZGUnKTtcblxuICAgIGNvbnNvbGUuZGVidWcoJ3Byb2ZpbGUtY29kZS5zZXJ2aWNlIGZldGNoQ29kZURhdGEnLHByb2ZpbGVDb2RlQVBJKTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKT0+e1xuICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKHByb2ZpbGVDb2RlQVBJKS5zdWJzY3JpYmUoKGRhdGEpPT57XG4gICAgICAgIHRoaXMucHJvZmlsZUNvZGVUeXBlTWFwLmNsZWFyKCk7XG4gICAgICAgIHRoaXMucHJvZmlsZUNvZGVNYXAuY2xlYXIoKTtcblxuICAgICAgICBsZXQgYm9keURhdGFzID0gZGF0YVsnQm9keSddO1xuICAgICAgICBjb25zb2xlLmxvZygnPC0tLSBEYXRhcyAtLS0+Jyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBib2R5RGF0YXMubGVuZ3RoIDsgaSsrKXtcbiAgICAgICAgICBsZXQganNvbiA9IGJvZHlEYXRhc1tpXTtcbiAgICAgICAgICBsZXQgcHJvZmlsZUNvZGUgPSBPYmplY3QuY3JlYXRlKFByb2ZpbGVDb2RlLnByb3RvdHlwZSk7XG4gICAgICAgICAgcHJvZmlsZUNvZGUgPSBPYmplY3QuYXNzaWduKHByb2ZpbGVDb2RlLGpzb24pO1xuXG4gICAgICAgICAgbGV0IHR5cGVJZCA9IHByb2ZpbGVDb2RlLmdldFR5cGVJZCgpO1xuICAgICAgICAgIGxldCBjb2RlID0gcHJvZmlsZUNvZGUuZ2V0Q29kZSgpO1xuICAgICAgICAgIGxldCBtYXBwaW5nSUQgPSBwcm9maWxlQ29kZS5nZXRNYXBwaW5nSUQoKTtcbiAgICAgICAgICBsZXQgdGV4dCA9IHRoaXMudHJhbnNsYXRlU2VydmljZS50cmFuc2xhdGUobWFwcGluZ0lEKTtcbiAgICAgICAgICBwcm9maWxlQ29kZS5zZXREaXNwbGF5VGV4dCh0ZXh0KTtcblxuICAgICAgICAgIGxldCBjb2RlQXJyYXkgOiBBcnJheTxQcm9maWxlQ29kZT4gPSB0aGlzLnByb2ZpbGVDb2RlVHlwZU1hcC5nZXQodHlwZUlkKTtcbiAgICAgICAgICBpZihjb2RlQXJyYXkgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb2RlQXJyYXkgPSBuZXcgQXJyYXk8UHJvZmlsZUNvZGU+KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29kZUFycmF5LnB1c2gocHJvZmlsZUNvZGUpO1xuICAgICAgICAgIHRoaXMucHJvZmlsZUNvZGVNYXAuc2V0KHR5cGVJZCArICdfJyArIGNvZGUscHJvZmlsZUNvZGUpO1xuICAgICAgICAgIHRoaXMucHJvZmlsZUNvZGVUeXBlTWFwLnNldCh0eXBlSWQsY29kZUFycmF5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ3Byb2ZpbGVDb2RlTWFwJyx0aGlzLnByb2ZpbGVDb2RlTWFwKTtcbiAgICAgICAgY29uc29sZS5kZWJ1ZygncHJvZmlsZUNvZGVUeXBlTWFwJyx0aGlzLnByb2ZpbGVDb2RlVHlwZU1hcCk7XG4gICAgICAgIG9ic2VydmVyLm5leHQodHJ1ZSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG5cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG59XG4iXX0=