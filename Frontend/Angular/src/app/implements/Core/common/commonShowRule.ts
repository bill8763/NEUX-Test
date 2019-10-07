import { showRule, StringUtils } from "@allianzSND/core";
import { Injectable } from "@angular/core";
import { format } from 'date-fns';

@Injectable({
    providedIn: "root"
})
export class commonShowRule implements showRule {
    constructor() { }

    convertName(firstName: string, lastName: string): string {
        let lastNameStr: string = StringUtils.isNotEmpty(lastName) ? lastName : '';
        let firstNameStr: string = StringUtils.isNotEmpty(firstName) ? (' ' + firstName) : '';
        return lastNameStr + firstNameStr;
    }

    convertDate(date: Date) {
        if (date) {
            return format(date, 'MM/dd/yyyy').toString();
        }
        else {
            return '';
        }
    }

    convertDateWithoutYear(date: Date): string {
        if (date) {
            return format(date, 'MM/dd').toString();
        }
        else {
            return '';
        }
    }

    convertDateAndTime(date: Date) {
        if (date) {
            return format(date, 'MM/dd/yyyy').toString() + ' ' + format(date, 'HH:mm').toString();
        }
        else {
            return '';
        }
    }

    

    convertAddress(addressObj: any) {
        let array = [];
        if (StringUtils.isNotEmpty(addressObj.Country)) array.push(addressObj.Country);
        if (StringUtils.isNotEmpty(addressObj.City)) array.push(addressObj.City);
        if (StringUtils.isNotEmpty(addressObj.Area)) array.push(addressObj.Area);
        if (StringUtils.isNotEmpty(addressObj.Zipcode)) array.push(addressObj.Zipcode);
        if (StringUtils.isNotEmpty(addressObj.Address)) array.push(addressObj.Address);

        return array.join(', ');
    }

    isShowGoalSettingCompletionRate(): boolean {
        return false;
    }


}