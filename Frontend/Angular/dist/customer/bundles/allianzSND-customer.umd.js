(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/animations'), require('@allianzSND/calendar'), require('@angular/core'), require('@allianz/ngx-ndbx/formfield'), require('@allianz/ngx-ndbx'), require('@allianz/ngx-ndbx/input'), require('@allianz/ngx-ndbx/datefield'), require('@allianz/ngx-ndbx/progressbar'), require('@allianz/ngx-ndbx/grid'), require('@angular/forms'), require('@allianzSND/ui'), require('@angular/common'), require('date-fns'), require('@allianzSND/core'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@allianzSND/customer', ['exports', '@angular/animations', '@allianzSND/calendar', '@angular/core', '@allianz/ngx-ndbx/formfield', '@allianz/ngx-ndbx', '@allianz/ngx-ndbx/input', '@allianz/ngx-ndbx/datefield', '@allianz/ngx-ndbx/progressbar', '@allianz/ngx-ndbx/grid', '@angular/forms', '@allianzSND/ui', '@angular/common', 'date-fns', '@allianzSND/core', 'rxjs'], factory) :
    (factory((global.allianzSND = global.allianzSND || {}, global.allianzSND.customer = {}),global.ng.animations,global.calendar,global.ng.core,global.formfield,global.ngxNdbx,global.input,global.datefield,global.progressbar,global.grid,global.ng.forms,global.ui,global.ng.common,global.dateFns,global.i1,global.rxjs));
}(this, (function (exports,animations,calendar,i0,formfield,ngxNdbx,input,datefield,progressbar,grid,forms,ui,common,dateFns,i1,rxjs) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerDetail = /** @class */ (function () {
        function CustomerDetail() {
            this._emails = new Array();
            this._tels = new Array();
            this._addresses = new Array();
            if (i1.StringUtils.isEmpty(this.firstName))
                this.firstName = '';
            if (i1.StringUtils.isEmpty(this.occupation))
                this.occupation = '';
            if (i1.StringUtils.isEmpty(this.company))
                this.company = '';
            if (i1.StringUtils.isEmpty(this.ageRange))
                this.ageRange = undefined;
            if (i1.StringUtils.isEmpty(this.gender))
                this.gender = undefined;
            if (i1.StringUtils.isEmpty(this.income))
                this.income = undefined;
            if (i1.StringUtils.isEmpty(this.source))
                this.source = undefined;
            if (i1.StringUtils.isEmpty(this.marriage))
                this.marriage = undefined;
            if (i1.StringUtils.isEmpty(this.children))
                this.children = undefined;
            if (i1.StringUtils.isEmpty(this.familiarity))
                this.familiarity = undefined;
            if (i1.StringUtils.isEmpty(this.recentStatus))
                this.recentStatus = undefined;
            if (i1.StringUtils.isEmpty(this.manpa))
                this.manpa = undefined;
            if (i1.StringUtils.isEmpty(this.contactFrequancy))
                this._contactFrequancy = undefined;
            if (i1.StringUtils.isEmpty(this.possibility))
                this.possibility = '';
            if (i1.StringUtils.isEmpty(this.clientID))
                this.clientID = '';
            this.updateEmptyStatus();
        }
        Object.defineProperty(CustomerDetail.prototype, "dataSource", {
            get: /**
             * @return {?}
             */ function () {
                return this._dataSource;
            },
            set: /**
             * @param {?} dataSource
             * @return {?}
             */ function (dataSource) {
                this._dataSource = dataSource;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerDetail.prototype, "clientID", {
            get: /**
             * @return {?}
             */ function () {
                return this._clientID;
            },
            set: /**
             * @param {?} clientID
             * @return {?}
             */ function (clientID) {
                this._clientID = clientID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerDetail.prototype, "lastName", {
            get: /**
             * @return {?}
             */ function () {
                return this._lastName;
            },
            set: /**
             * @param {?} lastName
             * @return {?}
             */ function (lastName) {
                this._lastName = lastName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerDetail.prototype, "firstName", {
            get: /**
             * @return {?}
             */ function () {
                return this._firstName;
            },
            set: /**
             * @param {?} firstName
             * @return {?}
             */ function (firstName) {
                this._firstName = firstName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerDetail.prototype, "tels", {
            get: /**
             * @return {?}
             */ function () {
                return this._tels;
            },
            set: /**
             * @param {?} tels
             * @return {?}
             */ function (tels) {
                this._tels = tels;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerDetail.prototype, "emails", {
            get: /**
             * @return {?}
             */ function () {
                return this._emails;
            },
            set: /**
             * @param {?} emails
             * @return {?}
             */ function (emails) {
                this._emails = emails;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerDetail.prototype, "addresses", {
            get: /**
             * @return {?}
             */ function () {
                return this._addresses;
            },
            set: /**
             * @param {?} addresses
             * @return {?}
             */ function (addresses) {
                this._addresses = addresses;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerDetail.prototype, "birthday", {
            get: /**
             * @return {?}
             */ function () {
                return this._birthday;
            },
            set: /**
             * @param {?} birthday
             * @return {?}
             */ function (birthday) {
                this._birthday = birthday;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerDetail.prototype, "ageRange", {
            get: /**
             * @return {?}
             */ function () {
                return this._ageRange;
            },
            set: /**
             * @param {?} ageRange
             * @return {?}
             */ function (ageRange) {
                this._ageRange = ageRange;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerDetail.prototype, "gender", {
            get: /**
             * @return {?}
             */ function () {
                return this._gender;
            },
            set: /**
             * @param {?} gender
             * @return {?}
             */ function (gender) {
                this._gender = gender;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerDetail.prototype, "occupation", {
            get: /**
             * @return {?}
             */ function () {
                return this._occupation;
            },
            set: /**
             * @param {?} occupation
             * @return {?}
             */ function (occupation) {
                this._occupation = occupation;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerDetail.prototype, "company", {
            get: /**
             * @return {?}
             */ function () {
                return this._company;
            },
            set: /**
             * @param {?} company
             * @return {?}
             */ function (company) {
                this._company = company;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerDetail.prototype, "income", {
            get: /**
             * @return {?}
             */ function () {
                return this._income;
            },
            set: /**
             * @param {?} income
             * @return {?}
             */ function (income) {
                this._income = income;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerDetail.prototype, "source", {
            get: /**
             * @return {?}
             */ function () {
                return this._source;
            },
            set: /**
             * @param {?} source
             * @return {?}
             */ function (source) {
                this._source = source;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerDetail.prototype, "marriage", {
            get: /**
             * @return {?}
             */ function () {
                return this._marriage;
            },
            set: /**
             * @param {?} marriage
             * @return {?}
             */ function (marriage) {
                this._marriage = marriage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerDetail.prototype, "children", {
            get: /**
             * @return {?}
             */ function () {
                return this._children;
            },
            set: /**
             * @param {?} children
             * @return {?}
             */ function (children) {
                this._children = children;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerDetail.prototype, "familiarity", {
            get: /**
             * @return {?}
             */ function () {
                return this._familiarity;
            },
            set: /**
             * @param {?} familiarity
             * @return {?}
             */ function (familiarity) {
                this._familiarity = familiarity;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerDetail.prototype, "recentStatus", {
            get: /**
             * @return {?}
             */ function () {
                return this._recentStatus;
            },
            set: /**
             * @param {?} recentStatus
             * @return {?}
             */ function (recentStatus) {
                this._recentStatus = recentStatus;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerDetail.prototype, "manpa", {
            get: /**
             * @return {?}
             */ function () {
                return this._manpa;
            },
            set: /**
             * @param {?} manpa
             * @return {?}
             */ function (manpa) {
                this._manpa = manpa;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerDetail.prototype, "contactFrequancy", {
            get: /**
             * @return {?}
             */ function () {
                return this._contactFrequancy;
            },
            set: /**
             * @param {?} contactFrequancy
             * @return {?}
             */ function (contactFrequancy) {
                this._contactFrequancy = contactFrequancy;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerDetail.prototype, "possibility", {
            get: /**
             * @return {?}
             */ function () {
                return this._possibility;
            },
            set: /**
             * @param {?} possibility
             * @return {?}
             */ function (possibility) {
                this._possibility = possibility;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerDetail.prototype, "isFollow", {
            get: /**
             * @return {?}
             */ function () {
                return this._isFollow;
            },
            set: /**
             * @param {?} isFollow
             * @return {?}
             */ function (isFollow) {
                this._isFollow = isFollow;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerDetail.prototype, "isEmptyInfo", {
            get: /**
             * @return {?}
             */ function () {
                return this._isEmptyInfo;
            },
            set: /**
             * @param {?} isEmptyInfo
             * @return {?}
             */ function (isEmptyInfo) {
                this._isEmptyInfo = isEmptyInfo;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        CustomerDetail.prototype.updateEmptyStatus = /**
         * @return {?}
         */
            function () {
                if (this.birthday == null && i1.StringUtils.isEmpty(this.gender) && i1.StringUtils.isEmpty(this.occupation)
                    && i1.StringUtils.isEmpty(this.company) && i1.StringUtils.isEmpty(this.income)
                    && i1.StringUtils.isEmpty(this.source) && i1.StringUtils.isEmpty(this.marriage)
                    && i1.StringUtils.isEmpty(this.children) && i1.StringUtils.isEmpty(this.familiarity)
                    && i1.StringUtils.isEmpty(this.manpa) && i1.StringUtils.isEmpty(this.recentStatus)) {
                    this.isEmptyInfo = true;
                }
                else {
                    this.isEmptyInfo = false;
                }
            };
        /**
         * @param {?} isFollow
         * @return {?}
         */
        CustomerDetail.prototype.updateFollowStatus = /**
         * @param {?} isFollow
         * @return {?}
         */
            function (isFollow) {
                this.isFollow = isFollow;
            };
        /**
         * @param {?} email
         * @return {?}
         */
        CustomerDetail.prototype.addEmail = /**
         * @param {?} email
         * @return {?}
         */
            function (email) {
                this.emails.push(email);
            };
        /**
         * @param {?} tel
         * @return {?}
         */
        CustomerDetail.prototype.addTel = /**
         * @param {?} tel
         * @return {?}
         */
            function (tel) {
                this.tels.push(tel);
            };
        /**
         * @param {?} address
         * @return {?}
         */
        CustomerDetail.prototype.addAddress = /**
         * @param {?} address
         * @return {?}
         */
            function (address) {
                this.addresses.push(address);
            };
        /**
         * @param {?} tel
         * @param {?} index
         * @return {?}
         */
        CustomerDetail.prototype.deleteTel = /**
         * @param {?} tel
         * @param {?} index
         * @return {?}
         */
            function (tel, index) {
                this.tels.splice(index, 1);
            };
        /**
         * @param {?} email
         * @param {?} index
         * @return {?}
         */
        CustomerDetail.prototype.deleteEmail = /**
         * @param {?} email
         * @param {?} index
         * @return {?}
         */
            function (email, index) {
                this.emails.splice(index, 1);
            };
        /**
         * @param {?} addresses
         * @param {?} index
         * @return {?}
         */
        CustomerDetail.prototype.deleteAddress = /**
         * @param {?} addresses
         * @param {?} index
         * @return {?}
         */
            function (addresses, index) {
                this.addresses.slice(index, 1);
            };
        /**
         * @return {?}
         */
        CustomerDetail.prototype.notOPUSTelNumber = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var count = 0;
                for (var i = 0; i < this.tels.length; i++) {
                    if (this.tels[i].dataSource != 'OPUS')
                        count++;
                }
                return count;
            };
        return CustomerDetail;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerContactNote = /** @class */ (function () {
        function CustomerContactNote(clientID, date, noteMessage) {
            this.clientID = clientID;
            this.date = date;
            this.noteMessage = noteMessage;
        }
        /**
         * @return {?}
         */
        CustomerContactNote.prototype.getClientID = /**
         * @return {?}
         */
            function () {
                return this.clientID;
            };
        return CustomerContactNote;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerItem = /** @class */ (function () {
        function CustomerItem(clientID, firstName, lastName, possibility, complementPercent, isFollow, isOtherSource, isOverTimeAlert) {
            this._clientID = clientID;
            this._firstName = firstName;
            this._lastName = lastName;
            this._tag = possibility;
            this._complementPercent = complementPercent;
            this._isFollow = isFollow;
            this._isOtherSource = isOtherSource;
            if (isOverTimeAlert == 'Y') {
                this._isHighlight = true;
            }
            if (i1.StringUtils.isEmpty(this._firstName))
                this._firstName = '';
        }
        Object.defineProperty(CustomerItem.prototype, "isOtherSource", {
            get: /**
             * @return {?}
             */ function () {
                return this._isOtherSource;
            },
            set: /**
             * @param {?} isOtherSource
             * @return {?}
             */ function (isOtherSource) {
                this._isOtherSource = isOtherSource;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerItem.prototype, "isFollow", {
            get: /**
             * @return {?}
             */ function () {
                return this._isFollow;
            },
            set: /**
             * @param {?} isFollow
             * @return {?}
             */ function (isFollow) {
                this._isFollow = isFollow;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerItem.prototype, "clientID", {
            get: /**
             * @return {?}
             */ function () {
                return this._clientID;
            },
            set: /**
             * @param {?} clientID
             * @return {?}
             */ function (clientID) {
                this._clientID = clientID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerItem.prototype, "firstName", {
            get: /**
             * @return {?}
             */ function () {
                return this._firstName;
            },
            set: /**
             * @param {?} name
             * @return {?}
             */ function (name) {
                this._firstName = name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerItem.prototype, "lastName", {
            get: /**
             * @return {?}
             */ function () {
                return this._lastName;
            },
            set: /**
             * @param {?} name
             * @return {?}
             */ function (name) {
                this._lastName = name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerItem.prototype, "tag", {
            get: /**
             * @return {?}
             */ function () {
                return this._tag;
            },
            set: /**
             * @param {?} tag
             * @return {?}
             */ function (tag) {
                this._tag = tag;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerItem.prototype, "complementPercent", {
            get: /**
             * @return {?}
             */ function () {
                return this._complementPercent;
            },
            set: /**
             * @param {?} complementPercent
             * @return {?}
             */ function (complementPercent) {
                this._complementPercent = complementPercent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerItem.prototype, "isHighlight", {
            get: /**
             * @return {?}
             */ function () {
                return this._isHighlight;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerItem.prototype, "isHighLight", {
            set: /**
             * @param {?} isHighLight
             * @return {?}
             */ function (isHighLight) {
                this._isHighlight = isHighLight;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerItem.prototype, "showName", {
            get: /**
             * @return {?}
             */ function () {
                return this._showName;
            },
            set: /**
             * @param {?} showName
             * @return {?}
             */ function (showName) {
                this._showName = showName;
            },
            enumerable: true,
            configurable: true
        });
        return CustomerItem;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerAlertItem = /** @class */ (function () {
        function CustomerAlertItem(clientID, name) {
            this._clientID = clientID;
            this._name = name;
        }
        Object.defineProperty(CustomerAlertItem.prototype, "clientID", {
            get: /**
             * @return {?}
             */ function () {
                return this._clientID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerAlertItem.prototype, "name", {
            get: /**
             * @return {?}
             */ function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        return CustomerAlertItem;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerAddress = /** @class */ (function () {
        function CustomerAddress(clientID, addressType, country, city, area, zipcode, address, dataSorce) {
            this.clientID = clientID;
            this.addressType = addressType;
            this.country = country;
            this.city = city;
            this.area = area;
            this.zipcode = zipcode;
            this.address = address;
            this.dataSource = dataSorce;
        }
        /**
         * @return {?}
         */
        CustomerAddress.prototype.toFullAddress = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var array = [];
                if (i1.StringUtils.isNotEmpty(this.country))
                    array.push(this.country);
                if (i1.StringUtils.isNotEmpty(this.city))
                    array.push(this.city);
                if (i1.StringUtils.isNotEmpty(this.area))
                    array.push(this.area);
                if (i1.StringUtils.isNotEmpty(this.zipcode))
                    array.push(this.zipcode);
                if (i1.StringUtils.isNotEmpty(this.address))
                    array.push(this.address);
                return array.join(', ');
            };
        /**
         * @return {?}
         */
        CustomerAddress.prototype.isEmpty = /**
         * @return {?}
         */
            function () {
                return i1.StringUtils.isEmpty(this.country)
                    && i1.StringUtils.isEmpty(this.city) && i1.StringUtils.isEmpty(this.area)
                    && i1.StringUtils.isEmpty(this.zipcode) && i1.StringUtils.isEmpty(this.address);
            };
        return CustomerAddress;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerEmail = /** @class */ (function () {
        function CustomerEmail(_clientID, _emailType, _email, _dataSource) {
            this.clientID = _clientID;
            this.emailType = _emailType;
            this.email = _email;
            this.dataSource = _dataSource;
        }
        /**
         * @return {?}
         */
        CustomerEmail.prototype.isEmpty = /**
         * @return {?}
         */
            function () {
                return i1.StringUtils.isEmpty(this.email);
            };
        return CustomerEmail;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerTel = /** @class */ (function () {
        function CustomerTel(clientID, telType, tel, dataSource) {
            this.clientID = clientID;
            this.telType = telType;
            this.tel = tel;
            this.dataSource = dataSource;
        }
        /**
         * @return {?}
         */
        CustomerTel.prototype.isEmpty = /**
         * @return {?}
         */
            function () {
                return i1.StringUtils.isEmpty(this.tel);
            };
        return CustomerTel;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerBirthday = /** @class */ (function () {
        function CustomerBirthday(clientID, firstName, lastName, birthdayMonth, birthdayDate) {
            this._clientID = clientID;
            this.firstName = firstName;
            this.lastName = lastName;
            this.birthdayMonth = birthdayMonth;
            this.birthdayDate = birthdayDate;
            if (i1.StringUtils.isEmpty(this.firstName))
                this.firstName = '';
        }
        return CustomerBirthday;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerService = /** @class */ (function () {
        function CustomerService(dispatcher, dateUtils, APIFactory, profileCodeService) {
            this.dispatcher = dispatcher;
            this.dateUtils = dateUtils;
            this.APIFactory = APIFactory;
            this.profileCodeService = profileCodeService;
            //is first time use customer function
            this._isFirstTime = true; //TODO
            //register api
        }
        /**
         * @return {?}
         */
        CustomerService.prototype.isFirstTime = /**
         * @return {?}
         */
            function () {
                if (this._isFirstTime) {
                    this._isFirstTime = false;
                    return true;
                }
                else {
                    return this._isFirstTime;
                }
            };
        Object.defineProperty(CustomerService.prototype, "profileResult", {
            get: /**
             * @return {?}
             */ function () { return this._profileResult; },
            set: /**
             * @param {?} result
             * @return {?}
             */ function (result) { this._profileResult = result; },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} messageType
         * @param {?} messageDataCategory
         * @return {?}
         */
        CustomerService.prototype.updateMessageToRead = /**
         * @param {?} messageType
         * @param {?} messageDataCategory
         * @return {?}
         */
            function (messageType, messageDataCategory) {
                var _this = this;
                /** @type {?} */
                var dashboardUpdateToReadAPI = ( /** @type {?} */(this.APIFactory.getAPI('updateDashboardToRead')));
                dashboardUpdateToReadAPI.setMessageType(messageType);
                dashboardUpdateToReadAPI.setMessageDataCategory(messageDataCategory);
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _this.dispatcher.dispatch(dashboardUpdateToReadAPI).subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        console.debug('dashboard-service-updateMessageToRead', data);
                        observer.next(data['Header']);
                        observer.complete();
                    }));
                }));
            };
        /**
         * @param {?} clientID
         * @return {?}
         */
        CustomerService.prototype.getOverTimeCustomerList = /**
         * @param {?} clientID
         * @return {?}
         */
            function (clientID) {
                var _this = this;
                /** @type {?} */
                var customerOverTimeAPI = ( /** @type {?} */(this.APIFactory.getAPI('getCustomerOverTime')));
                customerOverTimeAPI.setClientID(clientID);
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _this.dispatcher.dispatch(customerOverTimeAPI).subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        console.debug('customer-service-getOverTimeList', data);
                        /** @type {?} */
                        var returnList = new Array();
                        /** @type {?} */
                        var messages = data['Body'];
                        //set body data
                        for (var i = 0; i < messages.length; i++) {
                            /** @type {?} */
                            var message = messages[i];
                            /** @type {?} */
                            var args = JSON.parse(message['Arguments']);
                            /** @type {?} */
                            var customerList = args['customers'];
                            for (var j = 0; j < customerList.length; j++) {
                                /** @type {?} */
                                var event_1 = new CustomerAlertItem(customerList[j].id, customerList[j].name);
                                returnList.push(event_1);
                            }
                        }
                        observer.next(returnList);
                        observer.complete();
                    }));
                }));
            };
        /**
         * @param {?} clientID
         * @return {?}
         */
        CustomerService.prototype.getAutoDeleteCustomerList = /**
         * @param {?} clientID
         * @return {?}
         */
            function (clientID) {
                var _this = this;
                /** @type {?} */
                var customerDeleteAPI = ( /** @type {?} */(this.APIFactory.getAPI('getCustomerAutoDelete')));
                customerDeleteAPI.setClientID(clientID);
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _this.dispatcher.dispatch(customerDeleteAPI).subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        console.log('customer-service-getAutoDeleteCustomerList', data);
                        /** @type {?} */
                        var returnList = new Array();
                        /** @type {?} */
                        var messages = data['Body'];
                        //set body data
                        for (var i = 0; i < messages.length; i++) {
                            /** @type {?} */
                            var message = messages[i];
                            /** @type {?} */
                            var args = JSON.parse(message['Arguments']);
                            /** @type {?} */
                            var customerList = args['customers'];
                            for (var j = 0; j < customerList.length; j++) {
                                /** @type {?} */
                                var event_2 = new CustomerAlertItem(customerList[j].id, customerList[j].name);
                                returnList.push(event_2);
                            }
                        }
                        observer.next(returnList);
                        observer.complete();
                    }));
                }));
            };
        /**
         * @param {?} clientID
         * @param {?} isFollow
         * @return {?}
         */
        CustomerService.prototype.updateCustomerFollowStatus = /**
         * @param {?} clientID
         * @param {?} isFollow
         * @return {?}
         */
            function (clientID, isFollow) {
                var _this = this;
                /** @type {?} */
                var updateCustomerFollowStatus = ( /** @type {?} */(this.APIFactory.getAPI('updateCustomerFollowStatus')));
                updateCustomerFollowStatus.setClient(clientID);
                updateCustomerFollowStatus.setIsFollow(isFollow);
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _this.dispatcher.dispatch(updateCustomerFollowStatus).subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        console.debug('customer-service-updateCustomerFollowStatus', data);
                        observer.next(data['Header']);
                        observer.complete();
                    }));
                }));
            };
        /**
         * @return {?}
         */
        CustomerService.prototype.getFilterCriteriaPreset = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var getFilterCriteria = ( /** @type {?} */(this.APIFactory.getAPI('getCustomerFilterPreset')));
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _this.dispatcher.dispatch(getFilterCriteria).subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        console.debug('customer-service-getFilterCriteria', data);
                        /** @type {?} */
                        var settingArray = data['Body'];
                        /** @type {?} */
                        var preset;
                        if (settingArray.length = !0) {
                            preset = JSON.parse(settingArray[0].SettingVal);
                        }
                        console.debug('customer-service-getFilterCriteriaPreset', preset);
                        observer.next(preset);
                        observer.complete();
                    }));
                }));
            };
        /**
         * @param {?} filterCriteria
         * @return {?}
         */
        CustomerService.prototype.saveFilterCriteria = /**
         * @param {?} filterCriteria
         * @return {?}
         */
            function (filterCriteria) {
                var _this = this;
                /** @type {?} */
                var saveFilterCriteria = ( /** @type {?} */(this.APIFactory.getAPI('saveCustomerFilterPreset')));
                saveFilterCriteria.setFilterCriteria(filterCriteria);
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _this.dispatcher.dispatch(saveFilterCriteria).subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        console.debug('customer-service-saveFilterCriteria', data);
                        observer.next(data);
                        observer.complete();
                    }));
                }));
            };
        /**
         * @param {?} clientID
         * @param {?} filterCriteria
         * @return {?}
         */
        CustomerService.prototype.checkInFilterCriteria = /**
         * @param {?} clientID
         * @param {?} filterCriteria
         * @return {?}
         */
            function (clientID, filterCriteria) {
                var _this = this;
                /** @type {?} */
                var customerListAPI = ( /** @type {?} */(this.APIFactory.getAPI('getCustomerList')));
                customerListAPI.filterCriteria = filterCriteria;
                customerListAPI.clientID = clientID;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _this.dispatcher.dispatch(customerListAPI).subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        console.debug('customer-service-checkInFilterCriteria', data);
                        observer.next(data['Body'].length != 0);
                        observer.complete();
                    }));
                }));
            };
        //get customer datas
        //get customer datas
        /**
         * @param {?} filterCriteria
         * @param {?} _pageInfo
         * @return {?}
         */
        CustomerService.prototype.getCustomerList =
            //get customer datas
            /**
             * @param {?} filterCriteria
             * @param {?} _pageInfo
             * @return {?}
             */
            function (filterCriteria, _pageInfo) {
                var _this = this;
                /** @type {?} */
                var customerListAPI = ( /** @type {?} */(this.APIFactory.getAPI('getCustomerList')));
                console.debug('customer-service-getCustomerList', filterCriteria, _pageInfo);
                customerListAPI.filterCriteria = filterCriteria;
                customerListAPI.pageInfo = _pageInfo;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _this.dispatcher.dispatch(customerListAPI).subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        console.debug('customer-service-getCustomerList', data);
                        /** @type {?} */
                        var returnList = new Array();
                        /** @type {?} */
                        var header = data['Header'];
                        /** @type {?} */
                        var customerList = data['Body'];
                        //set header pageInfo
                        // _pageInfo.totalPage = header.PageInfo.totalPage;
                        // _pageInfo.totalRec = header.PageInfo.totalRec;
                        //set body data
                        for (var i = 0; i < customerList.length; i++) {
                            /** @type {?} */
                            var json = customerList[i];
                            /** @type {?} */
                            var isOtherSystem = json.DataSource != 'APP';
                            /** @type {?} */
                            var isFollow = json.IsFollow == 'Y';
                            /** @type {?} */
                            var completeness = json.Completeness;
                            /** @type {?} */
                            var isOverTimeAlert = json.IsOverTimeAlert;
                            /** @type {?} */
                            var event_3 = new CustomerItem(json.ClientID, json.FirstName, json.LastName, json.Possibility, completeness, isFollow, isOtherSystem, isOverTimeAlert);
                            returnList.push(event_3);
                        }
                        observer.next(returnList);
                        observer.complete();
                    }));
                }));
            };
        /**
         * @param {?} targetDate
         * @param {?} subN
         * @param {?} addN
         * @return {?}
         */
        CustomerService.prototype.getCustomerBirthdayList = /**
         * @param {?} targetDate
         * @param {?} subN
         * @param {?} addN
         * @return {?}
         */
            function (targetDate, subN, addN) {
                var _this = this;
                /** @type {?} */
                var customerBirthdayListAPI = ( /** @type {?} */(this.APIFactory.getAPI('getCustomerBirthdayList')));
                customerBirthdayListAPI.subN = subN;
                customerBirthdayListAPI.addN = addN;
                customerBirthdayListAPI.targetDate = targetDate;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _this.dispatcher.dispatch(customerBirthdayListAPI).subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        console.debug('customer-service-getCustomerBirthdayList', data);
                        /** @type {?} */
                        var returnList = [];
                        // let header = data['Header'];
                        /** @type {?} */
                        var birthdayList = data['Body'];
                        console.log("cusSer: ", birthdayList);
                        // //set body data
                        for (var i = 0; i < birthdayList.length; i++) {
                            /** @type {?} */
                            var event_4 = new CustomerBirthday(birthdayList[i]['ClientID'], birthdayList[i]['FirstName'], birthdayList[i]['LastName'], birthdayList[i]['BirthdayMonth'], birthdayList[i]['BirthdayDate']);
                            returnList.push(event_4);
                        }
                        observer.next(returnList);
                        observer.complete();
                    }));
                }));
            };
        /**
         * @param {?} customer
         * @return {?}
         */
        CustomerService.prototype.convertCustomerDetailDisplayMode = /**
         * @param {?} customer
         * @return {?}
         */
            function (customer) {
                var _this = this;
                console.debug('convertCustomerDetailDisplayMode', customer);
                customer.ageRange = this.profileCodeService.convertCode2Text('Customer_Age', customer.ageRange);
                customer.gender = this.profileCodeService.convertCode2Text('Customer_Gender', customer.gender);
                customer.income = this.profileCodeService.convertCode2Text('Customer_Income', customer.income);
                customer.source = this.profileCodeService.convertCode2Text('Customer_Source', customer.source);
                customer.marriage = this.profileCodeService.convertCode2Text('Customer_Marriage', customer.marriage);
                customer.children = this.profileCodeService.convertCode2Text('Customer_Children', customer.children);
                customer.familiarity = this.profileCodeService.convertCode2Text('Customer_Familiarity', customer.familiarity);
                customer.recentStatus = this.profileCodeService.convertCode2Text('Customer_RecentStatus', customer.recentStatus);
                customer.manpa = this.profileCodeService.convertCode2Text('Customer_Status', customer.manpa);
                customer.contactFrequancy = this.profileCodeService.convertCode2Text('Customer_ContactFrequancy', customer.contactFrequancy);
                customer.possibility = this.profileCodeService.convertCode2Text('Customer_Possibility', customer.possibility);
                customer.tels.forEach(( /**
                 * @param {?} tel
                 * @return {?}
                 */function (tel) {
                    tel.telType = _this.profileCodeService.convertCode2Text('Customer_TelType', tel.telType);
                }));
                customer.emails.forEach(( /**
                 * @param {?} email
                 * @return {?}
                 */function (email) {
                    email.emailType = _this.profileCodeService.convertCode2Text('Customer_EmailType', email.emailType);
                }));
                customer.addresses.forEach(( /**
                 * @param {?} address
                 * @return {?}
                 */function (address) {
                    address.addressType = _this.profileCodeService.convertCode2Text('Customer_AddressType', address.addressType);
                }));
            };
        /**
         * @param {?} clientID
         * @return {?}
         */
        CustomerService.prototype.getCustomerDetail = /**
         * @param {?} clientID
         * @return {?}
         */
            function (clientID) {
                var _this = this;
                if (i1.StringUtils.isEmpty(clientID)) {
                    return rxjs.Observable.create(( /**
                     * @param {?} observer
                     * @return {?}
                     */function (observer) {
                        observer.next(undefined);
                        observer.complete();
                    }));
                }
                else {
                    /** @type {?} */
                    var customerDetailAPI_1 = ( /** @type {?} */(this.APIFactory.getAPI('getCustomerDetail')));
                    customerDetailAPI_1.id = clientID;
                    return rxjs.Observable.create(( /**
                     * @param {?} observer
                     * @return {?}
                     */function (observer) {
                        _this.dispatcher.dispatch(customerDetailAPI_1).subscribe(( /**
                         * @param {?} data
                         * @return {?}
                         */function (data) {
                            console.debug('customer-service-json', data);
                            /** @type {?} */
                            var customer = data['Body'][0];
                            console.debug('customer-service-getCustomerDetail', customer);
                            /** @type {?} */
                            var ageRange = customer.AgeRange;
                            /** @type {?} */
                            var gender = customer.Gender;
                            /** @type {?} */
                            var income = customer.Income;
                            /** @type {?} */
                            var source = customer.Source;
                            /** @type {?} */
                            var marriage = customer.Marriage;
                            /** @type {?} */
                            var children = customer.Children;
                            /** @type {?} */
                            var familiarity = customer.Familiarity;
                            /** @type {?} */
                            var recentStatus = customer.RecentStatus;
                            /** @type {?} */
                            var manpa = customer.MANPA;
                            /** @type {?} */
                            var contactFrequancy = customer.ContactFrequancy;
                            /** @type {?} */
                            var possibility = customer.Possibility;
                            /** @type {?} */
                            var isFollow = customer.IsFollow == 'Y';
                            /** @type {?} */
                            var birthday;
                            if (i1.StringUtils.isNotEmpty(customer.BirthdayYear) && i1.StringUtils.isNotEmpty(customer.BirthdayMonth) && i1.StringUtils.isNotEmpty(customer.BirthdayDate)) {
                                birthday = new Date(Number(customer.BirthdayYear), Number(customer.BirthdayMonth) - 1, Number(customer.BirthdayDate));
                            }
                            /** @type {?} */
                            var customerDetail = new CustomerDetail();
                            customerDetail.clientID = customer.ClientID;
                            customerDetail.lastName = (i1.StringUtils.isNotEmpty(customer.LastName) ? customer.LastName : '');
                            customerDetail.firstName = (i1.StringUtils.isNotEmpty(customer.FirstName) ? customer.FirstName : '');
                            customerDetail.occupation = customer.Occupation;
                            customerDetail.company = customer.Company;
                            customerDetail.birthday = birthday;
                            customerDetail.ageRange = ageRange;
                            customerDetail.gender = gender;
                            customerDetail.income = income;
                            customerDetail.source = source;
                            customerDetail.marriage = marriage;
                            customerDetail.children = children;
                            customerDetail.familiarity = familiarity;
                            customerDetail.recentStatus = recentStatus;
                            customerDetail.manpa = manpa;
                            customerDetail.contactFrequancy = contactFrequancy;
                            customerDetail.possibility = possibility;
                            customerDetail.isFollow = isFollow;
                            customerDetail.dataSource = customer.DataSource;
                            customer.tel.map(( /**
                             * @param {?} tel
                             * @return {?}
                             */function (tel) { return new CustomerTel(tel.ClientID, tel.TelType, tel.Tel, tel.DataSource); })).forEach(( /**
                             * @param {?} element
                             * @return {?}
                             */function (element) {
                                customerDetail.addTel(element);
                            }));
                            customer.email.map(( /**
                             * @param {?} email
                             * @return {?}
                             */function (email) { return new CustomerEmail(email.ClientID, email.EmailType, email.Email, email.DataSource); })).forEach(( /**
                             * @param {?} element
                             * @return {?}
                             */function (element) {
                                customerDetail.addEmail(element);
                            }));
                            customer.address.map(( /**
                             * @param {?} address
                             * @return {?}
                             */function (address) { return new CustomerAddress(address.ClientID, address.AddressType, address.Country, address.City, address.Area, address.Zipcode, address.Address, address.DataSource); })).forEach(( /**
                             * @param {?} element
                             * @return {?}
                             */function (element) {
                                customerDetail.addAddress(element);
                            }));
                            console.debug('customer-service:', customerDetail);
                            observer.next(customerDetail);
                            observer.complete();
                        }));
                    }));
                }
            };
        /**
         * @param {?} items
         * @return {?}
         */
        CustomerService.prototype.importContact = /**
         * @param {?} items
         * @return {?}
         */
            function (items) {
                var _this = this;
                /** @type {?} */
                var importContactAPI = ( /** @type {?} */(this.APIFactory.getAPI('importContact')));
                console.debug('customer-service-importContact', items);
                importContactAPI.setItems(items);
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _this.dispatcher.dispatch(importContactAPI).subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        console.debug('customer-service-importContact', data);
                        observer.next(data['Header']);
                        observer.complete();
                    }));
                }));
            };
        /**
         * @param {?} customerDetail
         * @return {?}
         */
        CustomerService.prototype.validProfile = /**
         * @param {?} customerDetail
         * @return {?}
         */
            function (customerDetail) {
                var _this = this;
                /** @type {?} */
                var validationResult = new i1.ValidationResult();
                //valid required
                if (i1.StringUtils.isEmpty(customerDetail.lastName))
                    validationResult.setErrorMap('lastName', 'required');
                // if (customerProfile.firstName == '')
                //   validationResult.setErrorMap('firstName', 'required');
                //valid format      
                //valid email
                if (customerDetail.emails.length != 0) {
                    customerDetail.emails.forEach(( /**
                     * @param {?} email
                     * @return {?}
                     */function (email) {
                        if (!email.isEmpty()) {
                            if (!_this.isEmailFormat(email.email)) {
                                validationResult.setErrorMap('email', 'format');
                            }
                        }
                    }));
                }
                //valid date
                // if(customerProfile.birthday == null) {
                //   validationResult.setErrorMap('birthday', 'date');
                // }
                return validationResult;
            };
        /**
         * @private
         * @param {?} email
         * @return {?}
         */
        CustomerService.prototype.isEmailFormat = /**
         * @private
         * @param {?} email
         * @return {?}
         */
            function (email) {
                /** @type {?} */
                var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
                return regexp.test(email);
            };
        /**
         * @param {?} customerDetail
         * @return {?}
         */
        CustomerService.prototype.saveCustomerDetail = /**
         * @param {?} customerDetail
         * @return {?}
         */
            function (customerDetail) {
                var _this = this;
                console.log("saveCustomerProfile", customerDetail);
                //check tel/email/address default type
                customerDetail.tels.forEach(( /**
                 * @param {?} tel
                 * @return {?}
                 */function (tel) {
                    if (i1.StringUtils.isEmpty(tel.telType))
                        tel.telType = 'TelHome';
                }));
                customerDetail.emails.forEach(( /**
                 * @param {?} email
                 * @return {?}
                 */function (email) {
                    if (i1.StringUtils.isEmpty(email.emailType))
                        email.emailType = 'MailHome';
                }));
                customerDetail.addresses.forEach(( /**
                 * @param {?} address
                 * @return {?}
                 */function (address) {
                    if (i1.StringUtils.isEmpty(address.addressType))
                        address.addressType = 'AddressTypeHome';
                }));
                /** @type {?} */
                var saveCustomerDetailAPI = ( /** @type {?} */(this.APIFactory.getAPI('saveCustomerDetail')));
                saveCustomerDetailAPI.setDetail(customerDetail);
                /** @type {?} */
                var subject = rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _this.dispatcher.dispatch(saveCustomerDetailAPI).subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        console.debug('customer-service-saveCustomerDetail', data);
                        observer.next(data['Header']);
                        observer.complete();
                    }));
                }));
                console.log("subject: ", subject);
                return subject;
            };
        /**
         * @param {?} clientID
         * @return {?}
         */
        CustomerService.prototype.deleteCustomerProfile = /**
         * @param {?} clientID
         * @return {?}
         */
            function (clientID) {
                var _this = this;
                console.log("deleteCustomerProfile", clientID);
                /** @type {?} */
                var deleteAPI = ( /** @type {?} */(this.APIFactory.getAPI('deleteCustomer')));
                deleteAPI.clientID = clientID;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _this.dispatcher.dispatch(deleteAPI).subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        console.debug('customer-service-deleteCustomerProfile', data);
                        observer.next(data['Header']);
                        observer.complete();
                    }));
                }));
            };
        /**
         * @param {?} clientID
         * @param {?} pageInfo
         * @return {?}
         */
        CustomerService.prototype.getCustomerContactNote = /**
         * @param {?} clientID
         * @param {?} pageInfo
         * @return {?}
         */
            function (clientID, pageInfo) {
                var _this = this;
                /** @type {?} */
                var customerContactNoteAPI = ( /** @type {?} */(this.APIFactory.getAPI('getCustomerContactNote')));
                customerContactNoteAPI.setClientID(clientID);
                customerContactNoteAPI.setPageInfo(pageInfo);
                console.debug('customer-service-getCustomerContactNote', customerContactNoteAPI);
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _this.dispatcher.dispatch(customerContactNoteAPI).subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        console.debug('customer-service-getCustomerContactNote', data);
                        /** @type {?} */
                        var returnCustomerContactNote = new Array();
                        /** @type {?} */
                        var customerContactNoteList = data['Body'];
                        for (var i = 0; i < customerContactNoteList.length; i++) {
                            /** @type {?} */
                            var json = customerContactNoteList[i];
                            /** @type {?} */
                            var user = new CustomerContactNote(json.ClientID, new Date(json.NoteTime), json.Note);
                            returnCustomerContactNote.push(user);
                        }
                        observer.next(returnCustomerContactNote);
                        observer.complete();
                    }));
                }));
            };
        /**
         * @param {?} clientID
         * @param {?} customerClientID
         * @param {?} note
         * @param {?} noteTime
         * @return {?}
         */
        CustomerService.prototype.addCustomerContact = /**
         * @param {?} clientID
         * @param {?} customerClientID
         * @param {?} note
         * @param {?} noteTime
         * @return {?}
         */
            function (clientID, customerClientID, note, noteTime) {
                var _this = this;
                console.log("addCustomerContact");
                /** @type {?} */
                var addCustomerContactAPI = ( /** @type {?} */(this.APIFactory.getAPI('addCustomerContactNote')));
                addCustomerContactAPI.setClientID(clientID);
                addCustomerContactAPI.setCustomerClientID(customerClientID);
                addCustomerContactAPI.setNote(note);
                addCustomerContactAPI.setNoteTime(noteTime);
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _this.dispatcher.dispatch(addCustomerContactAPI).subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        console.debug('customer-service-addCustomerContact', data);
                        observer.next(data['Header']);
                        observer.complete();
                    }));
                }));
            };
        /**
         * @param {?} contactClientID
         * @param {?} note
         * @param {?} noteTime
         * @return {?}
         */
        CustomerService.prototype.editCustomerContact = /**
         * @param {?} contactClientID
         * @param {?} note
         * @param {?} noteTime
         * @return {?}
         */
            function (contactClientID, note, noteTime) {
                var _this = this;
                console.log("editCustomerContact");
                /** @type {?} */
                var editCustomerContactAPI = ( /** @type {?} */(this.APIFactory.getAPI('editCustomerContactNote')));
                editCustomerContactAPI.setContactClientID(contactClientID);
                editCustomerContactAPI.setNote(note);
                editCustomerContactAPI.setNoteTime(noteTime);
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _this.dispatcher.dispatch(editCustomerContactAPI).subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        console.debug('customer-service-editCustomerContact', data);
                        observer.next(data['Header']);
                        observer.complete();
                    }));
                }));
            };
        /**
         * @param {?} contactClientID
         * @return {?}
         */
        CustomerService.prototype.deleteCustomerContact = /**
         * @param {?} contactClientID
         * @return {?}
         */
            function (contactClientID) {
                var _this = this;
                console.log("deleteCustomerContact");
                /** @type {?} */
                var deleteCustomerContactAPI = ( /** @type {?} */(this.APIFactory.getAPI('deleteCustomerContactNote')));
                deleteCustomerContactAPI.setContactClientID(contactClientID);
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _this.dispatcher.dispatch(deleteCustomerContactAPI).subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        console.debug('customer-service-editCustomerContact', data);
                        observer.next(data['Header']);
                        observer.complete();
                    }));
                }));
            };
        /**
         * @param {?} clientID
         * @return {?}
         */
        CustomerService.prototype.getCustomerContactTel = /**
         * @param {?} clientID
         * @return {?}
         */
            function (clientID) {
                var _this = this;
                /** @type {?} */
                var customerTelAPI = ( /** @type {?} */(this.APIFactory.getAPI('getCustomerTel')));
                customerTelAPI.setClientID(clientID);
                console.debug('customer-service-getCustomerContactTel', customerTelAPI);
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    _this.dispatcher.dispatch(customerTelAPI).subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        console.debug('customer-service-getCustomerContactTel response', data);
                        /** @type {?} */
                        var returnCustomerTel = new Array();
                        /** @type {?} */
                        var customerTelList = data['Body'];
                        customerTelList.map(( /**
                         * @param {?} tel
                         * @return {?}
                         */function (tel) { return new CustomerTel(tel.ClientID, _this.profileCodeService.convertCode2Text('Customer_TelType', tel.TelType), tel.Tel, tel.DataSource); })).forEach(( /**
                         * @param {?} element
                         * @return {?}
                         */function (element) {
                            returnCustomerTel.push(element);
                        }));
                        observer.next(returnCustomerTel);
                        observer.complete();
                    }));
                }));
            };
        CustomerService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        CustomerService.ctorParameters = function () {
            return [
                { type: i1.APIDispatch },
                { type: i1.DateUtils },
                { type: i1.APIFactory },
                { type: i1.ProfileCodeService }
            ];
        };
        /** @nocollapse */ CustomerService.ngInjectableDef = i0.defineInjectable({ factory: function CustomerService_Factory() { return new CustomerService(i0.inject(i1.APIDispatch), i0.inject(i1.DateUtils), i0.inject(i1.APIFactory), i0.inject(i1.ProfileCodeService)); }, token: CustomerService, providedIn: "root" });
        return CustomerService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerFilterPreset = /** @class */ (function () {
        function CustomerFilterPreset() {
        }
        /**
         * @param {?} column
         * @param {?} values
         * @return {?}
         */
        CustomerFilterPreset.prototype.addValues = /**
         * @param {?} column
         * @param {?} values
         * @return {?}
         */
            function (column, values) {
                this[column] = values;
            };
        return CustomerFilterPreset;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerFilterCriteria = /** @class */ (function () {
        function CustomerFilterCriteria(keyword, filterMap, savePreset) {
            if (keyword === void 0) {
                keyword = '';
            }
            if (filterMap === void 0) {
                filterMap = new Map();
            }
            if (savePreset === void 0) {
                savePreset = false;
            }
            this.filterMap = new Map();
            this._savePreset = false;
            this._keyword = keyword;
            this.filterMap = filterMap;
            this._savePreset = savePreset;
        }
        /**
         * @param {?} filterCol
         * @param {?} value
         * @return {?}
         */
        CustomerFilterCriteria.prototype.addCriteria = /**
         * @param {?} filterCol
         * @param {?} value
         * @return {?}
         */
            function (filterCol, value) {
                /** @type {?} */
                var values = this.filterMap.get(filterCol);
                if (values == undefined)
                    values = new Array();
                if (!values.includes(value)) {
                    values.push(value);
                    this.filterMap.set(filterCol, values);
                }
            };
        /**
         * @param {?} filterCol
         * @param {?} values
         * @return {?}
         */
        CustomerFilterCriteria.prototype.addCriteriaCols = /**
         * @param {?} filterCol
         * @param {?} values
         * @return {?}
         */
            function (filterCol, values) {
                this.filterMap.set(filterCol, values);
            };
        /**
         * @return {?}
         */
        CustomerFilterCriteria.prototype.hasCriteria = /**
         * @return {?}
         */
            function () {
                return this.filterMap.size != 0 || i1.StringUtils.isNotEmpty(this._keyword);
            };
        Object.defineProperty(CustomerFilterCriteria.prototype, "keyword", {
            get: /**
             * @return {?}
             */ function () { return this._keyword; },
            set: /**
             * @param {?} keyword
             * @return {?}
             */ function (keyword) { this._keyword = keyword; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerFilterCriteria.prototype, "savePreset", {
            get: /**
             * @return {?}
             */ function () { return this._savePreset; },
            set: /**
             * @param {?} isSave
             * @return {?}
             */ function (isSave) {
                this._savePreset = isSave;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        CustomerFilterCriteria.prototype.getFilterMap = /**
         * @return {?}
         */
            function () {
                return this.filterMap;
            };
        /**
         * @return {?}
         */
        CustomerFilterCriteria.prototype.toPresetJSON = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var preset = new CustomerFilterPreset();
                this.filterMap.forEach(( /**
                 * @param {?} value
                 * @param {?} column
                 * @return {?}
                 */function (value, column) {
                    preset.addValues(column, value);
                }));
                console.debug('toPresetJSON', preset);
                return preset;
            };
        return CustomerFilterCriteria;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerConfirmAction = /** @class */ (function () {
        function CustomerConfirmAction() {
        }
        Object.defineProperty(CustomerConfirmAction.prototype, "action", {
            get: /**
             * @return {?}
             */ function () { return this._action; },
            set: /**
             * @param {?} action
             * @return {?}
             */ function (action) { this._action = action; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerConfirmAction.prototype, "option", {
            get: /**
             * @return {?}
             */ function () { return this._optionObj; },
            set: /**
             * @param {?} option
             * @return {?}
             */ function (option) { this._optionObj = option; },
            enumerable: true,
            configurable: true
        });
        return CustomerConfirmAction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerImportGroup = /** @class */ (function () {
        function CustomerImportGroup(groupName) {
            this._isShow = true;
            this._items = new Array();
            this._groupName = groupName;
        }
        /**
         * @param {?} item
         * @return {?}
         */
        CustomerImportGroup.prototype.addItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                this._items.push(item);
            };
        Object.defineProperty(CustomerImportGroup.prototype, "getItems", {
            get: /**
             * @return {?}
             */ function () {
                return this._items;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerImportGroup.prototype, "groupName", {
            get: /**
             * @return {?}
             */ function () {
                return this._groupName;
            },
            set: /**
             * @param {?} groupName
             * @return {?}
             */ function (groupName) {
                this._groupName = groupName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerImportGroup.prototype, "isShow", {
            get: /**
             * @return {?}
             */ function () {
                return this._isShow;
            },
            set: /**
             * @param {?} isShow
             * @return {?}
             */ function (isShow) {
                this._isShow = isShow;
            },
            enumerable: true,
            configurable: true
        });
        return CustomerImportGroup;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var syncCustomerToken = new i0.InjectionToken('syncCustomer');
    /** @type {?} */
    var storeCustomerToken = new i0.InjectionToken("storeCustomer");
    /** @type {?} */
    var customerActionToken = new i0.InjectionToken("customerAction");
    /** @type {?} */
    var showCustomerRuleToken = new i0.InjectionToken("showCustomerRule");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var CUSTOMER_STATE = {
        DISPLAY: 'display',
        EDIT: 'edit',
        ADD_SAVED: 'add saved',
        EDIT_SAVED: 'edit saved',
        FIRST: 'first',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerUtils = /** @class */ (function () {
        function CustomerUtils(profileCodeService) {
            this.profileCodeService = profileCodeService;
        }
        /**
         * @param {?} codeArray
         * @return {?}
         */
        CustomerUtils.prototype.setCode2Option = /**
         * @param {?} codeArray
         * @return {?}
         */
            function (codeArray) {
                var e_1, _a;
                /** @type {?} */
                var options = new Array();
                if (codeArray != undefined) {
                    try {
                        for (var codeArray_1 = __values(codeArray), codeArray_1_1 = codeArray_1.next(); !codeArray_1_1.done; codeArray_1_1 = codeArray_1.next()) {
                            var code = codeArray_1_1.value;
                            options.push(new ui.SelectOption(code.getCode(), code.displayText));
                        }
                    }
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (codeArray_1_1 && !codeArray_1_1.done && (_a = codeArray_1.return))
                                _a.call(codeArray_1);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
                    }
                }
                return options;
            };
        /**
         * @param {?} customerDetail
         * @return {?}
         */
        CustomerUtils.prototype.countCompletenessByProfile = /**
         * @param {?} customerDetail
         * @return {?}
         */
            function (customerDetail) {
                console.debug('countCompletenessByDetail', customerDetail);
                //count Completeness
                /** @type {?} */
                var completeness = 0;
                /** @type {?} */
                var countColumnName = ['FirstName', 'LastName', 'Occupation', 'Company', 'AgeRange', 'Gender',
                    'Income', 'Source', 'Marriage', 'Children', 'Familiarity', 'RecentStatus', 'MANPA',
                    'ContactFrequancy', 'Possibility'];
                if (i1.StringUtils.isNotEmpty(customerDetail.firstName))
                    completeness++;
                if (i1.StringUtils.isNotEmpty(customerDetail.lastName))
                    completeness++;
                if (i1.StringUtils.isNotEmpty(customerDetail.occupation))
                    completeness++;
                if (i1.StringUtils.isNotEmpty(customerDetail.company))
                    completeness++;
                if (i1.StringUtils.isNotEmpty(customerDetail.ageRange))
                    completeness++;
                if (i1.StringUtils.isNotEmpty(customerDetail.gender))
                    completeness++;
                if (i1.StringUtils.isNotEmpty(customerDetail.income))
                    completeness++;
                if (i1.StringUtils.isNotEmpty(customerDetail.source))
                    completeness++;
                if (i1.StringUtils.isNotEmpty(customerDetail.marriage))
                    completeness++;
                if (i1.StringUtils.isNotEmpty(customerDetail.children))
                    completeness++;
                if (i1.StringUtils.isNotEmpty(customerDetail.familiarity))
                    completeness++;
                if (i1.StringUtils.isNotEmpty(customerDetail.recentStatus))
                    completeness++;
                if (i1.StringUtils.isNotEmpty(customerDetail.manpa))
                    completeness++;
                if (i1.StringUtils.isNotEmpty(customerDetail.contactFrequancy))
                    completeness++;
                if (i1.StringUtils.isNotEmpty(customerDetail.possibility))
                    completeness++;
                //count birthday
                if (customerDetail.birthday != undefined)
                    completeness++;
                //count phone/email/address
                if (customerDetail.tels.length != 0)
                    completeness++;
                if (customerDetail.emails.length != 0)
                    completeness++;
                if (customerDetail.addresses.length != 0)
                    completeness++;
                console.debug('orginal completeness', completeness, (countColumnName.length + 4));
                completeness = (completeness / (countColumnName.length + 4));
                console.debug('before round completeness', completeness);
                completeness = Math.round(completeness * 100) / 100;
                console.debug('after round completeness', completeness);
                return completeness;
            };
        /**
         * @param {?} customerObj
         * @param {?} telArraySize
         * @param {?} emailArraySize
         * @param {?} addressAddressSize
         * @return {?}
         */
        CustomerUtils.prototype.countCompleteness = /**
         * @param {?} customerObj
         * @param {?} telArraySize
         * @param {?} emailArraySize
         * @param {?} addressAddressSize
         * @return {?}
         */
            function (customerObj, telArraySize, emailArraySize, addressAddressSize) {
                var e_2, _a;
                console.debug('countCompleteness', customerObj, telArraySize, emailArraySize, addressAddressSize);
                //count Completeness
                /** @type {?} */
                var completeness = 0;
                /** @type {?} */
                var countColumnName = ['FirstName', 'LastName', 'Occupation', 'Company', 'AgeRange', 'Gender',
                    'Income', 'Source', 'Marriage', 'Children', 'Familiarity', 'RecentStatus', 'MANPA',
                    'ContactFrequancy', 'Possibility'];
                try {
                    for (var countColumnName_1 = __values(countColumnName), countColumnName_1_1 = countColumnName_1.next(); !countColumnName_1_1.done; countColumnName_1_1 = countColumnName_1.next()) {
                        var columnName = countColumnName_1_1.value;
                        if (i1.StringUtils.isNotEmpty(customerObj.getValue(columnName))) {
                            console.debug('hasData', columnName + '=>' + customerObj.getValue(columnName));
                            completeness++;
                        }
                    }
                }
                catch (e_2_1) {
                    e_2 = { error: e_2_1 };
                }
                finally {
                    try {
                        if (countColumnName_1_1 && !countColumnName_1_1.done && (_a = countColumnName_1.return))
                            _a.call(countColumnName_1);
                    }
                    finally {
                        if (e_2)
                            throw e_2.error;
                    }
                }
                //count birthday
                if (i1.StringUtils.isNotEmpty(customerObj.getValue('BirthdayYear')) &&
                    i1.StringUtils.isNotEmpty(customerObj.getValue('BirthdayMonth')) &&
                    i1.StringUtils.isNotEmpty(customerObj.getValue('BirthdayDate')))
                    completeness++;
                //count phone/email/address
                if (telArraySize != 0)
                    completeness++;
                if (emailArraySize != 0)
                    completeness++;
                if (addressAddressSize != 0)
                    completeness++;
                console.debug('orginal completeness', completeness, (countColumnName.length + 4));
                completeness = (completeness / (countColumnName.length + 4));
                console.debug('before round completeness', completeness);
                completeness = Math.round(completeness * 100) / 100;
                console.debug('after round completeness', completeness);
                customerObj.setValue('Completeness', completeness);
            };
        /**
         * @param {?} dataObject
         * @return {?}
         */
        CustomerUtils.prototype.setCustomerDefaultValue = /**
         * @param {?} dataObject
         * @return {?}
         */
            function (dataObject) {
                //count age
                if (i1.StringUtils.isNotEmpty(dataObject.getValue('BirthdayYear')) &&
                    i1.StringUtils.isNotEmpty(dataObject.getValue('BirthdayMonth')) &&
                    i1.StringUtils.isNotEmpty(dataObject.getValue('BirthdayDate'))) {
                    /** @type {?} */
                    var birthday = new Date(Number(dataObject.getValue('BirthdayYear')), Number(dataObject.getValue('BirthdayMonth') - 1), Number(dataObject.getValue('BirthdayDate')));
                    /** @type {?} */
                    var age = this.countAge(birthday);
                    dataObject.setValue('age', age);
                    //check age range
                    if (i1.StringUtils.isEmpty(dataObject.getValue('AgeRange'))) {
                        /** @type {?} */
                        var ageRange = this.countAgeRange(age);
                        if (ageRange != undefined) {
                            dataObject.setValue('AgeRange', ageRange);
                        }
                    }
                }
            };
        /**
         * @param {?} age
         * @return {?}
         */
        CustomerUtils.prototype.countAgeRange = /**
         * @param {?} age
         * @return {?}
         */
            function (age) {
                console.debug('countAgeRange', age);
                /** @type {?} */
                var rangeResult;
                /** @type {?} */
                var ageRange = this.profileCodeService.getCodeArray('Customer_Age');
                ageRange.forEach(( /**
                 * @param {?} profileCode
                 * @return {?}
                 */function (profileCode) {
                    /** @type {?} */
                    var args = profileCode.getArguments();
                    console.debug('customer-utils countAgeRange args', args);
                    /** @type {?} */
                    var obj = JSON.parse(args);
                    console.debug('customer-utils countAgeRange obj', obj);
                    if (age >= obj.start && age <= obj.end) {
                        console.debug('match age range', profileCode.getCode());
                        rangeResult = profileCode.getCode();
                    }
                }));
                console.debug('rangeResult', rangeResult);
                return rangeResult;
            };
        /**
         * @param {?} birthday
         * @return {?}
         */
        CustomerUtils.prototype.countAge = /**
         * @param {?} birthday
         * @return {?}
         */
            function (birthday) {
                /** @type {?} */
                var dates = this.calCEIntervalDays(birthday, new Date());
                console.debug('dates', dates);
                /** @type {?} */
                var age = Math.floor(dates / 365);
                console.debug('age', age);
                return age;
            };
        /**
         * javascript傳入起始日與結束
         * 日期格式為民國年月日(EX.1060802)
         * 傳入 1060702,1060802 會回傳31天
         * 傳入 1060901,1061001 會回傳30天
         * @param  sDate
         * @param  eDate
         * @return 天數
         */
        /**
         * javascript傳入起始日與結束
         * 日期格式為民國年月日(EX.1060802)
         * 傳入 1060702,1060802 會回傳31天
         * 傳入 1060901,1061001 會回傳30天
         * @param {?} sDate
         * @param {?} eDate
         * @return {?} 天數
         */
        CustomerUtils.prototype.calRocIntervalDays = /**
         * javascript傳入起始日與結束
         * 日期格式為民國年月日(EX.1060802)
         * 傳入 1060702,1060802 會回傳31天
         * 傳入 1060901,1061001 會回傳30天
         * @param {?} sDate
         * @param {?} eDate
         * @return {?} 天數
         */
            function (sDate, eDate) {
                /** @type {?} */
                var msecPerMinute = 1000 * 60;
                /** @type {?} */
                var msecPerHour = msecPerMinute * 60;
                /** @type {?} */
                var msecPerDay = msecPerHour * 24;
                sDate = this.leftPad(sDate, 7, '0');
                eDate = this.leftPad(eDate, 7, '0');
                /** @type {?} */
                var begDateStr = "" + sDate.substring(3, 5) + "/" + sDate.substring(5) + "/" + (Number(sDate.substring(0, 3)) + Number(1911));
                /** @type {?} */
                var endDateStr = "" + eDate.substring(3, 5) + "/" + eDate.substring(5) + "/" + (Number(eDate.substring(0, 3)) + Number(1911));
                /** @type {?} */
                var begDate = new Date(begDateStr);
                /** @type {?} */
                var endDate = new Date(endDateStr);
                /** @type {?} */
                var interval = endDate.getTime() - begDate.getTime();
                /** @type {?} */
                var days = Math.floor(interval / msecPerDay);
                return days;
            };
        /**
         * javascript傳入起始日與結束
         * 日期格式為西元年月日(EX.20170801)
         * 傳入 20170702,20170802 會回傳31天
         * 傳入 20170901,20171001 會回傳30天
         * @param  sDate
         * @param  eDate
         * @return 天數
         */
        /**
         * javascript傳入起始日與結束
         * 日期格式為西元年月日(EX.20170801)
         * 傳入 20170702,20170802 會回傳31天
         * 傳入 20170901,20171001 會回傳30天
         * @param {?} sDate
         * @param {?} eDate
         * @return {?} 天數
         */
        CustomerUtils.prototype.calCEIntervalDays = /**
         * javascript傳入起始日與結束
         * 日期格式為西元年月日(EX.20170801)
         * 傳入 20170702,20170802 會回傳31天
         * 傳入 20170901,20171001 會回傳30天
         * @param {?} sDate
         * @param {?} eDate
         * @return {?} 天數
         */
            function (sDate, eDate) {
                // var msecPerMinute = 1000 * 60;
                // var msecPerHour = msecPerMinute * 60;
                // var msecPerDay = msecPerHour * 24;
                // var begDateStr = "" + sDate.substring(4, 6) + "/" + sDate.substring(6) + "/" + sDate.substring(0, 4);
                // var endDateStr = "" + eDate.substring(4, 6) + "/" + eDate.substring(6) + "/" + eDate.substring(0, 4);
                // var begDate = new Date(begDateStr);
                // var endDate = new Date(endDateStr);
                // var interval = endDate.getTime() - begDate.getTime();
                // var days = Math.floor(interval / msecPerDay);
                // return days;
                return dateFns.differenceInCalendarDays(eDate, sDate);
            };
        /**
         * 向左補零
         * Ex:leftPad(3,3,'0')->003
         * @param  val    [原值]
         * @param  padLen [補足長度]
         * @param  padVal [補足值]
         * @return        [description]
         */
        /**
         * 向左補零
         * Ex:leftPad(3,3,'0')->003
         * @param {?} val    [原值]
         * @param {?} padLen [補足長度]
         * @param {?} padVal [補足值]
         * @return {?} [description]
         */
        CustomerUtils.prototype.leftPad = /**
         * 向左補零
         * Ex:leftPad(3,3,'0')->003
         * @param {?} val    [原值]
         * @param {?} padLen [補足長度]
         * @param {?} padVal [補足值]
         * @return {?} [description]
         */
            function (val, padLen, padVal) {
                if (val.toString().length < padLen) {
                    for (var i = 1; i < padLen; i++) {
                        val = padVal + val;
                        if (val.toString().length >= padLen) {
                            break;
                        }
                    }
                }
                return val;
            };
        CustomerUtils.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        CustomerUtils.ctorParameters = function () {
            return [
                { type: i1.ProfileCodeService }
            ];
        };
        /** @nocollapse */ CustomerUtils.ngInjectableDef = i0.defineInjectable({ factory: function CustomerUtils_Factory() { return new CustomerUtils(i0.inject(i1.ProfileCodeService)); }, token: CustomerUtils, providedIn: "root" });
        return CustomerUtils;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomersComponent = /** @class */ (function () {
        function CustomersComponent(customerService, calendarService, translateService, changeDetector, deviceService, dateUtils, profileCodeService, extensionService, customerUtils, customerStore, customerSync, customerAction) {
            this.customerService = customerService;
            this.calendarService = calendarService;
            this.translateService = translateService;
            this.changeDetector = changeDetector;
            this.deviceService = deviceService;
            this.dateUtils = dateUtils;
            this.profileCodeService = profileCodeService;
            this.extensionService = extensionService;
            this.customerUtils = customerUtils;
            this.customerStore = customerStore;
            this.customerSync = customerSync;
            this.customerAction = customerAction;
            this.viewTypeIndex = 2; // 'month'
            this.viewDate = new Date();
            this.weekStartsOn = 1; // Monday 
            // control mobile show
            this.isShow = false;
            // popup
            this.isExpandDetail = false;
            this.isRefreshDetail = false;
            this.isSaveClick = false;
            this.language = new i1.Language();
            //客戶清單的search block animate
            this.isOpen = false;
            this.classSearch = '';
            //popup control
            this.isDisplayImportSavePopup = false; //import popup
            this.isDisplaySavePopup = false; //save popup
            this.isDisplayDelCustomerPopup = false; //delete customer popup
            this.isDisplayConfirmAlertPopup = false; //confirm alert popup
            this.isDisplayInfoAlertPopup = false; //info alert popup
            this.isDisplayUpdateRemind = false; //alert customer over 6 month popup
            this.isDisplayDeleteRemind = false; //alert customer over 6 month & 7day popup
            this.isPopupImport = false; //import popup
            this.isPopupFilter = false; //filter popup
            this.isExpandEdit = false; // appointment popup
            this.isPopupCallPhone = false; //call customer phone popup
            this.isPopupNoteDetail = false; //contact detail popup
            this.isPopupEditNote = false; //add/edit contact note popup
            this.isPopupDeleteNote = false; //delete contact note popup
            this.isPopupConfirmDisable = true; // confirmPopup btn is disable default
            this.isDisplayDeletePopup = false; //delete success popup
            //control overtime customer list
            this.alertOverTimeList = new Array();
            //control auto delete customer list
            this.alertAutoDeleteCustomer = new Array();
            //cache confirm action
            this._confirmAction = new CustomerConfirmAction();
            //control refresh  content
            this.isLoadingFinishContent = false;
            //control
            this.isLazyLoading = true;
            this.customerContactList = [];
            this.contactListPageInfo = new i1.PageInfo();
            this.viewDateCalendarEventList = [];
            //intergration customer-list
            this.customerList = new Array();
            this.customerListPageInfo = new i1.PageInfo();
            this.filterCriteria = new CustomerFilterCriteria();
            this.filterType = '';
            this.optionMap = new Map();
            this.translateMap = new Map();
            this.dayTypesList = ['Cross_Day', 'All_Day'];
            this.noSchedule = 'No_Schedule';
            this.activityTypeList = []; // DB中所有activityType
            this.alertTypeList = [];
            //intergration customer-import
            this.importContractMap = new Map();
            this.mobileResultSize = 0;
            this.importData = false;
            this.importContactList = [];
            //filter customer attribute
            this.isLoadCriteria = false;
            this.isClearCriteria = false;
            //import result(success | fail);
            this._onImportResult = false;
            this.noteCurrentTime = new Date(); //add/edit Note current time
            this.noteMessage = ''; //add/edit Note Message
            this.noteClientID = ''; //edit/delete noteClientID
            this.isRefreshContactList = false;
            this.loadContactList = false;
            // search animate in filter
            this.classBarMove = '';
            //listener route back event
            this._reloadData = false;
            //intergration customer-detail used
            this.customerDetail = new CustomerDetail();
            //current edit customer Id
            this.currentCustomer = null;
            // current customer state
            this.customerState = CUSTOMER_STATE.FIRST;
            //pre saved criteria
            this.pre_criteria = new CustomerFilterCriteria();
            //subject of clear & save filter
            this.clearSubject = new rxjs.Subject();
            this.saveFilterSubject = new rxjs.Subject();
            this.detailModel = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        CustomersComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.customerStore) {
                    this.criteriaChanges.unsubscribe();
                    this.customerDetailChanges.unsubscribe();
                    this.stateChanges.unsubscribe();
                    this.customerListChanges.unsubscribe();
                }
            };
        /**
         * @return {?}
         */
        CustomersComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this_1 = this;
                this.activityTypeList = this.profileCodeService.getCodeArray('Calendar_Type');
                this.alertTypeList = this.profileCodeService.getCodeArray('Calendar_RemindTime');
                this.optionMap.set('Calendar_Type', this.activityTypeList);
                this.optionMap.set('Calendar_RemindTime', this.alertTypeList);
                this.dayTypesList.forEach(( /**
                 * @param {?} dayType
                 * @return {?}
                 */function (dayType) {
                    _this_1.translateMap.set(dayType, _this_1.translateService.translate(dayType));
                }));
                this.translateMap.set(this.noSchedule, this.translateService.translate(this.noSchedule));
                if (this.customerStore) {
                    this.criteriaChanges = this.customerStore.getCriteria().subscribe(( /**
                     * @param {?} criteria
                     * @return {?}
                     */function (criteria) {
                        _this_1.pre_criteria = criteria;
                    }));
                    this.customerDetailChanges = this.customerStore.getCurrentCustomerDetail().subscribe(( /**
                     * @param {?} detail
                     * @return {?}
                     */function (detail) {
                        _this_1.currentCustomer = detail;
                    }));
                    this.customerListChanges = this.customerStore.getCustomerList().subscribe(( /**
                     * @param {?} list
                     * @return {?}
                     */function (list) {
                        _this_1.pre_customerList = list;
                    }));
                    this.stateChanges = this.customerStore.getState().subscribe(( /**
                     * @param {?} state
                     * @return {?}
                     */function (state) {
                        console.log("main state: ", state);
                        //console.log("curreontCustomer: ", this.currentCustomer);
                        if (state == CUSTOMER_STATE.EDIT_SAVED && _this_1.customerState != CUSTOMER_STATE.EDIT_SAVED) {
                            //after saved, check if current ID in criteria
                            console.log("state == CUSTOMER_STATE.EDIT_SAVED");
                            console.log("currentCustomer: ", _this_1.currentCustomer);
                            _this_1.isDisplaySavePopup = true;
                            _this_1.customerList = _this_1.pre_customerList;
                            _this_1.filterCriteria = _this_1.pre_criteria;
                            if (_this_1.pre_criteria.hasCriteria()) {
                                _this_1.customerService.checkInFilterCriteria(_this_1.currentCustomer.clientID, _this_1.pre_criteria).subscribe(( /**
                                 * @param {?} result
                                 * @return {?}
                                 */function (result) {
                                    if (!result) {
                                        _this_1.customerList.forEach(( /**
                                         * @param {?} item
                                         * @return {?}
                                         */function (item) {
                                            if (item.clientID == _this_1.currentCustomer.clientID) {
                                                item.isHighLight = true;
                                            }
                                        }));
                                        _this_1.customerList = __spread(_this_1.customerList);
                                    }
                                    else {
                                        _this_1.customerList.forEach(( /**
                                         * @param {?} item
                                         * @return {?}
                                         */function (item) {
                                            if (item.clientID == _this_1.currentCustomer.clientID) {
                                                console.debug('change isHighLight status');
                                                item.isHighLight = false;
                                            }
                                        }));
                                    }
                                    _this_1.customerList.forEach(( /**
                                     * @param {?} item
                                     * @return {?}
                                     */function (item) {
                                        if (item.clientID == _this_1.currentCustomer.clientID) {
                                            item.firstName = _this_1.currentCustomer.firstName;
                                            item.lastName = _this_1.currentCustomer.lastName;
                                            item.tag = _this_1.currentCustomer.possibility;
                                            item.complementPercent = _this_1.customerUtils.countCompletenessByProfile(_this_1.currentCustomer);
                                        }
                                    }));
                                    _this_1.customerList = __spread(_this_1.customerList);
                                    _this_1.customerStore.setCustomerList(_this_1.customerList);
                                }));
                            }
                            else {
                                _this_1.customerList.forEach(( /**
                                 * @param {?} item
                                 * @return {?}
                                 */function (item) {
                                    if (item.clientID == _this_1.currentCustomer.clientID) {
                                        item.firstName = _this_1.currentCustomer.firstName;
                                        item.lastName = _this_1.currentCustomer.lastName;
                                        item.tag = _this_1.currentCustomer.possibility;
                                        item.complementPercent = _this_1.customerUtils.countCompletenessByProfile(_this_1.currentCustomer);
                                    }
                                }));
                                _this_1.customerList = __spread(_this_1.customerList);
                            }
                            _this_1.onGetCustomerDetailByID(_this_1.currentCustomer.clientID);
                            _this_1.refreshContactNote(false);
                            // this.changeDetector.detectChanges();
                        }
                        else if (state == CUSTOMER_STATE.EDIT && _this_1.customerState != CUSTOMER_STATE.EDIT && _this_1.customerState == CUSTOMER_STATE.FIRST) {
                            // edit/click page click last page
                            _this_1.customerList = _this_1.pre_customerList;
                            _this_1.filterCriteria = _this_1.pre_criteria;
                            //this.onGetCustomerDetailByID(this.currentCustomer.clientID);
                            if (i1.StringUtils.isEmpty(_this_1.currentCustomer.clientID)) {
                                _this_1.refreshCustomerList(false);
                            }
                            else {
                                _this_1.onGetCustomerDetailByID(_this_1.currentCustomer.clientID);
                                _this_1.refreshContactNote(false);
                            }
                        }
                        else if (_this_1.customerState == CUSTOMER_STATE.FIRST && state == CUSTOMER_STATE.DISPLAY) {
                            //firt in, fetch preset filter
                            console.log("this.customerState == CUSTOMER_STATE.FIRST && state == CUSTOMER_STATE.DISPLAY");
                            _this_1.loadPresetCriteria().then(( /**
                             * @return {?}
                             */function () {
                                _this_1.refreshCustomerList(false);
                            }));
                        }
                        else if (state == CUSTOMER_STATE.ADD_SAVED) {
                            //after add , get pre_criteria && refresh customerlist
                            console.log("state == CUSTOMER_STATE.ADD_SAVED");
                            _this_1.isDisplaySavePopup = true;
                            _this_1.filterCriteria = _this_1.pre_criteria;
                            _this_1.refreshCustomerList(false);
                        }
                        _this_1.customerState = state;
                    }));
                    this.customerStore.setState(CUSTOMER_STATE.DISPLAY);
                }
                else {
                    this.refreshCustomerList(false);
                }
                this.refreshContactNote(false);
                //check is first time open this function
                if (this.customerService.isFirstTime()) {
                    console.log('customer is first time');
                    //check customer data over 6month
                    this.customerService.getOverTimeCustomerList("").subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        _this_1.alertOverTimeList = data;
                        if (_this_1.alertOverTimeList.length != 0) {
                            _this_1.customerService.updateMessageToRead('OverTime', 'Customer').subscribe(( /**
                             * @param {?} data
                             * @return {?}
                             */function (data) {
                                _this_1.isDisplayUpdateRemind = true;
                            }));
                        }
                    }));
                    //check customer data over 6month & 7day
                    this.customerService.getAutoDeleteCustomerList("").subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        console.log("customerAutoDelete: ", data);
                        _this_1.alertAutoDeleteCustomer = data;
                        if (_this_1.alertAutoDeleteCustomer.length != 0) {
                            _this_1.customerService.updateMessageToRead('AutoDelete', 'Customer').subscribe(( /**
                             * @param {?} data
                             * @return {?}
                             */function (data) {
                                console.log("updateMessageToRead: ", data);
                                _this_1.isDisplayDeleteRemind = true;
                            }));
                        }
                    }));
                    //check customer info alert
                    /** @type {?} */
                    var timerObj = this.extensionService.getConfigValue('CustomerInfoAlertTimer');
                    console.debug('timerObj', timerObj);
                    this._checkIsInfoAlertTime(timerObj);
                }
            };
        /**
         * @param {?} isAppend
         * @return {?}
         */
        CustomersComponent.prototype.refreshCustomerList = /**
         * @param {?} isAppend
         * @return {?}
         */
            function (isAppend) {
                var _this_1 = this;
                console.debug('refreshCustomerList append', isAppend);
                console.debug(this.filterCriteria);
                console.debug(this.customerListPageInfo);
                //fetch customer-list data
                if (!isAppend)
                    this.customerListPageInfo.resetPage();
                this.customerService.getCustomerList(this.filterCriteria, this.customerListPageInfo).subscribe(( /**
                 * @param {?} data
                 * @return {?}
                 */function (data) {
                    console.log("data in criteria: ", data);
                    if (!isAppend)
                        _this_1.customerList = __spread(data);
                    else
                        _this_1.customerList = __spread(_this_1.customerList, data);
                    if ((!_this_1.filterCriteria.hasCriteria())) {
                        _this_1.filterType = 'NONE';
                    }
                    else {
                        _this_1.filterType = i1.StringUtils.isNotEmpty(_this_1.filterCriteria.keyword) ? 'SEARCH' : 'FILTER';
                    }
                    if (_this_1.customerStore) {
                        _this_1.customerStore.setCustomerList(_this_1.customerList);
                    }
                    if (_this_1.customerList.length > 0) {
                        _this_1.onGetCustomerDetailByID(_this_1.customerList[0].clientID);
                    }
                    else {
                        _this_1.customerDetail = new CustomerDetail();
                    }
                    // this.changeDetector.detectChanges();
                }));
            };
        /* integration contact-list */
        /* integration contact-list */
        /**
         * @param {?} isAppend
         * @return {?}
         */
        CustomersComponent.prototype.refreshContactNote = /* integration contact-list */
            /**
             * @param {?} isAppend
             * @return {?}
             */
            function (isAppend) {
                var _this_1 = this;
                //if append data will next page
                if (!isAppend)
                    this.contactListPageInfo.resetPage();
                this.customerService.getCustomerContactNote(this.customerDetail.clientID, this.contactListPageInfo).subscribe(( /**
                 * @param {?} data
                 * @return {?}
                 */function (data) {
                    if (isAppend)
                        _this_1.customerContactList = _this_1.customerContactList.concat(data);
                    else
                        _this_1.customerContactList = data;
                    console.debug('refreshContactNote success isRefreshContactList status');
                }));
            };
        /**
         * @param {?} clientID
         * @return {?}
         */
        CustomersComponent.prototype.onGetCustomerContactListByID = /**
         * @param {?} clientID
         * @return {?}
         */
            function (clientID) {
                var _this_1 = this;
                this.customerService.getCustomerContactNote(clientID, this.contactListPageInfo).subscribe(( /**
                 * @param {?} data
                 * @return {?}
                 */function (data) {
                    _this_1.customerContactList = data;
                }));
            };
        /**
         * @param {?} timerObj
         * @return {?}
         */
        CustomersComponent.prototype._checkIsInfoAlertTime = /**
         * @param {?} timerObj
         * @return {?}
         */
            function (timerObj) {
                var _this_1 = this;
                /** @type {?} */
                var infoAlertDateRange = timerObj.DateRange;
                /** @type {?} */
                var infoAlertTimeRange = timerObj.TimeRange;
                /** @type {?} */
                var now = new Date();
                console.debug('now', now);
                console.debug('now month', now.getMonth() + 1);
                console.debug('now date', now.getDate());
                console.debug('now hours', now.getHours());
                infoAlertDateRange.forEach(( /**
                 * @param {?} element
                 * @return {?}
                 */function (element) {
                    /** @type {?} */
                    var month = element['month'];
                    /** @type {?} */
                    var date = element['date'];
                    if ((now.getMonth() + 1 == Number.parseInt(month)) && now.getDate() == Number.parseInt(date)) {
                        if (now.getHours() >= Number.parseInt(infoAlertTimeRange['start'])
                            && now.getHours() <= Number.parseInt(infoAlertTimeRange['end'])) {
                            _this_1.isDisplayInfoAlertPopup = true;
                            return;
                        }
                    }
                }));
            };
        /**
         * @param {?} clientID
         * @return {?}
         */
        CustomersComponent.prototype.onGetCustomerDetailByID = /**
         * @param {?} clientID
         * @return {?}
         */
            function (clientID) {
                var _this_1 = this;
                this.customerService.getCustomerDetail(clientID).subscribe(( /**
                 * @param {?} data
                 * @return {?}
                 */function (data) {
                    _this_1.customerDetail = data;
                    _this_1.customerService.convertCustomerDetailDisplayMode(_this_1.customerDetail);
                }));
            };
        /**
         * @return {?}
         */
        CustomersComponent.prototype.toggleSearch = /**
         * @return {?}
         */
            function () {
                this.isOpen = !this.isOpen;
                this.classSearch = this.isOpen ? ' active' : '';
                if (!this.isOpen) {
                    // this.filterCriteria = new CustomerFilterCriteria();
                    this.filterCriteria.keyword = '';
                    if (this.customerStore) {
                        this.customerStore.setCriteria(this.filterCriteria);
                    }
                    this.refreshCustomerList(false);
                }
            };
        // search keypress
        // search keypress
        /**
         * @param {?} name
         * @return {?}
         */
        CustomersComponent.prototype.searchCustomerName =
            // search keypress
            /**
             * @param {?} name
             * @return {?}
             */
            function (name) {
                console.debug('searchCustomerName', name);
                // this.filterCriteria = new CustomerFilterCriteria();
                this.filterCriteria.keyword = name;
                if (this.customerStore) {
                    this.customerStore.setCriteria(this.filterCriteria);
                }
                this.refreshCustomerList(false);
            };
        /**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
        CustomersComponent.prototype.trackByFn = /**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
            function (index, item) {
                return item.name;
            };
        //when customer-list click get click Item
        //when customer-list click get click Item
        /**
         * @param {?} customerItem
         * @return {?}
         */
        CustomersComponent.prototype.onChangeCustomer =
            //when customer-list click get click Item
            /**
             * @param {?} customerItem
             * @return {?}
             */
            function (customerItem) {
                this.clickItem = customerItem;
                //get CustomerDetail
                this.onGetCustomerDetailByID(customerItem.clientID);
                //get CustomerNote
                this.onGetCustomerContactListByID(customerItem.clientID);
                this.isShow = true;
            };
        //when customer-list fetch next record
        //when customer-list fetch next record
        /**
         * @return {?}
         */
        CustomersComponent.prototype.onCustomerLoad =
            //when customer-list fetch next record
            /**
             * @return {?}
             */
            function () {
                this.customerListPageInfo.nextPage();
                this.refreshCustomerList(true);
            };
        //when customer-list sync data to backend
        //when customer-list sync data to backend
        /**
         * @return {?}
         */
        CustomersComponent.prototype.onCustomerRefresh =
            //when customer-list sync data to backend
            /**
             * @return {?}
             */
            function () {
                var _this_1 = this;
                //sync & reload list
                this.customerSync.sync().subscribe(( /**
                 * @param {?} resp
                 * @return {?}
                 */function (resp) {
                    _this_1.refreshCustomerList(false);
                }));
            };
        /**
         * @param {?} customerClientID
         * @return {?}
         */
        CustomersComponent.prototype.deleteCustomer = /**
         * @param {?} customerClientID
         * @return {?}
         */
            function (customerClientID) {
                this.isDisplayDelCustomerPopup = true;
            };
        /**
         * @return {?}
         */
        CustomersComponent.prototype.doDeleteCustomer = /**
         * @return {?}
         */
            function () {
                var _this_1 = this;
                this.customerList = this.customerList.filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.clientID != _this_1.customerDetail.clientID; }));
                this.onGetCustomerDetailByID(this.customerList[0].clientID);
                this.customerService.deleteCustomerProfile(this.customerDetail.clientID).subscribe(( /**
                 * @param {?} data
                 * @return {?}
                 */function (data) {
                    console.log("customerService.doDeleteCustomer()", data);
                    if (data.status) {
                        if (_this_1.customerStore) {
                            _this_1.customerStore.setCustomerList(_this_1.customerList);
                        }
                        _this_1.isShow = false;
                        _this_1.isDisplayDeletePopup = true;
                        // this.changeDetector.detectChanges();
                    }
                }));
            };
        /**
         * @param {?} customerClientID
         * @return {?}
         */
        CustomersComponent.prototype.addAppointment = /**
         * @param {?} customerClientID
         * @return {?}
         */
            function (customerClientID) {
                var _this_1 = this;
                /** @type {?} */
                var currentTime;
                currentTime = new Date(dateFns.getYear(this.viewDate), dateFns.getMonth(this.viewDate), dateFns.getDate(this.viewDate), dateFns.getHours(new Date()), dateFns.getMinutes(new Date()));
                currentTime = dateFns.addMinutes(currentTime, (5 - dateFns.getMinutes(currentTime) % 5)); // adjust minutes to next 5 minutes
                currentTime = dateFns.addHours(currentTime, 1);
                this.calendarEventDetail = new calendar.CalendarEventDetail('', '', '', '', null, 'N', currentTime, dateFns.addHours(currentTime, 1), 'Y', '8', null, '', '', null);
                /** @type {?} */
                var queryDate = new Date(dateFns.getYear(this.viewDate), dateFns.getMonth(this.viewDate), dateFns.getDate(this.viewDate), 0, 0, 0);
                this.calendarService.getCalendarEventList(queryDate, dateFns.subMinutes(dateFns.addDays(this.viewDate, 1), 1), '').subscribe(( /**
                 * @param {?} data
                 * @return {?}
                 */function (data) {
                    _this_1.viewDateCalendarEventList = data;
                    _this_1.onToggleAppointmentModal(true);
                }));
            };
        /**
         * @return {?}
         */
        CustomersComponent.prototype.onClickAppointmentSave = /**
         * @return {?}
         */
            function () {
                this.isSaveClick = true;
            };
        /**
         * @param {?} val
         * @return {?}
         */
        CustomersComponent.prototype.onToggleAppointmentModal = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                // console.log("X");
                this.isExpandEdit = val;
            };
        /**
         * @param {?} calendarEventDetail
         * @return {?}
         */
        CustomersComponent.prototype.onSaveCalendarEvent = /**
         * @param {?} calendarEventDetail
         * @return {?}
         */
            function (calendarEventDetail) {
                var _this_1 = this;
                //alert(calendarEventDetail);
                this.isSaveClick = false;
                if (calendarEventDetail) {
                    this.calendarService.addCalendarEvent(calendarEventDetail).subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        if (data.status) {
                            _this_1.isDisplaySavePopup = true;
                            calendarEventDetail.clientID = data.clientID;
                            _this_1.calendarEventDetail = calendarEventDetail;
                            _this_1.onToggleAppointmentModal(false);
                        }
                    }));
                }
            };
        /**
         * @return {?}
         */
        CustomersComponent.prototype.addCustomer = /**
         * @return {?}
         */
            function () {
                this.isDisplayConfirmAlertPopup = false;
                // this.changeDetector.detectChanges();
                /** @type {?} */
                var detail = new CustomerDetail();
                if (this.customerStore) {
                    this.customerStore.setCurrentCustomerDetail(detail);
                    this.customerStore.setState(CUSTOMER_STATE.EDIT);
                }
                if (this.customerAction) {
                    this.customerAction.afterCustomerEdit(detail);
                }
            };
        /**
         * @param {?} customerClientID
         * @return {?}
         */
        CustomersComponent.prototype.editCustomer = /**
         * @param {?} customerClientID
         * @return {?}
         */
            function (customerClientID) {
                var _this_1 = this;
                if (this.customerStore) {
                    this.customerStore.setState(CUSTOMER_STATE.EDIT);
                    this.customerService.getCustomerDetail(customerClientID).subscribe(( /**
                     * @param {?} detail
                     * @return {?}
                     */function (detail) {
                        _this_1.customerStore.setCurrentCustomerDetail(detail);
                        if (_this_1.customerAction)
                            _this_1.customerAction.afterCustomerEdit(detail);
                    }));
                }
            };
        /**
         * @param {?} customerDetail
         * @return {?}
         */
        CustomersComponent.prototype.detailChange = /**
         * @param {?} customerDetail
         * @return {?}
         */
            function (customerDetail) {
                console.log('detailChange', customerDetail);
                this.detailModel.emit(customerDetail);
            };
        /**
         * @param {?} obj
         * @return {?}
         */
        CustomersComponent.prototype.followChange = /**
         * @param {?} obj
         * @return {?}
         */
            function (obj) {
                var _this_1 = this;
                this.customerService.updateCustomerFollowStatus(obj.clientID, obj.isFollow).subscribe(( /**
                 * @param {?} data
                 * @return {?}
                 */function (data) {
                    //this.refreshCustomerList(false);
                    //console.log(JSON.stringify(this.customerList));
                    if (_this_1.filterCriteria) {
                        _this_1.customerService.checkInFilterCriteria(obj.clientID, _this_1.filterCriteria).subscribe(( /**
                         * @param {?} result
                         * @return {?}
                         */function (result) {
                            _this_1.customerList.forEach(( /**
                             * @param {?} item
                             * @return {?}
                             */function (item) {
                                if (item.clientID == obj.clientID) {
                                    //console.debug('change isHighLight status in follow');
                                    if (result) {
                                        item.isHighLight = false;
                                    }
                                    else {
                                        item.isHighLight = true;
                                    }
                                }
                            }));
                        }));
                    }
                    _this_1.customerList.filter(( /**
                     * @param {?} x
                     * @return {?}
                     */function (x) { return x.clientID == obj.clientID; })).forEach(( /**
                     * @param {?} value
                     * @return {?}
                     */function (value) {
                        value.isFollow = obj.isFollow;
                    }));
                }));
                //this.followChangeClientID = obj.clientID;
            };
        /**
         * @return {?}
         */
        CustomersComponent.prototype.addNote = /**
         * @return {?}
         */
            function () {
                console.debug('addNote');
                this.noteCurrentTime = new Date();
                this.noteMessage = '';
                this.isPopupEditNote = true;
            };
        /**
         * @param {?} note
         * @return {?}
         */
        CustomersComponent.prototype.editNote = /**
         * @param {?} note
         * @return {?}
         */
            function (note) {
                console.debug('editNote', note);
                this.noteEditClientID = note.getClientID();
                this.noteCurrentTime = new Date();
                this.noteMessage = note.noteMessage;
                this.isPopupEditNote = true;
            };
        /**
         * @param {?} note
         * @return {?}
         */
        CustomersComponent.prototype.displayNote = /**
         * @param {?} note
         * @return {?}
         */
            function (note) {
                console.debug('displayNote', note);
                this.customerContactDetail = note;
                // add click customer name
                this.customerContactDetail.name = this.customerDetail.lastName + this.customerDetail.firstName;
                this.isPopupNoteDetail = true;
            };
        /**
         * @param {?} note
         * @return {?}
         */
        CustomersComponent.prototype.deleteNote = /**
         * @param {?} note
         * @return {?}
         */
            function (note) {
                console.debug('deleteNote', note);
                this.noteClientID = note.getClientID();
                this.isPopupDeleteNote = true;
            };
        /**
         * @return {?}
         */
        CustomersComponent.prototype.doDeleteContact = /**
         * @return {?}
         */
            function () {
                var _this_1 = this;
                this.customerService.deleteCustomerContact(this.noteClientID).subscribe(( /**
                 * @param {?} data
                 * @return {?}
                 */function (data) {
                    console.log("customerService.deleteNote()", data);
                    if (data.status) {
                        _this_1.customerContactList = _this_1.customerContactList.filter(( /**
                         * @param {?} x
                         * @return {?}
                         */function (x) { return x.getClientID() != _this_1.noteClientID; }));
                        _this_1.noteClientID = '';
                        _this_1.isDisplayDeletePopup = true;
                    }
                }));
            };
        /**
         * @param {?} event
         * @return {?}
         */
        CustomersComponent.prototype.onSaveNote = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /* the same save btn for edit/add ,event also the same event, how to distinguish*/
                //alert(JSON.stringify(this.noteMessage));
                var _this_1 = this;
                if (i1.StringUtils.isEmpty(this.noteMessage)) {
                    alert('Message is required!!');
                }
                else {
                    this.customerService.addCustomerContact(this.noteEditClientID, this.customerDetail.clientID, this.noteMessage, this.noteCurrentTime).subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        console.log("customerService.saveNote()", data);
                        if (data.status) {
                            console.debug('saveNote success , close popup & refresh list', _this_1.isDisplaySavePopup, 'isRefreshContactList', _this_1.isRefreshContactList);
                            // if(StringUtils.isNotEmpty(this.noteEditClientID)) {
                            //   let array = this.customerContactList.filter(x => x.getClientID() == this.noteEditClientID).forEach((value) =>{
                            //     value.noteMessage = this.noteMessage;
                            //   });
                            //   alert(array.length);
                            // }
                            // else {
                            //   this.refreshContactNote(false);
                            // }
                            _this_1.noteEditClientID = undefined;
                            _this_1.isPopupEditNote = false;
                            _this_1.isDisplaySavePopup = true;
                            _this_1.refreshContactNote(false);
                        }
                    }));
                }
                // console.debug('saveNote', event);
                //console.debug('clickClientID', this.noteEditClientID, this.noteEditClientID, 'noteCurrentTime', this.noteCurrentTime, 'noteMessage', this.noteMessage);
                //alert(JSON.stringify(event));
                // if (StringUtils.isEmpty(this.noteMessage)) {
                //   alert('Message is required!!');
                // }
                // else {
                //   this.customerService.addCustomerContact(this.noteEditClientID, this.customerDetail.clientID, this.noteMessage, this.noteCurrentTime).subscribe(data => {
                //     console.log("customerService.saveNote()", data);
                //     if (data.status) {
                //       console.debug('saveNote success , close popup & refresh list', this.isDisplaySavePopup, 'isRefreshContactList', this.isRefreshContactList);
                //       this.noteEditClientID = undefined;
                //       this.isPopupEditNote = false;
                //       this.isDisplaySavePopup = true;
                //       this.refreshContactNote(false);
                //     }
                //   });
                // }
            };
        /**
         * @param {?} action
         * @param {?} optionArray
         * @return {?}
         */
        CustomersComponent.prototype.showConfirmPopup = /**
         * @param {?} action
         * @param {?} optionArray
         * @return {?}
         */
            function (action, optionArray) {
                this._confirmAction.action = action;
                this._confirmAction.option = optionArray;
                this.isDisplayConfirmAlertPopup = true;
                //default btn is disable
                this.isPopupConfirmDisable = true; // true;
            };
        /**
         * @return {?}
         */
        CustomersComponent.prototype.confirmPopup = /**
         * @return {?}
         */
            function () {
                if (this._confirmAction.action == 'add') {
                    this.addCustomer();
                }
                // 2019/03/25 Jeffery remove because edit not showpopup
                // else if (this._confirmAction.action == 'edit') {
                //   this.editCustomer(this._confirmAction.option[0]);
                // }
                else if (this._confirmAction.action == 'import') {
                    this.import();
                }
                this.isDisplayConfirmAlertPopup = false;
            };
        // detect confirm popup to content bottm and the btn can click
        // detect confirm popup to content bottm and the btn can click
        /**
         * @param {?} isBtm
         * @return {?}
         */
        CustomersComponent.prototype.detectScroll =
            // detect confirm popup to content bottm and the btn can click
            /**
             * @param {?} isBtm
             * @return {?}
             */
            function (isBtm) {
                console.log('in detect scroll===', isBtm);
                if (isBtm) {
                    this.isPopupConfirmDisable = false;
                }
            };
        /**
         * @return {?}
         */
        CustomersComponent.prototype.import = /**
         * @return {?}
         */
            function () {
                var _this_1 = this;
                this.deviceService.searchContactsByName("").subscribe(( /**
                 * @param {?} data
                 * @return {?}
                 */function (data) {
                    /** @type {?} */
                    var importList = data;
                    console.debug('import result ', importList);
                    _this_1.importContractMap.clear();
                    //regroup
                    importList.forEach(( /**
                     * @param {?} element
                     * @return {?}
                     */function (element) {
                        console.debug(element.lastname);
                        //if no lastname,use first name
                        if (i1.StringUtils.isEmpty(element.lastname)) {
                            element.lastname = element.firstname;
                            element.firstname = '';
                        }
                        /** @type {?} */
                        var name = element.lastname;
                        if (name != null && name.length > 0) {
                            /** @type {?} */
                            var firstWord = name.substring(0, 1);
                            firstWord = firstWord.toLowerCase();
                            console.debug('firstWord =' + firstWord);
                            /** @type {?} */
                            var group = _this_1.importContractMap.get(firstWord);
                            if (group == undefined)
                                group = new CustomerImportGroup(firstWord);
                            group.addItem(element);
                            _this_1.importContractMap.set(firstWord, group);
                        }
                    }));
                    console.debug('importContractMap', _this_1.importContractMap);
                }));
                this.isPopupImport = true;
            };
        //control import popup is display
        //control import popup is display
        /**
         * @param {?} isShow
         * @return {?}
         */
        CustomersComponent.prototype.displayImportPopup =
            //control import popup is display
            /**
             * @param {?} isShow
             * @return {?}
             */
            function (isShow) {
                this.isPopupImport = isShow;
            };
        //when keypress keyword refresh contract list
        //when keypress keyword refresh contract list
        /**
         * @param {?} keyword
         * @return {?}
         */
        CustomersComponent.prototype.refreshImport =
            //when keypress keyword refresh contract list
            /**
             * @param {?} keyword
             * @return {?}
             */
            function (keyword) {
                this.importContractMap.forEach(( /**
                 * @param {?} group
                 * @param {?} groupName
                 * @return {?}
                 */function (group, groupName) {
                    // console.log(groupName, group);
                    group.isShow = false;
                    group.getItems.forEach(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) {
                        // console.debug('item',item);
                        /** @type {?} */
                        var name = item.lastname + item.firstname;
                        name = name.toLowerCase();
                        // console.debug(name);
                        if (name.indexOf(keyword) == -1) {
                            item.isShow = false;
                        }
                        else {
                            item.isShow = true;
                            group.isShow = true;
                        }
                    }));
                }));
            };
        /**
         * @return {?}
         */
        CustomersComponent.prototype.doImport = /**
         * @return {?}
         */
            function () {
                var _this_1 = this;
                this.customerService.importContact(this.importContactList).subscribe(( /**
                 * @param {?} data
                 * @return {?}
                 */function (data) {
                    //alert("1"+JSON.parse(JSON.stringify(data)).status);
                    /** @type {?} */
                    var status = (JSON.parse(JSON.stringify(data))).status;
                    if (status) {
                        _this_1.isPopupImport = false;
                        _this_1.isDisplayImportSavePopup = true;
                        _this_1.mobileResultSize = 0;
                        //refresh customer list
                        _this_1.refreshCustomerList(false);
                    }
                }));
            };
        /* customer-import*/
        /* customer-import*/
        /**
         * @param {?} importItems
         * @return {?}
         */
        CustomersComponent.prototype.onImportCustomer = /* customer-import*/
            /**
             * @param {?} importItems
             * @return {?}
             */
            function (importItems) {
                console.debug('importItems', importItems);
                this.importContactList = importItems;
                this.mobileResultSize = importItems.length;
            };
        //call customer function
        //call customer function
        /**
         * @param {?} customerClientID
         * @return {?}
         */
        CustomersComponent.prototype.callCustomer =
            //call customer function
            /**
             * @param {?} customerClientID
             * @return {?}
             */
            function (customerClientID) {
                var _this_1 = this;
                console.debug('callCustomer = ' + customerClientID);
                this.customerService.getCustomerContactTel(customerClientID).subscribe(( /**
                 * @param {?} data
                 * @return {?}
                 */function (data) {
                    _this_1.callPhoneTelArray = data;
                    //check number array is single
                    if (_this_1.callPhoneTelArray.length != 0) {
                        //only one number just to call out
                        if (_this_1.callPhoneTelArray.length == 1) {
                            _this_1.callPhone(_this_1.callPhoneTelArray[0].tel);
                        }
                        else {
                            _this_1.isPopupCallPhone = true;
                        }
                    }
                }));
            };
        //cancel callphone popup
        //cancel callphone popup
        /**
         * @return {?}
         */
        CustomersComponent.prototype.cancelCallPhone =
            //cancel callphone popup
            /**
             * @return {?}
             */
            function () {
                this.isPopupCallPhone = !this.isPopupCallPhone;
            };
        //call number from phone
        //call number from phone
        /**
         * @param {?} telNumber
         * @return {?}
         */
        CustomersComponent.prototype.callPhone =
            //call number from phone
            /**
             * @param {?} telNumber
             * @return {?}
             */
            function (telNumber) {
                var _this_1 = this;
                console.debug('callPhone', telNumber);
                //call phone close popup
                if (this.isPopupCallPhone)
                    this.isPopupCallPhone = !this.isPopupCallPhone;
                window.open('tel:' + telNumber, '_system');
                //popup contact note
                setTimeout(( /**
                 * @param {?} fun
                 * @return {?}
                 */function (fun) {
                    _this_1.addNote();
                }), 1000);
            };
        //open filter popup
        //open filter popup
        /**
         * @return {?}
         */
        CustomersComponent.prototype.filter =
            //open filter popup
            /**
             * @return {?}
             */
            function () {
                this.isPopupFilter = true;
            };
        //clear filter item
        //clear filter item
        /**
         * @return {?}
         */
        CustomersComponent.prototype.clearFilter =
            //clear filter item
            /**
             * @return {?}
             */
            function () {
                this.clearSubject.next();
            };
        //filter customer list and close popup
        //filter customer list and close popup
        /**
         * @return {?}
         */
        CustomersComponent.prototype.doFilter =
            //filter customer list and close popup
            /**
             * @return {?}
             */
            function () {
                this.saveFilterSubject.next();
            };
        /**
         * @param {?} criteria
         * @return {?}
         */
        CustomersComponent.prototype.doneCriteria = /**
         * @param {?} criteria
         * @return {?}
         */
            function (criteria) {
                console.debug('doneCriteria', criteria);
                this.filterCriteria = criteria;
                this.isPopupFilter = false;
                if (this.customerStore) {
                    this.customerStore.setCriteria(criteria);
                }
                if (criteria.savePreset) {
                    this.customerService.saveFilterCriteria(criteria).subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        console.debug('doneCriteria saveFilterCriteria', data);
                    }));
                }
                this.refreshCustomerList(false);
            };
        /**
         * @return {?}
         */
        CustomersComponent.prototype.loadPresetCriteria = /**
         * @return {?}
         */
            function () {
                var _this_1 = this;
                //check has preset
                /** @type {?} */
                var criteria = new CustomerFilterCriteria();
                return new Promise(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    _this_1.customerService.getFilterCriteriaPreset().subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        console.debug('getfilterCriteriaPreset', data);
                        if (data != undefined) {
                            /** @type {?} */
                            var count = 0;
                            for (var column in data) {
                                /** @type {?} */
                                var values = data[column];
                                console.debug('column', column, 'arrays', values);
                                criteria.addCriteriaCols(column, values);
                                count++;
                            }
                            if (count != 0) {
                                criteria.savePreset = true;
                            }
                            _this_1.filterCriteria = criteria;
                        }
                        res();
                    }));
                }));
            };
        /**
         * @return {?}
         */
        CustomersComponent.prototype.cancelDelete = /**
         * @return {?}
         */
            function () {
                console.log('cancelDelete');
            };
        // refreash content
        // refreash content
        /**
         * @return {?}
         */
        CustomersComponent.prototype.refreshContent =
            // refreash content
            /**
             * @return {?}
             */
            function () {
                var _this_1 = this;
                console.log('content refresh:', this.customerSync);
                //set timeout for refresh animation
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this_1.customerSync.sync().subscribe(( /**
                     * @param {?} resp
                     * @return {?}
                     */function (resp) {
                        if (resp) {
                            _this_1.isLoadingFinishContent = true;
                            // this.triggerCustomerListQuery();
                        }
                    }));
                }), 800);
            };
        // loading content
        // loading content
        /**
         * @param {?} event
         * @return {?}
         */
        CustomersComponent.prototype.loadContent =
            // loading content
            /**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                var _this_1 = this;
                console.log('content loading');
                if (!this.loadContactList)
                    this.loadContactList = true;
                else {
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        _this_1.isLoadingFinishContent = true;
                    }), 0);
                }
            };
        /**
         * @param {?} val
         * @return {?}
         */
        CustomersComponent.prototype.contactRefreshDone = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                var _this_1 = this;
                console.debug('refresh done');
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this_1.isLoadingFinishContent = !val;
                    _this_1.loadContactList = val;
                }), 0);
            };
        //isShowChange
        //isShowChange
        /**
         * @param {?} val
         * @return {?}
         */
        CustomersComponent.prototype.isShowChange =
            //isShowChange
            /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                if (this.isShow !== val) {
                    this.isShow = val;
                    // this.changeDetector.detectChanges();
                }
            };
        /**
         * @param {?} time
         * @return {?}
         */
        CustomersComponent.prototype.toNoteTime = /**
         * @param {?} time
         * @return {?}
         */
            function (time) {
                return this.dateUtils.toDateString(time, 'yyyy-MM-dd HH:mm');
            };
        CustomersComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-customers',
                        template: "<app-ui-main-side-menu [title]=\"[language.customer | translate]\" [isShow]=\"isShow\" (isShowChange)=\"isShowChange($event)\">\n\n    <div class=\"side-menu-content\" side-menu>\n      <!-- Title Block -->\n      <div class=\"title-main-block\">\n        <app-ui-title-style1>\n          <ng-container textType=\"titleText\">{{language.customerList |translate }}</ng-container>\n        </app-ui-title-style1>\n      </div>\n      <!-- Action Block-->\n      <div class=\"filter-all-block\">\n        <ul class=\"filter-block\" [ngClass]=\"classSearch ? ' ani-bar-move': ''\">\n            <li class=\"filter-item\">\n                <button Action action=\"customerShowAddConfirm\" (actionClick)=\"showConfirmPopup('add',[])\">\n                  <img src=\"assets/img/icon-customer-list-add.svg\" alt=\"\">\n                </button>\n            </li>\n            <li class=\"filter-item\">\n              <!-- import -->\n              <button  Action action=\"customerShowImportConfirm\" (actionClick)=\"showConfirmPopup('import',[])\">\n                  <img src=\"assets/img/icon-customer-list-import.svg\" alt=\"\">\n              </button>\n              <!-- end of import -->\n            </li>\n            <!-- filter item -->\n            <li class=\"filter-item\">\n                <button Action action=\"customerFilter\" (actionClick)=\"filter()\">\n                  <ng-container *ngIf=\"filterCriteria.getFilterMap().size != 0\">\n                      <span class=\"num-block\">\n                        <span class=\"num\">{{filterCriteria.getFilterMap().size}}</span>\n                      </span>\n                  </ng-container>\n\n                  <img src=\"assets/img/icon-customer-list-filter.svg\" alt=\"\">\n                </button>\n            </li>\n            <!-- end of filter item -->\n            <li class=\"filter-item search-animate-block\" [ngClass]=\"classSearch\">\n              <button class=\"btn-search-open\" Action action=\"customerSearch\" (actionClick)=\"toggleSearch()\" >\n                <img src=\"assets/img/icon-customer-list-search.svg\" alt=\"\">\n              </button>\n              <div class=\"search-input-block input-block\" [ngClass]=\"this.isOpen ? 'open' : 'closed'\">\n                  <app-ui-form-input [nxValue]=\"filterCriteria.keyword\" (nxValueChange)=\"searchCustomerName($event)\" [placeholder]=\"[language.searchPlaceholder | translate]\"></app-ui-form-input> \n                  <button class=\"btn-search-cancel\" Action action=\"customerSearch\" (actionClick)=\"toggleSearch()\">\n                      <nx-icon name='close-circle' size='s'></nx-icon>\n                  </button>\n              </div>\n            </li>\n        </ul>\n      </div>\n\n      <!-- Customer List Component -->\n      <app-customer-list (customerClick)=\"onChangeCustomer($event)\" (customerLoad)=\"onCustomerLoad()\" (customerRefresh)=\"onCustomerRefresh()\" [customerList]=\"customerList\" [filterType]=\"filterType\"></app-customer-list>\n      <!-- end of Customer List Component -->\n\n    </div>\n\n    <div class=\"main-content stop-scroll-block\" main>\n      \n        <app-ui-infinite-scroll (loadingCallback)=\"loadContent($event)\" (refreshCallback)=\"refreshContent()\" [(loadingFinish)]=\"isLoadingFinishContent\" [lazyLoading]=\"isLazyLoading\">\n\n\n          <!-- Customer Detail -->\n          <app-customer-detail [detailPreTemplate]=\"detailPreTemplate\" [detailPostTemplate]=\"detailPostTemplate\" [customerDetail]=\"customerDetail\" (followChange)=\"followChange($event)\" (onDeleteDetail)=\"deleteCustomer($event)\" (onAddAppointment)=\"addAppointment($event)\" (onCallPhone)=\"callCustomer($event)\" (onEditDetail)=\"editCustomer($event)\" ></app-customer-detail>\n          <!-- end of Customer Detail -->\n\n\n          <!-- Customer Contact List -->\n          <app-customer-contact-list [contactList]=\"customerContactList\" (onAddNote)=\"addNote()\" (onDisplayNote)=\"displayNote($event)\" (onEditNote)=\"editNote($event)\" (onDeleteNote)=\"deleteNote($event)\" ></app-customer-contact-list>\n          <!-- end of Customer Contact List -->\n\n        </app-ui-infinite-scroll>\n    </div>\n\n\n  <!-- Popup -->\n  <div global-main>\n      <!-- side import -->\n      <app-ui-modal-style-text1 [(isPopupOpen)]=\"isPopupImport\" class=\"wd-md\" [isContnetFull]=\"true\">\n          \n        <ng-container textType=\"modal-title-detail\">{{language.importPhone |translate }}</ng-container>   \n          <ng-container textType=\"modal-content-detail\">\n            <!-- still need space -->\n            <div class=\"space-normal top-search-block\">\n              <!-- search block -->\n              <app-ui-form-search [name]=\"'search'\" [placeholder]=\"[language.searchPlaceholder | translate]\" (nxValueChange)=\"refreshImport($event)\"></app-ui-form-search>\n              <!-- end of search block -->\n            </div>\n            <!-- end of still need space -->\n           <app-customer-import [importContractMap]=\"importContractMap\" (importCustomer)=\"onImportCustomer($event)\"></app-customer-import>\n          </ng-container>\n          <ng-container textType=\"modal-btm-detail\">\n              <div class=\"btm-set-block\">\n                  <span class=\"ps-text\">\n                    {{mobileResultSize}} {{language.people|translate}}\n                  </span>\n                  <!-- btn -->\n                  <app-ui-btn-layout>\n                    <app-ui-btn [btnHeight]=\"'sm'\" (ClickBtn)=\"doImport()\">\n                      <ng-container TextType=\"cust\">{{language.import|translate}}</ng-container>\n                    </app-ui-btn>\n                  </app-ui-btn-layout>\n                  <!-- end of btn -->\n              </div>\n          </ng-container>\n      </app-ui-modal-style-text1>\n      <!-- end of side import-->\n\n      <!-- side Filter-->\n      <app-ui-modal-style-text1 class=\"wd-lg\" [(isPopupOpen)]=\"isPopupFilter\">\n          <ng-container textType=\"modal-title-detail\">{{language.customerFilter |translate }}</ng-container>\n          <ng-container textType=\"modal-content-detail\">\n              <app-customer-filter [criteria]=\"filterCriteria\" (doneCriteria)=\"doneCriteria($event)\" [clear]=\"clearSubject\" [save]=\"saveFilterSubject\"></app-customer-filter>\n          </ng-container>\n\n          <ng-container textType=\"modal-btm-detail\">\n            <app-ui-btn-layout>\n              <app-ui-btn [name]=\"'btn-clear'\" (ClickBtn)=\"clearFilter()\" [btnHeight]=\"'sm'\" [btnStyle]=\"'border'\">\n                <ng-container TextType=\"cust\">{{language.clear |translate }}</ng-container>\n              </app-ui-btn>\n              <app-ui-btn [name]=\"'btn-filter'\" (ClickBtn)=\"doFilter()\" [btnHeight]=\"'sm'\">\n                <ng-container TextType=\"cust\">{{language.filter |translate }}</ng-container>\n              </app-ui-btn>\n            </app-ui-btn-layout>\n          </ng-container>\n      </app-ui-modal-style-text1>\n      <!-- end of side Filter -->\n\n      <!-- appointment popup -->\n      <app-ui-modal-style-text1 [isBackdropClose]=\"false\" [(isPopupOpen)]=\"isExpandEdit\" class=\"wd-lg calendar-edit-content\" (close)=\"onToggleAppointmentModal(false)\">\n        <ng-container textType=\"modal-title-detail\">{{language.appointment |translate }}</ng-container>\n        <ng-container textType=\"modal-content-detail\">\n          <snd-calendar-edit [calendarEventDetail]=\"calendarEventDetail\"\n                             [optionMap]=\"optionMap\"\n                             [translateMap]=\"translateMap\"\n                             [todayCalendarEvent]=\"viewDateCalendarEventList\"\n                             [isSaveClick]=\"isSaveClick\"\n                             [viewDate]=\"viewDate\"\n                             (saveEvent)=\"onSaveCalendarEvent($event)\"></snd-calendar-edit>\n        </ng-container>\n        <ng-container textType=\"modal-btm-detail\">\n          <app-ui-btn-layout>\n            <app-ui-btn [btnWd]=\"'md'\" [btnHeight]=\"'sm'\" (ClickBtn)=\"onClickAppointmentSave()\">\n              <ng-container TextType=\"cust\">{{language.save |translate }}</ng-container>\n            </app-ui-btn>\n           </app-ui-btn-layout>\n        </ng-container>\n      </app-ui-modal-style-text1>\n      <!-- end of appointment popup -->\n\n      <!-- contact popup -->\n        <app-ui-modal-style-img-base  class=\"wd-sm\"  [(isPopupOpen)]=\"this.isPopupCallPhone\">\n            <ng-container textType=\"modal-img-detail\">\n              <nx-icon name='phone-o' size='auto' [fill]=\"false\" [outline]='false'></nx-icon>\n            </ng-container>\n            <ng-container textType=\"modal-title-detail\">{{language.selectNumber |translate }}</ng-container>\n            <ng-container textType=\"modal-content-detail\">\n              <ng-container *ngFor=\"let tel of callPhoneTelArray\">\n                  <!-- tel 1  -->\n                 <app-ui-link-bg [textTitle]=\"tel.telType | translate\" [text]=\"tel.tel\" (linkBtnClick)=\"callPhone(tel.tel)\"></app-ui-link-bg>\n                  <!-- end of tel 1 -->\n              </ng-container>\n            </ng-container>\n            <ng-container textType=\"modal-btm-detail\">\n                <app-ui-btn-layout>\n                  <app-ui-btn  [btnColor]=\"'grey'\" [btnStyle]=\"'text'\" [btnWd]=\"'md'\" (ClickBtn)=\"cancelCallPhone()\">\n                    <ng-container TextType=\"cust\">{{language.cancel |translate }}</ng-container>\n                  </app-ui-btn>\n                </app-ui-btn-layout>\n            </ng-container>\n        </app-ui-modal-style-img-base>\n      <!-- end of contact popup -->\n\n      <!-- note detail -->\n      <ng-container *ngIf=\"customerContactDetail\">\n          <app-ui-modal-style-text1 class=\"wd-md\" [isHasBtmBlock]=\"false\" [(isPopupOpen)]=\"isPopupNoteDetail\">\n              <ng-container textType=\"modal-title-detail\">{{language.contactNote |translate }}</ng-container>\n              <ng-container textType=\"modal-content-detail\">\n                <div class=\"text-detail-block\">\n                  <div class=\"img-text-block-horizon\">\n                    <div class=\"img-block\">\n                      <img src=\"assets/img/img-cust-profile.svg\">\n                    </div>\n                    <div class=\"text-block\">\n                      <p class=\"desc\">{{customerContactDetail.name}}</p>\n                      <p class=\"desc-normal desc-line-lg\">{{ toNoteTime(customerContactDetail.date)}}</p>\n                      <p class=\"desc-normal desc-line-lg\">{{customerContactDetail.noteMessage}}</p>\n                    </div>\n                  </div>\n\n                </div>\n\n              </ng-container>\n          </app-ui-modal-style-text1>\n      </ng-container>\n\n      <!-- end of note detail -->\n\n      <!-- add/edit note -->\n      <app-ui-modal-style-text1 class=\"wd-md\" [isBackdropClose]=\"false\"  [(isPopupOpen)]=\"this.isPopupEditNote\">\n          <ng-container textType=\"modal-title-detail\">{{language.contactNote |translate }}</ng-container>\n          <ng-container textType=\"modal-content-detail\">\n            <p class=\"desc\">{{this.noteCurrentTime | date: 'dd/MM/yyyy hh:mm'}}</p>\n            <div class=\"textarea-block\" > \n              <textarea class=\"detail-text\" placeholder= \"{{ language.notePlaceholder | translate}}\" [(ngModel)]=\"this.noteMessage\"></textarea>\n              \n            </div>\n          </ng-container>\n          <ng-container textType=\"modal-btm-detail\">\n            <!-- btn -->\n            <app-ui-btn-layout>\n              <app-ui-btn [name]=\"'btn-note-save'\" (ClickBtn)=\"onSaveNote($event)\" [btnWd]=\"'md'\" [btnHeight]=\"'sm'\">\n                <ng-container TextType=\"cust\">{{language.save |translate }}</ng-container>\n              </app-ui-btn>\n            </app-ui-btn-layout>\n            <!-- end of btn -->\n          </ng-container>\n        </app-ui-modal-style-text1>\n      <!-- end of add note -->\n\n      <!--  save-->\n      <app-ui-popup-style-feedback [(isPopupOpen)]=\"isDisplaySavePopup\">\n          <ng-container textType=\"modal-img-detail\">\n            <nx-icon name='check' size='auto'></nx-icon>\n          </ng-container>\n          <ng-container textType=\"modal-content-detail\">{{language.saved |translate }}</ng-container>\n        </app-ui-popup-style-feedback>\n      <!-- end of save -->\n\n      <!-- import save-->\n      <app-ui-popup-style-feedback [(isPopupOpen)]=\"isDisplayImportSavePopup\">\n          <ng-container textType=\"modal-img-detail\">\n            <nx-icon name='check' size='auto'></nx-icon>\n          </ng-container>\n          <ng-container textType=\"modal-content-detail\">{{language.completed| translate }}</ng-container>\n        </app-ui-popup-style-feedback>\n      <!-- end of save -->\n\n      <!-- Delete Success -->\n      <app-ui-popup-style-feedback [(isPopupOpen)]=\"isDisplayDeletePopup\">\n          <ng-container textType=\"modal-img-detail\">\n            <nx-icon name='check' size='auto'></nx-icon>\n          </ng-container>\n          <ng-container textType=\"modal-content-detail\">{{language.delete | translate}}</ng-container>\n        </app-ui-popup-style-feedback>\n      <!-- end of Delete Success -->\n\n\n      <!-- delete customer data -->\n      <app-ui-alert-confirm [(isPopupOpen)]=\"isDisplayDelCustomerPopup\" (onCancel)=\"cancelDelete()\" (onConfirm)=\"doDeleteCustomer()\" [title]=\"[language.delete | translate]\" [message]=\"[language.deleteMessage | translate]\" [cancelBtnText]=\"[language.no | translate]\" [confirmBtnText]=\"[language.yes | translate]\">\n      </app-ui-alert-confirm>\n      <!-- end of delete customer data -->  \n\n      <!-- delete customer contact data -->\n      <app-ui-alert-confirm [(isPopupOpen)]=\"isPopupDeleteNote\" (onCancel)=\"cancelDelete()\" (onConfirm)=\"doDeleteContact()\" [title]=\"[language.delete | translate]\" [message]=\"[language.deleteMessage | translate]\" [cancelBtnText]=\"[language.no | translate]\" [confirmBtnText]=\"[language.yes | translate]\">\n      </app-ui-alert-confirm>\n      <!-- end of delete customer contact data -->\n\n      <!-- customer info alert -->\n      <app-ui-modal-style-img-base  [(isPopupOpen)]=\"isDisplayInfoAlertPopup\" >\n        <ng-container textType=\"modal-img-detail\">\n            <img src=\"assets/img/icon-cust-remind.svg\">\n        </ng-container>\n        <ng-container textType=\"modal-title-detail\">{{language.protectionTitle |translate }}</ng-container>\n        <ng-container textType=\"modal-content-detail\" >\n            <app-ui-text-type [colorCode]=\"'#f5f5f5'\">\n              <p class=\"desc-sm\">\n                It will show the content Allianz provide. The dummy words are below:\n                After ten minutes with Ed Tettemer in the offices of the agency he founded with partner, Steve Red, you begin to understand the agency\u2019s passion for excellence. After an hour with Ed, you begin to understand the intensity of his personal passion. You begin to understand it but I have a feeling that, even after days and days of exposure to him, you probably wouldn\u2019t get the whole picture.\n                <br />\n                \u201CPassion,\u201D the word, may seem descriptive of a complicated set of feelings and opinions. Oddly, in thinking about Ed Tettemer\u2019s passion for his agency and its clients, it seems rather simple. It\u2019s just that he wants everything to be excellent: excellent clients, excellent co-workers, excellent marketing solutions, excellent creative executions, excellent everything.\n                <br />\n                \u201CWhere\u2019d you go to college, Ed?\u201D (A question most interviewers ask without expecting surprises in the response.) \u201CNever went to college. Dropped out of high school and never looked back. Got my college degree at the Elkman agency and my graduate degree at Earle Palmer Brown.\u201D\n                <br />\n                \u201CWhere\u2019d you go to college, Ed?\u201D (A question most interviewers ask without expecting surprises in the response.) \u201CNever went to\n                college. Dropped out of high school and never looked back. Got\n              </p>\n            </app-ui-text-type>\n        </ng-container>\n        <!-- end modal-content-detail -->\n        <ng-container textType=\"modal-btm-detail\">\n          <!-- btn -->\n          <app-ui-btn-layout>\n            <app-ui-btn class=\"btn-single-block\"  [btnColor]=\"'main2'\" [btnStyle]=\"'full'\" [btnHeight]=\"'sm'\" [btnWd]=\"'md'\" (ClickBtn)=\"isDisplayInfoAlertPopup = !isDisplayInfoAlertPopup\">\n              <ng-container TextType=\"cust\">{{language.confirm |translate }}</ng-container>\n            </app-ui-btn>\n          </app-ui-btn-layout>\n          <!-- end of btn -->\n        </ng-container>\n        <!-- end modal-btm-detail -->\n      </app-ui-modal-style-img-base>\n    <!-- end of customer info alert -->\n\n      <!-- customer confirm alert -->\n      <app-ui-modal-style-img-base class=\"popup-agree\" [(isPopupOpen)]=\"isDisplayConfirmAlertPopup\" (onScrollContentBtm)=\"detectScroll($event)\">\n          <ng-container textType=\"modal-img-detail\">\n              <img src=\"assets/img/icon-cust-remind.svg\">\n          </ng-container>\n          <ng-container textType=\"modal-title-detail\">{{language.protectionTitle |translate }}</ng-container>\n          <ng-container textType=\"modal-content-detail\">\n              <app-ui-text-type #confirmAlert [colorCode]=\"'#f5f5f5'\">\n                <p class=\"desc-sm\">\n                  After ten minutes with Ed Tettemer in the offices of the agency he founded with partner, Steve Red, you begin to understand the agency\u2019s passion for excellence. After an hour with Ed, you begin to understand the intensity of his personal passion. You begin to understand it but I have a feeling that, even after days and days of exposure to him, you probably wouldn\u2019t get the whole picture.\n                  <br />\n                  After ten minutes with Ed Tettemer in the offices of the agency he founded with partner, Steve Red, you begin to understand the agency\u2019s passion for excellence. After an hour with Ed, you begin to understand the intensity of his personal passion. You begin to understand it but I have a feeling that, even after days and days of exposure to him, you probably wouldn\u2019t get the whole picture.\n                  <br />\n                  After ten minutes with Ed Tettemer in the offices of the agency he founded with partner, Steve Red, you begin to understand the agency\u2019s passion for excellence. After an hour with Ed, you begin to understand the intensity of his personal passion. You begin to understand it but I have a feeling that, even after days and days of exposure to him, you probably wouldn\u2019t get the whole picture.\n                  <br />\n                  After ten minutes with Ed Tettemer in the offices of the agency he founded with partner, Steve Red, you begin to understand the agency\u2019s passion for excellence. After an hour with Ed, you begin to understand the intensity of his personal passion. You begin to understand it but I have a feeling that, even after days and days of exposure to him, you probably wouldn\u2019t get the whole picture.\n                  <br />\n                  \u201CPassion,\u201D the word, may seem descriptive of a complicated set of feelings and opinions. Oddly, in thinking about Ed Tettemer\u2019s passion for his agency and its clients, it seems rather simple. It\u2019s just that he wants everything to be excellent: excellent clients, excellent co-workers, excellent marketing solutions, excellent creative executions, excellent everything.\n                  <br />\n                  \u201CWhere\u2019d you go to college, Ed?\u201D (A question most interviewers ask without expecting surprises in the response.) \u201CNever went to college. Dropped out of high school and never looked back. Got my college degree at the Elkman agency and my graduate degree at Earle Palmer Brown.\u201D\n                  <br />\n                  \u201CWhere\u2019d you go to college, Ed?\u201D (A question most interviewers ask without expecting surprises in the response.) \u201CNever went to\n                  college. Dropped out of high school and never looked back. Got\n                  <br />\n                  \u201CWhere\u2019d you go to college, Ed?\u201D (A question most interviewers ask without expecting surprises in the response.) \u201CNever went to\n                  college. Dropped out of high school and never looked back. Got\n                  <br />\n                  \u201CWhere\u2019d you go to college, Ed?\u201D (A question most interviewers ask without expecting surprises in the response.) \u201CNever went to\n                  college. Dropped out of high school and never looked back. Got\n                </p>\n              </app-ui-text-type>\n          </ng-container>\n          <!-- end modal-content-detail -->\n          <ng-container textType=\"modal-btm-detail\">\n            <!-- btn -->\n            <app-ui-btn-layout>\n              <app-ui-btn [isDisable]=\"isPopupConfirmDisable\" [btnColor]=\"'main2'\" [btnStyle]=\"'full'\" [btnHeight]=\"'sm'\" [btnWd]=\"'md'\" (ClickBtn)=\"confirmPopup()\">\n                <ng-container TextType=\"cust\">{{language.confirm |translate }}</ng-container>\n              </app-ui-btn>\n            </app-ui-btn-layout>\n            <!-- end of btn -->\n          </ng-container>\n          <!-- end modal-btm-detail -->\n      </app-ui-modal-style-img-base>\n      <!-- end of customer confirm alert -->\n\n      <!-- remind update -->\n      <app-ui-modal-style-img-base [isContnetFull]=\"true\"  [isPopupOpen]=\"isDisplayUpdateRemind\">\n        <ng-container textType=\"modal-img-detail\">\n          <img src=\"assets/img/icon-cust-remind.svg\">\n        </ng-container>\n        <ng-container textType=\"modal-title-detail\">{{language.deleteProtectionTitle |translate }}</ng-container>\n        <ng-container textType=\"modal-content-detail\">\n          <!-- list -->\n          <app-ui-list-data2>\n            <!-- data -->\n            <ng-container textType=\"data\">\n              <app-ui-form-checkbox3 [isDisable]=\"true\" [nxValue]=\"false\" *ngFor=\"let alertItem of alertOverTimeList;\">\n                <ng-container checkboxText=\"style3\">{{alertItem.name}}</ng-container>\n              </app-ui-form-checkbox3>\n            </ng-container>\n            <!-- end of data -->\n          </app-ui-list-data2>\n          <!-- end of list -->\n        </ng-container>\n        <!-- end modal-content-detail -->\n        <ng-container textType=\"modal-btm-detail\">\n          <div class=\"btm-set-block\">\n            <span class=\"ps-text\">\n              {{alertOverTimeList.length}} {{language.people |translate }}\n            </span>\n            <!-- btn -->\n            <app-ui-btn-layout>\n              <app-ui-btn [btnColor]=\"'main2'\" [btnStyle]=\"'full'\" [btnHeight]=\"'sm'\" [btnWd]=\"'md'\"(ClickBtn)=\"isDisplayUpdateRemind = !isDisplayUpdateRemind\">\n                <ng-container TextType=\"cust\">{{language.confirm |translate }}</ng-container>\n              </app-ui-btn>\n            </app-ui-btn-layout>\n            <!-- end of btn -->\n          </div>\n\n        </ng-container>\n        <!-- end modal-btm-detail -->\n      </app-ui-modal-style-img-base>\n      <!-- end of remind update -->\n\n      <!-- remind delete -->\n      <app-ui-modal-style-img-base [isContnetFull]=\"true\"  [isPopupOpen]=\"isDisplayDeleteRemind\">\n        <ng-container textType=\"modal-img-detail\">\n          <img src=\"assets/img/icon-cust-remind.svg\">\n        </ng-container>\n        <ng-container textType=\"modal-title-detail\">{{language.deleteProtectionTitle |translate }}</ng-container>\n        <ng-container textType=\"modal-content-detail\">\n          <!-- list -->\n          <app-ui-list-data2>\n            <!-- data -->\n            <ng-container textType=\"data\">\n                <app-ui-form-checkbox3 [isDisable]=\"true\" [nxValue]=\"false\" *ngFor=\"let alertItem of alertAutoDeleteCustomer;\">\n                    <ng-container checkboxText=\"style3\">{{alertItem.name}}</ng-container>\n                  </app-ui-form-checkbox3>\n\n            </ng-container>\n            <!-- end of data -->\n          </app-ui-list-data2>\n          <!-- end of list -->\n        </ng-container>\n        <!-- end modal-content-detail -->\n        <ng-container textType=\"modal-btm-detail\">\n          <div class=\"btm-set-block\">\n            <span class=\"ps-text\">\n              {{alertAutoDeleteCustomer.length}}  {{language.people |translate }}\n            </span>\n            <!-- btn -->\n            <app-ui-btn-layout>\n              <app-ui-btn [btnColor]=\"'main2'\" [btnStyle]=\"'full'\" [btnHeight]=\"'sm'\" [btnWd]=\"'md'\" (ClickBtn)=\"isDisplayDeleteRemind = !isDisplayDeleteRemind\">\n                <ng-container TextType=\"cust\">{{language.confirm |translate }}</ng-container>\n              </app-ui-btn>\n            </app-ui-btn-layout>\n            <!-- end of btn -->\n          </div>\n\n        </ng-container>\n        <!-- end modal-btm-detail -->\n      </app-ui-modal-style-img-base>\n    <!-- end of remind delete -->\n  </div>\n    <!-- end of Popup -->\n\n</app-ui-main-side-menu>\n",
                        animations: [
                            animations.trigger('searchBlockAni', [
                                animations.state('*', animations.style({
                                    width: '0',
                                    opacity: 0
                                })),
                                animations.state('open', animations.style({
                                    width: '100%',
                                    opacity: 1
                                })),
                                animations.state('closed', animations.style({
                                    width: '0',
                                    opacity: 0
                                })),
                                animations.transition('open => closed', animations.animate('300ms ease-in')),
                                animations.transition('closed => open', animations.animate('300ms ease-in'))
                            ]),
                        ],
                        styles: [".filter-block{display:flex;padding:0 20px;list-style-type:none;align-content:center;flex-wrap:wrap}.filter-block ::ng-deep .nx-formfield__wrapper{padding-bottom:0}.filter-block .filter-item{display:flex;align-items:center;max-width:40px;width:100%;margin-right:20px}.filter-block .filter-item:last-of-type{margin-right:0}.filter-block .filter-item>a,.filter-block .filter-item>button{display:inline-block;position:relative;width:100%;max-width:40px}.filter-block .filter-item a,.filter-block .filter-item button{background-color:transparent;border:none;padding:0}.filter-block .filter-item a:focus,.filter-block .filter-item button:focus{outline:0}.filter-block .filter-item a img,.filter-block .filter-item button img{width:40px;height:40px}.filter-block .filter-item .num-block{display:flex;width:20px;height:20px;background-color:#007ab3;border-radius:50%;justify-content:center;align-items:center;position:absolute;right:-5px;top:-5px}.filter-block .filter-item .num-block .num{color:#fff;font-weight:700;font-size:.75rem}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.filter-block .search-animate-block{align-items:center;background-color:#fff}.filter-block .search-animate-block .search-input-block{display:inline-block;width:0;position:relative}.filter-block .search-animate-block ::ng-deep .nx-formfield__input{border-top:none;width:100%}.filter-block .search-animate-block ::ng-deep .btn-search-cancel{position:absolute;right:0;display:inline-block;width:44px;height:44px;top:-7px;text-align:right;opacity:0}.filter-block .search-animate-block ::ng-deep .btn-search-cancel nx-icon{font-size:16px;color:#c2c2c2;margin-right:10px}.filter-block .search-animate-block.active{max-width:calc(100vw - 30px);margin-left:0!important}.filter-block .search-animate-block.active .search-input-block{display:inline-block;width:100%}.filter-block .search-animate-block.active ::ng-deep .btn-search-cancel{display:inline-block;opacity:1}@media (min-width:769px){.filter-block .search-animate-block ::ng-deep .btn-search-cancel nx-icon{margin-right:5px}.filter-block .search-animate-block.active{max-width:210px}}.filter-all-block{position:relative;overflow:hidden;display:inline-block;width:100%;min-height:56px;margin-bottom:10px}.filter-block{transition:.2s;position:absolute;height:100%;left:0;width:1400px}.filter-block>.filter-item{transition:.2s}.filter-block.ani-bar-move{left:-187px}.filter-block.ani-bar-move .filter-item{opacity:0}.filter-block.ani-bar-move .filter-item.search-animate-block{opacity:1}@media (min-width:1024px){.filter-block .filter-item{margin-right:5px}.filter-block .filter-item:last-of-type{margin-right:0}.filter-block .filter-item button{max-width:30px}.filter-block .filter-item button img{width:30px;height:30px}.filter-block{width:500px}.filter-block.ani-bar-move{left:-137px}}@media screen and (min-width:1025px){.filter-block .filter-item{max-width:4vw}.filter-block .filter-item button{max-width:3vw}.filter-block .filter-item button img{width:3vw;height:3vw}.filter-block{width:50vw}.filter-block+.filter-block{margin-right:.5vw}.filter-block:last-of-type{margin-right:0}.filter-block.ani-bar-move{left:-13.7vw}.filter-block .search-animate-block.active{max-width:21vw}}::ng-deep .modal-container-block .textarea-block textarea{min-height:180px;margin-bottom:0}::ng-deep .top-search-block{padding-top:21px;padding-left:20px;padding-right:20px}::ng-deep app-customer-list,::ng-deep app-ui-infinite-scroll{display:inline-block;width:100%;height:100%}::ng-deep .ui-list-data{display:inline-block;width:100%}.side-menu-content{color:#414141;max-height:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;overflow:hidden;width:100%;max-width:100%}.side-menu-content .title-main-block{padding-left:15px;padding-right:20px}.main-content{background-color:#f5f5f5;box-sizing:border-box;padding-left:40px;padding-top:0;overflow-y:auto;height:100vh;position:static}.main-content ::ng-deep .scroll-content{background-color:#f5f5f5;overflow-x:hidden}@media (max-width:768px){.main-content{position:relative;padding-top:44px}}@media (max-width:767px){.main-content{padding-left:5px;padding-right:5px}@supports (top:constant(safe-area-inset-top)){.main-content ::ng-deep .infiniti-scroll{max-height:calc(100vh - 44px - constant(safe-area-inset-top) - constant(safe-area-inset-bottom))}}@supports (top:env(safe-area-inset-top)){.main-content ::ng-deep .infiniti-scroll{max-height:calc(100vh - 44px - env(safe-area-inset-top) - env(safe-area-inset-bottom))}}}"]
                    }] }
        ];
        CustomersComponent.ctorParameters = function () {
            return [
                { type: CustomerService },
                { type: calendar.CalendarService },
                { type: i1.TranslateService },
                { type: i0.ChangeDetectorRef },
                { type: i1.DeviceService },
                { type: i1.DateUtils },
                { type: i1.ProfileCodeService },
                { type: i1.ExtensionService },
                { type: CustomerUtils },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [storeCustomerToken,] }] },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [syncCustomerToken,] }] },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [customerActionToken,] }] }
            ];
        };
        CustomersComponent.propDecorators = {
            calendarEditComponent: [{ type: i0.ViewChild, args: [calendar.CalendarEditComponent,] }],
            detailPreTemplate: [{ type: i0.Input }],
            detailPostTemplate: [{ type: i0.Input }],
            detailModel: [{ type: i0.Output }]
        };
        return CustomersComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerDetailResult = /** @class */ (function () {
        function CustomerDetailResult() {
            //edit profile result
            this._detailSaveSuccess = false;
        }
        Object.defineProperty(CustomerDetailResult.prototype, "detailSaveSuccess", {
            get: /**
             * @return {?}
             */ function () { return this._detailSaveSuccess; },
            set: /**
             * @param {?} isSuccess
             * @return {?}
             */ function (isSuccess) { this._detailSaveSuccess = isSuccess; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerDetailResult.prototype, "editDetail", {
            get: /**
             * @return {?}
             */ function () { return this._editDetail; },
            set: /**
             * @param {?} detail
             * @return {?}
             */ function (detail) { this._editDetail = detail; },
            enumerable: true,
            configurable: true
        });
        return CustomerDetailResult;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerEditComponent = /** @class */ (function () {
        function CustomerEditComponent(customerService, profileCodeService, customerUtils, changeDetector, customCustomerAction, customerStore) {
            this.customerService = customerService;
            this.profileCodeService = profileCodeService;
            this.customerUtils = customerUtils;
            this.changeDetector = changeDetector;
            this.customCustomerAction = customCustomerAction;
            this.customerStore = customerStore;
            this.sendContentHeight = new i0.EventEmitter();
            this.editModel = new i0.EventEmitter();
            this.validationResult = new i1.ValidationResult();
            this.customerDetail = new CustomerDetail();
            this.pageTitle = 'Edit Profile'; //default
            //select options
            this.optionTel = new Array();
            this.optionAddress = new Array();
            this.optionEmail = new Array();
            this.optionAge = new Array();
            this.optionGender = new Array();
            this.optionIncome = new Array();
            this.optionSource = new Array();
            this.optionMarriage = new Array();
            this.optionChildren = new Array();
            this.optionFamiliarity = new Array();
            this.optionRecentStatus = new Array();
            this.optionManpa = new Array();
            this.optionContactFrequancyPerYear = new Array();
            this.language = new i1.Language();
            this.disableAge = false;
            this.isDisplaySavePopup = false;
            this.btnSaveDisable = false;
            this.isShow = false;
            this._telLimit = 6;
            this._emailLimit = 3;
            this._addressLimit = 3;
            this.edit_type = "add";
            /** @type {?} */
            var telCodeArray = this.profileCodeService.getCodeArray('Customer_TelType');
            /** @type {?} */
            var emailCodeArray = this.profileCodeService.getCodeArray('Customer_EmailType');
            /** @type {?} */
            var addressCodeArray = this.profileCodeService.getCodeArray('Customer_AddressType');
            /** @type {?} */
            var ageCodeArray = this.profileCodeService.getCodeArray('Customer_Age');
            /** @type {?} */
            var genderCodeArray = this.profileCodeService.getCodeArray('Customer_Gender');
            /** @type {?} */
            var incomeCodeArray = this.profileCodeService.getCodeArray('Customer_Income');
            /** @type {?} */
            var sourceCodeArray = this.profileCodeService.getCodeArray('Customer_Source');
            /** @type {?} */
            var marriageCodeArray = this.profileCodeService.getCodeArray('Customer_Marriage');
            /** @type {?} */
            var childrenCodeArray = this.profileCodeService.getCodeArray('Customer_Children');
            /** @type {?} */
            var familiarityCodeArray = this.profileCodeService.getCodeArray('Customer_Familiarity');
            /** @type {?} */
            var recentStatusCodeArray = this.profileCodeService.getCodeArray('Customer_RecentStatus');
            /** @type {?} */
            var manpaCodeArray = this.profileCodeService.getCodeArray('Customer_Status');
            /** @type {?} */
            var contactFrequancyCodeArray = this.profileCodeService.getCodeArray('Customer_ContactFrequancy');
            this.optionTel = this.customerUtils.setCode2Option(telCodeArray);
            this.optionEmail = this.customerUtils.setCode2Option(emailCodeArray);
            this.optionAddress = this.customerUtils.setCode2Option(addressCodeArray);
            this.optionAge = this.customerUtils.setCode2Option(ageCodeArray);
            this.optionGender = this.customerUtils.setCode2Option(genderCodeArray);
            this.optionIncome = this.customerUtils.setCode2Option(incomeCodeArray);
            this.optionSource = this.customerUtils.setCode2Option(sourceCodeArray);
            this.optionMarriage = this.customerUtils.setCode2Option(marriageCodeArray);
            this.optionChildren = this.customerUtils.setCode2Option(childrenCodeArray);
            this.optionFamiliarity = this.customerUtils.setCode2Option(familiarityCodeArray);
            this.optionRecentStatus = this.customerUtils.setCode2Option(recentStatusCodeArray);
            this.optionManpa = this.customerUtils.setCode2Option(manpaCodeArray);
            this.optionContactFrequancyPerYear = this.customerUtils.setCode2Option(contactFrequancyCodeArray);
        }
        /**
         * @return {?}
         */
        CustomerEditComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.customerStore) {
                    this.customerStore.getCurrentCustomerDetail().subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        _this.customerDetail = data;
                        if (i1.StringUtils.isEmpty(_this.customerDetail.clientID)) {
                            //ADD
                            console.log("add :", _this.customerDetail);
                            _this.pageTitle = "";
                            _this.disableAge = false;
                            _this.customerDetail = new CustomerDetail();
                            _this.customerDetail.ageRange = '';
                            _this.edit_type = "add";
                        }
                        else {
                            //Edit
                            console.log("edit :", _this.customerDetail);
                            _this.pageTitle = _this.customerDetail.lastName + _this.customerDetail.firstName;
                            if (i1.StringUtils.isNotEmpty(_this.customerDetail.birthday)) {
                                _this.disableAge = true;
                            }
                            else {
                                _this.customerDetail.ageRange = '';
                                _this.disableAge = false;
                            }
                            _this.edit_type = "edit";
                        }
                        _this.editModel.emit(_this.customerDetail);
                        _this.changeDetector.detectChanges();
                        _this.isShow = true;
                    }));
                }
            };
        /**
         * @return {?}
         */
        CustomerEditComponent.prototype.validationForm = /**
         * @return {?}
         */
            function () {
                var _this = this;
                console.log(this.customerDetail);
                //valid customer
                this.validationResult = this.customerService.validProfile(this.customerDetail);
                if (this.validationResult != null) {
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        _this.scrollToError();
                    }), 200);
                }
            };
        // Save btn click
        // Save btn click
        /**
         * @param {?} event
         * @return {?}
         */
        CustomerEditComponent.prototype.saveProfile =
            // Save btn click
            /**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                var _this = this;
                //valid customer
                this.validationForm();
                console.log(this.validationResult.isTrue());
                if (this.validationResult.isTrue()) {
                    this.btnSaveDisable = true;
                    //if tel/email/address all empty data , skip it
                    /** @type {?} */
                    var tmpTelArray_1 = [];
                    /** @type {?} */
                    var tmpEmailArray_1 = [];
                    /** @type {?} */
                    var tmpAddressArray_1 = [];
                    this.customerDetail.tels.forEach(( /**
                     * @param {?} tel
                     * @return {?}
                     */function (tel) {
                        if (!tel.isEmpty())
                            tmpTelArray_1.push(tel);
                    }));
                    this.customerDetail.emails.forEach(( /**
                     * @param {?} email
                     * @return {?}
                     */function (email) {
                        if (!email.isEmpty())
                            tmpEmailArray_1.push(email);
                    }));
                    this.customerDetail.addresses.forEach(( /**
                     * @param {?} address
                     * @return {?}
                     */function (address) {
                        if (!address.isEmpty())
                            tmpAddressArray_1.push(address);
                    }));
                    this.customerDetail.tels = tmpTelArray_1;
                    this.customerDetail.emails = tmpEmailArray_1;
                    this.customerDetail.addresses = tmpAddressArray_1;
                    console.log("customer-edit-save: ", this.customerDetail);
                    this.customerService.saveCustomerDetail(this.customerDetail).subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        console.debug('saveDetail', data);
                        //this.isDisplaySavePopup = true;
                        //set result
                        /** @type {?} */
                        var result = new CustomerDetailResult();
                        result.detailSaveSuccess = data.status;
                        result.editDetail = _this.customerDetail;
                        _this.customerService.profileResult = result;
                        if (_this.customerStore) {
                            _this.customerStore.setCurrentCustomerDetail(_this.customerDetail);
                            /** @type {?} */
                            var state = _this.edit_type == "add" ? CUSTOMER_STATE.ADD_SAVED : CUSTOMER_STATE.EDIT_SAVED;
                            _this.customerStore.setState(state);
                        }
                        if (_this.customCustomerAction) {
                            _this.customCustomerAction.afterCustomerEditSave(_this.customerDetail);
                        }
                        _this.btnSaveDisable = false;
                    }));
                }
            };
        /**
         * @return {?}
         */
        CustomerEditComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                //獲得內容高
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.contentHeight = _this.content.nativeElement.offsetHeight;
                    console.log('ele Height:', _this.contentHeight);
                }), 600);
                this.sendContentHeight.emit(this.contentHeight);
            };
        /**
         * @param {?} birthday
         * @return {?}
         */
        CustomerEditComponent.prototype.countAgeRange = /**
         * @param {?} birthday
         * @return {?}
         */
            function (birthday) {
                console.debug('birthday', birthday);
                this.customerDetail.birthday = birthday;
                if (i1.StringUtils.isEmpty(birthday)) {
                    this.customerDetail.ageRange = '';
                    this.disableAge = false;
                }
                else {
                    /** @type {?} */
                    var age = this.customerUtils.countAge(birthday);
                    /** @type {?} */
                    var ageRange = this.customerUtils.countAgeRange(age);
                    console.debug('ageRange', ageRange);
                    if (ageRange != undefined) {
                        this.customerDetail.ageRange = ageRange;
                        this.changeDetector.detectChanges();
                        this.disableAge = true;
                    }
                }
                this.changeDetector.detectChanges();
            };
        /**
         * @return {?}
         */
        CustomerEditComponent.prototype.getTelLimit = /**
         * @return {?}
         */
            function () {
                return this._telLimit;
            };
        /**
         * @return {?}
         */
        CustomerEditComponent.prototype.getEmailLimit = /**
         * @return {?}
         */
            function () {
                return this._emailLimit;
            };
        /**
         * @return {?}
         */
        CustomerEditComponent.prototype.getAddressLimit = /**
         * @return {?}
         */
            function () {
                return this._addressLimit;
            };
        /**
         * @return {?}
         */
        CustomerEditComponent.prototype.onAddTelGroup = /**
         * @return {?}
         */
            function () {
                console.debug('onAddTelGroup');
                this.customerDetail.tels.push(new CustomerTel('', 'TelHome', '', 'APP'));
            };
        /**
         * @return {?}
         */
        CustomerEditComponent.prototype.onAddMailGroup = /**
         * @return {?}
         */
            function () {
                console.debug('onAddMailGroup');
                this.customerDetail.addEmail(new CustomerEmail('', 'MailHome', '', 'APP'));
            };
        /**
         * @return {?}
         */
        CustomerEditComponent.prototype.onAddAddressGroup = /**
         * @return {?}
         */
            function () {
                console.debug('onAddAddressGroup');
                this.customerDetail.addAddress(new CustomerAddress('', 'AddressTypeHome', '', '', '', '', '', 'APP'));
            };
        /**
         * @param {?} index
         * @return {?}
         */
        CustomerEditComponent.prototype.onRemoveTelGroup = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                console.debug('onRemoveTelGroup', index);
                this.customerDetail.tels.splice(index, 1);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        CustomerEditComponent.prototype.onRemoveEmailGroup = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                console.debug('onRemoveEmailGroup', index);
                this.customerDetail.emails.splice(index, 1);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        CustomerEditComponent.prototype.onRemoveAddressGroup = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                console.debug('onRemoveAddressGroup', index);
                this.customerDetail.addresses.splice(index, 1);
            };
        /**
         * @return {?}
         */
        CustomerEditComponent.prototype.scrollToError = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var errorBlock = document.body.getElementsByClassName('error-msg');
                if (errorBlock.item(0)) {
                    errorBlock.item(0).parentElement.parentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                // if (errorBlock[0]) errorBlock[0].scrollIntoView({ behavior: 'smooth', block: 'start' })
            };
        CustomerEditComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-customer-edit',
                        template: "<app-ui-inner-page *ngIf=\"isShow\" [title]=\"[pageTitle | translate ]\" [contentHeight]=\"this.contentHeight\" >\n  <div main>\n    <div #inpageMain class=\"layout-block\">\n      <div class=\"layout-style-single\">\n        <div class=\"form-all page-cust-info\" action=\"\">\n          <div class=\"profile-img-block img-block\" [ngClass]=\"customerDetail.dataSource == 'OPUS' ? '': ' active'\">\n              <img class=\"normal-img\" src=\"assets/img/img-customer-profile.svg\">\n              <img class=\"active-img\" src=\"assets/img/img-cust-profile-active.svg\">\n          </div>\n          <!-- {{customerProfile.lastName}} -->\n          <div *ngTemplateOutlet=\"editPreTemplate\"></div>\n          <app-ui-form-layout-advanced>\n            <!-- row1 -->\n            <app-ui-data-group *ngIf=\"customerDetail.dataSource != 'OPUS'\">\n              <ng-container textType=\"dataContent\">\n                <app-ui-form-layout-row>\n                    <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                      <app-ui-form-input [inputTitle]=\"[language.lastName | translate]\" [name]=\"'lastName'\" [(nxValue)]=\"customerDetail.lastName\" [placeholder]=\"[language.lastNamePlaceholder | translate]\" [isDisable]=\"false\" [isError]=\"validationResult.isError('lastName')\"></app-ui-form-input>\n                      <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('lastName') == 'required'\">{{language.wrongLastName |translate }}</app-ui-form-error-msg>\n                    </app-ui-form-layout-col>\n                    <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                      <app-ui-form-input [inputTitle]=\"[language.firstName | translate]\" [name]=\"'firstName'\" [(nxValue)]=\"customerDetail.firstName\" [placeholder]=\"[language.firstNamePlaceholder | translate]\" [isDisable]=\"false\"  [isError]=\"validationResult.isError('firstName')\" (nxValueChange)=\"validationForm()\"></app-ui-form-input>\n                      <app-ui-form-error-msg></app-ui-form-error-msg>\n                    </app-ui-form-layout-col>\n                </app-ui-form-layout-row>\n              </ng-container>\n            </app-ui-data-group>\n            <!-- end of row1 -->\n            <!-- row2 -->\n            <app-ui-data-group [groupName]=\"'tel'\" [isShowPreData]=\"true\" [imgType]=\"true\" [imgIconSrc]=\"'assets/img/icon-form-phone.svg'\">\n              <ng-container textType=\"dataContent\">\n                <ng-container *ngIf=\"customerDetail.tels.length != 0 ; else noTelContent\">\n                    <app-ui-form-layout-row *ngFor=\"let tel of customerDetail.tels; index as i ; last as isLast\">\n                        <ng-container *ngIf=\"tel.dataSource != 'OPUS'\">\n                            <app-ui-form-layout-col [colPC]=\"3\" [colNB]=\"3\" [colPad]=\"3\" [colMobile]=\"4\">\n                              <app-ui-form-select [isShowTitle]=\"false\" [selectTitle]=\"[language.phone | translate]\" [(nxValue)]=\"tel.telType\" [selectOption]='optionTel'></app-ui-form-select>\n                              <app-ui-form-error-msg></app-ui-form-error-msg>\n                            </app-ui-form-layout-col>\n                            <app-ui-form-layout-col [colPC]=\"9\" [colNB]=\"9\" [colPad]=\"9\" [colMobile]=\"8\" [hasRemove]=\"true\" (remove)=\"onRemoveTelGroup(i)\">\n                              <app-ui-form-input [type]=\"'tel'\" [maxLength]=\"50\" [inputTitle]=\"[language.phone | translate]\" [(nxValue)]=\"tel.tel\"  [isDisable]=\"false\"></app-ui-form-input>\n                              <app-ui-form-error-msg></app-ui-form-error-msg>\n                            </app-ui-form-layout-col>                            \n                        </ng-container>\n                        <ng-container *ngIf=\"isLast\">\n                            <app-ui-form-layout-col [colPC]=\"12\" [colNB]=\"12\" [colPad]=\"12\" [colMobile]=\"8\" [translateText]=\"language.add | translate\" [hasAdd]=\"customerDetail.notOPUSTelNumber() != getTelLimit()\" (add)=\"onAddTelGroup()\"></app-ui-form-layout-col>\n                        </ng-container>\n                      </app-ui-form-layout-row>\n                </ng-container>\n                \n                <ng-template #noTelContent>\n                    <app-ui-form-layout-row >\n                        <app-ui-form-layout-col [colPC]=\"12\" [colNB]=\"12\" [colPad]=\"12\" [colMobile]=\"8\" [translateText]=\"language.add | translate\" [hasAdd]=\"customerDetail.notOPUSTelNumber() != getTelLimit()\" (add)=\"onAddTelGroup()\"></app-ui-form-layout-col>\n                      </app-ui-form-layout-row>\n                </ng-template>\n              </ng-container>\n            </app-ui-data-group>\n            <!-- end of row2 -->\n            <!-- row3 -->\n\n            <app-ui-data-group [groupName]=\"'email'\" [isShowPreData]=\"true\" [imgType]=\"true\" [imgIconSrc]=\"'assets/img/icon-form-mail.svg'\">\n              <ng-container textType=\"dataContent\">\n                \n                <ng-container *ngIf=\"customerDetail.emails.length != 0 ; else noMailContent\">\n                    <app-ui-form-layout-row *ngFor=\"let email of customerDetail.emails; index as i; last as isLast\">\n                        <app-ui-form-layout-col [colPC]=\"3\" [colNB]=\"3\" [colPad]=\"3\" [colMobile]=\"4\">\n                            <app-ui-form-select [isShowTitle]=\"false\" [selectTitle]=\"[language.email | translate]\" [(nxValue)]=\"email.emailType\" [selectOption]='optionEmail'></app-ui-form-select>\n                            <app-ui-form-error-msg></app-ui-form-error-msg>\n                          </app-ui-form-layout-col>\n                          <app-ui-form-layout-col [colPC]=\"9\" [colNB]=\"9\" [colPad]=\"9\" [colMobile]=\"8\" [hasRemove]=\"true\" (remove)=\"onRemoveEmailGroup(i)\">\n                            <app-ui-form-input [inputTitle]=\"[language.email | translate]\"  [(nxValue)]=\"email.email\"  [isDisable]=\"false\"></app-ui-form-input>\n                            <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('email') == 'format'\">{{language.wrongEmail |translate }}</app-ui-form-error-msg>\n                          </app-ui-form-layout-col>\n                          <ng-container *ngIf=\"isLast\">\n                              <app-ui-form-layout-col [colPC]=\"12\" [colNB]=\"12\" [colPad]=\"12\" [colMobile]=\"8\" [translateText]=\"language.add | translate\" [hasAdd]=\"customerDetail.emails.length != getEmailLimit()\" (add)=\"onAddMailGroup()\"></app-ui-form-layout-col>\n                          </ng-container>\n                    </app-ui-form-layout-row>\n                </ng-container>\n                \n                <ng-template #noMailContent>\n                    <app-ui-form-layout-row>\n                        <app-ui-form-layout-col [colPC]=\"12\" [colNB]=\"12\" [colPad]=\"12\" [colMobile]=\"8\" [translateText]=\"language.add | translate\" [hasAdd]=\"customerDetail.emails.length != getEmailLimit()\" (add)=\"onAddMailGroup()\"></app-ui-form-layout-col>\n                    </app-ui-form-layout-row>\n                </ng-template>\n\n              </ng-container>\n            </app-ui-data-group>\n\n            <!-- end of row3 -->\n            <!-- row4 -->\n            <app-ui-data-group [groupName]=\"'addr'\" [isShowPreData]=\"true\" [imgType]=\"true\" [imgIconSrc]=\"'assets/img/icon-form-addr.svg'\">\n              <ng-container textType=\"dataContent\" >\n\n                <ng-container *ngIf=\"customerDetail.addresses.length != 0 ; else noAddressContent\">\n                    <app-ui-form-layout-row *ngFor=\"let address of customerDetail.addresses; index as i; last as isLast\">\n\n                        <app-ui-form-layout-col [colPC]=\"3\" [colNB]=\"3\" [colPad]=\"3\" [colMobile]=\"4\">\n                          <app-ui-form-select [isShowTitle]=\"false\" [selectTitle]=\"[language.address | translate]\" [(nxValue)]=\"address.addressType\" [selectOption]='optionAddress'  ></app-ui-form-select>\n                          <app-ui-form-error-msg></app-ui-form-error-msg>\n                        </app-ui-form-layout-col>\n                        <div class=\"break-line\"></div>\n                        <app-ui-form-layout-col [colPC]=\"4\" [colNB]=\"4\" [colPad]=\"4\" [colMobile]=\"6\">\n                          <app-ui-form-input [inputTitle]=\"[language.country | translate]\" [(nxValue)]=\"address.country\" [isDisable]=\"false\"></app-ui-form-input>\n                          <app-ui-form-error-msg></app-ui-form-error-msg>\n                        </app-ui-form-layout-col>\n                        <app-ui-form-layout-col [colPC]=\"4\" [colNB]=\"4\" [colPad]=\"4\" [colMobile]=\"6\">\n                            <app-ui-form-input [inputTitle]=\"[language.city | translate]\" [(nxValue)]=\"address.city\" [isDisable]=\"false\"></app-ui-form-input>\n                          <app-ui-form-error-msg></app-ui-form-error-msg>\n                        </app-ui-form-layout-col>\n                        <app-ui-form-layout-col [colPC]=\"4\" [colNB]=\"4\" [colPad]=\"4\" [colMobile]=\"6\">\n                            <app-ui-form-input [inputTitle]=\"[language.area | translate]\" [(nxValue)]=\"address.area\" [isDisable]=\"false\"></app-ui-form-input>\n                          <app-ui-form-error-msg></app-ui-form-error-msg>\n                        </app-ui-form-layout-col>\n                        <app-ui-form-layout-col [colPC]=\"3\" [colNB]=\"3\" [colPad]=\"3\" [colMobile]=\"6\">\n                            <app-ui-form-input [inputTitle]=\"[language.code | translate]\" [(nxValue)]=\"address.zipcode\" [isDisable]=\"false\"></app-ui-form-input>\n                          <app-ui-form-error-msg></app-ui-form-error-msg>\n                        </app-ui-form-layout-col>\n                        <app-ui-form-layout-col [colPC]=\"9\" [colNB]=\"9\" [colPad]=\"9\" [colMobile]=\"12\" [hasRemove]=\"true\" (remove)=\"onRemoveAddressGroup(i)\">\n                          <app-ui-form-input [inputTitle]=\"[language.address | translate]\" [(nxValue)]=\"address.address\" [isDisable]=\"false\"></app-ui-form-input>\n                          <app-ui-form-error-msg></app-ui-form-error-msg>\n                        </app-ui-form-layout-col>\n\n                        <ng-container *ngIf=\"isLast\">\n                            <app-ui-form-layout-col [colPC]=\"12\" [colNB]=\"12\" [colPad]=\"12\" [colMobile]=\"8\" [translateText]=\"language.add | translate\" [hasAdd]=\"customerDetail.addresses.length != getAddressLimit()\" (add)=\"onAddAddressGroup()\"></app-ui-form-layout-col>\n                        </ng-container>\n                        \n      \n                      </app-ui-form-layout-row>\n                </ng-container>\n\n                <ng-template #noAddressContent>\n                    <app-ui-form-layout-row>\n                        <app-ui-form-layout-col [colPC]=\"12\" [colNB]=\"12\" [colPad]=\"12\" [colMobile]=\"8\" [translateText]=\"language.add | translate\" [hasAdd]=\"customerDetail.addresses.length != getAddressLimit()\" (add)=\"onAddAddressGroup()\"></app-ui-form-layout-col>\n                    </app-ui-form-layout-row>\n                </ng-template>\n\n              </ng-container>\n            </app-ui-data-group>\n            <!-- end of row4 -->\n\n            <!-- row5 -->\n            <!-- TODO -->\n          <app-ui-data-group *ngIf=\"customerDetail.dataSource != 'OPUS'\">\n            <ng-container textType=\"dataContent\">\n              <app-ui-form-layout-row>\n                <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                  <app-ui-form-date [title]=\"[language.birthday | translate ]\" [nxValue]=\"customerDetail.birthday\" (nxValueChange)=\"countAgeRange($event)\"></app-ui-form-date>\n                  <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('birthday') == 'date'\">{{language.wrongBirthday |translate }}</app-ui-form-error-msg>\n                </app-ui-form-layout-col>\n                <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                  <app-ui-form-select [selectTitle]=\"[language.age | translate ]\" [(nxValue)]=\"customerDetail.ageRange\" [selectOption]='optionAge' [isDisable]=\"disableAge\" ></app-ui-form-select>\n                  <app-ui-form-error-msg></app-ui-form-error-msg>\n                </app-ui-form-layout-col>\n              </app-ui-form-layout-row>\n            </ng-container>\n          </app-ui-data-group>\n            <!-- end of row5 -->\n\n\n          <ng-container *ngIf=\"customerDetail.dataSource != 'OPUS' ; else OPUSContent\">\n            <!-- row6 -->\n          <app-ui-data-group >\n            <ng-container textType=\"dataContent\">\n              <app-ui-form-layout-row>\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                    <app-ui-form-select [selectTitle]=\"[language.gender | translate ]\" [(nxValue)]=\"customerDetail.gender\" [selectOption]='optionGender' ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                    <app-ui-form-input [inputTitle]=\"[language.occupation | translate ]\" [(nxValue)]=\"customerDetail.occupation\" [isDisable]=\"false\"></app-ui-form-input>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n              </app-ui-form-layout-row>\n            </ng-container>\n          </app-ui-data-group>\n            <!-- end of row6 -->\n\n            <!-- row7 -->\n            <app-ui-data-group >\n            <ng-container textType=\"dataContent\">\n              <app-ui-form-layout-row>\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                    <app-ui-form-input [inputTitle]=\"[language.company | translate ]\" [(nxValue)]=\"customerDetail.company\"  [isDisable]=\"false\"></app-ui-form-input>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                      <app-ui-form-select [selectTitle]=\"[language.annualIncome | translate ]\" [(nxValue)]=\"customerDetail.income\" [selectOption]='optionIncome' [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n              </app-ui-form-layout-row>\n            </ng-container>\n            </app-ui-data-group>\n            <!-- end of row7 -->\n\n            <!-- row8 -->\n            <app-ui-data-group >\n            <ng-container textType=\"dataContent\">\n              <app-ui-form-layout-row>\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                    <app-ui-form-select [selectTitle]=\"[language.source | translate ]\" [selectOption]='optionSource' [(nxValue)]=\"customerDetail.source\" [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                      <app-ui-form-select [selectTitle]=\"[language.marriage | translate ]\" [selectOption]='optionMarriage' [(nxValue)]=\"customerDetail.marriage\" [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n              </app-ui-form-layout-row>\n            </ng-container>\n            </app-ui-data-group>\n            <!-- end of row8 -->\n\n            <!-- row9 -->\n            <app-ui-data-group >\n            <ng-container textType=\"dataContent\">\n              <app-ui-form-layout-row>\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                    <app-ui-form-select [selectTitle]=\"[language.children | translate ]\" [selectOption]='optionChildren' [(nxValue)]=\"customerDetail.children\" [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                      <app-ui-form-select [selectTitle]=\"[language.familiarity | translate ]\" [selectOption]='optionFamiliarity' [(nxValue)]=\"customerDetail.familiarity\" [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n              </app-ui-form-layout-row>\n            </ng-container>\n            </app-ui-data-group>\n            <!-- end of row9 -->\n          </ng-container>\n          \n          <ng-template #OPUSContent>\n             <!-- row6 -->\n          <app-ui-data-group >\n            <ng-container textType=\"dataContent\">\n              <app-ui-form-layout-row>\n                  \n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                    <app-ui-form-input [inputTitle]=\"[language.occupation | translate ]\" [(nxValue)]=\"customerDetail.occupation\"  [isDisable]=\"false\"></app-ui-form-input>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                    <app-ui-form-input [inputTitle]=\"[language.company | translate ]\" [(nxValue)]=\"customerDetail.company\" [isDisable]=\"false\"></app-ui-form-input>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n              </app-ui-form-layout-row>\n            </ng-container>\n          </app-ui-data-group>\n            <!-- end of row6 -->\n\n            <!-- row7 -->\n            <app-ui-data-group >\n            <ng-container textType=\"dataContent\">\n              <app-ui-form-layout-row>\n                  \n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                      <app-ui-form-select [selectTitle]=\"[language.annualIncome | translate ]\" [(nxValue)]=\"customerDetail.income\" [selectOption]='optionIncome' [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                    <app-ui-form-select [selectTitle]=\"[language.source | translate ]\" [selectOption]='optionSource' [(nxValue)]=\"customerDetail.source\" [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n\n              </app-ui-form-layout-row>\n            </ng-container>\n            </app-ui-data-group>\n            <!-- end of row7 -->\n\n            <!-- row8 -->\n            <app-ui-data-group >\n            <ng-container textType=\"dataContent\">\n              <app-ui-form-layout-row>\n                  \n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                      <app-ui-form-select [selectTitle]=\"[language.marriage | translate ]\" [selectOption]='optionMarriage' [(nxValue)]=\"customerDetail.marriage\" [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                    <app-ui-form-select [selectTitle]=\"[language.children | translate ]\" [selectOption]='optionChildren' [(nxValue)]=\"customerDetail.children\" [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n              </app-ui-form-layout-row>\n            </ng-container>\n            </app-ui-data-group>\n            <!-- end of row8 -->\n\n            <!-- row9 -->\n            <app-ui-data-group >\n            <ng-container textType=\"dataContent\">\n              <app-ui-form-layout-row>\n                  \n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                      <app-ui-form-select [selectTitle]=\"[language.familiarity | translate ]\" [selectOption]='optionFamiliarity' [(nxValue)]=\"customerDetail.familiarity\" [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n              </app-ui-form-layout-row>\n            </ng-container>\n            </app-ui-data-group>\n            <!-- end of row9 -->\n        </ng-template>\n\n            <!-- row10 -->\n            <app-ui-data-group >\n              <ng-container textType=\"dataContent\">\n                  <app-ui-form-layout-row>\n                      <app-ui-form-layout-col>\n                        <app-ui-form-select [selectTitle]=\"[language.recentStatus | translate ]\" [(nxValue)]=\"customerDetail.recentStatus\" [selectOption]='optionRecentStatus' [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                        <app-ui-form-error-msg></app-ui-form-error-msg>\n                      </app-ui-form-layout-col>\n\n                  </app-ui-form-layout-row>\n              </ng-container>\n            </app-ui-data-group>\n            <!-- end of row10 -->\n\n            <!-- row10 -->\n            <app-ui-data-group >\n                <ng-container textType=\"dataContent\">\n                    <app-ui-form-layout-row>\n                        <app-ui-form-layout-col>\n                            <app-ui-form-select [selectTitle]=\"[language.customerStatus | translate ]\" [(nxValue)]=\"customerDetail.manpa\" [selectOption]='optionManpa' [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                          <app-ui-form-error-msg></app-ui-form-error-msg>\n                        </app-ui-form-layout-col>\n                    </app-ui-form-layout-row>\n                </ng-container>\n              </app-ui-data-group>\n              <!-- end of row10 -->\n\n            <!-- row11 -->\n            <app-ui-data-group >\n              <ng-container textType=\"dataContent\">\n                <app-ui-form-layout-row>\n                  <app-ui-form-layout-col >\n                    <app-ui-form-select [selectTitle]=\"[language.contactFrequencyYear | translate ]\"  [(nxValue)]=\"customerDetail.contactFrequancy\" [selectOption]='optionContactFrequancyPerYear' [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n                </app-ui-form-layout-row>\n              </ng-container>\n            </app-ui-data-group>\n            <!-- end of row11 -->\n            <!-- row12 -->\n            <app-ui-data-group class=\"posibility-data-group\">\n              <ng-container textType=\"dataContent\">\n                <app-ui-form-layout-row>\n                    <app-ui-form-layout-col >\n                      <app-ui-form-title-sm>{{language.possibility |translate }}</app-ui-form-title-sm>\n                      <div class=\"tag-block\">\n                        <app-ui-form-radio-group [(nxValue)]=\"customerDetail.possibility\">\n                          <app-ui-form-radio-tag [checked]=\"customerDetail.possibility == 'HOT' ? true: false\" class=\"HOT wd-max\" [value]=\"'HOT'\">{{\"HOT\" | translate}}</app-ui-form-radio-tag>\n                          <app-ui-form-radio-tag [checked]=\"customerDetail.possibility == 'WARM' ? true: false\" class=\"WARM wd-max\" [value]=\"'WARM'\">{{\"WARM\" | translate}}</app-ui-form-radio-tag>\n                          <app-ui-form-radio-tag [checked]=\"customerDetail.possibility == 'COLD' ? true: false\" class=\"COLD wd-max\" [value]=\"'COLD'\">{{\"COLD\" | translate}}</app-ui-form-radio-tag>\n                        </app-ui-form-radio-group>\n                      </div>\n                    </app-ui-form-layout-col >\n                </app-ui-form-layout-row>\n              </ng-container>\n            </app-ui-data-group>\n            <!-- row 12 -->\n          </app-ui-form-layout-advanced>\n          <div *ngTemplateOutlet=\"editPostTemplate\"></div>\n        </div>\n      </div>\n\n      <!-- btn -->\n      <app-ui-btn-layout>\n        <app-ui-btn [name]=\"'btn-save'\" (ClickBtn)=\"saveProfile($event)\" [isDisable]=\"btnSaveDisable\">\n          <ng-container TextType=\"cust\">{{language.save |translate }}</ng-container>\n        </app-ui-btn>\n      </app-ui-btn-layout>\n      <!-- end of btn -->\n\n\n\n    </div>\n\n  </div>\n</app-ui-inner-page>\n",
                        styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.layout-block{padding-top:10px;box-shadow:0 2px 4px 0 rgba(0,0,0,.19);background-color:#fff}.profile-img-block{text-align:center;padding-bottom:10px;padding-top:20px}.profile-img-block img{text-align:center;margin:0 auto;width:60px}.profile-img-block.img-block .active-img,.profile-img-block.img-block.active .normal-img{display:none}.profile-img-block.img-block.active .active-img{display:block}@media screen and (min-width:1025px){.profile-img-block img{width:6vw}}.tag-block{display:flex}.break-line{display:block;width:100%}.page-cust-info ::ng-deep app-ui-form-radio-tag{width:30%}.page-cust-info ::ng-deep app-ui-form-radio-tag .tag-block .tag-content{font-weight:700}.page-cust-info ::ng-deep app-ui-form-radio-tag+app-ui-form-radio-tag{margin-left:5%}:host ::ng-deep app-ui-btn-layout{position:relative;bottom:-24px;margin-right:0}:host ::ng-deep app-ui-btn-layout .btn-block{margin:0}::ng-deep app-ui-form-layout-col:first-of-type .col-content.style-has-add{margin-top:8px!important}@media (max-width:767px){::ng-deep app-ui-form-layout-col:first-of-type .col-content.style-has-add{position:absolute;top:-18px;left:40px;max-width:150px}}::ng-deep .posibility-data-group{padding-bottom:0}::ng-deep .posibility-data-group ::ng-deep [class*=gas-col-]{margin-bottom:20px}::ng-deep .posibility-data-group .gas-row-block{margin-top:0}::ng-deep .btn-inner-page.style-out app-ui-btn-layout{position:relative;background-color:#f5f5f5;bottom:-20px;margin-top:40px}::ng-deep .btn-inner-page.style-out app-ui-btn-layout app-ui-btn{position:relative;top:-27px}"]
                    }] }
        ];
        CustomerEditComponent.ctorParameters = function () {
            return [
                { type: CustomerService },
                { type: i1.ProfileCodeService },
                { type: CustomerUtils },
                { type: i0.ChangeDetectorRef },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [customerActionToken,] }] },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [storeCustomerToken,] }] }
            ];
        };
        CustomerEditComponent.propDecorators = {
            sendContentHeight: [{ type: i0.Output }],
            content: [{ type: i0.ViewChild, args: ['inpageMain',] }],
            editPreTemplate: [{ type: i0.Input }],
            editPostTemplate: [{ type: i0.Input }],
            editModel: [{ type: i0.Output }]
        };
        return CustomerEditComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerListComponent = /** @class */ (function () {
        function CustomerListComponent(changeDetecor, elementRef, showCustomerRule) {
            this.changeDetecor = changeDetecor;
            this.elementRef = elementRef;
            this.showCustomerRule = showCustomerRule;
            //Is Default Data(No Search Status)
            this.isDefaultData = true;
            this.showSearchNoData = false;
            this.loadingFinish = true;
            this.customerClick = new i0.EventEmitter();
            this.customerLoad = new i0.EventEmitter();
            this.customerRefresh = new i0.EventEmitter();
            this._customerList = [];
            this.language = new i1.Language();
        }
        Object.defineProperty(CustomerListComponent.prototype, "customerList", {
            get: /**
             * @return {?}
             */ function () { return this._customerList; },
            set: /**
             * @param {?} customerList
             * @return {?}
             */ function (customerList) {
                var _this = this;
                customerList.forEach(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) {
                    item.showName = _this.convertNameToShow(item.firstName, item.lastName);
                }));
                this._customerList = customerList;
                this.loadingFinish = true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerListComponent.prototype, "filterType", {
            get: /**
             * @return {?}
             */ function () { return this._filterType; },
            set: /**
             * @param {?} filterType
             * @return {?}
             */ function (filterType) {
                this._filterType = filterType;
                if (this.customerList.length == 0 && i1.StringUtils.isNotEmpty(this.filterType)) {
                    this.isDefaultData = this.filterType == 'NONE';
                    this.showSearchNoData = this.filterType == 'SEARCH';
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        CustomerListComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
        CustomerListComponent.prototype.trackByClientID = /**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
            function (index, item) {
                return item.clientID;
            };
        /**
         * @return {?}
         */
        CustomerListComponent.prototype.closeSlidingItems = /**
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var item;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.debug('list closeSlidingItems');
                                item = this.elementRef.nativeElement.querySelector('ion-item-sliding');
                                if (!(item != null))
                                    return [3 /*break*/, 3];
                                /// console.debug('item size',item.length);
                                console.debug('item', item);
                                return [4 /*yield*/, item.close()];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, item.closeOpened()];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @param {?} clientID
         * @return {?}
         */
        CustomerListComponent.prototype.onClickCustomer = /**
         * @param {?} clientID
         * @return {?}
         */
            function (clientID) {
                var _this = this;
                this.onClickCustomerID = clientID;
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.closeSlidingItems();
                }), 300);
                /** @type {?} */
                var item = this.customerList.filter(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) { return item.clientID == clientID; }));
                this.customerClick.emit(item[0]);
            };
        /**
         * @param {?} e
         * @return {?}
         */
        CustomerListComponent.prototype.loadCustomer = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                console.log('lazy load customer:', e);
                this.customerLoad.emit();
            };
        /**
         * @return {?}
         */
        CustomerListComponent.prototype.refreshCustomer = /**
         * @return {?}
         */
            function () {
                var _this = this;
                //set timeout for refresh animation
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.customerRefresh.emit();
                }), 800);
            };
        /**
         * @param {?} firstName
         * @param {?} lastName
         * @return {?}
         */
        CustomerListComponent.prototype.convertNameToShow = /**
         * @param {?} firstName
         * @param {?} lastName
         * @return {?}
         */
            function (firstName, lastName) {
                if (this.showCustomerRule) {
                    return this.showCustomerRule.convertName(firstName, lastName);
                }
                else {
                    return (firstName + lastName);
                }
            };
        CustomerListComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-customer-list',
                        template: "<div class=\"ui-list-data\">\n    <!-- CustomerList has data-->\n     <app-ui-infinite-scroll (loadingCallback)=\"loadCustomer($event)\" (refreshCallback)=\"refreshCustomer()\"\n        [(loadingFinish)]=\"loadingFinish\" [lazyLoading]=\"true\" [translateText]=\"language.loading | translate\">\n        \n        <ul class=\"list-data-block stop-scroll-block\">\n            <ng-container *ngIf=\"customerList && customerList.length != 0 ; else noCustomerData\">\n    \n            <li *ngFor=\" let customer of customerList;trackBy:trackByClientID; let i = index\" (click)=\"onClickCustomer(customer.clientID)\"  class=\"list-item-block\" [ngClass]= \"[(customer.clientID == onClickCustomerID ? ' active':''), (customer.isHighlight ? ' highlight':'')]\">\n                <div class=\"title-block\">\n                    <div class=\"like-block\">\n                        <app-ui-btn-like-add [isLike]=\"customer.isFollow\"></app-ui-btn-like-add>\n                    </div>\n                    <div class=\"title-text\">\n                        {{customer.showName}}\n                    </div>\n                    <app-ui-form-radio-tag class=\"tag-item\" [checked]=\"true\" [disabled]=\"true\" [ngClass]=\"customer.tag\">{{customer.tag | translate}}</app-ui-form-radio-tag>\n                </div>\n                <div class=\"profile-block\">\n                    <div class=\"img-profile-block\">\n                        <ng-container *ngIf=\"customer.isOtherSource; then otherSource else appSource\"></ng-container>\n\n                        <!-- datasource from Opus-->\n                        <ng-template #otherSource>\n                            <img src=\"assets/img/icon-customer-profile-sm.svg\">\n                        </ng-template>\n\n                        <!-- datasource from APP-->\n                        <ng-template #appSource>\n                            <img src=\"assets/img/icon-customer-profile-sm-active.svg\">\n                            \n                        </ng-template>\n                    </div>\n                </div>\n                <div class=\"content-block\">\n                  <app-ui-progress [value]=\"customer.complementPercent\" [theme]=\"'sub'\" [isShowValue]=\"true\">{{language.customerInformation |translate }}</app-ui-progress>\n                </div>\n            </li>\n        </ng-container>\n        </ul>\n      </app-ui-infinite-scroll>\n   \n\n    <ng-template #noCustomerData>\n        <!-- Customer no data without search-->\n        <ng-container *ngIf=\"isDefaultData ; else customerSearchNoData\">\n            <div class=\"skelton-layout stop-scroll-block\">\n                <div class=\"theme-loading\">\n                  <div class=\"text-desc\">\n                      <span class=\"text\">{{language.click |translate }}\n                        <span class=\"icon-img\"><img src=\"assets/img/icon-add-grey.svg\"></span>\n                        <span class=\"icon-img\"><img src=\"assets/img/icon-import-grey.svg\"></span>\n                        {{language.noEdit |translate }}</span>\n                  </div>\n\n                  <div class=\"loading-img\">\n                    <div class=\"skelton-data-block\">\n                        <div class=\"skelton-text wd-short align-right \"></div>\n                        <div class=\"skelton-text wd-long \"></div>\n                        <div class=\"skelton-row align-side\">\n                            <div class=\"skelton-text wd-md \"></div>\n                            <div class=\"skelton-text wd-short \"></div>\n                        </div>\n                        <div class=\"skelton-text wd-long \"></div>\n                    </div>\n                    <img src=\"assets/img/loading-customer-list.svg\">\n                  </div>\n\n                </div>\n              </div>\n        </ng-container>\n\n        <!-- Customer no data after searching-->\n        <ng-template #customerSearchNoData>\n            <ng-container *ngIf=\"showSearchNoData ;  else customerFilterNoData\">\n                    <div class=\"status-empty search-empty\">\n                            <div class=\"empty-block\">\n                                <div class=\"img-block\">\n                                    <img src=\"assets/img/empty-img-search.svg\">\n                                </div>\n                                <div class=\"text-block\">\n                                  <p>{{language.noSearch |translate }}</p>\n                                </div>\n                            </div>\n                          </div>\n            </ng-container>\n                \n        </ng-template>\n\n        <!-- Customer no data after filtering-->\n        <ng-template #customerFilterNoData>\n                <div class=\"status-empty search-empty\">\n                    <div class=\"empty-block\">\n                        <div class=\"img-block\">\n                            <img src=\"assets/img/icon-filter-no-data.svg\">\n                        </div>\n                        <div class=\"text-block\">\n                          <p>{{language.noFilter |translate }}</p>\n                        </div>\n                    </div>\n                  </div>\n        </ng-template>\n            \n    </ng-template>\n\n  </div>\n",
                        styles: [".skelton-layout{margin:0}.skelton-row{display:flex}.skelton-row.align-side{justify-content:space-between}.align-right{margin:0 0 15px auto}.align-center{margin:15px auto}.skeleton-round{border-radius:50%;background-color:#ececec;max-width:100%;max-height:100%;width:100%;height:100%}.skelton-square{display:inline-block;width:30px;height:30px}.skelton-text{min-height:1rem;max-width:100%;width:100%;background-color:#ececec;display:block;margin-bottom:15px}.skelton-line{display:inline-block;max-width:100%;width:100%;background-color:#ececec;height:1px}.skelton-img-text .skelton-square{margin-bottom:10px}::ng-deep ion-skeleton-text{background-color:#ececec}::ng-deep ion-skeleton-text span{opacity:1;background-color:#ececec}.skelton-animate{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:rgba(194,194,194,.3);background:linear-gradient(to right,rgba(194,194,194,.3) 8%,rgba(194,194,194,.2) 18%,rgba(194,194,194,.3) 33%);background-size:800px 100px;position:relative}@-webkit-keyframes placeHolderShimmer{0%{background-position:-268px 0}100%{background-position:268px 0}}@keyframes placeHolderShimmer{0%{background-position:-268px 0}100%{background-position:268px 0}}.ui-list-data .skelton-layout{margin-top:30px}.ui-list-data .theme-loading{text-align:center}.ui-list-data .theme-loading .text-desc{padding-left:10%;padding-right:10%;text-align:center;display:inline-block;vertical-align:middle;margin-bottom:30px}.ui-list-data .theme-loading .text-desc .text{color:#414141;font-size:.875rem;line-height:28px;display:inline-block;vertical-align:middle}.ui-list-data .theme-loading .text-desc .text .icon-img{display:inline-block;vertical-align:middle;line-height:normal}.ui-list-data .theme-loading .loading-img{text-align:right;position:relative}.ui-list-data .theme-loading .loading-img .skelton-data-block{padding-left:10%;padding-right:10%;box-sizing:border-box;position:absolute;top:30px;width:100%}.ui-list-data .theme-loading .loading-img .skelton-text{margin-bottom:25px}.ui-list-data .theme-loading .loading-img .wd-short{max-width:30%}.ui-list-data .theme-loading .loading-img .wd-md{max-width:54%}.ui-list-data .theme-loading .loading-img .wd-long{max-width:70%}.ui-list-data .theme-loading .loading-img img{max-width:300px;width:100%}@media (max-width:1023px){.ui-list-data .theme-loading img{bottom:400px;top:auto}}@media (max-width:767px){.ui-list-data .theme-loading{height:100%;position:relative}.ui-list-data .theme-loading .text-desc{margin-bottom:30px}.ui-list-data .theme-loading .text-desc .text{max-width:185px}.ui-list-data .theme-loading .loading-img{margin-top:0;height:100%;position:absolute;right:0;bottom:0;max-width:153px;width:100%}.ui-list-data .theme-loading .loading-img .wd-short{max-width:22%}.ui-list-data .theme-loading .loading-img .skelton-data-block{width:100%;max-width:253px;right:10px;top:60px;position:absolute}.ui-list-data .theme-loading .loading-img img{max-width:153px;margin-top:0;bottom:0;top:auto;position:absolute;right:0}}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.status-empty.search-empty{padding-left:13%;padding-right:13%;box-sizing:border-box;text-align:center;display:flex;height:100%;min-height:calc(90vh - 59px - 56px - 24px);justify-content:center;align-items:center}.status-empty.search-empty .empty-block{text-align:center;margin:0 auto}.status-empty.search-empty .img-block{max-width:50px;width:100%;margin:0 auto}.status-empty.search-empty .text-block p{padding:0;font-size:1.125rem;line-height:28px}@media (max-width:767px){.status-empty.search-empty.search-empty{max-width:182px;width:100%;margin:0 auto;padding-left:0;padding-right:0}}.ui-list-data{border-top:1px solid #c2c2c2}.ui-list-data .title-sm-block{background-color:#ececec;display:inline-block;width:100%;padding:5px 15px 5px 6px}.ui-list-data .title-sm-block p{padding:0;margin:0}.ui-list-data .list-data-block{list-style-type:none;padding:0;border-bottom:1px solid #c2c2c2}.ui-list-data .list-data-block .list-item-block{padding:12px 15px 12px 6px;box-sizing:border-box;position:relative}.ui-list-data .list-data-block .list-item-block.highlight{background-color:#f5f5f5}@media (min-width:1024px){.ui-list-data .list-data-block .list-item-block.active{background-color:#f1f9fa}}.ui-list-data .list-data-block .list-item-block+.list-item-block{border-top:1px solid #c2c2c2}.ui-list-data .list-data-block .list-item-block .title-block{display:flex;justify-content:flex-start;align-items:flex-start;padding-bottom:5px;min-height:40px}.ui-list-data .list-data-block .list-item-block .title-block .title-text{font-size:.875rem;padding:0 3px;font-weight:700;display:inline-block;width:100%;display:-webkit-box;-webkit-line-clamp:1;/*! autoprefixer: off */-webkit-box-orient:vertical;overflow:hidden}.ui-list-data .list-data-block .list-item-block .like-block{margin-top:2px}.ui-list-data .list-data-block .list-item-block ::ng-deep .progress-whole-block .progress-value-block .progress-block{max-width:100%}.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add{pointer-events:none;display:inline-block;max-width:12px;max-height:12px;width:100%}.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add .btn-like-add{display:inline-block;width:12px}.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add .btn-like-add img{max-width:100%;width:12px}.ui-list-data .list-data-block .list-item-block .profile-block{display:flex;align-items:center;justify-content:flex-end;position:absolute;right:30px;top:36px}.ui-list-data .list-data-block .list-item-block .profile-block .img-profile-block{display:flex;max-width:10%;align-items:center}@media screen and (min-width:1025px){.ui-list-data .list-data-block .list-item-block .title-block .title-text{padding-right:0;margin-right:3px}.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add{max-width:1.2vw;max-height:1.2vw}.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add .btn-like-add{width:1.2vw}.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add .btn-like-add img{width:1.2vw}.ui-list-data .list-data-block .list-item-block .profile-block{right:1.2vw}.ui-list-data .list-data-block .list-item-block .profile-block .img-profile-block{max-width:1.4vw;width:1.4vw}.ui-list-data .list-data-block .list-item-block .profile-block .img-profile-block img{width:1.4vw}}.ui-list-data .list-data-block .list-item-block .content-block{padding-left:12px}.ui-list-data .list-data-block ::ng-deep .tag-item{min-width:40px}.ui-list-data .list-data-block ::ng-deep .tag-item .ul-tag-block{position:relative;top:2px}.ui-list-data .list-data-block ::ng-deep .tag-item ::ng-deep .tag-block{height:14px;padding-top:0;padding-bottom:0}.ui-list-data ::ng-deep .progress-whole-block{padding-bottom:0}.ui-list-data ::ng-deep .progress-text{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}@media (min-width:769px){.ui-list-data ::ng-deep .scroll-content{height:calc(100vh - 80px - 140px)}}@media (max-width:768px){.ui-list-data ::ng-deep .list-data-block .tag-item{padding-right:0;margin-right:35px;width:40px}.ui-list-data .list-data-block .list-item-block .profile-block{top:12px}.ui-list-data .skelton-layout{height:calc(100vh - 60px - 55px - 134px);overflow-y:auto}::ng-deep app-ui-infinite-scroll .infiniti-scroll{max-height:calc(100vh - 60px - 55px - 134px);height:100%}@supports (top:constant(safe-area-inset-top)){::ng-deep app-ui-infinite-scroll .infiniti-scroll{max-height:calc(100vh - constant(safe-area-inset-top) - constant(safe-area-inset-bottom) - 60px - 55px - 134px)}}@supports (top:env(safe-area-inset-top)){::ng-deep app-ui-infinite-scroll .infiniti-scroll{max-height:calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 60px - 55px - 134px)}}}@media (max-width:767px){.ui-list-data ::ng-deep .tag-item{min-width:40px;margin-top:2px;padding-right:35px}.ui-list-data .list-data-block .list-item-block{display:flex;flex-wrap:wrap}.ui-list-data .list-data-block .list-item-block .title-block{justify-content:flex-start;align-items:flex-start;max-width:100%;width:100%;padding-right:0;box-sizing:border-box}.ui-list-data .list-data-block .list-item-block .profile-block{justify-content:center;align-items:flex-start;padding-top:2px;max-width:20px;width:100%;right:15px;top:12px}.ui-list-data .list-data-block .list-item-block .profile-block .img-profile-block{max-width:100%;align-items:center}.ui-list-data .list-data-block .list-item-block .content-block{width:100%}.ui-list-data .list-data-block .list-item-block ::ng-deep .progress-whole-block{display:flex;width:100%;justify-content:flex-end;padding-bottom:0!important}.ui-list-data .list-data-block .list-item-block ::ng-deep .progress-value-block{padding-left:10px}.ui-list-data .list-data-block .list-item-block ::ng-deep .progress-value-block .progress-block{display:none}}"]
                    }] }
        ];
        CustomerListComponent.ctorParameters = function () {
            return [
                { type: i0.ChangeDetectorRef },
                { type: i0.ElementRef },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [showCustomerRuleToken,] }] }
            ];
        };
        CustomerListComponent.propDecorators = {
            customerClick: [{ type: i0.Output }],
            customerLoad: [{ type: i0.Output }],
            customerRefresh: [{ type: i0.Output }],
            customerList: [{ type: i0.Input }],
            filterType: [{ type: i0.Input }]
        };
        return CustomerListComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerDetailComponent = /** @class */ (function () {
        function CustomerDetailComponent(dateUtils, changeDetctor) {
            this.dateUtils = dateUtils;
            this.changeDetctor = changeDetctor;
            this.onEditDetail = new i0.EventEmitter();
            this.onCallPhone = new i0.EventEmitter();
            this.onDeleteDetail = new i0.EventEmitter();
            this.onAddAppointment = new i0.EventEmitter();
            this.followChange = new i0.EventEmitter();
            this._customerDetail = new CustomerDetail();
            this.language = new i1.Language();
            // empty status
            this.isEmptyAppointment = false;
            this.isEmptyEdit = false;
            this.isEmptyDel = false;
            this.isEmptyDetailInfo = false;
            this.isEmptyContactNote = false;
            this.isCollapseBtnShow = true;
            this.isHasAgeRange = false;
            this.isHasContactFrequancy = false;
        }
        Object.defineProperty(CustomerDetailComponent.prototype, "customerDetail", {
            get: /**
             * @return {?}
             */ function () { return this._customerDetail; },
            set: /**
             * @param {?} inputCustomerDetail
             * @return {?}
             */ function (inputCustomerDetail) {
                //check datasource is from OPUS
                this._customerDetail = inputCustomerDetail;
                console.log('inputCustomerDetail: ', inputCustomerDetail);
                if (this._customerDetail.dataSource == 'OPUS') {
                    this.isEmptyDel = true;
                }
                else {
                    this.isEmptyDel = false;
                }
                this._customerDetail.updateEmptyStatus();
                this.convertEmptyValToDisplayText(this._customerDetail);
                this.checkInfoIsEmpty();
                this.changeCollateButton();
                this.changeDetctor.detectChanges();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        CustomerDetailComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @private
         * @return {?}
         */
        CustomerDetailComponent.prototype.changeCollateButton = /**
         * @private
         * @return {?}
         */
            function () {
                console.debug('changeCollateButton', this.customerDetail.tels.length, this.customerDetail.emails.length, this.customerDetail.addresses.length);
                if (this.customerDetail.tels.length <= 2 && this.customerDetail.emails.length <= 1 && this.customerDetail.addresses.length <= 1) {
                    this.isCollapseBtnShow = false;
                }
                else {
                    this.isCollapseBtnShow = true;
                }
                console.debug('isCollapseBtnShow', this.isCollapseBtnShow);
            };
        /**
         * @private
         * @return {?}
         */
        CustomerDetailComponent.prototype.checkInfoIsEmpty = /**
         * @private
         * @return {?}
         */
            function () {
                //if detail info is empty , display no data status      
                if (this.customerDetail.isEmptyInfo) {
                    this.isEmptyDetailInfo = true;
                }
                else {
                    this.isEmptyDetailInfo = false;
                }
            };
        /**
         * @private
         * @param {?} customerDetail
         * @return {?}
         */
        CustomerDetailComponent.prototype.convertEmptyValToDisplayText = /**
         * @private
         * @param {?} customerDetail
         * @return {?}
         */
            function (customerDetail) {
                //if not data set default value(?? or -- --)
                console.log("convertEmptyValToDisplayText: ", customerDetail);
                if (i1.StringUtils.isEmpty(customerDetail.ageRange)) {
                    this.isHasAgeRange = false;
                }
                else {
                    this.isHasAgeRange = true;
                }
                if (i1.StringUtils.isEmpty(customerDetail.contactFrequancy)) {
                    this.isHasContactFrequancy = false;
                }
                else {
                    this.isHasContactFrequancy = true;
                }
                if (i1.StringUtils.isEmpty(customerDetail.gender))
                    customerDetail.gender = '- -';
                if (i1.StringUtils.isEmpty(customerDetail.occupation))
                    customerDetail.occupation = '- -';
                if (i1.StringUtils.isEmpty(customerDetail.company))
                    customerDetail.company = '- -';
                if (i1.StringUtils.isEmpty(customerDetail.income))
                    customerDetail.income = '- -';
                if (i1.StringUtils.isEmpty(customerDetail.source))
                    customerDetail.source = '- -';
                if (i1.StringUtils.isEmpty(customerDetail.marriage))
                    customerDetail.marriage = '- -';
                if (i1.StringUtils.isEmpty(customerDetail.children))
                    customerDetail.children = '- -';
                if (i1.StringUtils.isEmpty(customerDetail.familiarity))
                    customerDetail.familiarity = '- -';
                if (i1.StringUtils.isEmpty(customerDetail.recentStatus))
                    customerDetail.recentStatus = '- -';
                if (i1.StringUtils.isEmpty(customerDetail.manpa))
                    customerDetail.manpa = '- -';
                if (i1.StringUtils.isEmpty(customerDetail.children))
                    customerDetail.children = '- -';
            };
        /**
         * @return {?}
         */
        CustomerDetailComponent.prototype.toBirthday = /**
         * @return {?}
         */
            function () {
                if (this.customerDetail.birthday != undefined) {
                    return this.dateUtils.toDateString(this.customerDetail.birthday, 'yyyy-MM-dd');
                }
                else {
                    return '- -';
                }
            };
        /**
         * @return {?}
         */
        CustomerDetailComponent.prototype.edit = /**
         * @return {?}
         */
            function () {
                this.onEditDetail.emit(this.customerDetail.clientID);
            };
        /**
         * @return {?}
         */
        CustomerDetailComponent.prototype.delete = /**
         * @return {?}
         */
            function () {
                this.onDeleteDetail.emit(this.customerDetail.clientID);
            };
        /**
         * @return {?}
         */
        CustomerDetailComponent.prototype.callPhone = /**
         * @return {?}
         */
            function () {
                this.onCallPhone.emit(this.customerDetail.clientID);
            };
        /**
         * @return {?}
         */
        CustomerDetailComponent.prototype.addAppointment = /**
         * @return {?}
         */
            function () {
                this.onAddAppointment.emit(this.customerDetail.clientID);
            };
        /**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
        CustomerDetailComponent.prototype.trackByFn = /**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
            function (index, item) {
                return item.name;
            };
        /**
         * @param {?} isFollow
         * @return {?}
         */
        CustomerDetailComponent.prototype.isFollowChange = /**
         * @param {?} isFollow
         * @return {?}
         */
            function (isFollow) {
                console.debug('isFollowChange', isFollow);
                // display new follow state first
                this.customerDetail.updateFollowStatus(isFollow);
                this.changeDetctor.detectChanges();
                //ouput follow detail change status
                this.followChange.emit({ 'isFollow': isFollow, "clientID": this.customerDetail.clientID });
            };
        CustomerDetailComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-customer-detail',
                        template: "<!-- has CustomerDetail data-->\n<ng-container *ngIf=\"customerDetail != undefined && customerDetail.clientID != ''; else noCustomerData\">\n  <div class=\"main-detail-content\">\n    <!-- profile -->\n    <div class=\"space-ui-element profile-block\">\n        <div class=\"img-block\" [ngClass]=\"customerDetail.dataSource == 'OPUS' ? '': ' active'\">\n          <!-- if true show active img (green) or show normal img -->\n          <img class=\"normal-img\" src=\"assets/img/img-cust-profile.svg\">\n          <img class=\"active-img\" src=\"assets/img/img-cust-profile-active.svg\">\n        </div>\n        <div class=\"content-block\">\n          <ng-container *ngIf=\"customerDetail.possibility != ''\">\n              <app-ui-form-radio-tag class=\"wd-lg profile-tag\" [checked]=\"true\" [disabled]=\"true\" [ngClass]=\"customerDetail.possibility\">{{customerDetail.possibility|translate}}</app-ui-form-radio-tag>\n          </ng-container>\n          \n          <div class=\"name-block\">\n              {{customerDetail.lastName  + customerDetail.firstName}}\n          </div>\n          <div class=\"sm-text\">\n              <span class=\"age\" *ngIf=\"isHasAgeRange\">\n                ({{customerDetail.ageRange}})\n              </span>\n              <span class=\"detail-text\" *ngIf=\"isHasContactFrequancy\">\n                  {{language.contactFrequency|translate }}\n                  <span class=\"text-focus\">{{customerDetail.contactFrequancy}}</span>\n                  {{language.timePerYear|translate }}\n              </span>\n            </div>\n        </div>\n        <div class=\"like-block\">\n          <app-ui-btn-like-add [isLike]=\"customerDetail.isFollow\" (onChange)=\"isFollowChange($event)\"></app-ui-btn-like-add>\n        </div>\n        \n    </div>\n    <!-- end of profile -->\n\n    <!-- link -->\n    <ul class=\"space-ui-element ui-list-block\">\n        <li class=\"list-item-block\" [ngClass]=\"isEmptyAppointment? ' disable': ''\">\n            <button Action action='addAppointment' (actionClick)=\"addAppointment()\">\n                <div class=\"img-block\">\n                    <img class=\"img-disable\" src=\"assets/img/icon-cust-appointment-disable.svg\">\n                    <img class=\"img-normal\" src=\"assets/img/icon-cust-appointment.svg\">\n                </div>\n                <div class=\"text-block\">\n                    <p>{{language.appointment|translate }}</p>\n                </div>\n            </button>\n        </li>\n        <li class=\"list-item-block\" [ngClass]=\"customerDetail.tels.length == 0? ' disable': ''\">\n            <button Action action=\"customerCallPhone\" (actionClick)=\"callPhone()\">\n                <div class=\"img-block\">\n                    <img class=\"img-disable\" src=\"assets/img/icon-cust-contact-disable.svg\">\n                    <img class=\"img-normal\" src=\"assets/img/icon-cust-contact.svg\">\n                </div>\n                <div class=\"text-block\">\n                    <p>{{language.contact|translate }}</p>\n                </div>\n            </button>\n        </li>\n        <li class=\"list-item-block\" [ngClass]=\"isEmptyEdit? ' disable': ''\">\n            <button Action action=\"customerEdit\" (actionClick)=\"edit()\">\n                <div class=\"img-block\">\n                    <img class=\"img-disable\" src=\"assets/img/icon-cust-edit-disable.svg\">\n                    <img class=\"img-normal\" src=\"assets/img/icon-cust-edit.svg\">\n                </div>\n                <div class=\"text-block\">\n                    <p>{{language.edit|translate }}</p>\n                </div>\n            </button>\n        </li>\n        <li class=\"list-item-block\" [ngClass]=\"isEmptyDel? ' disable': ''\">\n            <button Action action=\"customerDelete\" (actionClick)=\"delete()\">\n                <div class=\"img-block\">\n                    <img class=\"img-disable\" src='assets/img/icon-cust-del-disable.svg'>\n                    <img class=\"img-normal\" src=\"assets/img/icon-cust-del.svg\">\n                </div>\n                <div class=\"text-block\">\n                    <p>{{language.delete|translate }}</p>\n                </div>\n            </button>\n            \n        </li>\n    </ul>\n    <!-- end of link block -->\n    <div *ngTemplateOutlet=\"detailPreTemplate\"></div>\n    <!-- first card -->\n    <app-ui-collapse-text1 class=\"card1-all-block\" [(isCollapseBtnShow)]=\"isCollapseBtnShow\" [translateEmpty]=\"language.empty | translate\" [isDataEmpty]=\"customerDetail.tels.length == 0 && customerDetail.emails.length == 0 && customerDetail.addresses.length == 0\">\n          <!-- \u96FB\u8A71-->\n          <ng-container TextType=\"collapseContentOrigin\">\n              <ng-container *ngIf=\"customerDetail.tels.length != 0\">\n                  <app-ui-info-text1 [imgSrc]=\"'assets/img/icon-form-phone.svg'\">\n                    <ng-container textType=\"title\">{{customerDetail.tels[0].telType|translate }}</ng-container>\n                    <ng-container textType=\"text\">{{customerDetail.tels[0].tel }}</ng-container>\n                </app-ui-info-text1>\n              </ng-container>\n          </ng-container>\n\n          <ng-container TextType=\"collapseContentOrigin2\">\n              <ng-container *ngIf=\"customerDetail.tels.length > 1\">\n                  <app-ui-info-text1 >\n                    <ng-container textType=\"title\">{{customerDetail.tels[1].telType|translate}}</ng-container>\n                    <ng-container textType=\"text\">{{customerDetail.tels[1].tel}}</ng-container>\n                </app-ui-info-text1>\n              </ng-container>\n          </ng-container>\n\n          <ng-container TextType=\"collapseContent\">\n              <ng-container *ngIf=\"customerDetail.tels.length > 2\">\n                <ng-container *ngFor=\"let customerTel of customerDetail.tels; let i = index;\">\n                  <ng-container *ngIf=\"i > 1 && (i + 1) % 2 != 0\">\n                      <app-ui-info-text1>\n                        <ng-container textType=\"title\">{{customerTel.telType|translate}}</ng-container>\n                        <ng-container textType=\"text\">{{customerTel.tel}}</ng-container>\n                      </app-ui-info-text1>\n                </ng-container>\n                  </ng-container>\n                </ng-container>\n            </ng-container>\n\n            <ng-container TextType=\"collapseContent2\">\n                <ng-container *ngIf=\"customerDetail.tels.length > 2\">\n                  <ng-container *ngFor=\"let customerTel of customerDetail.tels; let i = index;\">\n                    <ng-container *ngIf=\"i > 1 && (i + 1) % 2 == 0\">\n                        <app-ui-info-text1>\n                          <ng-container textType=\"title\">{{customerTel.telType|translate}}</ng-container>\n                          <ng-container textType=\"text\">{{customerTel.tel}}</ng-container>\n                        </app-ui-info-text1>\n                  </ng-container>\n                    </ng-container>\n                  </ng-container>\n              </ng-container>\n          <!-- end of \u96FB\u8A71-->\n\n          <!-- Email-->        \n          <ng-container TextType=\"collapseContentOrigin3\">\n              <ng-container *ngIf=\"customerDetail.emails.length != 0\">\n              <app-ui-info-text1  [imgSrc]=\"'assets/img/icon-form-mail.svg'\">\n                <ng-container textType=\"title\">{{customerDetail.emails[0].emailType|translate}}</ng-container>\n                <ng-container textType=\"text\">{{customerDetail.emails[0].email}}</ng-container>\n              </app-ui-info-text1>\n             </ng-container>     \n          </ng-container>\n\n          <ng-container TextType=\"collapseContent3\">\n              <ng-container *ngIf=\"customerDetail.emails.length > 1\">\n                <ng-container *ngFor=\"let email of customerDetail.emails ; let i = index\">\n                  <ng-container *ngIf=\"i >= 1\">\n                      <app-ui-info-text1>\n                        <ng-container textType=\"title\">{{email.emailType|translate}}</ng-container>\n                        <ng-container textType=\"text\">{{email.email}}</ng-container>\n                      </app-ui-info-text1>\n                  </ng-container>                     \n              </ng-container>\n              </ng-container>            \n          </ng-container>\n          <!-- end of Email-->\n\n          <!-- Address-->\n          \n          <ng-container TextType=\"collapseContentOrigin4\">\n              <ng-container *ngIf=\"customerDetail.addresses.length != 0\">\n                  <app-ui-info-text1 [imgSrc]=\"'assets/img/icon-form-addr.svg'\">\n                    <ng-container textType=\"title\">{{customerDetail.addresses[0].addressType|translate}}</ng-container>\n                    <ng-container textType=\"text\">{{customerDetail.addresses[0].toFullAddress()}}</ng-container>\n                  </app-ui-info-text1>\n              </ng-container>\n          </ng-container>\n\n          <ng-container TextType=\"collapseContent4\">\n              <ng-container *ngIf=\"customerDetail.addresses.length > 1\">\n                  <ng-container *ngFor=\"let address of customerDetail.addresses ; let i = index\">\n                      <ng-container *ngIf=\"i >= 1\">\n                          <app-ui-info-text1 [imgSrc]=\"''\">\n                              <ng-container textType=\"title\">{{address.addressType|translate}}</ng-container>\n                              <ng-container textType=\"text\">{{address.toFullAddress()}}</ng-container>\n                            </app-ui-info-text1>\n                      </ng-container>                    \n                  </ng-container>  \n              </ng-container>\n            \n          </ng-container>\n\n          \n                \n          <!-- end of Address-->\n      \n    </app-ui-collapse-text1>\n\n    <!-- end of first card -->\n\n\n    <!-- 2nd card -->\n    <app-ui-collapse-card1 [isDataEmpty]=\"isEmptyDetailInfo\" [tagText]=\"[language.detail | translate]\" [emptyText]=\"[language.noClick | translate, language.noInformation | translate]\" >\n        <ng-container textType=\"collapseContentOrigin\">\n            <app-ui-form-layout-row>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.birthday|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{toBirthday()}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.gender|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.gender}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n            </app-ui-form-layout-row>\n            <app-ui-form-layout-row>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.occupation|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.occupation}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.company|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.company}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n            </app-ui-form-layout-row>\n            <app-ui-form-layout-row>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.annualIncome|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.income}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.source|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.source}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n            </app-ui-form-layout-row>\n            <app-ui-form-layout-row>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.marriage|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.marriage}} </ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.children|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.children}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n            </app-ui-form-layout-row>\n            <app-ui-form-layout-row>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.familiarity|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.familiarity}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.recentStatus|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.recentStatus}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n            </app-ui-form-layout-row>\n            <app-ui-form-layout-row>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.customerStatus|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.manpa}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>        \n\n              <!-- <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                  <app-ui-info-text2>\n                    <ng-container textType=\"title\">{{language.extraItem|translate }}</ng-container>\n                    <ng-container textType=\"text\">ExtraItem</ng-container>\n                  </app-ui-info-text2>\n                </app-ui-form-layout-col>      -->\n            </app-ui-form-layout-row>\n        </ng-container>\n        <ng-container textType=\"collapseContent\">\n            <!-- <app-ui-form-layout-row>\n                \n              </app-ui-form-layout-row>\n\n              <app-ui-form-layout-row>\n                <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                  <app-ui-info-text2>\n                    <ng-container textType=\"title\">ExtraItem3</ng-container>\n                    <ng-container textType=\"text\">ExtraItem3</ng-container>\n                  </app-ui-info-text2>\n                </app-ui-form-layout-col>\n              </app-ui-form-layout-row> -->\n        </ng-container>\n    </app-ui-collapse-card1>\n    <!-- end of 2nd card -->\n    <div *ngTemplateOutlet=\"detailPostTemplate\"></div>\n  </div>\n</ng-container>\n\n<ng-template #noCustomerData>\n  <div class=\"main-detail-content skelton-layout\">\n    <div class=\"theme-loading\" style=\"background-image:url('assets/img/loading-customer-main.svg')\">\n      <!-- profile -->\n      <div class=\"space-ui-element profile-block\">\n          <div class=\"img-block\">\n            <div class=\"skeleton-round \"></div>\n          </div>\n          <div class=\"content-block\">\n            <div class=\"tag-block\">\n                <div class=\"skelton-text  \" ></div>\n            </div>\n            <div class=\"name-block\">\n                <div class=\"skelton-text \" ></div>\n            </div>\n            <div class=\"sm-text\">\n                <div class=\"skelton-text \" ></div>\n            </div>\n          </div>\n      </div>\n      <!-- end of profile -->\n      <!-- link list -->\n      <ul class=\"ui-list-block\">\n          <li class=\"list-item-block\" *ngFor='let number of [0,1,2,3]' >\n              <div class=\"skelton-img-text\">\n                  <div class=\"skelton-square\">\n                      <div class=\"skeleton-round \"></div>\n                  </div>\n                  <div class=\"skelton-text \" ></div>\n              </div>\n          </li>\n      </ul>\n      <!-- end of link list -->\n      <!-- line -->\n      <div class=\"skelton-line-block\">\n          <div class=\"skelton-line \"></div>\n      </div>\n      <!-- end of line -->\n  \n      <!-- list data -->\n      <div class=\"card-text\">\n        <div class=\"left-part\">\n          <div class=\"data-group\">\n              \n              <div class=\"skelton-text   wd-short\"></div>\n              <div class=\"skelton-text   wd-long\"></div>\n              <div class=\"skelton-text   wd-short\"></div>\n              <div class=\"skelton-text   wd-long\"></div>\n              <div class=\"skelton-text   wd-long\"></div>\n          </div>\n        </div>\n        <div class=\"right-part\">\n            <div class=\"data-group\">\n                <div class=\"skelton-text   wd-short\"></div>\n                <div class=\"skelton-text   wd-long\"></div>\n                <div class=\"skelton-text   wd-short\"></div>\n                <div class=\"skelton-text   wd-long\"></div>\n            </div>\n        </div>\n      </div>\n  \n      <!-- end of list data -->\n  \n       <!-- line -->\n       <div class=\"skelton-line-block\">\n          <div class=\"skelton-line \"></div>\n      </div>\n       <!-- end of line -->\n  \n  \n      \n    </div>\n  </div>\n    <!-- Customer data is empty -->\n</ng-template>\n",
                        styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.skelton-layout{margin:0}.skelton-row{display:flex}.skelton-row.align-side{justify-content:space-between}.align-right{margin:0 0 15px auto}.align-center{margin:15px auto}.skeleton-round{border-radius:50%;background-color:#ececec;max-width:100%;max-height:100%;width:100%;height:100%}.skelton-square{display:inline-block;width:30px;height:30px}.skelton-text{min-height:1rem;max-width:100%;width:100%;background-color:#ececec;display:block;margin-bottom:15px}.skelton-line{display:inline-block;max-width:100%;width:100%;background-color:#ececec;height:1px}.skelton-img-text .skelton-square{margin-bottom:10px}::ng-deep ion-skeleton-text{background-color:#ececec}::ng-deep ion-skeleton-text span{opacity:1;background-color:#ececec}.skelton-animate{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:rgba(194,194,194,.3);background:linear-gradient(to right,rgba(194,194,194,.3) 8%,rgba(194,194,194,.2) 18%,rgba(194,194,194,.3) 33%);background-size:800px 100px;position:relative}@-webkit-keyframes placeHolderShimmer{0%{background-position:-268px 0}100%{background-position:268px 0}}@keyframes placeHolderShimmer{0%{background-position:-268px 0}100%{background-position:268px 0}}.main-detail-content.skelton-layout{margin:0 -40px 0 0}@media (max-width:767px){.main-detail-content.skelton-layout{margin-right:-40px}.main-detail-content.skelton-layout .profile-block .content-block{max-width:70%}.main-detail-content.skelton-layout .theme-loading .ui-list-block .list-item-block{margin-right:0}}.main-detail-content .skelton-line-block{padding-right:40px}.main-detail-content .theme-loading{background-size:contain;background-position:bottom right;background-repeat:no-repeat;width:100%;min-height:100vh;padding-right:40px}.main-detail-content .theme-loading .profile-block .img-block{display:inline-block;max-width:100%;width:63px;height:63px;padding-right:0;margin-right:20px}.main-detail-content .theme-loading .profile-block .tag-block{max-width:15%}.main-detail-content .theme-loading .profile-block .name-block{max-width:30%;padding-bottom:0}.main-detail-content .theme-loading .profile-block .sm-text{max-width:55%}.main-detail-content .theme-loading .profile-block ::ng-deep ion-skeleton-text{margin-bottom:10px}.main-detail-content .theme-loading .ui-list-block{margin-bottom:20px}.main-detail-content .theme-loading .ui-list-block .list-item-block{margin-right:5%}.main-detail-content .theme-loading .ui-list-block .skelton-img-text .skelton-text{max-width:80%;margin:0 auto}.main-detail-content .theme-loading .skelton-square{width:3rem;height:3rem}.main-detail-content .theme-loading .card-text{display:flex}.main-detail-content .theme-loading .card-text .left-part{width:40%;box-sizing:border-box;padding:2rem}.main-detail-content .theme-loading .card-text .right-part{width:60%;box-sizing:border-box;padding:2rem}.main-detail-content .theme-loading .card-text .wd-short{max-width:5rem}.main-detail-content .theme-loading .card-text .wd-long{max-width:100%}@media (min-width:768px){.main-detail-content{padding-right:40px}.main-detail-content.skelton-layout{padding-right:0}}@media (min-width:769px){.main-detail-content{padding-top:40px}}.profile-block{display:flex;justify-content:flex-start;flex-wrap:wrap;width:100%;position:relative}.profile-block .img-block{padding-right:15px}.profile-block .img-block img{border-radius:50%;display:inline-block;width:60px;height:60px}.profile-block .img-block .active-img,.profile-block .img-block.active .normal-img{display:none}.profile-block .img-block.active .active-img{display:block}.profile-block .content-block{max-width:calc(100% - 40px - 10px - 60px - 15px);width:100%}.profile-block .content-block ::ng-deep .tag-block{margin-bottom:5px}.profile-block .content-block .name-block{font-size:1.25rem;font-weight:700;padding-bottom:5px;line-height:28px;white-space:normal;word-wrap:break-word}.profile-block .sm-text{font-size:.875rem;line-height:28px;width:100%}.profile-block .sm-text .text-focus{color:#003781;font-weight:700;font-size:1.125rem;display:inline-block;padding:0 5px;vertical-align:middle}.profile-block .age{display:inline-block;line-height:28px;min-height:28px;margin-right:5px}.profile-block .like-block{position:absolute;top:0;right:0}.profile-block .like-block ::ng-deep img{max-width:40px;width:100%}@media (max-width:768px){.main-detail-content{padding-top:30px}.profile-block{padding-left:15px;padding-right:6px;position:static}.profile-block .like-block{right:10px;top:10px}.profile-block .img-block{padding-right:10px}.profile-block .img-block img{width:45px;height:45px}.profile-block .content-block{max-width:calc(100% - 45px - 10px)}.profile-block .content-block .name-block{padding-right:50px}}@media screen and (min-width:1025px){.profile-block .img-block{width:calc(caculate-vw($wd-profile-img) + 15px)}.profile-block .img-block img{width:6vw;height:6vw}.profile-block .content-block{max-width:calc(100% - 4vw - 10px - 6vw - 15px)}.profile-block .like-block ::ng-deep img{max-width:4vw}}.ui-list-block{display:flex;list-style-type:none;margin-right:-30px;justify-content:center;align-items:baseline}.ui-list-block button{border:none;background-color:transparent;padding:0}.ui-list-block .list-item-block{width:25%;max-width:5.625rem;text-align:center;margin-right:30px}.ui-list-block .list-item-block .img-block{max-width:40px;width:100%;margin:0 auto}.ui-list-block .list-item-block .img-block img{max-width:100%;width:100%}.ui-list-block .list-item-block.disable{pointer-events:none}.ui-list-block .list-item-block.disable .text-block{color:#414141}.ui-list-block .list-item-block .img-disable,.ui-list-block .list-item-block.disable .img-normal{display:none}.ui-list-block .list-item-block.disable .img-disable{display:inline-block;pointer-events:none}.ui-list-block .list-item-block .text-block p{color:#414141;line-height:normal;font-size:.875rem;margin:4px 0 0}@media (min-width:1023px){.ui-list-block .ui-list-block{padding-left:13%;padding-right:13%;box-sizing:border-box}}@media (max-width:767px){.ui-list-block{flex-wrap:wrap;margin-right:-10px}.ui-list-block .list-item-block{margin-right:0;max-width:100px}}@media (max-width:374px){.ui-list-block{flex-wrap:wrap;margin-right:0}.ui-list-block .list-item-block{margin-right:0}.ui-list-block .list-item-block .text-block p{font-size:.75rem}}@media screen and (min-width:1025px){.ui-list-block .list-item-block{max-width:9vw}.ui-list-block .list-item-block .img-block{max-width:4vw;width:4vw}}::ng-deep .card1-all-block .card-content-block{padding-top:20px}::ng-deep .card1-all-block .gas-row-block{margin-top:0}::ng-deep .card1-all-block .gas-row-block+.gas-row-block{margin-top:4px}@media (min-width:769px){::ng-deep .card1-all-block .gas-layout-form{box-sizing:border-box;padding-left:51px;padding-right:64px}::ng-deep .card1-all-block .gas-row-block{margin-top:0}}@media (max-width:767px){::ng-deep .card1-all-block .gas-layout-form{padding-left:15px}}"]
                    }] }
        ];
        CustomerDetailComponent.ctorParameters = function () {
            return [
                { type: i1.DateUtils },
                { type: i0.ChangeDetectorRef }
            ];
        };
        CustomerDetailComponent.propDecorators = {
            onEditDetail: [{ type: i0.Output }],
            onCallPhone: [{ type: i0.Output }],
            onDeleteDetail: [{ type: i0.Output }],
            onAddAppointment: [{ type: i0.Output }],
            followChange: [{ type: i0.Output }],
            detailPreTemplate: [{ type: i0.Input }],
            detailPostTemplate: [{ type: i0.Input }],
            customerDetail: [{ type: i0.Input }]
        };
        return CustomerDetailComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerContactListComponent = /** @class */ (function () {
        function CustomerContactListComponent(dateUtils, elementRef) {
            this.dateUtils = dateUtils;
            this.language = new i1.Language();
            this.onAddNote = new i0.EventEmitter();
            this.onDisplayNote = new i0.EventEmitter();
            this.onEditNote = new i0.EventEmitter();
            this.onDeleteNote = new i0.EventEmitter();
            this.contactListRefresh = new i0.EventEmitter();
            this.elementRef = elementRef;
        }
        Object.defineProperty(CustomerContactListComponent.prototype, "contactList", {
            get: /**
             * @return {?}
             */ function () { return this._contactList; },
            set: /**
             * @param {?} contactList
             * @return {?}
             */ function (contactList) {
                var _this = this;
                this._contactList = contactList;
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.closeSlidingItems();
                }), 200);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        CustomerContactListComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        CustomerContactListComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.closeSlidingItems();
                }), 200);
            };
        // ionic sliding need to call close event when every refresh
        // ionic sliding need to call close event when every refresh
        /**
         * @return {?}
         */
        CustomerContactListComponent.prototype.closeSlidingItems =
            // ionic sliding need to call close event when every refresh
            /**
             * @return {?}
             */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var item;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.debug('closeSlidingItems');
                                item = this.elementRef.nativeElement.querySelector('ion-item-sliding');
                                if (!(item != null))
                                    return [3 /*break*/, 3];
                                /// console.debug('item size',item.length);
                                console.debug('item', item);
                                return [4 /*yield*/, item.close()];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, item.closeOpened()];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @return {?}
         */
        CustomerContactListComponent.prototype.refreshContactNote = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.contactListRefresh.emit();
                // need to wait ion-item-sliding create at first from no data (when skelton interface)
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.closeSlidingItems();
                }), 200);
            };
        /**
         * @return {?}
         */
        CustomerContactListComponent.prototype.addNote = /**
         * @return {?}
         */
            function () {
                this.onAddNote.emit();
            };
        /**
         * @param {?} note
         * @return {?}
         */
        CustomerContactListComponent.prototype.displayNote = /**
         * @param {?} note
         * @return {?}
         */
            function (note) {
                this.onDisplayNote.emit(note);
            };
        /**
         * @param {?} note
         * @return {?}
         */
        CustomerContactListComponent.prototype.editNote = /**
         * @param {?} note
         * @return {?}
         */
            function (note) {
                this.onEditNote.emit(note);
            };
        /**
         * @param {?} note
         * @return {?}
         */
        CustomerContactListComponent.prototype.deleteNote = /**
         * @param {?} note
         * @return {?}
         */
            function (note) {
                this.onDeleteNote.emit(note);
            };
        /**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
        CustomerContactListComponent.prototype.trackByClientID = /**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
            function (index, item) {
                return item.getClientID();
            };
        /**
         * @param {?} time
         * @return {?}
         */
        CustomerContactListComponent.prototype.toNoteTime = /**
         * @param {?} time
         * @return {?}
         */
            function (time) {
                return this.dateUtils.toDateString(time, 'yyyy-MM-dd HH:mm');
            };
        CustomerContactListComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-customer-contact-list',
                        template: "<ng-container *ngIf=\"contactList\">\n    <div #slidingListBlock class=\" contact-list-block\">\n        <!-- Contact Note -->\n        <app-ui-title-style1 [isShowOther]=\"true\">\n            <ng-container textType=\"titleText\">\n                {{language.contactNote |translate }}\n            </ng-container>\n            <ng-container textType=\"otherEle\">\n                <app-ui-link [isUnderLine]=\"false\" imgSrc=\"./assets/img/icon-add-blue-text.svg\" Action action=\"customerAddNote\" (actionClick)=\"addNote()\">\n                    <ng-container textType=\"linktext\">{{language.add |translate }}</ng-container>\n                </app-ui-link>\n            </ng-container>\n        </app-ui-title-style1>\n        <!-- end of Contact Note  -->\n\n        <!--contact note empty -->\n        <ng-container *ngIf=\"contactList && contactList.length != 0 ; else noContactData\">\n                <!-- <app-ui-infinite-scroll (loadingCallback)=\"loadContactList($event)\"> -->\n\n                        <app-ui-item-sliding>\n                                <app-ui-item *ngFor=\"let customerContactNote of contactList;trackBy:trackByClientID;\" (onItemClick)=\"displayNote(customerContactNote)\">\n                                \n                                <div ui-item-content class=\"item\" >\n                                    <p class=\"title\">{{ toNoteTime(customerContactNote.date)}}</p>\n                                    <p class=\"desc\">{{ customerContactNote.noteMessage}}</p>\n                                </div>\n                            \n                                <!-- \u53F3\u6ED1\u5448\u73FE\u9078\u9805\uFF0C\u653E\u5728\u5C6C\u6027 side=\"end\" \u4E2D -->\n                                <app-ui-item-options side=\"end\" class=\"option-block-end\">\n                                    <app-ui-item-option class=\"btn-option option-color-normal\"  (onItemOptionClick)=\"editNote(customerContactNote)\">\n                                        <img src=\"assets/img/icon-list-pen-full.svg\" alt=\"edit\">\n                                    </app-ui-item-option>\n                                    <app-ui-item-option class=\"btn-option option-color-focus\"  (onItemOptionClick)=\"deleteNote(customerContactNote)\">\n                                        <img src=\"assets/img/icon-trash-full.svg\" alt=\"delete\">\n                                    </app-ui-item-option>\n                                </app-ui-item-options>\n                                </app-ui-item>\n                        </app-ui-item-sliding>\n                <!-- </app-ui-infinite-scroll> -->\n        </ng-container>\n\n        <ng-template #noContactData>\n            <div class=\"empty-whole-block\">\n                <div class=\"status-empty contact-note-empty empty-block\" Action action=\"customerAddNote\" (actionClick)=\"addNote()\">\n                    <div class=\"empty-show-block\">\n                        <div class=\"empty-img\">\n                        <img src=\"assets/img/empty-img-customer-note.svg\">\n                        </div>\n                        <div class=\"text\">\n                                {{language.noRecord |translate }}\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </ng-template>\n        <!-- end of contact note empty -->\n    </div>\n\n</ng-container>\n\n\n",
                        styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.empty-whole-block{padding-left:2px}.contact-note-empty{background-color:#fff;display:flex;align-items:center;justify-content:center;box-sizing:border-box;padding:30px;border-radius:5px;box-shadow:0 2px 4px 0 rgba(0,0,0,.19);overflow:visible}.contact-note-empty .empty-show-block{background-color:#fff;display:flex;align-items:center;justify-content:center;box-sizing:border-box;padding:30px;border-radius:5px}.contact-note-empty .empty-show-block .empty-img{display:inline-block;max-width:75px}.contact-note-empty .empty-show-block .empty-img img{max-width:100%}.contact-note-empty .empty-show-block .text{margin-left:50px;max-width:196px;width:100%;color:#414141;font-size:1.125rem;line-height:28px;font-weight:300}@media (max-width:1023px){.contact-note-empty{padding:0}}@media (max-width:374px){.contact-note-empty .empty-show-block{padding:30px 10px}.contact-note-empty .empty-show-block .text{margin-left:22px}}@media (min-width:767px){.contact-list-block{padding-right:40px}}.contact-list-block{padding-bottom:100px}:host app-ui-item-sliding{background-color:#f5f5f5}:host app-ui-item-sliding .ui-item{padding:20px}:host app-ui-item-sliding .item .title{font-size:.875rem;font-weight:700;color:#414141;position:relative;line-height:28px;margin-bottom:1px}:host app-ui-item-sliding .item .title:before{content:'';display:inline-block;width:15px;height:1px;background-color:#007ab3;position:absolute}:host app-ui-item-sliding .item .desc{/*! autoprefixer: off */-webkit-box-orient:vertical;font-size:1.125rem;color:#414141;font-weight:300;line-height:28px;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2}:host app-ui-item-sliding .option-color-normal{background-color:#ececec}:host app-ui-item-sliding .option-color-normal ::ng-deep ion-item-option{background-color:#ececec}:host app-ui-item-sliding .option-color-focus{background-color:#dc3149}:host app-ui-item-sliding .option-color-focus ::ng-deep ion-item-option{background-color:#dc3149}:host app-ui-item-sliding .btn-option ::ng-deep ion-item-option{padding:0 27px}:host app-ui-item-sliding .option-block-end .btn-option{color:#fff;text-align:center}:host app-ui-item-sliding .option-block-end .btn-option img{margin:0 auto;max-width:24px;width:100%}:host app-ui-item-sliding ::ng-deep .list-block{background-color:#f5f5f5}:host app-ui-item-sliding ::ng-deep .list-block app-ui-item:first-of-type .item-native{border-radius:5px 5px 0 0}:host app-ui-item-sliding ::ng-deep .list-block app-ui-item:last-of-type .item-native{border-radius:0 0 5px 5px}:host app-ui-item-sliding ::ng-deep ion-item .ui-item{margin:0;padding:21px 30px 21px 2px}:host app-ui-item-sliding ::ng-deep ion-list{margin:0;padding-left:1px}:host app-ui-item-sliding ::ng-deep .item-native{padding-left:0;border-radius:5px}:host app-ui-item-sliding ::ng-deep .item-inner{padding-right:0}@media (max-width:767px){:host app-ui-item-sliding ::ng-deep :host app-ui-item-sliding .desc{-webkit-line-clamp:3}:host app-ui-item-sliding ::ng-deep ion-item .ui-item{padding:21px 15px 21px 2px}:host app-ui-item-sliding .item .desc{-webkit-line-clamp:3}}@media screen and (min-width:1025px){:host app-ui-item-sliding .option-block-end .btn-option img{max-width:2.4vw}}"]
                    }] }
        ];
        CustomerContactListComponent.ctorParameters = function () {
            return [
                { type: i1.DateUtils },
                { type: i0.ElementRef, decorators: [{ type: i0.Inject, args: [i0.ElementRef,] }] }
            ];
        };
        CustomerContactListComponent.propDecorators = {
            onAddNote: [{ type: i0.Output }],
            onDisplayNote: [{ type: i0.Output }],
            onEditNote: [{ type: i0.Output }],
            onDeleteNote: [{ type: i0.Output }],
            contactListRefresh: [{ type: i0.Output }],
            contactList: [{ type: i0.Input }]
        };
        return CustomerContactListComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerFilterComponent = /** @class */ (function () {
        function CustomerFilterComponent(customerService, profileCodeService) {
            this.customerService = customerService;
            this.profileCodeService = profileCodeService;
            this.isAsPresent = false; //選單是否將此次項目變成預設
            //control filter column mapping to profilecode array
            this.filterColumnMap = new Map();
            //Input criteria
            this._criteria = new CustomerFilterCriteria();
            this.doneCriteria = new i0.EventEmitter();
            this.language = new i1.Language();
        }
        Object.defineProperty(CustomerFilterComponent.prototype, "criteria", {
            get: /**
             * @return {?}
             */ function () {
                return this._criteria;
            },
            set: /**
             * @param {?} criteria
             * @return {?}
             */ function (criteria) {
                console.log("set criteria:", criteria);
                this._criteria = criteria;
                this.isAsPresent = criteria.savePreset;
                this.refreshFilterMap();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        CustomerFilterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.customerType = this.profileCodeService.getCodeArray('Customer_Type');
                this.customerDataSource = this.profileCodeService.getCodeArray('Customer_DataSource');
                this.possibility = this.profileCodeService.getCodeArray('Customer_Possibility');
                this.children = this.profileCodeService.getCodeArray('Customer_Children');
                this.source = this.profileCodeService.getCodeArray('Customer_Source');
                this.familiarity = this.profileCodeService.getCodeArray('Customer_Familiarity');
                this.recentStatus = this.profileCodeService.getCodeArray('Customer_RecentStatus');
                this.age = this.profileCodeService.getCodeArray('Customer_Age');
                this.gender = this.profileCodeService.getCodeArray('Customer_Gender');
                this.income = this.profileCodeService.getCodeArray('Customer_Income');
                this.marriage = this.profileCodeService.getCodeArray('Customer_Marriage');
                this.manpa = this.profileCodeService.getCodeArray('Customer_Status');
                this.contactFrequency = this.profileCodeService.getCodeArray('Customer_ContactFrequancy');
                this.birthday = this.profileCodeService.getCodeArray('Customer_Birthday');
                this.completeness = this.profileCodeService.getCodeArray('Customer_Completeness');
                this.filterColumnMap.set('IsFollow', this.customerType);
                this.filterColumnMap.set('DataSource', this.customerDataSource);
                this.filterColumnMap.set('Possibility', this.possibility);
                this.filterColumnMap.set('Source', this.source);
                this.filterColumnMap.set('Familiarity', this.familiarity);
                this.filterColumnMap.set('RecentStatus', this.recentStatus);
                this.filterColumnMap.set('MANPA', this.manpa);
                this.filterColumnMap.set('Gender', this.gender);
                this.filterColumnMap.set('Marriage', this.marriage);
                this.filterColumnMap.set('Children', this.children);
                this.filterColumnMap.set('Income', this.income);
                this.filterColumnMap.set('AgeRange', this.age);
                this.filterColumnMap.set('Birthday', this.birthday);
                this.filterColumnMap.set('ContactFrequancy', this.contactFrequency);
                this.filterColumnMap.set('Completeness', this.completeness);
                if (this.criteria.getFilterMap().size == 0)
                    this.clearCriteria();
                if (this.clear) {
                    this.clear.subscribe(( /**
                     * @return {?}
                     */function () {
                        _this.clearCriteria();
                    }));
                }
                if (this.save) {
                    this.save.subscribe(( /**
                     * @return {?}
                     */function () {
                        _this.saveCriteria();
                    }));
                }
            };
        /**
         * @return {?}
         */
        CustomerFilterComponent.prototype.onClick = /**
         * @return {?}
         */
            function () {
                // console.debug(this.isAsPresent);
                this.isAsPresent = false;
            };
        /**
         * @private
         * @param {?} array
         * @return {?}
         */
        CustomerFilterComponent.prototype._resetFilter = /**
         * @private
         * @param {?} array
         * @return {?}
         */
            function (array) {
                var e_1, _a;
                try {
                    for (var array_1 = __values(array), array_1_1 = array_1.next(); !array_1_1.done; array_1_1 = array_1.next()) {
                        var profileCode = array_1_1.value;
                        profileCode.isCheck = false;
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (array_1_1 && !array_1_1.done && (_a = array_1.return))
                            _a.call(array_1);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
            };
        /**
         * @private
         * @param {?} defaultArray
         * @param {?} array
         * @return {?}
         */
        CustomerFilterComponent.prototype._addDefaultChecked = /**
         * @private
         * @param {?} defaultArray
         * @param {?} array
         * @return {?}
         */
            function (defaultArray, array) {
                var e_2, _a;
                try {
                    for (var array_2 = __values(array), array_2_1 = array_2.next(); !array_2_1.done; array_2_1 = array_2.next()) {
                        var profileCode = array_2_1.value;
                        if (defaultArray.includes(profileCode.getCode())) {
                            profileCode.isCheck = true;
                        }
                    }
                }
                catch (e_2_1) {
                    e_2 = { error: e_2_1 };
                }
                finally {
                    try {
                        if (array_2_1 && !array_2_1.done && (_a = array_2.return))
                            _a.call(array_2);
                    }
                    finally {
                        if (e_2)
                            throw e_2.error;
                    }
                }
            };
        /**
         * @private
         * @param {?} criteriaColumn
         * @param {?} array
         * @param {?} criteria
         * @return {?}
         */
        CustomerFilterComponent.prototype._addCriteria = /**
         * @private
         * @param {?} criteriaColumn
         * @param {?} array
         * @param {?} criteria
         * @return {?}
         */
            function (criteriaColumn, array, criteria) {
                var e_3, _a;
                try {
                    for (var array_3 = __values(array), array_3_1 = array_3.next(); !array_3_1.done; array_3_1 = array_3.next()) {
                        var profileCode = array_3_1.value;
                        if (profileCode.isCheck) {
                            criteria.addCriteria(criteriaColumn, profileCode.getCode());
                        }
                    }
                }
                catch (e_3_1) {
                    e_3 = { error: e_3_1 };
                }
                finally {
                    try {
                        if (array_3_1 && !array_3_1.done && (_a = array_3.return))
                            _a.call(array_3);
                    }
                    finally {
                        if (e_3)
                            throw e_3.error;
                    }
                }
            };
        /**
         * @private
         * @param {?} column
         * @param {?} value
         * @return {?}
         */
        CustomerFilterComponent.prototype._addFilterMap = /**
         * @private
         * @param {?} column
         * @param {?} value
         * @return {?}
         */
            function (column, value) {
                if (this.filterColumnMap.has(column)) {
                    this.filterColumnMap.get(column).forEach(( /**
                     * @param {?} code
                     * @return {?}
                     */function (code) {
                        if (value.includes(code.getCode())) {
                            code.isCheck = true;
                        }
                    }));
                }
            };
        /**
         * @private
         * @return {?}
         */
        CustomerFilterComponent.prototype.clearCriteria = /**
         * @private
         * @return {?}
         */
            function () {
                this._resetFilter(this.customerType);
                this._resetFilter(this.customerDataSource);
                this._resetFilter(this.birthday);
                this._resetFilter(this.age);
                this._resetFilter(this.gender);
                this._resetFilter(this.income);
                this._resetFilter(this.source);
                this._resetFilter(this.marriage);
                this._resetFilter(this.children);
                this._resetFilter(this.familiarity);
                this._resetFilter(this.recentStatus);
                this._resetFilter(this.manpa);
                this._resetFilter(this.contactFrequency);
                this._resetFilter(this.possibility);
                this._resetFilter(this.completeness);
            };
        /**
         * @private
         * @return {?}
         */
        CustomerFilterComponent.prototype.refreshFilterMap = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                // this.clearCriteria();
                if (this.criteria.hasCriteria() && this.criteria.getFilterMap().size > 0) {
                    this.criteria.getFilterMap().forEach(( /**
                     * @param {?} value
                     * @param {?} column
                     * @return {?}
                     */function (value, column) {
                        _this._addFilterMap(column, value);
                    }));
                }
            };
        /**
         * @private
         * @return {?}
         */
        CustomerFilterComponent.prototype.saveCriteria = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var criteria = new CustomerFilterCriteria();
                console.debug('filterColumnMap', this.filterColumnMap);
                this.filterColumnMap.forEach(( /**
                 * @param {?} value
                 * @param {?} column
                 * @return {?}
                 */function (value, column) {
                    _this._addCriteria(column, value, criteria);
                }));
                criteria.savePreset = this.isAsPresent;
                this.doneCriteria.emit(criteria);
            };
        CustomerFilterComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-customer-filter',
                        template: "\n\n    <!-- popu customer filter content -->\n    <div class=\"layout-cp-all ui-filter-block\">\n        <!-- chekboxes -->\n        <div class=\"data-filter-item\">\n                <!-- title -->\n                <div class=\"filter-title-block\">\n                    <h3>{{language.customerType |translate }}</h3>\n                </div>\n                <!-- end of title -->\n                <!-- checkbox -->\n                <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                    <ng-container textType=\"originContent\">\n                        <ng-container *ngFor=\"let profileCode of customerType; index as j\">\n                            <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                            </app-ui-form-checkbox2>          \n                        </ng-container>\n                    </ng-container>            \n                </app-ui-collapse-group>\n                <!-- end of checkbox -->\n            </div>\n\n            <div class=\"data-filter-item\">\n                    <!-- title -->\n                    <div class=\"filter-title-block\">\n                        <h3>{{language.customerSource |translate }}</h3>\n                    </div>\n                    <!-- end of title -->\n                    <!-- checkbox -->\n                    <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                        <ng-container textType=\"originContent\">\n                            <ng-container *ngFor=\"let profileCode of customerDataSource; index as j\">\n                                <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                    <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                </app-ui-form-checkbox2>          \n                            </ng-container>\n                        </ng-container>            \n                    </app-ui-collapse-group> \n                    <!-- end of checkbox -->\n                </div>\n        \n        \n        <div class=\"data-filter-item\">\n            <div class=\"filter-title-block\">\n                <h3>{{language.birthday |translate }}</h3>\n            </div>\n            <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                    <ng-container textType=\"originContent\">\n                        <ng-container *ngFor=\"let profileCode of birthday; index as j\">\n                            <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                    <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                </app-ui-form-checkbox2>\n                            <!-- </ng-container>                 -->\n                        </ng-container> \n                    </ng-container>\n\n                    \n                    <!-- <ng-container *ngIf=\"birthday.length > 6\">\n                        <ng-container textType=\"hideContnet\">\n                            <ng-container *ngFor=\"let profileCode of birthday; index as j\">\n                                <ng-container *ngIf=\"j >= 6\">\n                                    <app-ui-form-checkbox2  (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>      \n                                </ng-container>                  \n                            </ng-container>                                        \n                        </ng-container>\n                        \n                    </ng-container> -->\n                   \n            </app-ui-collapse-group>            \n        </div>\n\n\n        <div class=\"data-filter-item\">\n                <div class=\"filter-title-block\">\n                    <h3>{{language.ageRange |translate }}</h3>\n                </div>\n                <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                        <ng-container textType=\"originContent\">\n                            <ng-container *ngFor=\"let profileCode of age; index as j\">\n                                <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                    <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>\n                                <!-- </ng-container>                 -->\n                            </ng-container>\n                        </ng-container>\n    \n                        <!-- <ng-container *ngIf=\"age.length > 6\">\n                            <ng-container textType=\"hideContnet\">\n                                <ng-container *ngFor=\"let profileCode of age; index as j\">\n                                    <ng-container *ngIf=\"j >= 6\">\n                                        <app-ui-form-checkbox2 (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                            <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                        </app-ui-form-checkbox2>      \n                                    </ng-container>                  \n                                </ng-container>                                        \n                            </ng-container>\n                            \n                        </ng-container> -->\n                        \n                </app-ui-collapse-group>\n                 \n    \n            </div>\n\n        <div class=\"data-filter-item\">\n                <div class=\"filter-title-block\">\n                    <h3>{{language.gender |translate }}</h3>\n                </div>\n                <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                        <ng-container textType=\"originContent\">\n                            <ng-container *ngFor=\"let profileCode of gender; index as j\">\n                                <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                    <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                </app-ui-form-checkbox2>\n                            </ng-container>  \n                        </ng-container>\n                </app-ui-collapse-group>\n    \n            </div>\n\n        <div class=\"data-filter-item\">\n                <div class=\"filter-title-block\">\n                    <h3>{{language.annualIncomeYearNTD |translate }}</h3>\n                </div>\n                <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                        <ng-container textType=\"originContent\">\n                            <ng-container *ngFor=\"let profileCode of income; index as j\">\n                                <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                    <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>\n                                <!-- </ng-container>                 -->\n                            </ng-container> \n                        </ng-container>\n    \n                        <!-- <ng-container *ngIf=\"income.length > 6\">\n                            <ng-container textType=\"hideContnet\">\n                                <ng-container *ngFor=\"let profileCode of income; index as j\">\n                                    <ng-container *ngIf=\"j >= 6\">\n                                        <app-ui-form-checkbox2 (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                            <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                        </app-ui-form-checkbox2>      \n                                    </ng-container>                  \n                                </ng-container>                                        \n                            </ng-container>\n                            \n                        </ng-container> -->\n                        \n                </app-ui-collapse-group>\n            </div>\n\n        <div class=\"data-filter-item\">\n                <div class=\"filter-title-block\">\n                    <h3>{{language.source |translate }}</h3>\n                </div>\n                <app-ui-collapse-group [translateMore]=\"language.moreOption | translate\">\n                    <ng-container textType=\"originContent\">\n                        <ng-container *ngFor=\"let profileCode of source; index as j\">\n                            <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                    <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                </app-ui-form-checkbox2>\n                            <!-- </ng-container>                 -->\n                        </ng-container>\n                    </ng-container>\n                    \n                    <!-- <ng-container *ngIf=\"source.length > 6\">\n                        <ng-container textType=\"hideContnet\">\n                            <ng-container *ngFor=\"let profileCode of source; index as j\">\n                                <ng-container *ngIf=\"j >= 6\">\n                                    <app-ui-form-checkbox2 (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>      \n                                </ng-container>                  \n                            </ng-container>                                        \n                        </ng-container>\n                        \n                    </ng-container> -->\n                   \n    \n                </app-ui-collapse-group>\n       \n            </div>\n\n\n        <div class=\"data-filter-item\">\n            <div class=\"filter-title-block\">\n                <h3>{{language.marriage |translate }}</h3>\n            </div>\n            <app-ui-collapse-group [translateMore]=\"language.moreOption | translate\">\n                    <ng-container textType=\"originContent\">\n                        <ng-container *ngFor=\"let profileCode of marriage; index as j\">\n                            <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                    <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                </app-ui-form-checkbox2>\n                            </ng-container>                \n                        <!-- </ng-container>  -->\n                    </ng-container>\n                  <!-- <ng-container *ngIf=\"marriage.length > 6\">\n                        <ng-container textType=\"hideContnet\">\n                             <ng-container *ngFor=\"let profileCode of marriage; index as j\">\n                               <ng-container *ngIf=\"j >= 6\">\n                                    <app-ui-form-checkbox2 (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                            <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                        </app-ui-form-checkbox2>      \n                                            \n                                </ng-container> \n                            </ng-container>   \n                        </ng-container>\n             \n                    </ng-container> -->\n                   \n            </app-ui-collapse-group>\n        </div>\n\n        <div class=\"data-filter-item\">\n                <div class=\"filter-title-block\">\n                    <h3>{{language.children |translate }}</h3>\n                </div>\n                <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                        <ng-container textType=\"originContent\">\n                            <ng-container *ngFor=\"let profileCode of children; index as j\">\n                                <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                    <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>\n                                <!-- </ng-container>                 -->\n                            </ng-container> \n                        </ng-container>\n    \n                        <!-- <ng-container *ngIf=\"children.length > 6\">\n                            <ng-container textType=\"hideContnet\">\n                                <ng-container *ngFor=\"let profileCode of children; index as j\">\n                                    <ng-container *ngIf=\"j >= 6\">\n                                        <app-ui-form-checkbox2  (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                            <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                        </app-ui-form-checkbox2>      \n                                    </ng-container>                  \n                                </ng-container>                                        \n                            </ng-container>\n                            \n                        </ng-container> -->\n                        \n                </app-ui-collapse-group>\n            </div>\n\n        <div class=\"data-filter-item\">\n                <div class=\"filter-title-block\">\n                    <h3>{{language.familiarity |translate }}</h3>\n                </div>\n                <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                    <ng-container textType=\"originContent\">\n                        <ng-container *ngFor=\"let profileCode of familiarity; index as j\">\n                            <!-- <ng-container *ngIf=\"familiarity.length < 6\"> -->\n                                <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                    <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                </app-ui-form-checkbox2>\n                            <!-- </ng-container>                 -->\n                        </ng-container>\n                    </ng-container>\n                    <!-- <ng-container *ngIf=\"familiarity.length > 6\">\n                        <ng-container textType=\"hideContnet\">\n                            <ng-container *ngFor=\"let profileCode of familiarity; index as j\">\n                                <ng-container *ngIf=\"j >= 6\">\n                                    <app-ui-form-checkbox2 (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>      \n                                </ng-container>                  \n                            </ng-container>                                        \n                        </ng-container>\n                    </ng-container> -->\n                   \n                </app-ui-collapse-group>\n                \n                \n            </div>\n            \n            \n            \n\n        <div class=\"data-filter-item\">\n                <div class=\"filter-title-block\">\n                    <h3>{{language.recentStatus |translate }}</h3>\n                </div>\n                <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                        <ng-container textType=\"originContent\">\n                            <ng-container *ngFor=\"let profileCode of recentStatus; index as j\">\n                                <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                    <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>\n                                <!-- </ng-container> -->\n                            </ng-container>\n                        </ng-container>\n                        \n                        <!-- <ng-container *ngIf=\"recentStatus.length > 6\">\n                            <ng-container textType=\"hideContnet\">\n                                <ng-container *ngFor=\"let profileCode of recentStatus; index as j\">\n                                    <ng-container *ngIf=\"j >= 6\">\n                                        <app-ui-form-checkbox2 (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                            <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                        </app-ui-form-checkbox2>      \n                                    </ng-container>                  \n                                </ng-container>                                        \n                            </ng-container>\n                            \n                        </ng-container> -->\n                        \n                </app-ui-collapse-group>\n            </div>\n\n        <div class=\"data-filter-item\">\n                <div class=\"filter-title-block\">\n                    <h3>{{language.customerStatus |translate }}</h3>\n                </div>\n                <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                        <ng-container textType=\"originContent\">\n                            <ng-container *ngFor=\"let profileCode of manpa; index as j\">\n                                <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                    <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>\n                                <!-- </ng-container>                 -->\n                            </ng-container>\n                        </ng-container>\n                        <!-- <ng-container *ngIf=\"manpa.length > 6\">\n                            <ng-container textType=\"hideContnet\">\n                                <ng-container *ngFor=\"let profileCode of manpa; index as j\">\n                                    <ng-container *ngIf=\"j >= 6\">\n                                        <app-ui-form-checkbox2 (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                            <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                        </app-ui-form-checkbox2>      \n                                    </ng-container>                  \n                                </ng-container>                                        \n                            </ng-container>\n                            \n                        </ng-container> -->\n                        \n                </app-ui-collapse-group>\n            </div>\n\n        <div class=\"data-filter-item\">\n            <div class=\"filter-title-block\">\n                <h3>{{language.contactFrequencyMonth |translate }}</h3>\n            </div>\n            <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                    <ng-container textType=\"originContent\">\n                        <ng-container *ngFor=\"let profileCode of contactFrequency; index as j\">\n                            <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                    <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                </app-ui-form-checkbox2>\n                            <!-- </ng-container>                 -->\n                        </ng-container> \n                    </ng-container>\n\n                    <!-- <ng-container *ngIf=\"contactFrequency.length > 6\">\n                        <ng-container textType=\"hideContnet\">\n                            <ng-container *ngFor=\"let profileCode of contactFrequency; index as j\">\n                                <ng-container *ngIf=\"j >= 6\">\n                                    <app-ui-form-checkbox2 (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>      \n                                </ng-container>                  \n                            </ng-container>                                        \n                        </ng-container>\n                        \n                    </ng-container> -->\n                   \n            </app-ui-collapse-group>\n            \n            \n        </div>\n\n        <div class=\"data-filter-item\">\n                <div class=\"filter-title-block\">\n                    <h3>{{language.possibility |translate }}</h3>\n                </div>\n                <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                    <ng-container textType=\"originContent\">\n                        <ng-container *ngFor=\"let profileCode of possibility; index as j\">\n                            <app-ui-form-checkbox2  (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                            </app-ui-form-checkbox2>          \n                        </ng-container>    \n                    </ng-container>    \n                </app-ui-collapse-group>\n      \n            </div>\n\n        <div class=\"data-filter-item\">\n            <div class=\"filter-title-block\">\n                <h3>{{language.completeness |translate }}</h3>\n            </div>\n            <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                    <ng-container textType=\"originContent\">\n                        <ng-container *ngFor=\"let profileCode of completeness; index as j\">\n                            <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                    <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                </app-ui-form-checkbox2>\n                            <!-- </ng-container>                 -->\n                        </ng-container> \n                    </ng-container>\n\n                    <!-- <ng-container *ngIf=\"completeness.length > 6\">\n                        <ng-container textType=\"hideContnet\">\n                            <ng-container *ngFor=\"let profileCode of completeness; index as j\">\n                                <ng-container *ngIf=\"j >= 6\">\n                                    <app-ui-form-checkbox2  (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>      \n                                </ng-container>                  \n                            </ng-container>                                        \n                        </ng-container>\n                        \n                    </ng-container> -->\n                   \n            </app-ui-collapse-group>\n \n        </div>\n        <!-- end of chekboxes -->\n        <!-- settin block -->\n        <div class=\"setting-block\">\n            <app-ui-form-checkbox [(nxValue)]=\"isAsPresent\" [isDisable]=\"false\" >\n                <ng-container checkboxText=\"style2\">{{language.preset |translate }}</ng-container>\n            </app-ui-form-checkbox>\n        </div>\n        <!-- end of setting block -->\n    </div>\n    <!-- end of popup customer filter content -->\n",
                        styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{display:inline-block;width:100%;height:100%}.ui-filter-block{display:inline-block;width:100%;height:100%}.ui-filter-block .filter-title-block h3{font-size:1rem;font-weight:700;line-height:28px;padding-bottom:5px}.ui-filter-block .data-filter-item{margin-bottom:30px}.setting-block{display:block;width:100%;padding-bottom:30px}"]
                    }] }
        ];
        CustomerFilterComponent.ctorParameters = function () {
            return [
                { type: CustomerService },
                { type: i1.ProfileCodeService }
            ];
        };
        CustomerFilterComponent.propDecorators = {
            clear: [{ type: i0.Input }],
            save: [{ type: i0.Input }],
            open: [{ type: i0.Input }],
            criteria: [{ type: i0.Input }],
            doneCriteria: [{ type: i0.Output }]
        };
        return CustomerFilterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerImportComponent = /** @class */ (function () {
        function CustomerImportComponent() {
            this.importContractMap = new Map();
            this.importCustomer = new i0.EventEmitter();
            this.language = new i1.Language();
        }
        /**
         * @return {?}
         */
        CustomerImportComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        CustomerImportComponent.prototype.doImport = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var importItems = new Array();
                this.importContractMap.forEach(( /**
                 * @param {?} group
                 * @param {?} groupName
                 * @return {?}
                 */function (group, groupName) {
                    group.getItems.forEach(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) {
                        console.debug(item);
                        if (item.isCheck) {
                            importItems.push(item);
                        }
                    }));
                }));
                this.importCustomer.emit(importItems);
            };
        CustomerImportComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-customer-import',
                        template: " <!-- data -->\n<ng-container *ngIf=\"importContractMap\">\n    <ng-container *ngFor=\"let group of importContractMap | keyvalue\">\n        <ng-container *ngIf=\"group.value.isShow\">\n            <app-ui-list-data2>\n                <ng-container textType=\"title\">{{group.key}}</ng-container>\n                <!-- data -->\n                <ng-container textType=\"data\">\n                  <ng-container *ngFor=\"let item of group.value.getItems\">\n                    <ng-container *ngIf=\"item.isShow\">\n                            <app-ui-form-checkbox3 [isDisable]=\"false\" [(nxValue)]=\"item.isCheck\" (onClick)=\"doImport()\">\n                              <ng-container checkboxText=\"style3\">{{item.lastname + item.firstname}}</ng-container>\n                            </app-ui-form-checkbox3>\n                    </ng-container>                  \n                  </ng-container>          \n                </ng-container>\n                <!-- end of data -->\n              </app-ui-list-data2>          \n        </ng-container>\n    </ng-container>    \n</ng-container>\n<!-- end of data -->",
                        styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}"]
                    }] }
        ];
        CustomerImportComponent.ctorParameters = function () { return []; };
        CustomerImportComponent.propDecorators = {
            importContractMap: [{ type: i0.Input }],
            importCustomer: [{ type: i0.Output }]
        };
        return CustomerImportComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomersModule = /** @class */ (function () {
        function CustomersModule() {
        }
        CustomersModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            formfield.NxFormfieldModule,
                            ngxNdbx.NxDropdownModule,
                            ngxNdbx.NxRadioModule,
                            input.NxInputModule,
                            ngxNdbx.NxMessageModule,
                            datefield.NxDatefieldModule,
                            datefield.NxNativeDateModule,
                            progressbar.NxProgressbarModule,
                            ngxNdbx.NxModalModule,
                            ngxNdbx.NxAccordionModule,
                            grid.NxGridModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            i1.CoreModule,
                            calendar.CalendarModule,
                            ui.UIModule,
                        ],
                        declarations: [CustomersComponent, CustomerEditComponent, CustomerListComponent,
                            CustomerDetailComponent, CustomerContactListComponent, CustomerFilterComponent, CustomerImportComponent
                        ],
                        providers: [common.DatePipe],
                        exports: [CustomersComponent, CustomerEditComponent]
                    },] }
        ];
        return CustomersModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerList = /** @class */ (function () {
        function CustomerList() {
            this._customerList = [];
        }
        Object.defineProperty(CustomerList.prototype, "length", {
            get: /**
             * @return {?}
             */ function () {
                return this._customerList.length;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerList.prototype, "customerList", {
            get: /**
             * @return {?}
             */ function () {
                return this._customerList;
            },
            set: /**
             * @param {?} customerList
             * @return {?}
             */ function (customerList) {
                this._customerList = customerList;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} customerEvent
         * @return {?}
         */
        CustomerList.prototype.addCustomerItem = /**
         * @param {?} customerEvent
         * @return {?}
         */
            function (customerEvent) {
                this._customerList.push(customerEvent);
            };
        return CustomerList;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MobileCustomerItem = /** @class */ (function () {
        function MobileCustomerItem(lastName, firstName, phoneNumber, email, address, birthday) {
            this.lastName = lastName;
            this.firstName = firstName;
            this.phoneNumber = phoneNumber;
            this.email = email;
            this.address = address;
            this.birthday = birthday;
        }
        return MobileCustomerItem;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MobileCustomerList = /** @class */ (function () {
        function MobileCustomerList(mobileCustomerList) {
            this.mobileCustomerList = mobileCustomerList;
        }
        return MobileCustomerList;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerAddContactNoteAPI = /** @class */ (function () {
        function CustomerAddContactNoteAPI(daoFactory) {
            this.daoFactory = daoFactory;
        }
        /**
         * @param {?} clientID
         * @return {?}
         */
        CustomerAddContactNoteAPI.prototype.setClientID = /**
         * @param {?} clientID
         * @return {?}
         */
            function (clientID) {
                this.clientID = clientID;
            };
        /**
         * @param {?} customerClientID
         * @return {?}
         */
        CustomerAddContactNoteAPI.prototype.setCustomerClientID = /**
         * @param {?} customerClientID
         * @return {?}
         */
            function (customerClientID) {
                this.customerClientID = customerClientID;
            };
        /**
         * @param {?} note
         * @return {?}
         */
        CustomerAddContactNoteAPI.prototype.setNote = /**
         * @param {?} note
         * @return {?}
         */
            function (note) {
                this.note = note;
            };
        /**
         * @param {?} noteTime
         * @return {?}
         */
        CustomerAddContactNoteAPI.prototype.setNoteTime = /**
         * @param {?} noteTime
         * @return {?}
         */
            function (noteTime) {
                this.noteTime = noteTime;
            };
        /**
         * @return {?}
         */
        CustomerAddContactNoteAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'addCustomerContactNote';
            };
        /**
         * @return {?}
         */
        CustomerAddContactNoteAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/saveSuccess.json';
            };
        /**
         * @return {?}
         */
        CustomerAddContactNoteAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var contactObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Contact");
                    /** @type {?} */
                    var dao = _this.daoFactory.getDefaultDao();
                    if (contactObj != undefined && dao != undefined) {
                        dao = new i1.ClientCustomDao(dao);
                        contactObj.setValue('CustomerClientID', _this.customerClientID);
                        contactObj.setValue('Note', _this.note);
                        contactObj.setValue('NoteTime', _this.noteTime.getTime());
                        if (_this.clientID != undefined) {
                            contactObj.addRestriction(new i1.EqualRestriction('ClientID', [_this.clientID]));
                            dao.updateByTable(contactObj).subscribe(( /**
                             * @param {?} resp
                             * @return {?}
                             */function (resp) {
                                observer.next(resp);
                                observer.complete();
                            }));
                        }
                        else {
                            dao.insertByTable(contactObj).subscribe(( /**
                             * @param {?} resp
                             * @return {?}
                             */function (resp) {
                                observer.next(resp);
                                observer.complete();
                            }));
                        }
                    }
                    else {
                        observer.next(false);
                        observer.complete();
                    }
                }));
            };
        return CustomerAddContactNoteAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerAutoDeleteAPI = /** @class */ (function () {
        function CustomerAutoDeleteAPI(daoFactory) {
            this.daoFactory = daoFactory;
        }
        /**
         * @param {?} id
         * @return {?}
         */
        CustomerAutoDeleteAPI.prototype.setClientID = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                this._clientID = id;
            };
        /**
         * @return {?}
         */
        CustomerAutoDeleteAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getCustomerAutoDelete';
            };
        /**
         * @return {?}
         */
        CustomerAutoDeleteAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/getCustomerAutoDelete.json';
            };
        /**
         * @return {?}
         */
        CustomerAutoDeleteAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var messageObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Message");
                    /** @type {?} */
                    var dao = _this.daoFactory.getDefaultDao();
                    if (messageObj != undefined && dao != undefined) {
                        dao = new i1.ClientCustomDao(dao);
                        if (i1.StringUtils.isNotEmpty(_this._clientID)) {
                            messageObj.addRestriction(new i1.EqualRestriction("ClientID", [_this._clientID]));
                        }
                        else {
                            messageObj.addRestriction(new i1.EqualRestriction("Status", ['UnRead']));
                        }
                        messageObj.addRestriction(new i1.EqualRestriction("MessageCategory", ['Customer']));
                        messageObj.addRestriction(new i1.EqualRestriction("MessageType", ['AutoDelete']));
                        dao.queryByTable(messageObj).subscribe(( /**
                         * @param {?} resp
                         * @return {?}
                         */function (resp) {
                            observer.next(resp);
                            observer.complete();
                        }));
                    }
                    else {
                        observer.next(false);
                        observer.complete();
                    }
                }));
                //   return from(dao.queryByTable(messageObj).toPromise().then( resp => {
                //     let messageArgument = JSON.parse(resp['Body'][0]['customers']);
                //     let customerIDList = messageArgument['ids'];
                //     let customerObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer");
                //     console.log("customerIDListInAPI: ", customerIDList);
                //     customerObj.addRestriction(new InRestriction("ClientID", customerIDList));
                //     return dao.queryByTable(customerObj).toPromise().then(resp => {
                //       return resp;
                //     })
                // }));
            };
        return CustomerAutoDeleteAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerContactNoteAPI = /** @class */ (function () {
        function CustomerContactNoteAPI(daoFactory) {
            this.daoFactory = daoFactory;
        }
        /**
         * @param {?} id
         * @return {?}
         */
        CustomerContactNoteAPI.prototype.setClientID = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                this.customerClientID = id;
            };
        /**
         * @param {?} pageInfo
         * @return {?}
         */
        CustomerContactNoteAPI.prototype.setPageInfo = /**
         * @param {?} pageInfo
         * @return {?}
         */
            function (pageInfo) {
                this.pageInfo = pageInfo;
            };
        /**
         * @return {?}
         */
        CustomerContactNoteAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getCustomerContactNote';
            };
        /**
         * @return {?}
         */
        CustomerContactNoteAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/getCustomerContactNote.json';
            };
        /**
         * @return {?}
         */
        CustomerContactNoteAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var contactObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Contact");
                    /** @type {?} */
                    var dao = _this.daoFactory.getDefaultDao();
                    if (contactObj != undefined && dao != undefined) {
                        dao = new i1.ClientCustomDao(dao);
                        contactObj.addRestriction(new i1.EqualRestriction('CustomerClientID', [_this.customerClientID]));
                        contactObj.addRestriction(new i1.OrderByRestriction([{ column: 'NoteTime', order: 'DESC' }]));
                        //add page limit
                        contactObj.addRestriction(new i1.LimitRestriction([_this.pageInfo.pageSize]));
                        contactObj.addRestriction(new i1.OffsetRestriction([(_this.pageInfo.page - 1) * 5]));
                        console.debug(contactObj);
                        dao.queryByTable(contactObj).subscribe(( /**
                         * @param {?} resp
                         * @return {?}
                         */function (resp) {
                            console.debug(resp);
                            observer.next(resp);
                            observer.complete();
                        }));
                    }
                    else {
                        observer.next(false);
                        observer.complete();
                    }
                }));
            };
        return CustomerContactNoteAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerDeleteAPI = /** @class */ (function () {
        function CustomerDeleteAPI(daoFactory) {
            this.daoFactory = daoFactory;
        }
        Object.defineProperty(CustomerDeleteAPI.prototype, "clientID", {
            set: /**
             * @param {?} clientID
             * @return {?}
             */ function (clientID) {
                this._clientID = clientID;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        CustomerDeleteAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'deleteCustomer';
            };
        /**
         * @return {?}
         */
        CustomerDeleteAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/saveSuccess.json';
            };
        /**
         * @return {?}
         */
        CustomerDeleteAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var customerObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer");
                    /** @type {?} */
                    var dao = _this.daoFactory.getDefaultDao();
                    if (customerObj != undefined) {
                        dao = new i1.ClientCustomDao(dao);
                        customerObj.addRestriction(new i1.EqualRestriction('ClientID', [_this._clientID]));
                        dao.deleteByTable(customerObj).subscribe(( /**
                         * @param {?} resp
                         * @return {?}
                         */function (resp) {
                            observer.next(resp);
                            observer.complete();
                        }));
                    }
                    else {
                        observer.next(false);
                        observer.complete();
                    }
                }));
            };
        return CustomerDeleteAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerDeleteContactNoteAPI = /** @class */ (function () {
        function CustomerDeleteContactNoteAPI(daoFactory) {
            this.daoFactory = daoFactory;
        }
        /**
         * @param {?} contactClientID
         * @return {?}
         */
        CustomerDeleteContactNoteAPI.prototype.setContactClientID = /**
         * @param {?} contactClientID
         * @return {?}
         */
            function (contactClientID) {
                this.contactClientID = contactClientID;
            };
        /**
         * @return {?}
         */
        CustomerDeleteContactNoteAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'deleteCustomerContactNote';
            };
        /**
         * @return {?}
         */
        CustomerDeleteContactNoteAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/saveSuccess.json';
            };
        /**
         * @return {?}
         */
        CustomerDeleteContactNoteAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var contactObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Contact");
                    /** @type {?} */
                    var dao = _this.daoFactory.getDefaultDao();
                    if (contactObj != undefined && dao != undefined) {
                        dao = new i1.ClientCustomDao(dao);
                        contactObj.addRestriction(new i1.EqualRestriction('ClientID', [_this.contactClientID]));
                        dao.deleteByTable(contactObj).subscribe(( /**
                         * @param {?} resp
                         * @return {?}
                         */function (resp) {
                            observer.next(resp);
                            observer.complete();
                        }));
                    }
                    else {
                        observer.next(false);
                        observer.complete();
                    }
                }));
            };
        return CustomerDeleteContactNoteAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerDetailAPI = /** @class */ (function () {
        function CustomerDetailAPI(daoFactory) {
            this.daoFactory = daoFactory;
        }
        Object.defineProperty(CustomerDetailAPI.prototype, "id", {
            get: /**
             * @return {?}
             */ function () {
                return this._id;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._id = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        CustomerDetailAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getCustomerDetail';
            };
        /**
         * @return {?}
         */
        CustomerDetailAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/getCustomerDetail.json';
            };
        /**
         * @return {?}
         */
        CustomerDetailAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                console.log('customer Detail:execute SQL');
                /** @type {?} */
                var customerObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer");
                /** @type {?} */
                var defaultDao = this.daoFactory.getDefaultDao();
                if (customerObj != undefined && defaultDao != undefined) {
                    /** @type {?} */
                    var dao_1 = new i1.ClientCustomDao(defaultDao);
                    customerObj.addRestriction(new i1.EqualRestriction("ClientID", [this._id]));
                    return rxjs.from(dao_1.queryByTable(customerObj).toPromise().then(( /**
                     * @param {?} resp
                     * @return {?}
                     */function (resp) {
                        /** @type {?} */
                        var customer = resp;
                        /** @type {?} */
                        var clientID = customer['Body'][0].ClientID;
                        /** @type {?} */
                        var customerTelObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Tel");
                        if (customerTelObj) {
                            customerTelObj = (( /** @type {?} */(customerTelObj)));
                            customerTelObj.addRestriction(new i1.EqualRestriction('CustomerClientID', [clientID]));
                            return dao_1.queryByTable(customerTelObj).toPromise().then(( /**
                             * @param {?} resp
                             * @return {?}
                             */function (resp) {
                                /** @type {?} */
                                var telList = resp['Body'];
                                customer['Body'][0]['tel'] = telList;
                                return { customer: customer, clientID: clientID };
                            }));
                        }
                        else
                            return rxjs.of({ customer: customer, clientID: clientID }).toPromise();
                    })).then(( /**
                     * @param {?} __0
                     * @return {?}
                     */function (_a) {
                        var customer = _a.customer, clientID = _a.clientID;
                        /** @type {?} */
                        var customerEmailObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Email");
                        if (customerEmailObj) {
                            customerEmailObj = (( /** @type {?} */(customerEmailObj)));
                            customerEmailObj.addRestriction(new i1.EqualRestriction('CustomerClientID', [clientID]));
                            return dao_1.queryByTable(customerEmailObj).toPromise().then(( /**
                             * @param {?} resp
                             * @return {?}
                             */function (resp) {
                                /** @type {?} */
                                var telList = resp['Body'];
                                customer['Body'][0]['email'] = telList;
                                return { customer: customer, clientID: clientID };
                            }));
                        }
                        else
                            return rxjs.of({ customer: customer, clientID: clientID }).toPromise();
                    })).then(( /**
                     * @param {?} __0
                     * @return {?}
                     */function (_a) {
                        var customer = _a.customer, clientID = _a.clientID;
                        /** @type {?} */
                        var customerAddrObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Address");
                        if (customerAddrObj) {
                            customerAddrObj = (( /** @type {?} */(customerAddrObj)));
                            customerAddrObj.addRestriction(new i1.EqualRestriction('CustomerClientID', [clientID]));
                            return dao_1.queryByTable(customerAddrObj).toPromise().then(( /**
                             * @param {?} resp
                             * @return {?}
                             */function (resp) {
                                /** @type {?} */
                                var telList = resp['Body'];
                                customer['Body'][0]['address'] = telList;
                                return customer;
                            }));
                        }
                        else
                            return rxjs.of(customer).toPromise();
                    })));
                }
                else {
                    return rxjs.of(false);
                }
            };
        return CustomerDetailAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerEditContactNoteAPI = /** @class */ (function () {
        function CustomerEditContactNoteAPI(daoFactory) {
            this.daoFactory = daoFactory;
        }
        /**
         * @param {?} contactClientID
         * @return {?}
         */
        CustomerEditContactNoteAPI.prototype.setContactClientID = /**
         * @param {?} contactClientID
         * @return {?}
         */
            function (contactClientID) {
                this.contactClientID = contactClientID;
            };
        /**
         * @param {?} note
         * @return {?}
         */
        CustomerEditContactNoteAPI.prototype.setNote = /**
         * @param {?} note
         * @return {?}
         */
            function (note) {
                this.note = note;
            };
        /**
         * @param {?} noteTime
         * @return {?}
         */
        CustomerEditContactNoteAPI.prototype.setNoteTime = /**
         * @param {?} noteTime
         * @return {?}
         */
            function (noteTime) {
                this.noteTime = noteTime;
            };
        /**
         * @return {?}
         */
        CustomerEditContactNoteAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'editCustomerContactNote';
            };
        /**
         * @return {?}
         */
        CustomerEditContactNoteAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/saveSuccess.json';
            };
        /**
         * @return {?}
         */
        CustomerEditContactNoteAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var contactObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Contact");
                    /** @type {?} */
                    var dao = _this.daoFactory.getDefaultDao();
                    if (contactObj != undefined && dao != undefined) {
                        dao = new i1.ClientCustomDao(dao);
                        contactObj.addRestriction(new i1.EqualRestriction('ClientID', [_this.contactClientID]));
                        contactObj.setValue('Note', _this.note);
                        contactObj.setValue('NoteTime', _this.noteTime.getTime());
                        dao.updateByTable(contactObj).subscribe(( /**
                         * @param {?} resp
                         * @return {?}
                         */function (resp) {
                            observer.next(resp);
                            observer.complete();
                        }));
                    }
                    else {
                        observer.next(false);
                        observer.complete();
                    }
                }));
            };
        return CustomerEditContactNoteAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerEditOvertimeAPI = /** @class */ (function () {
        function CustomerEditOvertimeAPI(daoFactory) {
            this.daoFactory = daoFactory;
        }
        /**
         * @param {?} id
         * @return {?}
         */
        CustomerEditOvertimeAPI.prototype.setClientID = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                this._clientID = id;
            };
        /**
         * @return {?}
         */
        CustomerEditOvertimeAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getCustomerOverTime';
            };
        /**
         * @return {?}
         */
        CustomerEditOvertimeAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/getCustomerOverTime.json';
            };
        /**
         * @return {?}
         */
        CustomerEditOvertimeAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var messageObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Message");
                    /** @type {?} */
                    var dao = _this.daoFactory.getDefaultDao();
                    if (messageObj != undefined && dao != undefined) {
                        dao = new i1.ClientCustomDao(dao);
                        if (i1.StringUtils.isNotEmpty(_this._clientID)) {
                            messageObj.addRestriction(new i1.EqualRestriction("ClientID", [_this._clientID]));
                        }
                        else {
                            messageObj.addRestriction(new i1.EqualRestriction("Status", ['UnRead']));
                        }
                        messageObj.addRestriction(new i1.EqualRestriction("MessageCategory", ['Customer']));
                        messageObj.addRestriction(new i1.EqualRestriction("MessageType", ['OverTime']));
                        dao.queryByTable(messageObj).subscribe(( /**
                         * @param {?} resp
                         * @return {?}
                         */function (resp) {
                            observer.next(resp);
                            observer.complete();
                        }));
                    }
                    else {
                        observer.next(false);
                        observer.complete();
                    }
                }));
            };
        return CustomerEditOvertimeAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerGetPresetAPI = /** @class */ (function () {
        function CustomerGetPresetAPI(daoFactory) {
            this.daoFactory = daoFactory;
        }
        /**
         * @return {?}
         */
        CustomerGetPresetAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getCustomerFilterPreset';
            };
        /**
         * @return {?}
         */
        CustomerGetPresetAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/getCustomerFilterPreset.json';
            };
        /**
         * @return {?}
         */
        CustomerGetPresetAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var dao = _this.daoFactory.getDefaultDao();
                    if (dao != undefined) {
                        //save customer data
                        /** @type {?} */
                        var setting = _this.daoFactory.getDefaultTable("TW_LH_SD_Personal_Setting");
                        if (setting) {
                            dao = new i1.ClientCustomDao(dao);
                            setting = (( /** @type {?} */(setting)));
                            setting.addRestriction(new i1.EqualRestriction('SettingID', ['CustomerFilterSetting']));
                            dao.queryByTable(setting).subscribe(( /**
                             * @param {?} resp
                             * @return {?}
                             */function (resp) {
                                console.debug(resp);
                                observer.next(resp);
                                observer.complete();
                            }));
                        }
                        else {
                            observer.next(false);
                            observer.complete();
                        }
                    }
                    else {
                        observer.next(false);
                        observer.complete();
                    }
                }));
            };
        return CustomerGetPresetAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerListAPI = /** @class */ (function () {
        function CustomerListAPI(daoFactory, profileCodeService) {
            this.daoFactory = daoFactory;
            this.profileCodeService = profileCodeService;
            this._pageInfo = new i1.PageInfo();
        }
        Object.defineProperty(CustomerListAPI.prototype, "clientID", {
            set: /**
             * @param {?} clientID
             * @return {?}
             */ function (clientID) {
                this._queryClientID = clientID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerListAPI.prototype, "filterCriteria", {
            set: /**
             * @param {?} criteria
             * @return {?}
             */ function (criteria) {
                this._filterCriteria = criteria;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerListAPI.prototype, "pageInfo", {
            set: /**
             * @param {?} pageInfo
             * @return {?}
             */ function (pageInfo) {
                this._pageInfo = pageInfo;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        CustomerListAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getCustomerList';
            };
        /**
         * @return {?}
         */
        CustomerListAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/getCustomerList.json';
            };
        /**
         * @return {?}
         */
        CustomerListAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var customerObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer");
                    /** @type {?} */
                    var dao = _this.daoFactory.getDefaultDao();
                    if (customerObj != undefined && dao != undefined) {
                        dao = new i1.ClientCustomDao(dao);
                        if (_this._filterCriteria != undefined) {
                            console.debug('CustomerListAPI _filterCriteria', _this._filterCriteria);
                            /** @type {?} */
                            var keyword = _this._filterCriteria.keyword;
                            console.debug('customerListAPI keyword', keyword);
                            if (i1.StringUtils.isNotEmpty(keyword)) {
                                /** @type {?} */
                                var compoundRestriction = new i1.ORCompoundRestriction([new i1.LikeRestriction('FirstName', [keyword]), new i1.LikeRestriction('LastName', [keyword])]);
                                customerObj.addRestriction(compoundRestriction);
                            }
                            /** @type {?} */
                            var filterMap = _this._filterCriteria.getFilterMap();
                            filterMap.forEach(( /**
                             * @param {?} array
                             * @param {?} key
                             * @return {?}
                             */function (array, key) {
                                var e_1, _a;
                                console.log(key, array);
                                if (key == 'Birthday') {
                                    /** @type {?} */
                                    var birthdayRestriction = new Array();
                                    /** @type {?} */
                                    var monthArray = new Array();
                                    try {
                                        for (var array_1 = __values(array), array_1_1 = array_1.next(); !array_1_1.done; array_1_1 = array_1.next()) {
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
                                                birthdayRestriction.push(new i1.AndCompoundRestriction([new i1.EqualRestriction('BirthdayMonth', [start]),
                                                    new i1.EqualRestriction('BirthdayDate', [end])]));
                                            }
                                            else {
                                                if (birthday.length == 1)
                                                    birthday = '0' + birthday;
                                                monthArray.push(birthday);
                                            }
                                        }
                                    }
                                    catch (e_1_1) {
                                        e_1 = { error: e_1_1 };
                                    }
                                    finally {
                                        try {
                                            if (array_1_1 && !array_1_1.done && (_a = array_1.return))
                                                _a.call(array_1);
                                        }
                                        finally {
                                            if (e_1)
                                                throw e_1.error;
                                        }
                                    }
                                    if (monthArray.length != 0) {
                                        birthdayRestriction.push(new i1.InRestriction('BirthdayMonth', monthArray));
                                    }
                                    customerObj.addRestriction(new i1.ORCompoundRestriction(birthdayRestriction));
                                }
                                else if (key == 'DataSource') {
                                    if (array.length != 2) {
                                        /** @type {?} */
                                        var datasource = array[0];
                                        if (datasource == 'E') {
                                            customerObj.addRestriction(new i1.EqualRestriction('DataSource', ['OPUS']));
                                        }
                                        else {
                                            customerObj.addRestriction(new i1.NotEqualRestriction('DataSource', ['OPUS']));
                                        }
                                    }
                                }
                                else if (key == 'Completeness') {
                                    /** @type {?} */
                                    var completenessOption = _this.profileCodeService.getCodeArray('Customer_Completeness');
                                    /** @type {?} */
                                    var completenessRestriction_1 = new Array();
                                    completenessOption.forEach(( /**
                                     * @param {?} profileCode
                                     * @return {?}
                                     */function (profileCode) {
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
                                            completenessRestriction_1.push(new i1.AndCompoundRestriction([new i1.GreaterOrEqualRestriction('Completeness', [start]), new i1.LessOrEqualRestriction('Completeness', [end])]));
                                        }
                                    }));
                                    console.debug('completenessRestriction length', completenessRestriction_1.length);
                                    console.log('completenessRestriction:', completenessRestriction_1);
                                    if (completenessRestriction_1.length != 0) {
                                        customerObj.addRestriction(new i1.ORCompoundRestriction(completenessRestriction_1));
                                        console.log('customerObj:', customerObj);
                                    }
                                }
                                else {
                                    customerObj.addRestriction(new i1.InRestriction(key, array));
                                }
                            }));
                        }
                        //add order by
                        customerObj.addRestriction(new i1.OrderByRestriction([{ column: 'LastName', order: 'ASC' }]));
                        //add page limit
                        customerObj.addRestriction(new i1.LimitRestriction([_this._pageInfo.pageSize]));
                        customerObj.addRestriction(new i1.OffsetRestriction([(_this._pageInfo.page - 1) * 10]));
                        //if has edit profile will has clientID
                        if (i1.StringUtils.isNotEmpty(_this._queryClientID)) {
                            customerObj.addRestriction(new i1.EqualRestriction('ClientID', [_this._queryClientID]));
                        }
                        dao.queryByTable(customerObj).subscribe(( /**
                         * @param {?} resp
                         * @return {?}
                         */function (resp) {
                            observer.next(resp);
                            observer.complete();
                        }));
                    }
                    else {
                        observer.next(false);
                        observer.complete();
                    }
                }));
            };
        return CustomerListAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerSaveDetailAPI = /** @class */ (function () {
        function CustomerSaveDetailAPI(daoFactory, customerUtils) {
            this.daoFactory = daoFactory;
            this.customerUtils = customerUtils;
        }
        /**
         * @param {?} detail
         * @return {?}
         */
        CustomerSaveDetailAPI.prototype.setDetail = /**
         * @param {?} detail
         * @return {?}
         */
            function (detail) {
                this.customerDetail = detail;
            };
        /**
         * @return {?}
         */
        CustomerSaveDetailAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'saveCustomerDetail';
            };
        /**
         * @return {?}
         */
        CustomerSaveDetailAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/saveSuccess.json';
            };
        /**
         * @return {?}
         */
        CustomerSaveDetailAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // let returnObj = {
                //     "status": true,
                //     "msg": ''
                // };
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    var e_1, _a, e_2, _b, e_3, _c;
                    /** @type {?} */
                    var dao = _this.daoFactory.getDefaultDao();
                    if (dao != undefined) {
                        //save customer data
                        /** @type {?} */
                        var customerObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer");
                        if (customerObj) {
                            dao = new i1.ClientCustomDao(dao);
                            customerObj = (( /** @type {?} */(customerObj)));
                            /** @type {?} */
                            var birthday = _this.customerDetail.birthday;
                            if (birthday != null && birthday != undefined) {
                                customerObj.setValue("BirthdayYear", birthday.getFullYear());
                                /** @type {?} */
                                var month = (birthday.getMonth() + 1).toString();
                                if (month.length < 2) {
                                    month = '0' + month.toString();
                                }
                                customerObj.setValue("BirthdayMonth", month);
                                /** @type {?} */
                                var date = (birthday.getDate()).toString();
                                if (date.length < 2) {
                                    date = '0' + date.toString();
                                }
                                customerObj.setValue("BirthdayDate", date);
                                customerObj.setValue("BirthDayTimeStamp", (new Date(2000, birthday.getMonth(), birthday.getDate())).getTime());
                            }
                            customerObj.setValue('ClientID', _this.customerDetail.clientID);
                            customerObj.setValue("LastName", _this.customerDetail.lastName);
                            customerObj.setValue("FirstName", _this.customerDetail.firstName);
                            customerObj.setValue("Occupation", _this.customerDetail.occupation);
                            customerObj.setValue("Company", _this.customerDetail.company);
                            customerObj.setValue("AgeRange", _this.customerDetail.ageRange);
                            customerObj.setValue("Gender", _this.customerDetail.gender);
                            customerObj.setValue("Income", _this.customerDetail.income);
                            customerObj.setValue("Source", _this.customerDetail.source);
                            customerObj.setValue("Marriage", _this.customerDetail.marriage);
                            customerObj.setValue("Children", _this.customerDetail.children);
                            customerObj.setValue("Familiarity", _this.customerDetail.familiarity);
                            customerObj.setValue("RecentStatus", _this.customerDetail.recentStatus);
                            customerObj.setValue("MANPA", _this.customerDetail.manpa);
                            customerObj.setValue("ContactFrequancy", _this.customerDetail.contactFrequancy);
                            customerObj.setValue("Possibility", _this.customerDetail.possibility);
                            customerObj.setValue("IsFollow", _this.customerDetail.isFollow ? 'Y' : 'N');
                            //set customer default column & value
                            _this.customerUtils.setCustomerDefaultValue(customerObj);
                            //count Completeness
                            _this.customerUtils.countCompleteness(customerObj, _this.customerDetail.tels.length, _this.customerDetail.emails.length, _this.customerDetail.addresses.length);
                            console.debug('insertCustomer', customerObj);
                            // console.log('clientID:', customerObj.getValue('ClientID'));
                            if (customerObj.getValue('ClientID') == '') {
                                dao.transactionInsert(customerObj);
                            }
                            else {
                                customerObj.addRestriction(new i1.EqualRestriction('ClientID', [customerObj.getValue('ClientID')]));
                                dao.transactionUpdate(customerObj);
                                //delete relation data
                                dao.transactionSqlCommand(new i1.SQLCommand('delete from TW_LH_SD_Customer_Tel where CustomerClientID = ? ', [customerObj.getValue('ClientID')]));
                                dao.transactionSqlCommand(new i1.SQLCommand('delete from TW_LH_SD_Customer_Email where CustomerClientID = ? ', [customerObj.getValue('ClientID')]));
                                dao.transactionSqlCommand(new i1.SQLCommand('delete from TW_LH_SD_Customer_Address where CustomerClientID = ? ', [customerObj.getValue('ClientID')]));
                            }
                            try {
                                //save phone data              
                                for (var _d = __values(_this.customerDetail.tels), _e = _d.next(); !_e.done; _e = _d.next()) {
                                    var phone = _e.value;
                                    /** @type {?} */
                                    var phoneInsertObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Tel");
                                    if (phoneInsertObj) {
                                        if (phone.telType == '')
                                            phone.telType = 'TelHome';
                                        phoneInsertObj = (( /** @type {?} */(phoneInsertObj)));
                                        phoneInsertObj.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                                        phoneInsertObj.setValue('TelType', phone.telType);
                                        phoneInsertObj.setValue('Tel', phone.tel);
                                        //insert
                                        dao.transactionInsert(phoneInsertObj);
                                    }
                                }
                            }
                            catch (e_1_1) {
                                e_1 = { error: e_1_1 };
                            }
                            finally {
                                try {
                                    if (_e && !_e.done && (_a = _d.return))
                                        _a.call(_d);
                                }
                                finally {
                                    if (e_1)
                                        throw e_1.error;
                                }
                            }
                            try {
                                //save email data
                                for (var _f = __values(_this.customerDetail.emails), _g = _f.next(); !_g.done; _g = _f.next()) {
                                    var email = _g.value;
                                    /** @type {?} */
                                    var emailInsertObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Email");
                                    if (emailInsertObj) {
                                        if (email.emailType == '')
                                            email.emailType = 'MailHome';
                                        emailInsertObj = (( /** @type {?} */(emailInsertObj)));
                                        emailInsertObj.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                                        emailInsertObj.setValue('EmailType', email.emailType);
                                        emailInsertObj.setValue('Email', email.email);
                                        //insert
                                        dao.transactionInsert(emailInsertObj);
                                    }
                                }
                            }
                            catch (e_2_1) {
                                e_2 = { error: e_2_1 };
                            }
                            finally {
                                try {
                                    if (_g && !_g.done && (_b = _f.return))
                                        _b.call(_f);
                                }
                                finally {
                                    if (e_2)
                                        throw e_2.error;
                                }
                            }
                            try {
                                //save address data
                                for (var _h = __values(_this.customerDetail.addresses), _j = _h.next(); !_j.done; _j = _h.next()) {
                                    var address = _j.value;
                                    /** @type {?} */
                                    var addressInsertObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Address");
                                    if (addressInsertObj) {
                                        if (address.addressType == '')
                                            address.addressType = 'AddressTypeHome';
                                        addressInsertObj = (( /** @type {?} */(addressInsertObj)));
                                        addressInsertObj.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                                        addressInsertObj.setValue('AddressType', address.addressType);
                                        addressInsertObj.setValue('Country', address.country);
                                        addressInsertObj.setValue('City', address.city);
                                        addressInsertObj.setValue('Area', address.area);
                                        addressInsertObj.setValue('Zipcode', address.zipcode);
                                        addressInsertObj.setValue('Address', address.address);
                                        //insert
                                        dao.transactionInsert(addressInsertObj);
                                    }
                                }
                            }
                            catch (e_3_1) {
                                e_3 = { error: e_3_1 };
                            }
                            finally {
                                try {
                                    if (_j && !_j.done && (_c = _h.return))
                                        _c.call(_h);
                                }
                                finally {
                                    if (e_3)
                                        throw e_3.error;
                                }
                            }
                            dao.runTransaction().subscribe(( /**
                             * @param {?} resp
                             * @return {?}
                             */function (resp) {
                                // let header = resp['Header'];
                                // if (!header.status) {
                                //     returnObj['status'] = false;
                                //     returnObj['msg'] = header.msg;
                                // }
                                observer.next(resp);
                                observer.complete();
                            }));
                        }
                        else {
                            observer.next(false);
                            observer.complete();
                        }
                    }
                    else {
                        observer.next(false);
                        observer.complete();
                    }
                }));
            };
        return CustomerSaveDetailAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerSavePresetAPI = /** @class */ (function () {
        function CustomerSavePresetAPI(daoFactory) {
            this.daoFactory = daoFactory;
        }
        /**
         * @param {?} criteria
         * @return {?}
         */
        CustomerSavePresetAPI.prototype.setFilterCriteria = /**
         * @param {?} criteria
         * @return {?}
         */
            function (criteria) {
                this._criteria = criteria;
            };
        /**
         * @return {?}
         */
        CustomerSavePresetAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'saveCustomerFilterPreset';
            };
        /**
         * @return {?}
         */
        CustomerSavePresetAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/saveSuccess.json';
            };
        /**
         * @return {?}
         */
        CustomerSavePresetAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var dao = _this.daoFactory.getDefaultDao();
                    if (dao != undefined) {
                        //save customer data
                        /** @type {?} */
                        var setting = _this.daoFactory.getDefaultTable("TW_LH_SD_Personal_Setting");
                        if (setting) {
                            dao = new i1.ClientCustomDao(dao);
                            setting = (( /** @type {?} */(setting)));
                            setting.addRestriction(new i1.EqualRestriction('SettingID', ['CustomerFilterSetting']));
                            setting.setValue("SettingVal", JSON.stringify(_this._criteria.toPresetJSON()));
                            dao.updateByTable(setting).subscribe(( /**
                             * @param {?} resp
                             * @return {?}
                             */function (resp) {
                                observer.next(resp);
                                observer.complete();
                            }));
                        }
                        else {
                            observer.next(false);
                            observer.complete();
                        }
                    }
                    else {
                        observer.next(false);
                        observer.complete();
                    }
                }));
            };
        return CustomerSavePresetAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerTelAPI = /** @class */ (function () {
        function CustomerTelAPI(daoFactory) {
            this.daoFactory = daoFactory;
        }
        /**
         * @param {?} id
         * @return {?}
         */
        CustomerTelAPI.prototype.setClientID = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                this.clientID = id;
            };
        /**
         * @return {?}
         */
        CustomerTelAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getCustomerTel';
            };
        /**
         * @return {?}
         */
        CustomerTelAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/getCustomerTel.json';
            };
        /**
         * @return {?}
         */
        CustomerTelAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var telObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Tel");
                    /** @type {?} */
                    var dao = _this.daoFactory.getDefaultDao();
                    if (telObj != undefined && dao != undefined) {
                        dao = new i1.ClientCustomDao(dao);
                        telObj.addRestriction(new i1.EqualRestriction('CustomerClientID', [_this.clientID]));
                        dao.queryByTable(telObj).subscribe(( /**
                         * @param {?} resp
                         * @return {?}
                         */function (resp) {
                            console.debug(resp);
                            observer.next(resp);
                            observer.complete();
                        }));
                    }
                    else {
                        observer.next(false);
                        observer.complete();
                    }
                }));
            };
        return CustomerTelAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerUpdateFollowAPI = /** @class */ (function () {
        function CustomerUpdateFollowAPI(daoFactory) {
            this.daoFactory = daoFactory;
        }
        /**
         * @param {?} clientID
         * @return {?}
         */
        CustomerUpdateFollowAPI.prototype.setClient = /**
         * @param {?} clientID
         * @return {?}
         */
            function (clientID) {
                this._clientID = clientID;
            };
        /**
         * @param {?} isFollow
         * @return {?}
         */
        CustomerUpdateFollowAPI.prototype.setIsFollow = /**
         * @param {?} isFollow
         * @return {?}
         */
            function (isFollow) {
                this._isFollow = isFollow;
            };
        /**
         * @return {?}
         */
        CustomerUpdateFollowAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'updateCustomerFollowStatus';
            };
        /**
         * @return {?}
         */
        CustomerUpdateFollowAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/saveSuccess.json';
            };
        /**
         * @return {?}
         */
        CustomerUpdateFollowAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var dao = _this.daoFactory.getDefaultDao();
                    if (dao != undefined) {
                        //save customer data
                        /** @type {?} */
                        var customer = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer");
                        if (customer) {
                            dao = new i1.ClientCustomDao(dao);
                            customer = (( /** @type {?} */(customer)));
                            customer.addRestriction(new i1.EqualRestriction('ClientID', [_this._clientID]));
                            customer.setValue("IsFollow", _this._isFollow ? 'Y' : 'N');
                            dao.updateByTable(customer).subscribe(( /**
                             * @param {?} resp
                             * @return {?}
                             */function (resp) {
                                observer.next(resp);
                                observer.complete();
                            }));
                        }
                        else {
                            observer.next(false);
                            observer.complete();
                        }
                    }
                    else {
                        observer.next(false);
                        observer.complete();
                    }
                }));
            };
        return CustomerUpdateFollowAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ImportContactAPI = /** @class */ (function () {
        function ImportContactAPI(daoFactory, customerUtils) {
            this.daoFactory = daoFactory;
            this.customerUtils = customerUtils;
        }
        /**
         * @param {?} items
         * @return {?}
         */
        ImportContactAPI.prototype.setItems = /**
         * @param {?} items
         * @return {?}
         */
            function (items) {
                this.items = items;
            };
        /**
         * @return {?}
         */
        ImportContactAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'importContact';
            };
        /**
         * @return {?}
         */
        ImportContactAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/saveSuccess.json';
            };
        /**
         * @return {?}
         */
        ImportContactAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    var e_1, _a, e_2, _b, e_3, _c;
                    /** @type {?} */
                    var dao = _this.daoFactory.getDefaultDao();
                    if (dao != undefined) {
                        dao = new i1.ClientCustomDao(dao);
                        try {
                            for (var _d = __values(_this.items), _e = _d.next(); !_e.done; _e = _d.next()) {
                                var item = _e.value;
                                /** @type {?} */
                                var customerObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer");
                                customerObj.setValue("LastName", item.lastname);
                                customerObj.setValue("FirstName", item.firstname);
                                customerObj.setValue("IsFollow", "N");
                                /** @type {?} */
                                var birthday = item.birthday;
                                if (birthday != null) {
                                    customerObj.setValue("BirthdayYear", birthday.getFullYear);
                                    customerObj.setValue("BirthdayMonth", birthday.getMonth);
                                    customerObj.setValue("BirthdayDate", birthday.getDate);
                                }
                                //set customer default column & value
                                _this.customerUtils.setCustomerDefaultValue(customerObj);
                                //count Completeness
                                _this.customerUtils.countCompleteness(customerObj, item.phones.length, item.emails.length, item.address.length);
                                //insert customer data
                                dao.transactionInsert(customerObj);
                                try {
                                    //save phone data
                                    for (var _f = __values(item.phones), _g = _f.next(); !_g.done; _g = _f.next()) {
                                        var phone = _g.value;
                                        /** @type {?} */
                                        var telType = 'TelHome';
                                        if (phone.type == 'work') {
                                            telType = 'TelWork';
                                        }
                                        else if (phone.type == 'mobile') {
                                            telType = 'TelMobile';
                                        }
                                        /** @type {?} */
                                        var phoneInsertObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Tel");
                                        if (phoneInsertObj) {
                                            phoneInsertObj = (( /** @type {?} */(phoneInsertObj)));
                                            phoneInsertObj.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                                            phoneInsertObj.setValue('TelType', telType);
                                            phoneInsertObj.setValue('Tel', phone.number);
                                            //insert
                                            dao.transactionInsert(phoneInsertObj);
                                        }
                                    }
                                }
                                catch (e_2_1) {
                                    e_2 = { error: e_2_1 };
                                }
                                finally {
                                    try {
                                        if (_g && !_g.done && (_b = _f.return))
                                            _b.call(_f);
                                    }
                                    finally {
                                        if (e_2)
                                            throw e_2.error;
                                    }
                                }
                                //save email data
                                /** @type {?} */
                                var maxEmailCount = 3;
                                /** @type {?} */
                                var importEmailCount = maxEmailCount;
                                if (item.emails.length < 3)
                                    importEmailCount = item.emails.length;
                                for (var i = 0; i < importEmailCount; i++) {
                                    /** @type {?} */
                                    var email = item.emails[i];
                                    /** @type {?} */
                                    var emailInsertObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Email");
                                    if (emailInsertObj) {
                                        emailInsertObj = (( /** @type {?} */(emailInsertObj)));
                                        emailInsertObj.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                                        emailInsertObj.setValue('EmailType', 'MailHome');
                                        emailInsertObj.setValue('Email', email);
                                        //insert
                                        dao.transactionInsert(emailInsertObj);
                                    }
                                }
                                try {
                                    //save address data
                                    for (var _h = __values(item.address), _j = _h.next(); !_j.done; _j = _h.next()) {
                                        var address = _j.value;
                                        /** @type {?} */
                                        var addressType = 'AddressTypeHome';
                                        if (address.type == 'work') {
                                            addressType = 'AddressTypeWork';
                                        }
                                        /** @type {?} */
                                        var addressInsertObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Address");
                                        if (addressInsertObj) {
                                            addressInsertObj = (( /** @type {?} */(addressInsertObj)));
                                            addressInsertObj.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                                            addressInsertObj.setValue('AddressType', addressType);
                                            addressInsertObj.setValue('Zipcode', address.code);
                                            addressInsertObj.setValue('Address', address.address);
                                            //insert
                                            dao.transactionInsert(addressInsertObj);
                                        }
                                    }
                                }
                                catch (e_3_1) {
                                    e_3 = { error: e_3_1 };
                                }
                                finally {
                                    try {
                                        if (_j && !_j.done && (_c = _h.return))
                                            _c.call(_h);
                                    }
                                    finally {
                                        if (e_3)
                                            throw e_3.error;
                                    }
                                }
                            }
                        }
                        catch (e_1_1) {
                            e_1 = { error: e_1_1 };
                        }
                        finally {
                            try {
                                if (_e && !_e.done && (_a = _d.return))
                                    _a.call(_d);
                            }
                            finally {
                                if (e_1)
                                    throw e_1.error;
                            }
                        }
                        dao.runTransaction().subscribe(( /**
                         * @param {?} resp
                         * @return {?}
                         */function (resp) {
                            observer.next(resp);
                            observer.complete();
                        }));
                    }
                    else {
                        observer.next(false);
                        observer.complete();
                    }
                }));
            };
        return ImportContactAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerBirthdayListAPI = /** @class */ (function () {
        function CustomerBirthdayListAPI(DaoFactory) {
            this._DaoFactory = DaoFactory;
        }
        Object.defineProperty(CustomerBirthdayListAPI.prototype, "targetDate", {
            set: /**
             * @param {?} targetDate
             * @return {?}
             */ function (targetDate) {
                this._targetDate = dateFns.setYear(targetDate, 2000);
                this._subNDayTimeStamp = dateFns.subDays(this._targetDate, this._subN).getTime();
                this._addNDayTimeStamp = dateFns.addDays(this._targetDate, this._addN).getTime();
                if ((dateFns.getYear(this._targetDate) == dateFns.getYear(this._subNDayTimeStamp)) && (dateFns.getYear(this._targetDate) == dateFns.getYear(this._addNDayTimeStamp))) {
                    this.isRangeCrossYear = false;
                }
                else {
                    this._subNDayTimeStamp = (dateFns.setYear(this._subNDayTimeStamp, 2000)).getTime();
                    this._addNDayTimeStamp = (dateFns.setYear(this._addNDayTimeStamp, 2000)).getTime();
                    this.isRangeCrossYear = true;
                }
                console.warn(this._subN, "  subDate:  ", this._subNDayTimeStamp);
                console.warn(this._addN, "  addDate:  ", this._addNDayTimeStamp);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerBirthdayListAPI.prototype, "subN", {
            set: /**
             * @param {?} subN
             * @return {?}
             */ function (subN) {
                this._subN = subN;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerBirthdayListAPI.prototype, "addN", {
            set: /**
             * @param {?} addN
             * @return {?}
             */ function (addN) {
                this._addN = addN;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        CustomerBirthdayListAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getCustomerBirthdayList';
            };
        /**
         * @return {?}
         */
        CustomerBirthdayListAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/getCustomerBirthday.json';
            };
        /**
         * @return {?}
         */
        CustomerBirthdayListAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var customerObj = _this._DaoFactory.getDefaultTable("TW_LH_SD_Customer");
                    /** @type {?} */
                    var dao = _this._DaoFactory.getDefaultDao();
                    if (customerObj != undefined && dao != undefined) {
                        dao = new i1.ClientCustomDao(dao);
                        if (_this.isRangeCrossYear) {
                            customerObj.addRestriction(new i1.ORCompoundRestriction([new i1.GreaterOrEqualRestriction('BirthDayTimeStamp', [_this._subNDayTimeStamp]), new i1.LessOrEqualRestriction('BirthDayTimeStamp', [_this._addNDayTimeStamp])]));
                        }
                        else {
                            customerObj.addRestriction(new i1.GreaterOrEqualRestriction('BirthDayTimeStamp', [_this._subNDayTimeStamp]));
                            customerObj.addRestriction(new i1.LessOrEqualRestriction('BirthDayTimeStamp', [_this._addNDayTimeStamp]));
                        }
                        customerObj.addRestriction(new i1.OrderByRestriction([{ column: 'LastName', order: 'ASC' }]));
                        //customerObj.addRestriction(new OrderByRestriction([{ column: 'StartTime', order: 'ASC' }]));
                        // calendarObj.addRestriction(new OrderByRestriction([{ column: 'StartTime', order: 'ASC' },{ column: 'EndTime', order: 'DESC' }]));
                        dao.queryByTable(customerObj).subscribe(( /**
                         * @param {?} resp
                         * @return {?}
                         */function (resp) {
                            observer.next(resp);
                            observer.complete();
                        }));
                    }
                    else {
                        observer.next(false);
                        observer.complete();
                    }
                }));
            };
        return CustomerBirthdayListAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DashboardUpdateToReadAPI = /** @class */ (function () {
        function DashboardUpdateToReadAPI(daoFactory) {
            this.daoFactory = daoFactory;
        }
        /**
         * @param {?} type
         * @return {?}
         */
        DashboardUpdateToReadAPI.prototype.setMessageType = /**
         * @param {?} type
         * @return {?}
         */
            function (type) {
                this._messageType = type;
            };
        /**
         * @param {?} dataCategory
         * @return {?}
         */
        DashboardUpdateToReadAPI.prototype.setMessageDataCategory = /**
         * @param {?} dataCategory
         * @return {?}
         */
            function (dataCategory) {
                this._messageDataCategory = dataCategory;
            };
        /**
         * @return {?}
         */
        DashboardUpdateToReadAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'updateDashboardToRead';
            };
        /**
         * @return {?}
         */
        DashboardUpdateToReadAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/saveSuccess.json';
            };
        /**
         * @return {?}
         */
        DashboardUpdateToReadAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var dao = _this.daoFactory.getDefaultDao();
                    if (dao != undefined) {
                        //save customer data
                        /** @type {?} */
                        var messageObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Message");
                        if (messageObj) {
                            dao = new i1.ClientCustomDao(dao);
                            messageObj = (( /** @type {?} */(messageObj)));
                            messageObj.addRestriction(new i1.EqualRestriction('MessageCategory', [_this._messageDataCategory]));
                            messageObj.addRestriction(new i1.EqualRestriction('MessageType', [_this._messageType]));
                            messageObj.setValue("Status", 'Reading');
                            dao.updateByTable(messageObj).subscribe(( /**
                             * @param {?} resp
                             * @return {?}
                             */function (resp) {
                                observer.next(resp);
                                observer.complete();
                            }));
                        }
                        else {
                            observer.next(false);
                            observer.complete();
                        }
                    }
                    else {
                        observer.next(false);
                        observer.complete();
                    }
                }));
            };
        return DashboardUpdateToReadAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.CustomersModule = CustomersModule;
    exports.CustomersComponent = CustomersComponent;
    exports.CustomerContactListComponent = CustomerContactListComponent;
    exports.CustomerDetailComponent = CustomerDetailComponent;
    exports.CustomerEditComponent = CustomerEditComponent;
    exports.CustomerFilterComponent = CustomerFilterComponent;
    exports.CustomerImportComponent = CustomerImportComponent;
    exports.CustomerListComponent = CustomerListComponent;
    exports.CustomerConfirmAction = CustomerConfirmAction;
    exports.CustomerDetailResult = CustomerDetailResult;
    exports.CustomerFilterCriteria = CustomerFilterCriteria;
    exports.CustomerFilterPreset = CustomerFilterPreset;
    exports.CustomerImportGroup = CustomerImportGroup;
    exports.syncCustomerToken = syncCustomerToken;
    exports.storeCustomerToken = storeCustomerToken;
    exports.customerActionToken = customerActionToken;
    exports.showCustomerRuleToken = showCustomerRuleToken;
    exports.CUSTOMER_STATE = CUSTOMER_STATE;
    exports.CustomerAddress = CustomerAddress;
    exports.CustomerAlertItem = CustomerAlertItem;
    exports.CustomerContactNote = CustomerContactNote;
    exports.CustomerDetail = CustomerDetail;
    exports.CustomerEmail = CustomerEmail;
    exports.CustomerItem = CustomerItem;
    exports.CustomerList = CustomerList;
    exports.CustomerTel = CustomerTel;
    exports.MobileCustomerItem = MobileCustomerItem;
    exports.MobileCustomerList = MobileCustomerList;
    exports.CustomerBirthday = CustomerBirthday;
    exports.CustomerService = CustomerService;
    exports.CustomerUtils = CustomerUtils;
    exports.CustomerAddContactNoteAPI = CustomerAddContactNoteAPI;
    exports.CustomerAutoDeleteAPI = CustomerAutoDeleteAPI;
    exports.CustomerContactNoteAPI = CustomerContactNoteAPI;
    exports.CustomerDeleteAPI = CustomerDeleteAPI;
    exports.CustomerDeleteContactNoteAPI = CustomerDeleteContactNoteAPI;
    exports.CustomerDetailAPI = CustomerDetailAPI;
    exports.CustomerEditContactNoteAPI = CustomerEditContactNoteAPI;
    exports.CustomerEditOvertimeAPI = CustomerEditOvertimeAPI;
    exports.CustomerGetPresetAPI = CustomerGetPresetAPI;
    exports.CustomerListAPI = CustomerListAPI;
    exports.CustomerSaveDetailAPI = CustomerSaveDetailAPI;
    exports.CustomerSavePresetAPI = CustomerSavePresetAPI;
    exports.CustomerTelAPI = CustomerTelAPI;
    exports.CustomerUpdateFollowAPI = CustomerUpdateFollowAPI;
    exports.ImportContactAPI = ImportContactAPI;
    exports.CustomerBirthdayListAPI = CustomerBirthdayListAPI;
    exports.DashboardUpdateToReadAPI = DashboardUpdateToReadAPI;
    exports.ɵo = CustomerContactListComponent;
    exports.ɵn = CustomerDetailComponent;
    exports.ɵk = CustomerEditComponent;
    exports.ɵp = CustomerFilterComponent;
    exports.ɵq = CustomerImportComponent;
    exports.ɵl = CustomerListComponent;
    exports.ɵa = CustomersComponent;
    exports.ɵd = customerActionToken;
    exports.ɵe = showCustomerRuleToken;
    exports.ɵc = storeCustomerToken;
    exports.ɵb = syncCustomerToken;
    exports.ɵf = CustomerService;
    exports.ɵg = CustomerUtils;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=allianzSND-customer.umd.js.map