import { ProfileCode, ProfileCodeService, SQLiteTable } from "@allianzSND/core";
import { SelectOption, showRule } from "@allianzSND/core";
import { CustomerShowRule } from "../interface/CustomerShowRule";
export declare class CustomerUtils {
    private profileCodeService;
    private showRule;
    private customerShowRule;
    constructor(profileCodeService: ProfileCodeService, showRule: showRule, customerShowRule: CustomerShowRule);
    setCode2Option(codeArray: Array<ProfileCode>): SelectOption[];
    countCompleteness(customerObj: any): number;
    setCustomerDefaultValue(dataObject: SQLiteTable): void;
    countAgeRange(age: number): any;
    countAge(birthday: Date): number;
    /**
     * javascript傳入起始日與結束
     * 日期格式為民國年月日(EX.1060802)
     * 傳入 1060702,1060802 會回傳31天
     * 傳入 1060901,1061001 會回傳30天
     * @param  sDate
     * @param  eDate
     * @return 天數
     */
    calRocIntervalDays(sDate: any, eDate: any): number;
    /**
     * javascript傳入起始日與結束
     * 日期格式為西元年月日(EX.20170801)
     * 傳入 20170702,20170802 會回傳31天
     * 傳入 20170901,20171001 會回傳30天
     * @param  sDate
     * @param  eDate
     * @return 天數
     */
    calCEIntervalDays(sDate: any, eDate: any): number;
    /**
     * 向左補零
     * Ex:leftPad(3,3,'0')->003
     * @param  val    [原值]
     * @param  padLen [補足長度]
     * @param  padVal [補足值]
     * @return        [description]
     */
    leftPad(val: any, padLen: any, padVal: any): any;
    convertNameToShow(firstName: string, lastName: string): string;
}
