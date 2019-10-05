/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { StringUtils, ORCompoundRestriction, LikeRestriction, InRestriction, EqualRestriction, AndCompoundRestriction, NotEqualRestriction, ProfileCodeService, GreaterOrEqualRestriction, LessOrEqualRestriction } from "@allianzSND/core";
import * as i0 from "@angular/core";
import * as i1 from "@allianzSND/core";
export class DefaultCustomerCriteriaSearch {
    /**
     * @param {?} profileCodeService
     */
    constructor(profileCodeService) {
        this.profileCodeService = profileCodeService;
    }
    /**
     * @param {?} criteria
     * @return {?}
     */
    getRestriction(criteria) {
        console.debug('DefaultCustomerCriteriaSearch criteria:', criteria);
        /** @type {?} */
        let keyword = criteria.keyword;
        /** @type {?} */
        let conditions = [];
        console.debug('customerListAPI keyword', keyword);
        if (StringUtils.isNotEmpty(keyword)) {
            /** @type {?} */
            let compoundRestriction = new ORCompoundRestriction([new LikeRestriction('FirstName', [keyword]), new LikeRestriction('LastName', [keyword])]);
            conditions.push(compoundRestriction);
        }
        /** @type {?} */
        let filterMap = criteria.getFilterMap();
        filterMap.forEach((/**
         * @param {?} array
         * @param {?} key
         * @return {?}
         */
        (array, key) => {
            console.log(key, array);
            if (key == 'Birthday') {
                /** @type {?} */
                let birthdayRestriction = new Array();
                /** @type {?} */
                let monthArray = new Array();
                for (let birthday of array) {
                    if (birthday == 'Today') {
                        /** @type {?} */
                        let today = new Date();
                        /** @type {?} */
                        let startNum = today.getMonth() + 1;
                        /** @type {?} */
                        let endNum = today.getDate();
                        /** @type {?} */
                        let start = String(startNum);
                        /** @type {?} */
                        let end = String(endNum);
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
                if (monthArray.length != 0) {
                    birthdayRestriction.push(new InRestriction('BirthdayMonth', monthArray));
                }
                conditions.push(new ORCompoundRestriction(birthdayRestriction));
            }
            else if (key == 'CustomerSource') {
                if (array.length != 2) {
                    /** @type {?} */
                    let datasource = array[0];
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
                let completenessOption = this.profileCodeService.getCodeArray('Customer_Completeness');
                /** @type {?} */
                let completenessRestriction = new Array();
                completenessOption.forEach((/**
                 * @param {?} profileCode
                 * @return {?}
                 */
                profileCode => {
                    /** @type {?} */
                    let code = profileCode.getCode();
                    if (array.includes(code)) {
                        /** @type {?} */
                        let obj = JSON.parse(profileCode.getArguments());
                        /** @type {?} */
                        let start = obj.start;
                        /** @type {?} */
                        let end = obj.end;
                        start = start / 100;
                        end = end / 100;
                        completenessRestriction.push(new AndCompoundRestriction([new GreaterOrEqualRestriction('Completeness', [start]), new LessOrEqualRestriction('Completeness', [end])]));
                    }
                }));
                console.debug('completenessRestriction length', completenessRestriction.length);
                console.log('completenessRestriction:', completenessRestriction);
                if (completenessRestriction.length != 0) {
                    conditions.push(new ORCompoundRestriction(completenessRestriction));
                }
            }
            else {
                conditions.push(new InRestriction(key, array));
            }
        }));
        return conditions;
    }
}
DefaultCustomerCriteriaSearch.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
DefaultCustomerCriteriaSearch.ctorParameters = () => [
    { type: ProfileCodeService }
];
/** @nocollapse */ DefaultCustomerCriteriaSearch.ngInjectableDef = i0.defineInjectable({ factory: function DefaultCustomerCriteriaSearch_Factory() { return new DefaultCustomerCriteriaSearch(i0.inject(i1.ProfileCodeService)); }, token: DefaultCustomerCriteriaSearch, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DefaultCustomerCriteriaSearch.prototype.profileCodeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmYXVsdEN1c3RvbWVyQ3JpdGVyaWFTZWFyY2guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9pbnRlZ3JhdGlvbi1jYWxlbmRhci1jdXN0b21lci8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b21lci9jb21wb25lbnRzL2N1c3RvbWVyLWZpbHRlci9EZWZhdWx0Q3VzdG9tZXJDcml0ZXJpYVNlYXJjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQWdCLFdBQVcsRUFBRSxxQkFBcUIsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLHNCQUFzQixFQUFFLG1CQUFtQixFQUFFLGtCQUFrQixFQUFFLHlCQUF5QixFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQUsxUCxNQUFNOzs7O0lBRUYsWUFDWSxrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUM5QyxDQUFDOzs7OztJQUVMLGNBQWMsQ0FBQyxRQUFnQztRQUUzQyxPQUFPLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxFQUFFLFFBQVEsQ0FBQyxDQUFDOztZQUUvRCxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU87O1lBRTFCLFVBQVUsR0FBRyxFQUFFO1FBRW5CLE9BQU8sQ0FBQyxLQUFLLENBQUMseUJBQXlCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbEQsSUFBSSxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFOztnQkFDN0IsbUJBQW1CLEdBQUcsSUFBSSxxQkFBcUIsQ0FBQyxDQUFDLElBQUksZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsSUFBSSxlQUFlLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlJLFVBQVUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUN4Qzs7WUFFRyxTQUFTLEdBQStCLFFBQVEsQ0FBQyxZQUFZLEVBQUU7UUFFbkUsU0FBUyxDQUFDLE9BQU87Ozs7O1FBQUMsQ0FBQyxLQUFvQixFQUFFLEdBQVcsRUFBRSxFQUFFO1lBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBRXhCLElBQUksR0FBRyxJQUFJLFVBQVUsRUFBRTs7b0JBQ2YsbUJBQW1CLEdBQUcsSUFBSSxLQUFLLEVBQWdCOztvQkFDL0MsVUFBVSxHQUFHLElBQUksS0FBSyxFQUFVO2dCQUNwQyxLQUFLLElBQUksUUFBUSxJQUFJLEtBQUssRUFBRTtvQkFDeEIsSUFBSSxRQUFRLElBQUksT0FBTyxFQUFFOzs0QkFDakIsS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFOzs0QkFDbEIsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDOzs0QkFDL0IsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUU7OzRCQUN4QixLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQzs7NEJBQ3hCLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO3dCQUN4QixJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQzs0QkFBRSxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQzt3QkFDM0MsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUM7NEJBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7d0JBRXJDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLHNCQUFzQixDQUFDLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDbkcsSUFBSSxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNsRDt5QkFDSTt3QkFDRCxJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQzs0QkFBRSxRQUFRLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQzt3QkFDcEQsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDN0I7aUJBQ0o7Z0JBRUQsSUFBSSxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtvQkFDeEIsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksYUFBYSxDQUFDLGVBQWUsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO2lCQUM1RTtnQkFFRCxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUkscUJBQXFCLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO2FBQ25FO2lCQUNJLElBQUksR0FBRyxJQUFJLGdCQUFnQixFQUFFO2dCQUM5QixJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFOzt3QkFDZixVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDekIsSUFBSSxVQUFVLElBQUksR0FBRyxFQUFFO3dCQUNuQixVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNqRTt5QkFDSTt3QkFDRCxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksbUJBQW1CLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNwRTtpQkFFSjthQUNKO2lCQUNJLElBQUksR0FBRyxJQUFJLGNBQWMsRUFBRTs7b0JBQ3hCLGtCQUFrQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsdUJBQXVCLENBQUM7O29CQUNsRix1QkFBdUIsR0FBRyxJQUFJLEtBQUssRUFBZ0I7Z0JBQ3ZELGtCQUFrQixDQUFDLE9BQU87Ozs7Z0JBQUMsV0FBVyxDQUFDLEVBQUU7O3dCQUNqQyxJQUFJLEdBQUcsV0FBVyxDQUFDLE9BQU8sRUFBRTtvQkFDaEMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFOzs0QkFDbEIsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDOzs0QkFDNUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLOzs0QkFDakIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHO3dCQUNqQixLQUFLLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQzt3QkFDcEIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7d0JBRWhCLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLHNCQUFzQixDQUFDLENBQUMsSUFBSSx5QkFBeUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksc0JBQXNCLENBQUMsY0FBYyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDeks7Z0JBQ0wsQ0FBQyxFQUFDLENBQUE7Z0JBRUYsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDaEYsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO2dCQUNqRSxJQUFJLHVCQUF1QixDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7b0JBQ3JDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7aUJBQ3ZFO2FBRUo7aUJBQ0k7Z0JBQ0QsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLGFBQWEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNsRDtRQUVMLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxVQUFVLENBQUM7SUFDdEIsQ0FBQzs7O1lBakdKLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQjs7O1lBSnlKLGtCQUFrQjs7Ozs7Ozs7SUFRcEssMkRBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3JpdGVyaWFTZWFyY2ggfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlL0NyaXRlcmlhU2VhcmNoXCI7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEgfSBmcm9tIFwiLi4vYmVhbi9jdXN0b21lci1maWx0ZXItY3JpdGVyaWFcIjtcbmltcG9ydCB7IElSZXN0cmljdGlvbiwgU3RyaW5nVXRpbHMsIE9SQ29tcG91bmRSZXN0cmljdGlvbiwgTGlrZVJlc3RyaWN0aW9uLCBJblJlc3RyaWN0aW9uLCBFcXVhbFJlc3RyaWN0aW9uLCBBbmRDb21wb3VuZFJlc3RyaWN0aW9uLCBOb3RFcXVhbFJlc3RyaWN0aW9uLCBQcm9maWxlQ29kZVNlcnZpY2UsIEdyZWF0ZXJPckVxdWFsUmVzdHJpY3Rpb24sIExlc3NPckVxdWFsUmVzdHJpY3Rpb24gfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERlZmF1bHRDdXN0b21lckNyaXRlcmlhU2VhcmNoIGltcGxlbWVudHMgQ3JpdGVyaWFTZWFyY2gge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcHJvZmlsZUNvZGVTZXJ2aWNlOiBQcm9maWxlQ29kZVNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgZ2V0UmVzdHJpY3Rpb24oY3JpdGVyaWE6IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEpOiBBcnJheTxJUmVzdHJpY3Rpb24+IHtcblxuICAgICAgICBjb25zb2xlLmRlYnVnKCdEZWZhdWx0Q3VzdG9tZXJDcml0ZXJpYVNlYXJjaCBjcml0ZXJpYTonLCBjcml0ZXJpYSk7XG5cbiAgICAgICAgbGV0IGtleXdvcmQgPSBjcml0ZXJpYS5rZXl3b3JkO1xuXG4gICAgICAgIGxldCBjb25kaXRpb25zID0gW107XG5cbiAgICAgICAgY29uc29sZS5kZWJ1ZygnY3VzdG9tZXJMaXN0QVBJIGtleXdvcmQnLCBrZXl3b3JkKTtcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoa2V5d29yZCkpIHtcbiAgICAgICAgICAgIGxldCBjb21wb3VuZFJlc3RyaWN0aW9uID0gbmV3IE9SQ29tcG91bmRSZXN0cmljdGlvbihbbmV3IExpa2VSZXN0cmljdGlvbignRmlyc3ROYW1lJywgW2tleXdvcmRdKSwgbmV3IExpa2VSZXN0cmljdGlvbignTGFzdE5hbWUnLCBba2V5d29yZF0pXSk7XG4gICAgICAgICAgICBjb25kaXRpb25zLnB1c2goY29tcG91bmRSZXN0cmljdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZmlsdGVyTWFwOiBNYXA8c3RyaW5nLCBBcnJheTxzdHJpbmc+PiA9IGNyaXRlcmlhLmdldEZpbHRlck1hcCgpO1xuXG4gICAgICAgIGZpbHRlck1hcC5mb3JFYWNoKChhcnJheTogQXJyYXk8c3RyaW5nPiwga2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleSwgYXJyYXkpO1xuXG4gICAgICAgICAgICBpZiAoa2V5ID09ICdCaXJ0aGRheScpIHtcbiAgICAgICAgICAgICAgICBsZXQgYmlydGhkYXlSZXN0cmljdGlvbiA9IG5ldyBBcnJheTxJUmVzdHJpY3Rpb24+KCk7XG4gICAgICAgICAgICAgICAgbGV0IG1vbnRoQXJyYXkgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGJpcnRoZGF5IG9mIGFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiaXJ0aGRheSA9PSAnVG9kYXknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJ0TnVtID0gdG9kYXkuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZW5kTnVtID0gdG9kYXkuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJ0ID0gU3RyaW5nKHN0YXJ0TnVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbmQgPSBTdHJpbmcoZW5kTnVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGFydC5sZW5ndGggPT0gMSkgc3RhcnQgPSAnMCcgKyBzdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbmQubGVuZ3RoID09IDEpIGVuZCA9ICcwJyArIGVuZDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYmlydGhkYXlSZXN0cmljdGlvbi5wdXNoKG5ldyBBbmRDb21wb3VuZFJlc3RyaWN0aW9uKFtuZXcgRXF1YWxSZXN0cmljdGlvbignQmlydGhkYXlNb250aCcsIFtzdGFydF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0JpcnRoZGF5RGF0ZScsIFtlbmRdKV0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiaXJ0aGRheS5sZW5ndGggPT0gMSkgYmlydGhkYXkgPSAnMCcgKyBiaXJ0aGRheTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoQXJyYXkucHVzaChiaXJ0aGRheSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobW9udGhBcnJheS5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBiaXJ0aGRheVJlc3RyaWN0aW9uLnB1c2gobmV3IEluUmVzdHJpY3Rpb24oJ0JpcnRoZGF5TW9udGgnLCBtb250aEFycmF5KSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uZGl0aW9ucy5wdXNoKG5ldyBPUkNvbXBvdW5kUmVzdHJpY3Rpb24oYmlydGhkYXlSZXN0cmljdGlvbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoa2V5ID09ICdDdXN0b21lclNvdXJjZScpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXkubGVuZ3RoICE9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFzb3VyY2UgPSBhcnJheVswXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFzb3VyY2UgPT0gJ0UnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25zLnB1c2gobmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0RhdGFTb3VyY2UnLCBbJ09QVVMnXSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9ucy5wdXNoKG5ldyBOb3RFcXVhbFJlc3RyaWN0aW9uKCdEYXRhU291cmNlJywgWydPUFVTJ10pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoa2V5ID09ICdDb21wbGV0ZW5lc3MnKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbXBsZXRlbmVzc09wdGlvbiA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheSgnQ3VzdG9tZXJfQ29tcGxldGVuZXNzJyk7XG4gICAgICAgICAgICAgICAgbGV0IGNvbXBsZXRlbmVzc1Jlc3RyaWN0aW9uID0gbmV3IEFycmF5PElSZXN0cmljdGlvbj4oKTtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZW5lc3NPcHRpb24uZm9yRWFjaChwcm9maWxlQ29kZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb2RlID0gcHJvZmlsZUNvZGUuZ2V0Q29kZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXJyYXkuaW5jbHVkZXMoY29kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSBKU09OLnBhcnNlKHByb2ZpbGVDb2RlLmdldEFyZ3VtZW50cygpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGFydCA9IG9iai5zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbmQgPSBvYmouZW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBzdGFydCAvIDEwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZCA9IGVuZCAvIDEwMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVuZXNzUmVzdHJpY3Rpb24ucHVzaChuZXcgQW5kQ29tcG91bmRSZXN0cmljdGlvbihbbmV3IEdyZWF0ZXJPckVxdWFsUmVzdHJpY3Rpb24oJ0NvbXBsZXRlbmVzcycsIFtzdGFydF0pLCBuZXcgTGVzc09yRXF1YWxSZXN0cmljdGlvbignQ29tcGxldGVuZXNzJywgW2VuZF0pXSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ2NvbXBsZXRlbmVzc1Jlc3RyaWN0aW9uIGxlbmd0aCcsIGNvbXBsZXRlbmVzc1Jlc3RyaWN0aW9uLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbXBsZXRlbmVzc1Jlc3RyaWN0aW9uOicsIGNvbXBsZXRlbmVzc1Jlc3RyaWN0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcGxldGVuZXNzUmVzdHJpY3Rpb24ubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9ucy5wdXNoKG5ldyBPUkNvbXBvdW5kUmVzdHJpY3Rpb24oY29tcGxldGVuZXNzUmVzdHJpY3Rpb24pKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbmRpdGlvbnMucHVzaChuZXcgSW5SZXN0cmljdGlvbihrZXksIGFycmF5KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjb25kaXRpb25zO1xuICAgIH1cbn0iXX0=