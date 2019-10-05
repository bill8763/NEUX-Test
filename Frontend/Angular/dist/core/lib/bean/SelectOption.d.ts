export declare class SelectOption {
    private value;
    private name;
    private isDefault;
    constructor(value: string, name: string);
    setIsDefault(isDefault: boolean): this;
    getName(): string;
    getValue(): string;
    setName(name: string): void;
    setValue(value: string): void;
}
