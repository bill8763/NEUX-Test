export declare function Bean(name: string): <T extends new (...args: any[]) => {}>(constructor: T) => {
    new (...args: any[]): {
        beanName: string;
    };
} & T;
