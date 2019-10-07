export declare class MainMenuOption {
    private link;
    private name;
    private code;
    private imgSrc;
    constructor(link: string, name: string, code: string, imgSrc: string);
    getCode(): string;
    setLink(link: string): this;
    getLink(): string;
    setName(name: string): this;
    getName(): string;
    setImgSrc(imgSrc: string): this;
    getImgSrc(): string;
}
