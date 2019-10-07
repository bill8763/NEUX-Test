export declare class ValidationResult {
    private errorMap;
    setErrorMap(name: string, errorMsg: string): void;
    deleteError(name: string): void;
    isTrue(): boolean;
    isError(name: string): boolean;
    getErrorMsg(name: string): string;
    clearErrorMap(): void;
}
