export interface IActionDirectiveTask {
    doTask(action: string): Promise<boolean>;
}
