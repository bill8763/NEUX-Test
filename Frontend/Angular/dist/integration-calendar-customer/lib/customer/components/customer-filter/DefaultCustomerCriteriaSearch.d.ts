import { CriteriaSearch } from "../../interface/CriteriaSearch";
import { CustomerFilterCriteria } from "../bean/customer-filter-criteria";
import { IRestriction, ProfileCodeService } from "@allianzSND/core";
export declare class DefaultCustomerCriteriaSearch implements CriteriaSearch {
    private profileCodeService;
    constructor(profileCodeService: ProfileCodeService);
    getRestriction(criteria: CustomerFilterCriteria): Array<IRestriction>;
}
