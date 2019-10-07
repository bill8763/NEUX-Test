import { IAPI } from './API.interface';
import { APIRequest } from './APIRequest';
export interface IRestfulAPI extends IAPI {
    getRequestData(): APIRequest;
}
