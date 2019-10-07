import { CustomerFilterCriteria } from "../components/bean/customer-filter-criteria";
import { IRestriction } from "@allianzSND/core";
export interface CriteriaSearch {
    getRestriction(criteria: CustomerFilterCriteria): Array<IRestriction>;
}
