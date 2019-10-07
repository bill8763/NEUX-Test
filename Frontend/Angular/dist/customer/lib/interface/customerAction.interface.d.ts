import { CustomerDetail } from "../service/model/CustomerDetail";
export interface customerAction {
    afterCustomerEdit(detail: CustomerDetail): void;
    afterCustomerEditSave(detail: CustomerDetail): void;
}
