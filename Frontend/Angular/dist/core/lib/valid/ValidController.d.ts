import { ValidBean } from './ValidBean';
import { ValidCondition } from './condition/ValidCondition.interface';
export declare class ValidController {
    static beanPool: Array<ValidBean>;
    static addBean(bean: ValidBean): void;
    static validObject(data: any, name: string): boolean;
    static addCondition(objectName: string, propertyName: string, condition: ValidCondition): void;
    private static getBean;
    private static errorHandler;
}
