import { IAuthAction } from '../AuthAction.interface';
import { AuthObject } from '../AuthObject';
import { Observable } from 'rxjs';
export declare enum ACTION_STATUS {
    AVAILABLE = 0,
    PENDING = 1
}
export declare class ActionEvent {
    action: string;
    event: any;
}
export declare class ActionService implements IAuthAction {
    private APP_CONFIG;
    constructor(APP_CONFIG: any);
    private currentAction;
    private actionIntervalSec;
    private status;
    private statusSubject;
    private actionSuscribe;
    authAction(payload: AuthObject): AuthObject;
    getCurrentAction(): string;
    getActionStatus(): Observable<ACTION_STATUS>;
    onActionClick(): Observable<ActionEvent>;
    actionClick(event: ActionEvent): void;
}
