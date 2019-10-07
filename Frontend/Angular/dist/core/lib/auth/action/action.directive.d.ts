import { EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { APIDispatch } from '../../api/APIDispatch';
import { APIFactory } from '../../api/APIFactory';
import { DeviceService } from '../../device/device.service';
import { AppRouter } from '../../route/AppRouter';
import { ActionService } from './action.service';
import { IActionDirectiveTask } from '../../interface/ActionDirectiveTask.interface';
export declare class ActionDirective implements AfterViewInit {
    private authService;
    private APIFactory;
    private dispatcher;
    private deviceService;
    private actionService;
    private appRouter;
    private elRef;
    private actionDirectiveTask;
    constructor(authService: AuthService, APIFactory: APIFactory, dispatcher: APIDispatch, deviceService: DeviceService, actionService: ActionService, appRouter: AppRouter, elRef: ElementRef, actionDirectiveTask: IActionDirectiveTask);
    ngAfterViewInit(): void;
    action: any;
    actionClick: EventEmitter<any>;
    isDisabled: boolean;
    onclick(e: any): Promise<void>;
}
