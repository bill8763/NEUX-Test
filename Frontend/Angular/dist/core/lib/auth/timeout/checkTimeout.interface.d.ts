export interface checkTimeout {
    checkTimeout(): Promise<boolean>;
    init(): any;
    reset(): any;
    clear(): any;
}
