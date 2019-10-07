import { IAPI } from './API.interface';
export interface IMockAPI extends IAPI {
    getMockPath(): string;
}
