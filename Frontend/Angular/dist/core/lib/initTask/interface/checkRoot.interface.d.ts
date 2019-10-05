export interface checkRoot {
    checkRoot(): Promise<boolean>;
    rootedAction(): void;
}
