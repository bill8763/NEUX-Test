import { APIDispatch, APIFactory, APPError } from "@allianzSND/core";
import { AddPointAPI } from "@allianzSND/progress";
import { ErrorHandler, Injectable } from "@angular/core";
import { AddProgressPoint } from "@allianzSND/integration-calendar-customer";

@Injectable({
  providedIn: "root"
})
export class AddProgressOfflinePoint implements AddProgressPoint {
  constructor(
    private dispatcher: APIDispatch,
    private APIFactory: APIFactory,
    private errorHandler: ErrorHandler
  ) {
    //register api
  }

  addCalendarPoint(calendarEventDetail,addNum) {
    console.log("into addCalendarPoint calendarEventDetail",calendarEventDetail);
    try {
      let DataYear = 0;
      //get this year
      let yearConfig = this.APIFactory.getAPI("getGoalSettingYearConfig");
      this.dispatcher.dispatch(yearConfig).toPromise().then(yearConfigResp => {
          console.log("yearConfigResp", yearConfigResp);
          if (yearConfigResp.Header["status"]) {
            DataYear = yearConfigResp.Body.filter(x => x.IsCurrent == "Y")[0].DataYear;
          }
          console.log("addCalendarPoint DataYear",DataYear);
                //TW "1":Build relationship. "2":Sell. "3":Customer Service.
      let isAdds = ["1", "2", "3"];
      let activity = calendarEventDetail.CalendarType;
      console.log("activity",activity);
      if (isAdds.indexOf(activity) != -1) {
        console.log("addCalendarPoint into add");
        let addPointObj = this.APIFactory.getAPI("addPoint");
        (<AddPointAPI>addPointObj).SetAddType("calendar");
        (<AddPointAPI>addPointObj).SetYear(DataYear);
        (<AddPointAPI>addPointObj).SetPointNum(addNum);
        this.dispatcher.dispatch(addPointObj).toPromise().then(resp => {
            console.log("addCalendarPoint resp:", resp);
          });
      }

        });


    } catch (error) {
      this.errorHandler.handleError(
        new APPError("F00150", "addCalendarPoint fail!" + error.message)
      );
    }
  }

  addCustomerPoint(addNum) {
    console.log("into addCustomerPoint ");
    try {
      let DataYear = 0;
      //get this year
      let yearConfig = this.APIFactory.getAPI("getGoalSettingYearConfig");
      this.dispatcher.dispatch(yearConfig).toPromise().then(yearConfigResp => {
        console.log("addCustomerPoint yearConfigResp", yearConfigResp);
          if (yearConfigResp.Header["status"]) {
            DataYear = yearConfigResp.Body.filter(x => x.IsCurrent == "Y")[0].DataYear;
          }
          console.log("addCustomerPoint DataYear",DataYear);
          let addPointObj = this.APIFactory.getAPI("addPoint");
          (<AddPointAPI>addPointObj).SetAddType("customer");
          (<AddPointAPI>addPointObj).SetYear(DataYear);
          (<AddPointAPI>addPointObj).SetPointNum(addNum);
          this.dispatcher.dispatch(addPointObj).toPromise().then(resp => {
            console.log("addCustomerPoint resp:", resp);
        });
    
        });


    } catch (error) {
      this.errorHandler.handleError(
        new APPError("F00151", "addCustomerPoint fail!" + error.message)
      );
    }
  }
}
