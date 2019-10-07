import { StringUtils } from "@allianzSND/core";
import { Injectable } from "@angular/core";
import { CustomerShowRule, CustomerItem } from '@allianzSND/integration-calendar-customer'

@Injectable({
  providedIn: "root"
})
export class ShowCustomerRule implements CustomerShowRule {

  constructor() {
    //register api
  }

  calculateCompleteness(customerObj: any): number {

    console.debug('countCompletenessByCustomerObj', customerObj);


    //count Completeness
    let completeness: number = 0;
    let countColumnName = ['FirstName', 'LastName', 'Occupation', 'Company', 'AgeRange', 'Gender',
      'Income', 'Source', 'Marriage', 'Children', 'MANPA','RecentStatus','Familiarity', 'ContactFrequancy', 'Possibility'];

    if (StringUtils.isNotEmpty(customerObj.FirstName)) completeness++;
    if (StringUtils.isNotEmpty(customerObj.LastName)) completeness++;
    if (StringUtils.isNotEmpty(customerObj.Occupation)) completeness++;
    if (StringUtils.isNotEmpty(customerObj.Company)) completeness++;
    if (StringUtils.isNotEmpty(customerObj.AgeRange)) completeness++;
    if (StringUtils.isNotEmpty(customerObj.Gender)) completeness++;
    if (StringUtils.isNotEmpty(customerObj.Income)) completeness++;
    if (StringUtils.isNotEmpty(customerObj.Source)) completeness++;
    if (StringUtils.isNotEmpty(customerObj.Marriage)) completeness++;
    if (StringUtils.isNotEmpty(customerObj.Children)) completeness++;
    if (StringUtils.isNotEmpty(customerObj.Familiarity)) completeness++;
    if (StringUtils.isNotEmpty(customerObj.RecentStatus)) completeness++;
    if (StringUtils.isNotEmpty(customerObj.MANPA)) completeness++;
    if (StringUtils.isNotEmpty(customerObj.ContactFrequancy)) completeness++;
    if (StringUtils.isNotEmpty(customerObj.Possibility)) completeness++;



    //count birthday
    if (customerObj.Birthday != undefined) completeness++;

    //count phone/email/address
    if (customerObj.tel && customerObj.tel.length != 0) completeness++;
    if (customerObj.email && customerObj.email.length != 0) completeness++;
    if (customerObj.address && customerObj.address.length != 0) completeness++;

    console.debug('orginal completeness', completeness, (countColumnName.length + 4));

    completeness = (completeness / (countColumnName.length + 4));

    console.debug('before round completeness', completeness);
    completeness = Math.round(completeness * 100) / 100;
    console.debug('after round completeness', completeness);

    return completeness;
  }

  sortCustomerList(customerList: Array<CustomerItem>): Array<CustomerItem> {
    return customerList.map(x => x.clone()).sort((n1, n2) => {
      let n1_name = StringUtils.isEmpty(n1.lastName) ? '' : n1.lastName;
      let n2_name = StringUtils.isEmpty(n2.lastName) ? '' : n2.lastName;
      return n1_name.localeCompare(n2_name);
    });
  }

}
