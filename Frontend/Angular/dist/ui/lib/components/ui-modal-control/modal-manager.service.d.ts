import { UiModalBaseComponent } from "../ui-modal-base/ui-modal-base.component";
import { Observable } from "rxjs";
export declare class ModalManager {
    constructor();
    private modalList;
    private isGlobalLoadingOpen;
    private globalLoadingSubject;
    pushModal(id: string, instance: UiModalBaseComponent): void;
    dismissModal(id: string): boolean;
    closeAll(): void;
    toggleLoading(open: boolean): void;
    getLoadingStatus(): Observable<boolean>;
}
