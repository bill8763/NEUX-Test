export declare class ViewDateChange {
    private _viewDate;
    private _action;
    constructor({ date, action }: {
        date: any;
        action: any;
    });
    viewDate: Date;
    action: ChangeAction;
}
export declare enum ChangeAction {
    CLICK = 0,
    SWIPE = 1
}
