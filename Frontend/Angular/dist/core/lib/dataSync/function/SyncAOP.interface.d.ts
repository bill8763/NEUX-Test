export interface ISyncAOP {
    execute(data: any): Promise<any>;
}
