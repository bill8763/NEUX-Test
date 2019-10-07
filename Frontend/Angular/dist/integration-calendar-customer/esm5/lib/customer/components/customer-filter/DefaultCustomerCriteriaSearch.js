/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { StringUtils, ORCompoundRestriction, LikeRestriction, InRestriction, EqualRestriction, AndCompoundRestriction, NotEqualRestriction, ProfileCodeService, GreaterOrEqualRestriction, LessOrEqualRestriction } from "@allianzSND/core";
import * as i0 from "@angular/core";
import * as i1 from "@allianzSND/core";
var DefaultCustomerCriteriaSearch = /** @class */ (function () {
    function DefaultCustomerCriteriaSearch(profileCodeService) {
        this.profileCodeService = profileCodeService;
    }
    /**
     * @param {?} criteria
     * @return {?}
     */
    DefaultCustomerCriteriaSearch.prototype.getRestriction = /**
     * @param {?} criteria
     * @return {?}
     */
    function (criteria) {
        var _this = this;
        console.debug('DefaultCustomerCriteriaSearch criteria:', criteria);
        /** @type {?} */
        var keyword = criteria.keyword;
        /** @type {?} */
        var conditions = [];
        console.debug('customerListAPI keyword', keyword);
        if (StringUtils.isNotEmpty(keyword)) {
            /** @type {?} */
            var compoundRestriction = new ORCompoundRestriction([new LikeRestriction('FirstName', [keyword]), new LikeRestriction('LastName', [keyword])]);
            conditions.push(compoundRestriction);
        }
        /** @type {?} */
        var filterMap = criteria.getFilterMap();
        filterMap.forEach((/**
         * @param {?} array
         * @param {?} key
         * @return {?}
         */
        function (array, key) {
            var e_1, _a;
            console.log(key, array);
            if (key == 'Birthday') {
                /** @type {?} */
                var birthdayRestriction = new Array();
                /** @type {?} */
                var monthArray = new Array();
                try {
                    for (var array_1 = tslib_1.__values(array), array_1_1 = array_1.next(); !array_1_1.done; array_1_1 = array_1.next()) {
                        var birthday = array_1_1.value;
                        if (birthday == 'Today') {
                            /** @type {?} */
                            var today = new Date();
                            /** @type {?} */
                            var startNum = today.getMonth() + 1;
                            /** @type {?} */
                            var endNum = today.getDate();
                            /** @type {?} */
                            var start = String(startNum);
                            /** @type {?} */
                            var end = String(endNum);
                            if (start.length == 1)
                                start = '0' + start;
                            if (end.length == 1)
                                end = '0' + end;
                            birthdayRestriction.push(new AndCompoundRestriction([new EqualRestriction('BirthdayMonth', [start]),
                                new EqualRestriction('BirthdayDate', [end])]));
                        }
                        else {
                            if (birthday.length == 1)
                                birthday = '0' + birthday;
                            monthArray.push(birthday);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (array_1_1 && !array_1_1.done && (_a = array_1.return)) _a.call(array_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                if (monthArray.length != 0) {
                    birthdayRestriction.push(new InRestriction('BirthdayMonth', monthArray));
                }
                conditions.push(new ORCompoundRestriction(birthdayRestriction));
            }
            else if (key == 'CustomerSource') {
                if (array.length != 2) {
                    /** @type {?} */
                    var datasource = array[0];
                    if (datasource == 'E') {
                        conditions.push(new EqualRestriction('DataSource', ['OPUS']));
                    }
                    else {
                        conditions.push(new NotEqualRestriction('DataSource', ['OPUS']));
                    }
                }
            }
            else if (key == 'Completeness') {
                /** @type {?} */
                var completenessOption = _this.profileCodeService.getCodeArray('Customer_Completeness');
                /** @type {?} */
                var completenessRestriction_1 = new Array();
                completenessOption.forEach((/**
                 * @param {?} profileCode
                 * @return {?}
                 */
                function (profileCode) {
                    /** @type {?} */
                    var code = profileCode.getCode();
                    if (array.includes(code)) {
                        /** @type {?} */
                        var obj = JSON.parse(profileCode.getArguments());
                        /** @type {?} */
                        var start = obj.start;
                        /** @type {?} */
                        var end = obj.end;
                        start = start / 100;
                        end = end / 100;
                        completenessRestriction_1.push(new AndCompoundRestriction([new GreaterOrEqualRestriction('Completeness', [start]), new LessOrEqualRestriction('Completeness', [end])]));
                    }
                }));
                console.debug('completenessRestriction length', completenessRestriction_1.length);
                console.log('completenessRestriction:', completenessRestriction_1);
                if (completenessRestriction_1.length != 0) {
                    conditions.push(new ORCompoundRestriction(completenessRestriction_1));
                }
            }
            else {
                conditions.push(new InRestriction(key, array));
            }
        }));
        return conditions;
    };
    DefaultCustomerCriteriaSearch.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    DefaultCustomerCriteriaSearch.ctorParameters = function () { return [
        { type: ProfileCodeService }
    ]; };
    /** @nocollapse */ DefaultCustomerCriteriaSearch.ngInjectableDef = i0.defineInjectable({ factory: function DefaultCustomerCriteriaSearch_Factory() { return new DefaultCustomerCriteriaSearch(i0.inject(i1.ProfileCodeService)); }, token: DefaultCustomerCriteriaSearch, providedIn: "root" });
    return DefaultCustomerCriteriaSearch;
}());
export { DefaultCustomerCriteriaSearch };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DefaultCustomerCriteriaSearch.prototype.profileCodeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmYXVsdEN1c3RvbWVyQ3JpdGVyaWFTZWFyY2guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9pbnRlZ3JhdGlvbi1jYWxlbmRhci1jdXN0b21lci8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b21lci9jb21wb25lbnRzL2N1c3RvbWVyLWZpbHRlci9EZWZhdWx0Q3VzdG9tZXJDcml0ZXJpYVNlYXJjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFnQixXQUFXLEVBQUUscUJBQXFCLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSx5QkFBeUIsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFFMVA7SUFLSSx1Q0FDWSxrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUM5QyxDQUFDOzs7OztJQUVMLHNEQUFjOzs7O0lBQWQsVUFBZSxRQUFnQztRQUEvQyxpQkF3RkM7UUF0RkcsT0FBTyxDQUFDLEtBQUssQ0FBQyx5Q0FBeUMsRUFBRSxRQUFRLENBQUMsQ0FBQzs7WUFFL0QsT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPOztZQUUxQixVQUFVLEdBQUcsRUFBRTtRQUVuQixPQUFPLENBQUMsS0FBSyxDQUFDLHlCQUF5QixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRTs7Z0JBQzdCLG1CQUFtQixHQUFHLElBQUkscUJBQXFCLENBQUMsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLElBQUksZUFBZSxDQUFDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5SSxVQUFV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SUFrR0M7U0EvRlksNkJBQTZCOzs7Ozs7SUFHbEMsMkRBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3JpdGVyaWFTZWFyY2ggfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlL0NyaXRlcmlhU2VhcmNoXCI7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEgfSBmcm9tIFwiLi4vYmVhbi9jdXN0b21lci1maWx0ZXItY3JpdGVyaWFcIjtcbmltcG9ydCB7IElSZXN0cmljdGlvbiwgU3RyaW5nVXRpbHMsIE9SQ29tcG91bmRSZXN0cmljdGlvbiwgTGlrZVJlc3RyaWN0aW9uLCBJblJlc3RyaWN0aW9uLCBFcXVhbFJlc3RyaWN0aW9uLCBBbmRDb21wb3VuZFJlc3RyaWN0aW9uLCBOb3RFcXVhbFJlc3RyaWN0aW9uLCBQcm9maWxlQ29kZVNlcnZpY2UsIEdyZWF0ZXJPckVxdWFsUmVzdHJpY3Rpb24sIExlc3NPckVxdWFsUmVzdHJpY3Rpb24gfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERlZmF1bHRDdXN0b21lckNyaXRlcmlhU2VhcmNoIGltcGxlbWVudHMgQ3JpdGVyaWFTZWFyY2gge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcHJvZmlsZUNvZGVTZXJ2aWNlOiBQcm9maWxlQ29kZVNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgZ2V0UmVzdHJpY3Rpb24oY3JpdGVyaWE6IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEpOiBBcnJheTxJUmVzdHJpY3Rpb24+IHtcblxuICAgICAgICBjb25zb2xlLmRlYnVnKCdEZWZhdWx0Q3VzdG9tZXJDcml0ZXJpYVNlYXJjaCBjcml0ZXJpYTonLCBjcml0ZXJpYSk7XG5cbiAgICAgICAgbGV0IGtleXdvcmQgPSBjcml0ZXJpYS5rZXl3b3JkO1xuXG4gICAgICAgIGxldCBjb25kaXRpb25zID0gW107XG5cbiAgICAgICAgY29uc29sZS5kZWJ1ZygnY3VzdG9tZXJMaXN0QVBJIGtleXdvcmQnLCBrZXl3b3JkKTtcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoa2V5d29yZCkpIHtcbiAgICAgICAgICAgIGxldCBjb21wb3VuZFJlc3RyaWN0aW9uID0gbmV3IE9SQ29tcG91bmRSZXN0cmljdGlvbihbbmV3IExpa2VSZXN0cmljdGlvbignRmlyc3ROYW1lJywgW2tleXdvcmRdKSwgbmV3IExpa2VSZXN0cmljdGlvbignTGFzdE5hbWUnLCBba2V5d29yZF0pXSk7XG4gICAgICAgICAgICBjb25kaXRpb25zLnB1c2goY29tcG91bmRSZXN0cmljdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZmlsdGVyTWFwOiBNYXA8c3RyaW5nLCBBcnJheTxzdHJpbmc+PiA9IGNyaXRlcmlhLmdldEZpbHRlck1hcCgpO1xuXG4gICAgICAgIGZpbHRlck1hcC5mb3JFYWNoKChhcnJheTogQXJyYXk8c3RyaW5nPiwga2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleSwgYXJyYXkpO1xuXG4gICAgICAgICAgICBpZiAoa2V5ID09ICdCaXJ0aGRheScpIHtcbiAgICAgICAgICAgICAgICBsZXQgYmlydGhkYXlSZXN0cmljdGlvbiA9IG5ldyBBcnJheTxJUmVzdHJpY3Rpb24+KCk7XG4gICAgICAgICAgICAgICAgbGV0IG1vbnRoQXJyYXkgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGJpcnRoZGF5IG9mIGFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiaXJ0aGRheSA9PSAnVG9kYXknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJ0TnVtID0gdG9kYXkuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZW5kTnVtID0gdG9kYXkuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJ0ID0gU3RyaW5nKHN0YXJ0TnVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbmQgPSBTdHJpbmcoZW5kTnVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGFydC5sZW5ndGggPT0gMSkgc3RhcnQgPSAnMCcgKyBzdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbmQubGVuZ3RoID09IDEpIGVuZCA9ICcwJyArIGVuZDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYmlydGhkYXlSZXN0cmljdGlvbi5wdXNoKG5ldyBBbmRDb21wb3VuZFJlc3RyaWN0aW9uKFtuZXcgRXF1YWxSZXN0cmljdGlvbignQmlydGhkYXlNb250aCcsIFtzdGFydF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0JpcnRoZGF5RGF0ZScsIFtlbmRdKV0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiaXJ0aGRheS5sZW5ndGggPT0gMSkgYmlydGhkYXkgPSAnMCcgKyBiaXJ0aGRheTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoQXJyYXkucHVzaChiaXJ0aGRheSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobW9udGhBcnJheS5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBiaXJ0aGRheVJlc3RyaWN0aW9uLnB1c2gobmV3IEluUmVzdHJpY3Rpb24oJ0JpcnRoZGF5TW9udGgnLCBtb250aEFycmF5KSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uZGl0aW9ucy5wdXNoKG5ldyBPUkNvbXBvdW5kUmVzdHJpY3Rpb24oYmlydGhkYXlSZXN0cmljdGlvbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoa2V5ID09ICdDdXN0b21lclNvdXJjZScpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXkubGVuZ3RoICE9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFzb3VyY2UgPSBhcnJheVswXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFzb3VyY2UgPT0gJ0UnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25zLnB1c2gobmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0RhdGFTb3VyY2UnLCBbJ09QVVMnXSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9ucy5wdXNoKG5ldyBOb3RFcXVhbFJlc3RyaWN0aW9uKCdEYXRhU291cmNlJywgWydPUFVTJ10pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoa2V5ID09ICdDb21wbGV0ZW5lc3MnKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbXBsZXRlbmVzc09wdGlvbiA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheSgnQ3VzdG9tZXJfQ29tcGxldGVuZXNzJyk7XG4gICAgICAgICAgICAgICAgbGV0IGNvbXBsZXRlbmVzc1Jlc3RyaWN0aW9uID0gbmV3IEFycmF5PElSZXN0cmljdGlvbj4oKTtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZW5lc3NPcHRpb24uZm9yRWFjaChwcm9maWxlQ29kZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb2RlID0gcHJvZmlsZUNvZGUuZ2V0Q29kZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXJyYXkuaW5jbHVkZXMoY29kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSBKU09OLnBhcnNlKHByb2ZpbGVDb2RlLmdldEFyZ3VtZW50cygpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGFydCA9IG9iai5zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbmQgPSBvYmouZW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBzdGFydCAvIDEwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZCA9IGVuZCAvIDEwMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVuZXNzUmVzdHJpY3Rpb24ucHVzaChuZXcgQW5kQ29tcG91bmRSZXN0cmljdGlvbihbbmV3IEdyZWF0ZXJPckVxdWFsUmVzdHJpY3Rpb24oJ0NvbXBsZXRlbmVzcycsIFtzdGFydF0pLCBuZXcgTGVzc09yRXF1YWxSZXN0cmljdGlvbignQ29tcGxldGVuZXNzJywgW2VuZF0pXSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ2NvbXBsZXRlbmVzc1Jlc3RyaWN0aW9uIGxlbmd0aCcsIGNvbXBsZXRlbmVzc1Jlc3RyaWN0aW9uLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbXBsZXRlbmVzc1Jlc3RyaWN0aW9uOicsIGNvbXBsZXRlbmVzc1Jlc3RyaWN0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcGxldGVuZXNzUmVzdHJpY3Rpb24ubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9ucy5wdXNoKG5ldyBPUkNvbXBvdW5kUmVzdHJpY3Rpb24oY29tcGxldGVuZXNzUmVzdHJpY3Rpb24pKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbmRpdGlvbnMucHVzaChuZXcgSW5SZXN0cmljdGlvbihrZXksIGFycmF5KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjb25kaXRpb25zO1xuICAgIH1cbn0iXX0=