export interface checkPermission {
    init(): void;
    checkPagePermission(func: string, role: Array<string>): boolean;
    checkMenuPermission(menuList: Array<string>, role: Array<string>): Array<string>;
}
