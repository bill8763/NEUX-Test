export declare class ProfileCode {
    private TypeID;
    private Code;
    private MappingID;
    private Arguments;
    displayText: string;
    isCheck: boolean;
    constructor(TypeID: string, Code: string, MappingID: string, Arguments: string);
    setDisplayText(text: string): void;
    getCode(): string;
    getTypeId(): string;
    getMappingID(): string;
    getArguments(): string;
}
