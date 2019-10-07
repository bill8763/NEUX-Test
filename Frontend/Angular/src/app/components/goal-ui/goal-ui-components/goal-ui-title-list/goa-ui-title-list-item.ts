
export class GoalTitleListItem {

    constructor(private title: string, private desc: string) { }

    public getTitle(): string {
      return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public getDesc(): string {
      return this.desc;
    }

    public setDesc(desc: string): void {
        this.desc = desc;
    }
} // end class GoalTitleListItem
