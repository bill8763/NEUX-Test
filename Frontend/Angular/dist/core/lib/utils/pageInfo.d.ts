export declare class PageInfo {
    private _pageSize;
    private _page;
    private _totalRec;
    private _totalPage;
    resetPage(): void;
    pageSize: number;
    totalRec: number;
    totalPage: number;
    readonly page: number;
    nextPage(): void;
}
