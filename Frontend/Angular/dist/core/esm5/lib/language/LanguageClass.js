/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Language = /** @class */ (function () {
    function Language() {
        //dashboard 
        this.performance = "Performance";
        this.team = "Team";
        this.personal = "Personal";
        this.activitiesPoints = "Activities_Points";
        this.monthlyProgress = "Monthly_Progress";
        this.yearlyProgress = "Yearly_Progress";
        this.message = "Message";
        this.progress = "Progress";
        this.goalSettingMsgType = "Goal_Setting";
        this.all = "All";
        this.unread = "Unread";
        this.noMessage = "No_Message";
        this.schedule = "Schedule";
        this.noBirthday = "No_Birthday";
        this.customerType = "Customer_Type";
        this.customerSource = "Customer_Source";
        this.birthday = "Birthday";
        this.ageRange = "Age_range";
        this.gender = "Gender";
        //annualIncome : string = "Annual_Income(Year/NTD)";
        this.source = "Source";
        this.marriage = "Marriage";
        this.children = "Children";
        this.familiarity = "Familiarity";
        this.recentStatus = "Recent_status";
        this.customerStatus = "Customer_Status";
        this.contactFrequencyMonth = "Contact_Frequency_Month";
        this.possibility = "Possibility";
        this.completeness = "Completeness";
        this.contactFrequency = "Contact_Frequency";
        this.timePerYear = "Time_Per_Year";
        this.appointment = "Appointment";
        this.contact = "Contact";
        this.edit = "Edit";
        this.delete = "Delete";
        this.home = "Home";
        this.homepage = "Homepage";
        this.work = "Work";
        this.mobile = "Mobile";
        this.detail = "Detail";
        this.occupation = "Occupation";
        this.company = "Company";
        this.annualIncome = "Annual_Income";
        // extraItem : string = "ExtraItem";
        this.contactNote = "Contact_Note";
        this.add = "Add";
        this.noRecord = "No_Record";
        this.customerList = "Customer_List";
        this.importPhone = "Import_Phone";
        this.people = "People";
        // customer-edit page
        this.lastName = "Last_name";
        this.firstName = "First_name";
        this.phone = "Phone";
        this.email = "Email";
        this.address = "Address";
        this.country = "Country";
        this.city = "City";
        this.area = "Area";
        this.code = "Code";
        // birthday : string = "Birthday";
        this.age = "Age";
        // gender : string = "Gender";
        // occupation : string = "Occupation";
        // company : string ="Company";
        // annualIncome : string =  "Annual_Income";
        this.select = "Select";
        // source : string = "Source";
        // marriage : string = "Marriage";
        // children : string = "Children";
        // familiarity : string = "Familiarity";
        // occupation : string = "Occupation";
        // recentStatus : string = "Recent_status";
        // customerStatus : string = "Customer_Status";
        this.contactFrequencyYear = "Contact_Frequency_Year";
        // possibility : string = "Possibility";
        this.save = "Save";
        this.lastNamePlaceholder = "Last_Name_Placeholder";
        this.firstNamePlaceholder = "First_Name_Placeholder";
        this.wrongLastName = "Wrong_Lastname";
        this.wrongEmail = "Wrong_Email";
        this.wrongBirthday = "Wrong_Birthday";
        // custermer-filter page
        // customerType : string = "Customer_Type";
        // customerSource : string = "Customer_Source";
        // birthday : string = "Birthday";
        // ageRange : string = "Age_range";
        // gender : string = "Gender";
        this.annualIncomeYearNTD = "Annual_Income(Year/NTD)";
        // source : string = "Source";
        // marriage : string = "Marriage";
        // familiarity : string = "Familiarity";
        // customerStatus : string = "Customer_Status";
        // contactFrequencyMonth : string = "Contact_Frequency_Month";
        this.preset = "Preset";
        this.day = "Day";
        this.week = "Week";
        this.month = "Month";
        this.year = "Year";
        this.today = "Today";
        this.filter = "Filter";
        this.appointmentDetail = "Appointment_Details";
        this.saved = "Saved";
        this.loading = "Loading";
        this.title = "Title";
        this.location = "Location";
        this.activity = "Activity";
        this.date = "Date";
        this.allDay = "All_Day";
        this.from = "From";
        this.to = "To";
        this.alert = "Alert";
        this.remark = "Remark";
        this.yes = "Yes";
        this.no = "No";
        this.deleteAppointment = "Delete_Appointment";
        this.wrongTitle = "wrong_Title";
        this.wrongAlert = "Wrong_Alert";
        this.alertPlaceholder = "Alert_Placeholder";
        this.wrongTitleRequired = "Wrong_Title_Require";
        this.wrongActivityRequired = "Wrong_Activity_Required";
        this.wrongDate = "Wrong_Date";
        this.wrongTime = "Wrong_Time";
        this.wrongStartTime = "Wrong_Start_Time";
        this.wrongEndTime = "Wrong_End_Time";
        this.wrongAlertRequired = "Wrong_Alert_Require";
        this.noSchedule = "No_Schedule";
        // customer-list page
        this.customerInformation = "Customer_Information";
        this.click = "Click";
        this.noEdit = "No_Edit";
        this.noSearch = "No_Search";
        this.noFilter = "No_Filter";
        // customer page 
        this.import = "Import";
        this.customerFilter = "Customer_Filter";
        this.clear = "CLEAR";
        this.selectNumber = "Select_Number";
        // save : string = "Save";
        // contactNote : string = "Contact_Note";
        this.cancel = "Cancel";
        this.protectionTitle = "Protection_Title";
        this.deleteMessage = "Delete_Message";
        this.customer = "Customer";
        this.deleteProtectionTitle = "Delete_Protection_Title";
        this.updateProtectionTitle = "Update_Protection_Title";
        this.commentRemindTitle = "Comment_Remind_Title";
        this.confirm = "Confirm";
        this.completed = "Completed";
        this.searchPlaceholder = "Search_Placeholder";
        this.notePlaceholder = "Note_Placeholder";
        this.logOut = "Log_Out";
        this.noClick = "No_Click";
        this.noInformation = "No_Information";
        this.moreOption = "More_Option";
        this.empty = "Empty";
        this.calendarMore = "Calendar_More";
        this.mainMenu = "Main_Menu";
        this.have = "Have";
        this.appointments = "Appointments";
        this.anAppointment = "An_Appointment";
        this.notification = "Notification";
        this.language = "Language";
        this.version = "Version";
        this.contactMessage = "Contact_Message";
        this.welcome = "Welcome";
        this.accountPassword = "Account_Password";
        this.nationalID = "National_ID";
        this.password = "Password";
        this.forgotPassword = "Forgot_Password";
        this.login = "Login";
        this.pleaseWait = "Please_Wait";
        this.changeLanguage = "Change_Language";
        this.fontSize = "Font_Size";
        this.changeFontSize = "Change_Font_Size";
        this.updateTime = "Update_Time";
        this.seeDetails = "See_Details";
        this.fileDownload = "File_Download";
        this.signIn = "Sign_In";
        this.loadingMessage = "Landing_Message";
        this.load = "Load";
        this.agencyPlanSubtitle = "Agency_Plan_Subtitle";
        this.agencyPlanOverviewTitle = "Agency_Plan_Overview_Title";
        this.FYFCForecast = "FYFC_Forecast";
        this.FYFCActual = "FYFC_Actual";
        this.FYFCMonthPlan = "FYFC_Month_Plan";
        this.ANPForecast = "ANP_Forecast";
        this.ANPActual = "ANP_Actual";
        this.ANPMonthPlan = "ANP_Month_Plan";
        this.manpowerPlan = "Manpower_Plan";
        this.recruitmentPlan = "Recruitment_Plan";
        this.manpower = "Manpower";
        this.recruitment = "Recruitment";
        this.FYFCGoal = "FYFC_Goal";
        this.directUnit = "Direct_Unit";
        this.agencyPlanInformationTitle = "Agency_Plan_Information_Title";
        this.yellow = "Yellow";
        this.agencyPlanInformation = "Agency_Plan_Information";
        this.agencyPlanExpected = "Agency_Plan_Expected";
        this.teamGoal = 'Team_Goal';
        this.Q1 = "Q1";
        this.Q2 = "Q2";
        this.Q3 = "Q3";
        this.Q4 = "Q4";
        this.recruitmentTotal = "Recruitment_Total";
        this.indirectUnit = "Indirect_Unit";
        this.ANPGoal = "ANP_Goal";
        this.saveFile = "Save_File";
        this.agencyPlan = "Agency_Plan";
        this.FYFC = "FYFC";
        this.ANP = "ANP";
        this.recruitmentCommitment = "Recruitment_Commitment";
        this.caseCount = "Case_Count";
        this.averageFYFCPerCase = "Average_FYFC_Per_Case";
        this.averageANPPerCase = "Average_ANP_Per_Case";
        this.manpowerGoal = "Manpower_Goal";
        this.reset = "Reset";
        this.thisYearTitle = "This_Year_Title";
        this.variableYearTitle = "Variable_Year_Title";
        this.yourAgencyGoal = "Your_Agency_Goal";
        this.annualConvention = "Annual_Convention";
        this.promotionPlan = "Promotion_Plan";
        this.MDRT = "MDRT";
        this.goalEffectiveMonth = "Goal_Effective_Month";
        this.allYearGoal = "All_Year_Goal";
        this.monthGoal = "Month_Goal";
        this.allianzStarClub = "Allianz_Star_Club";
        this.summitTrip = "Summit_Trip";
        this.longTermIncentiveTripProgram = "Long_Term_Incentive_Trip_Program";
        this.COT = "COT";
        this.TOT = "TOT";
        this.SP = "SP";
        this.AM = "AM";
        this.SM = "SM";
        this.dashDash = "Dash_Dash";
        this.personalMonthlyPlanFYFC = "Personal_Monthly_Plan_FYFC";
        this.plan = "Plan";
        this.actual = "Actual";
        this.overviewStep3Title = "Overview_Step3_Title";
        this.find = "Find";
        this.meet = "Meet";
        this.submit = "Submit";
        this.inforce = "Inforce";
        this.daily = "Daily";
        this.weekly = "Weekly";
        this.monthly = "Monthly";
        this.approvalStatus = "Approval_Status";
        this.goalBeenApproval = "Goal_Been_Approval";
        this.adjustYourGoal = "Adjust_Your_Goal";
        this.proceedToProgress = "Proceed_To_Progress";
        this.teamMonthlyPlanFYFCTitle = "Team_Monthly_Plan_FYFC_Title";
        this.completionRate = "Completion_Rate";
        this.editPersonalPlanFYFCTitle = "Edit_Personal_Plan_FYFC_Title";
        this.goalBeenReject = "Goal_Been_Reject";
        this.goalBeenPend = "Goal_Been_Pend";
        this.needToBeRecommentTitle = "Need_To_Be_Recomment_Title";
        this.needToBeRecommentContent = "Need_To_Be_Recomment_Content";
        this.workingExperience = "Working_Experience";
        this.goalSettingStep1Title = "Goal_Setting_Step1_Title";
        this.goalSettingStep2Title = "Goal_Setting_Step2_Title";
        this.goalSettingStep3Title = "Goal_Setting_Step3_Title";
        this.goalSettingStep4Title = "Goal_Setting_Step4_Title";
        this.goalSettingStep5Title = "Goal_Setting_Step5_Title";
        this.statusBarStep1 = "Status_Bar_Step1";
        this.statusBarStep2 = "Status_Bar_Step2";
        this.statusBarStep3 = "Status_Bar_Step3";
        this.statusBarStep4 = "Status_Bar_Step4";
        this.statusBarStep5 = "Status_Bar_Step5";
        this.FYFCAllYear = "FYFC_All_Year";
        this.FYFCNowToYearEnd = "FYFC_Now_To_Year_End";
        this.NowToYearEnd = "Now_To_Year_End";
        this.yourGoal = "Your_Goal";
        this.comment = "Comment";
        this.findSubtitle = "Find_Subtitle";
        this.scheduleSubtitle = "Schedule_Subtitle";
        this.meetSubtitle = "Meet_Subtitle";
        this.submitSubtitle = "Submit_Subtitle";
        this.inforceSubtitle = "Inforce_Subtitle";
        this.reject = "Reject";
        this.approve = "Approve";
        this.commitmentTeamGoalTitle = "Commitment_Team_Goal_Title";
        this.CommitmentPlaceholder = "Commitment_Placeholder";
        this.progressCongratulationsMessage = "Progress_Congratulations_Message";
        this.month1 = 'Month_1';
        this.month2 = 'Month_2';
        this.month3 = 'Month_3';
        this.month4 = 'Month_4';
        this.month5 = 'Month_5';
        this.month6 = 'Month_6';
        this.month7 = 'Month_7';
        this.month8 = 'Month_8';
        this.month9 = 'Month_9';
        this.month10 = 'Month_10';
        this.month11 = 'Month_11';
        this.month12 = 'Month_12';
        this.times = "Times";
        this.hi = "Hi";
        this.go = "Go";
        this.goalSettingExcel = "Goal_Setting_Excel";
        this.setGoalThisYear = "Set_Goal_This_Year";
        this.next = "Next";
        this.case = "Case";
        this.ok = "Ok";
        this.skip = "Skip";
        this.goalSettingCreateCustomer = "Goal_Setting_Create_Customer";
        this.goalSettingCustomerJournal = "Goal_Setting_Customer_Journal";
        this.goalSettingActivityType = "Goal_Setting_Activity_Type";
        this.goalSettingFastQuotation = "Goal_Setting_Fast_Quotation";
        this.submission = "Submission";
        this.goalSettingInforcePolicy = "Goal_Setting_Inforce_Policy";
        this.FYFCShortfall = "FYFC_Shortfall";
        this.ANPActualVariable = "ANP_Actual_Variable";
        this.ANPAllYear = "ANP_All_Year";
        this.ANPNowToYearEnd = "ANP_Now_To_Year_End";
        this.pendingApproval = "Pending_Approval";
        this.dashboardMonth7 = "Dashboard_Month_7";
        //progress
        this.points = "Points";
        this.congratulationsMsg = 'Progress_Congratulations_Message';
        this.almostMadeItMsg = 'Progress_Almost_Made_It_Message';
        this.wellDoneMsg = 'Progress_Well_Done_Message';
        this.greatJobMsg = 'Progress_Great_Job_Message';
        this.quarter = 'Quarter';
        this.backToProgressBtnText = 'Back_To_Progress';
        this.goal = 'Goal';
        this.forecast = 'Forecast';
        this.shortfall = 'Shortfall';
        //progres activity
        this.activitiesText = 'Activities';
        this.achieveText = 'Achieve';
        this.actualGoal = 'Actual_Goal'; //
        this.actualPlan = 'Actual_Plan'; //
        this.meetPresentText = 'Meet_Present';
        this.monthlyPlanFYFCTitleText = 'Monthly_Plan_FYFC_Title';
        this.totalForecastTitle = 'Total_Forecast';
        this.totalYTDActualTitle = 'Total_YTD_Actual';
        this.directUnitTitle = 'Direct_Unit_Title';
        this.indirectUnitTitle = 'Indirect_Unit_Title';
        this.agencyTitle = 'Agency_Title';
        this.allZoneTitle = 'All_Zone_Title';
        //infomation
        this.informationDescriptionText = 'Info_Information_Description';
        this.infoTitle = 'Info_Title';
        this.infoMonthDetailText = 'Info_Month_Detail';
        this.infoQuarterDetailText = 'Info_Quarter_Detail';
        this.infoYearDetailText = 'Info_Year_Detail';
        this.infoForecastRecruitmentDetailText = 'Info_Forecast_Recruitment_Detail';
        this.infoHowToReadThisTitle = 'Info_How_To_Read_This';
        this.infoConversionRateText = 'Info_Conversion_Rate';
        this.infoConversionRateDetailText = 'Info_Conversion_Rate_Detail';
        this.infoActivityLabelText = 'Info_Activity_Label';
        this.infoRedMeanText = 'Info_Red_Mean';
        this.infoGreyMeanText = 'Info_Grey_Mean';
        this.infoIfAnActivity1Text = 'Info_If_An_Activity_1';
        this.infoIfAnActivity2Text = 'Info_If_An_Activity_2';
        this.infoToFindText = 'Info_To_Find';
        this.infoTryTo1Text = 'Info_Try_To_1';
        this.infoTryTo2Text = 'Info_Try_To_2';
        this.infoTryTo3Text = 'Info_Try_To_3';
        this.infoMoreActive1Text = 'Info_More_Active_1';
        this.infoMoreActive2Text = 'Info_More_Active_2';
        this.infoMoreActive3Text = 'Info_More_Active_3';
        this.infoMoreActive4Text = 'Info_More_Active_4';
        this.infoTryHard1Text = 'Info_Try_Hard_1';
        this.infoTryHard2Text = 'Info_Try_Hard_2';
        this.infoTryHard3Text = 'Info_Try_Hard_3';
        this.infoHighQuality1Text = 'Info_High_Quality_1';
        this.infoHighQuality2Text = 'Info_High_Quality_2';
        this.infoAllAmountCountsByMillion = "Info_All_Amount_Counts_By_Million";
        this.waitingApproval = "Waiting_Approval";
        this.complete = "Complete";
        //notification
        this.needToGoalSettingTitle = "Need_To_Goal_Setting_Title";
        this.goalAutoApproveMessageTitle = "Goal_Auto_Approve_Message_Title";
        this.goalAutoApproveMessageDesc = "Goal_Auto_Approve_Message_Desc";
        this.goalAutoApproveLeaderMessageTitle = "Goal_Auto_Approve_Leader_Message_Title";
        this.goalAutoApproveLeaderMessageDesc = "Goal_Auto_Approve_Leader_Message_Desc";
        this.approveGoalIsRejectTitle = "Approve_Goal_Is_Reject_Title";
        this.approveGoalIsRejectBody = "Approve_Goal_Is_Reject_Body";
        this.approveGoalIsApprovedTitle = "Approve_Goal_Is_Approved_Title";
        this.approveGoalIsApprovedBody = "Approve_Goal_Is_Approved_Body";
        this.pendingReviewTitle = "Pending_Review_Title";
        this.supervisorHaveChangeAgentTitle = "Supervisor_Have_Change_Agent_Title";
        this.supervisorHaveChangeAgentBody = "Supervisor_Have_Change_Agent_Body";
        this.supervisorHaveChangeOldTitle = "Supervisor_Have_Change_Old_Title";
        this.supervisorHaveChangeOldBody = "Supervisor_Have_Change_Old_Body";
        this.supervisorHaveChangeNewTitle = "Supervisor_Have_Change_New_Title";
        this.supervisorHaveChangeNewBody = "Supervisor_Have_Change_New_Body";
        this.goalAutoRejectMessageTitle = "Goal_Auto_Reject_Message_Title";
        this.goalAutoRejectMessageDescription = "Goal_Auto_Reject_Message_Description";
        this.goalAutoRejectLeaderMessageTitle = "Goal_Auto_Reject_Leader_Message_Title";
        this.goalAutoRejectLeaderMessageDescription = "Goal_Auto_Reject_Leader_Message_Description";
        this.activityTenPointTitle = "Activity_Ten_Point_Title";
        this.activityTenPointBody = "Activity_Ten_Point_Body";
        this.activityTwentyPointTitle = "Activity_Twenty_Point_Title";
        this.activityTwentyPointBody = "Activity_Twenty_Point_Body";
        this.activityMiniPointTitle = "Activity_Mini_Point_Title";
        this.activityMiniPointBody = "Activity_Mini_Point_Body";
        this.customerOvertimeTitle = "Customer_Overtime_Title";
        this.customerAutoDeleteTitle = "Customer_Auto_Delete_Title";
        this.goalPeriodNotStartTitle = "Goal_Period_Not_Start_Title";
        this.goalPeriodNotStartBody = "Goal_Period_Not_Start_Body";
        this.adjustGoal = "Adjust_Goal";
        this.seeProgress = "See_Progress";
        this.IGotIt = "I_Got_It";
        this.dataPrivacyProtectionTitle = "Data_Privacy_Protection_Title";
        this.dataPrivacyProtectionBody = "Data_Privacy_Protection_Body";
        this.pleaseReconnectInternet = "Please_Reconnect_Internet";
        this.dataCollectionProcessAndUsageTitle = "Data_Collection_Process_And_Usage_Title";
        this.dataCollectionProcessAndUsageBody = "Data_Collection_Process_And_Usage_Body";
        this.versionMessage = "Version_Message";
        this.timeOut = "Time_Out";
        this.versionUpdate = "Version_Update";
        this.later = "Later";
        this.noWifiConnected = "No_Wifi_Connected";
        this.pleaseConnectInternet = "Please_Connect_Internet";
        this.deleteDataTitle = "Delete_Data_Title";
        this.deleteDataBody = "Delete_Data_Body";
        this.notShowMessage = "Not_Show_Message";
        this.languageConversionTitle = "Language_Conversion_Title";
        this.languageConversionBody = "Language_Conversion_Body";
        this.customersUnit = "Customers_Unit";
        this.casesUnit = "Cases_Unit";
        this.todayScheduleBirthday = "Today_Schedule_Birthday";
        this.yearUnit = "Year_Unit";
        this.vertical = "Vertical";
        this.horizonal = "Horizonal";
        this.addProtection = "Add_Protection";
        this.more = "More";
        this.submitDeal = "Submit_Deal";
        this.progressGoToCalendar = "Progress_Go_To_Calendar";
        this.homeHi = "Home_Hi";
        this.homeAppointmentDetails = "Home_Appointment_Details";
        this.homeEdit = "Home_Edit";
        this.homeDelete = "Home_Delete";
        this.homeAppointment = "Home_Appointment";
        this.homeSave = "Home_Save";
        this.homeFYFC = "Home_FYFC";
        this.homeANP = "Home_ANP";
        this.homeConfirm = "Home_Confirm";
        this.homePersonal = "Home_Personal";
        this.homeTeam = "Home_Team";
        this.homeDetails = "Home_Details";
        this.homeToday = "Home_Today";
        this.homeSchedule = "Home_Schedule";
        this.homeBirthday = "Home_Birthday";
        this.customerClear = "Customer_Clear";
        this.customerAppointment = "Customer_Appointment";
        this.customerContact = "Customer_Contact";
        this.customerEdit = "Customer_Edit";
        this.customerDelete = "Customer_Delete";
        this.customerAdd = "Customer_Add";
        this.addProfile = "Add_Profile";
        this.customerSave = "Customer_Save";
        this.customerConfirm = "Customer_Confirm";
        this.customerDetail = "Customer_Detail";
        this.unbindDevice = "Unbind_Device";
        this.unbind = "Unbind";
        this.settingSeeDetails = "Setting_See_Details";
        this.goalSettingReset = "Goal_Setting_Reset";
        this.goalSettingNext = "Goal_Setting_Next";
        this.goalSettingSubmit = "Goal_Setting_Submit";
        this.goalSettingFind = "Goal_Setting_Find";
        this.goalSettingFindSubtitle = "Goal_Setting_Find_Subtitle";
        this.goalSettingSchedule = "Goal_Setting_Schedule";
        this.goalSettingScheduleSubtitle = "Goal_Setting_Schedule_Subtitle";
        this.goalSettingMeetPresent = "Goal_Setting_Meet_Present";
        this.goalSettingMeetPresentSubtitle = "Goal_Setting_Meet_Present_Subtitle";
        this.goalSettingSubmitDeal = "Goal_Setting_Submit_Deal";
        this.goalSettingSubmitDealSubtitle = "Goal_Setting_Submit_Deal_Subtitle";
        this.goalSettingInforce = "Goal_Setting_Inforce";
        this.goalSettingInforceSubtitle = "Goal_Setting_Inforce_Subtitle";
        this.goalSettingDaily = "Goal_Setting_Daily";
        this.goalSettingWeekly = "Goal_Setting_Weekly";
        this.goalSettingMonthly = "Goal_Setting_Monthly";
        this.goalSettingDay = "Goal_Setting_Day";
        this.goalSettingWeek = "Goal_Setting_Week";
        this.goalSettingMonth = "Goal_Setting_Month";
        this.goalSettingActual = "Goal_Setting_Actual";
        this.goalSettingFYFC = "Goal_Setting_FYFC";
        this.goalSettingANP = "Goal_Setting_ANP";
        this.goalSettingManpower = "Goal_Setting_Manpower";
        this.goalSettingRecruitment = "Goal_Setting_Recruitment";
        this.goalSettingPersonal = "Goal_Setting_Personal";
        this.goalSettingTeam = "Goal_Setting_Team";
        this.goalSettingClear = "Goal_Setting_Clear";
        this.goalSettingSave = "Goal_Setting_Save";
        this.goalSettingPlan = "Goal_Setting_Plan";
        this.goalSettingSeeDetails = "Goal_Setting_See_Details";
        this.goalSettingLandingHi = "Goal_Setting_Landing_Hi";
        this.goalSettingCalendarJournal = "Goal_Setting_Calendar_Journal";
        this.calendarFilter = "Calendar_Filter";
        this.calendarActivity = "Calendar_Activity";
        this.calendarCustomerName = "Calendar_Customer_Name";
        this.calendarAppointmentDetails = "Calendar_Appointment_Details";
        this.calendarEdit = "Calendar_Edit";
        this.calendarDelete = "Calendar_Delete";
        this.calendarAppointment = "Calendar_Appointment";
        this.calendarSave = "Calendar_Save";
        this.calendarDay = "Calendar_Day";
        this.calendarWeek = "Calendar_Week";
        this.calendarMonth = "Calendar_Month";
        this.calendarYear = "Calendar_Year";
        this.calendarToday = "Calendar_Today";
        this.progressWeek = "Progress_Week";
        this.progressToday = "Progress_Today";
        this.progressPersonal = "Progress_Personal";
        this.progressTeam = "Progress_Team";
        this.progressMonth = "Progress_Month";
        this.progressQuarter = "Progress_Quarter";
        this.progressYear = "Progress_Year";
        this.progressFYFC = "Progress_FYFC";
        this.progressANP = "Progress_ANP";
        this.progressFind = "Progress_Find";
        this.progressFindSubtitle = "Progress_Find_Subtitle";
        this.progressSchedule = "Progress_Schedule";
        this.progressScheduleSubtitle = "Progress_Schedule_Subtitle";
        this.progressMeetPresent = "Progress_Meet_Present";
        this.progressMeetPresentSubtitle = "Progress_Meet_Present_Subtitle";
        this.progressSubmitDeal = "Progress_Submit_Deal";
        this.progressSubmitDealSubtitle = "Progress_Submit_Deal_Subtitle";
        this.progressInforce = "Progress_Inforce";
        this.progressInforceSubtitle = "Progress_Inforce_Subtitle";
        this.progressPlan = "Progress_Plan";
        this.progressActual = "Progress_Actual";
        this.progressGoal = "Progress_Goal";
        this.progressForecast = "Progress_Forecast";
        this.progressShortfall = "Progress_Shortfall";
        this.progressManpower = "Progress_Manpower";
        this.progressRecruitment = "Progress_Recruitment";
        this.progressCurrentMonth = "Progress_Current_Month";
        this.progressCurrentQuarter = "Progress_Current_Quarter";
        this.progressCurrentYear = "Progress_Current_Year";
        this.progressForecastRecruitment = "Progress_Forecast_Recruitment";
        this.progressClose = "Progress_Close";
        this.progressSeeDetails = "Progress_See_Details";
        this.progressDetail = "Progress_Detail";
        this.settingYes = "Setting_Yes";
        this.settingNo = "Setting_No";
        this.detectScreenshotTitle = "Detect_Screenshot_Title";
        this.detectScreenshotContent = "Detect_Screenshot_Content";
        this.noContactPermissionTitle = "No_Contact_Permission_Title";
        this.noContactPermissionContent = "No_Contact_Permission_Content";
        this.submitFailTitle = "Submit_Fail_Title";
        this.submitFailContent = "Submit_Fail_Content";
        this.notificationSeeProgress = "Notification_See_Progress";
        this.notificationSaveFeedback = "Notification_Save_Feedback";
        this.notificationDeleteFeedback = "Notification_Delete_Feedback";
        this.notificationCompleteFeedback = "Notification_Complete_Feedback";
        //message 1, 2
        this.goalPeriodNotStartOk = "Goal_Period_Not_Start_Ok";
        //message 3 
        this.goalPeriodIsBeginOk = "Goal_Period_Is_Begin_Ok";
        //message 5 
        this.needToGoalSettingAdjustGoal = "Need_To_Goal_Setting_Adjust_Goal";
        //message 6 
        this.goalAutoApproveAdjustGoal = "Goal_Auto_Approve_Adjust_Goal";
        //messsage 7 
        this.goalAutoApproveLeaderOk = "Goal_Auto_Approve_Leader_Ok";
        //messaage 8
        this.approveGoalIsRejectAdjustGoal = "Approve_Goal_Is_Reject_Adjust_Goal";
        //message 9
        this.approveGoalIsApprovedOk = "Approve_Goal_Is_Approved_Ok";
        //message 11
        this.pendingReviewAgencyPlan = "Pending_Review_Agency_Plan";
        //message 12
        this.supervisorHaveChangeAgentOk = "Supervisor_Have_Change_Agent_Ok";
        //message 13
        this.supervisorHaveChangeOldOk = "Supervisor_Have_Change_Old_Ok";
        //message 14
        this.supervisorHaveChangeNewAgencyPlan = "Supervisor_Have_Change_New_Agency_Plan";
        //message 15
        this.goalAutoRejectAdjustGoal = "Goal_Auto_Reject_Adjust_Goal";
        //message 16
        this.goalAutoRejectLeaderOk = "Goal_Auto_Reject_Leader_Ok";
        //message 21
        this.dataPrivacyProtectionConfirm = "Data_Privacy_Protection_Confirm";
        // message 23
        this.customerOvertimeConfirm = "Customer_Overtime_Confirm";
        //message 24
        this.customerAutoDeleteConfirm = "Customer_Auto_Delete_Confirm";
        //message 28
        this.noWifiConnectedOk = "No_Wifi_Connected_Ok";
        //message 29
        this.versionUpdateYes = "Version_Update_Yes";
        this.versionUpdateLater = "Version_Update_Later";
        //message 30
        this.timeOutOk = "Time_Out_Ok";
        //message 31
        this.dataCollectionProcessAndUsageReject = "Data_Collection_Process_And_Usage_Reject";
        this.dataCollectionProcessAndUsageConfirm = "Data_Collection_Process_And_Usage_Confirm";
        //message 38
        this.detectScreenshotOk = "Detect_Screenshot_Ok";
        //not on master file
        this.submitFailOk = "Submit_Fail_Ok";
        this.noContactPermissionOk = "No_Contact_Permission_Ok";
        this.httpErrorOk = "HTTP_Error_Ok";
    }
    return Language;
}());
export { Language };
if (false) {
    /** @type {?} */
    Language.prototype.performance;
    /** @type {?} */
    Language.prototype.team;
    /** @type {?} */
    Language.prototype.personal;
    /** @type {?} */
    Language.prototype.activitiesPoints;
    /** @type {?} */
    Language.prototype.monthlyProgress;
    /** @type {?} */
    Language.prototype.yearlyProgress;
    /** @type {?} */
    Language.prototype.message;
    /** @type {?} */
    Language.prototype.progress;
    /** @type {?} */
    Language.prototype.goalSettingMsgType;
    /** @type {?} */
    Language.prototype.all;
    /** @type {?} */
    Language.prototype.unread;
    /** @type {?} */
    Language.prototype.noMessage;
    /** @type {?} */
    Language.prototype.schedule;
    /** @type {?} */
    Language.prototype.noBirthday;
    /** @type {?} */
    Language.prototype.customerType;
    /** @type {?} */
    Language.prototype.customerSource;
    /** @type {?} */
    Language.prototype.birthday;
    /** @type {?} */
    Language.prototype.ageRange;
    /** @type {?} */
    Language.prototype.gender;
    /** @type {?} */
    Language.prototype.source;
    /** @type {?} */
    Language.prototype.marriage;
    /** @type {?} */
    Language.prototype.children;
    /** @type {?} */
    Language.prototype.familiarity;
    /** @type {?} */
    Language.prototype.recentStatus;
    /** @type {?} */
    Language.prototype.customerStatus;
    /** @type {?} */
    Language.prototype.contactFrequencyMonth;
    /** @type {?} */
    Language.prototype.possibility;
    /** @type {?} */
    Language.prototype.completeness;
    /** @type {?} */
    Language.prototype.contactFrequency;
    /** @type {?} */
    Language.prototype.timePerYear;
    /** @type {?} */
    Language.prototype.appointment;
    /** @type {?} */
    Language.prototype.contact;
    /** @type {?} */
    Language.prototype.edit;
    /** @type {?} */
    Language.prototype.delete;
    /** @type {?} */
    Language.prototype.home;
    /** @type {?} */
    Language.prototype.homepage;
    /** @type {?} */
    Language.prototype.work;
    /** @type {?} */
    Language.prototype.mobile;
    /** @type {?} */
    Language.prototype.detail;
    /** @type {?} */
    Language.prototype.occupation;
    /** @type {?} */
    Language.prototype.company;
    /** @type {?} */
    Language.prototype.annualIncome;
    /** @type {?} */
    Language.prototype.contactNote;
    /** @type {?} */
    Language.prototype.add;
    /** @type {?} */
    Language.prototype.noRecord;
    /** @type {?} */
    Language.prototype.customerList;
    /** @type {?} */
    Language.prototype.importPhone;
    /** @type {?} */
    Language.prototype.people;
    /** @type {?} */
    Language.prototype.lastName;
    /** @type {?} */
    Language.prototype.firstName;
    /** @type {?} */
    Language.prototype.phone;
    /** @type {?} */
    Language.prototype.email;
    /** @type {?} */
    Language.prototype.address;
    /** @type {?} */
    Language.prototype.country;
    /** @type {?} */
    Language.prototype.city;
    /** @type {?} */
    Language.prototype.area;
    /** @type {?} */
    Language.prototype.code;
    /** @type {?} */
    Language.prototype.age;
    /** @type {?} */
    Language.prototype.select;
    /** @type {?} */
    Language.prototype.contactFrequencyYear;
    /** @type {?} */
    Language.prototype.save;
    /** @type {?} */
    Language.prototype.lastNamePlaceholder;
    /** @type {?} */
    Language.prototype.firstNamePlaceholder;
    /** @type {?} */
    Language.prototype.wrongLastName;
    /** @type {?} */
    Language.prototype.wrongEmail;
    /** @type {?} */
    Language.prototype.wrongBirthday;
    /** @type {?} */
    Language.prototype.annualIncomeYearNTD;
    /** @type {?} */
    Language.prototype.preset;
    /** @type {?} */
    Language.prototype.day;
    /** @type {?} */
    Language.prototype.week;
    /** @type {?} */
    Language.prototype.month;
    /** @type {?} */
    Language.prototype.year;
    /** @type {?} */
    Language.prototype.today;
    /** @type {?} */
    Language.prototype.filter;
    /** @type {?} */
    Language.prototype.appointmentDetail;
    /** @type {?} */
    Language.prototype.saved;
    /** @type {?} */
    Language.prototype.loading;
    /** @type {?} */
    Language.prototype.title;
    /** @type {?} */
    Language.prototype.location;
    /** @type {?} */
    Language.prototype.activity;
    /** @type {?} */
    Language.prototype.date;
    /** @type {?} */
    Language.prototype.allDay;
    /** @type {?} */
    Language.prototype.from;
    /** @type {?} */
    Language.prototype.to;
    /** @type {?} */
    Language.prototype.alert;
    /** @type {?} */
    Language.prototype.remark;
    /** @type {?} */
    Language.prototype.yes;
    /** @type {?} */
    Language.prototype.no;
    /** @type {?} */
    Language.prototype.deleteAppointment;
    /** @type {?} */
    Language.prototype.wrongTitle;
    /** @type {?} */
    Language.prototype.wrongAlert;
    /** @type {?} */
    Language.prototype.alertPlaceholder;
    /** @type {?} */
    Language.prototype.wrongTitleRequired;
    /** @type {?} */
    Language.prototype.wrongActivityRequired;
    /** @type {?} */
    Language.prototype.wrongDate;
    /** @type {?} */
    Language.prototype.wrongTime;
    /** @type {?} */
    Language.prototype.wrongStartTime;
    /** @type {?} */
    Language.prototype.wrongEndTime;
    /** @type {?} */
    Language.prototype.wrongAlertRequired;
    /** @type {?} */
    Language.prototype.noSchedule;
    /** @type {?} */
    Language.prototype.customerInformation;
    /** @type {?} */
    Language.prototype.click;
    /** @type {?} */
    Language.prototype.noEdit;
    /** @type {?} */
    Language.prototype.noSearch;
    /** @type {?} */
    Language.prototype.noFilter;
    /** @type {?} */
    Language.prototype.import;
    /** @type {?} */
    Language.prototype.customerFilter;
    /** @type {?} */
    Language.prototype.clear;
    /** @type {?} */
    Language.prototype.selectNumber;
    /** @type {?} */
    Language.prototype.cancel;
    /** @type {?} */
    Language.prototype.protectionTitle;
    /** @type {?} */
    Language.prototype.deleteMessage;
    /** @type {?} */
    Language.prototype.customer;
    /** @type {?} */
    Language.prototype.deleteProtectionTitle;
    /** @type {?} */
    Language.prototype.updateProtectionTitle;
    /** @type {?} */
    Language.prototype.commentRemindTitle;
    /** @type {?} */
    Language.prototype.confirm;
    /** @type {?} */
    Language.prototype.completed;
    /** @type {?} */
    Language.prototype.searchPlaceholder;
    /** @type {?} */
    Language.prototype.notePlaceholder;
    /** @type {?} */
    Language.prototype.logOut;
    /** @type {?} */
    Language.prototype.noClick;
    /** @type {?} */
    Language.prototype.noInformation;
    /** @type {?} */
    Language.prototype.moreOption;
    /** @type {?} */
    Language.prototype.empty;
    /** @type {?} */
    Language.prototype.calendarMore;
    /** @type {?} */
    Language.prototype.mainMenu;
    /** @type {?} */
    Language.prototype.have;
    /** @type {?} */
    Language.prototype.appointments;
    /** @type {?} */
    Language.prototype.anAppointment;
    /** @type {?} */
    Language.prototype.notification;
    /** @type {?} */
    Language.prototype.language;
    /** @type {?} */
    Language.prototype.version;
    /** @type {?} */
    Language.prototype.contactMessage;
    /** @type {?} */
    Language.prototype.welcome;
    /** @type {?} */
    Language.prototype.accountPassword;
    /** @type {?} */
    Language.prototype.nationalID;
    /** @type {?} */
    Language.prototype.password;
    /** @type {?} */
    Language.prototype.forgotPassword;
    /** @type {?} */
    Language.prototype.login;
    /** @type {?} */
    Language.prototype.pleaseWait;
    /** @type {?} */
    Language.prototype.changeLanguage;
    /** @type {?} */
    Language.prototype.fontSize;
    /** @type {?} */
    Language.prototype.changeFontSize;
    /** @type {?} */
    Language.prototype.updateTime;
    /** @type {?} */
    Language.prototype.seeDetails;
    /** @type {?} */
    Language.prototype.fileDownload;
    /** @type {?} */
    Language.prototype.signIn;
    /** @type {?} */
    Language.prototype.loadingMessage;
    /** @type {?} */
    Language.prototype.load;
    /** @type {?} */
    Language.prototype.agencyPlanSubtitle;
    /** @type {?} */
    Language.prototype.agencyPlanOverviewTitle;
    /** @type {?} */
    Language.prototype.FYFCForecast;
    /** @type {?} */
    Language.prototype.FYFCActual;
    /** @type {?} */
    Language.prototype.FYFCMonthPlan;
    /** @type {?} */
    Language.prototype.ANPForecast;
    /** @type {?} */
    Language.prototype.ANPActual;
    /** @type {?} */
    Language.prototype.ANPMonthPlan;
    /** @type {?} */
    Language.prototype.manpowerPlan;
    /** @type {?} */
    Language.prototype.recruitmentPlan;
    /** @type {?} */
    Language.prototype.manpower;
    /** @type {?} */
    Language.prototype.recruitment;
    /** @type {?} */
    Language.prototype.FYFCGoal;
    /** @type {?} */
    Language.prototype.directUnit;
    /** @type {?} */
    Language.prototype.agencyPlanInformationTitle;
    /** @type {?} */
    Language.prototype.yellow;
    /** @type {?} */
    Language.prototype.agencyPlanInformation;
    /** @type {?} */
    Language.prototype.agencyPlanExpected;
    /** @type {?} */
    Language.prototype.teamGoal;
    /** @type {?} */
    Language.prototype.Q1;
    /** @type {?} */
    Language.prototype.Q2;
    /** @type {?} */
    Language.prototype.Q3;
    /** @type {?} */
    Language.prototype.Q4;
    /** @type {?} */
    Language.prototype.recruitmentTotal;
    /** @type {?} */
    Language.prototype.indirectUnit;
    /** @type {?} */
    Language.prototype.ANPGoal;
    /** @type {?} */
    Language.prototype.saveFile;
    /** @type {?} */
    Language.prototype.agencyPlan;
    /** @type {?} */
    Language.prototype.FYFC;
    /** @type {?} */
    Language.prototype.ANP;
    /** @type {?} */
    Language.prototype.recruitmentCommitment;
    /** @type {?} */
    Language.prototype.caseCount;
    /** @type {?} */
    Language.prototype.averageFYFCPerCase;
    /** @type {?} */
    Language.prototype.averageANPPerCase;
    /** @type {?} */
    Language.prototype.manpowerGoal;
    /** @type {?} */
    Language.prototype.reset;
    /** @type {?} */
    Language.prototype.thisYearTitle;
    /** @type {?} */
    Language.prototype.variableYearTitle;
    /** @type {?} */
    Language.prototype.yourAgencyGoal;
    /** @type {?} */
    Language.prototype.annualConvention;
    /** @type {?} */
    Language.prototype.promotionPlan;
    /** @type {?} */
    Language.prototype.MDRT;
    /** @type {?} */
    Language.prototype.goalEffectiveMonth;
    /** @type {?} */
    Language.prototype.allYearGoal;
    /** @type {?} */
    Language.prototype.monthGoal;
    /** @type {?} */
    Language.prototype.allianzStarClub;
    /** @type {?} */
    Language.prototype.summitTrip;
    /** @type {?} */
    Language.prototype.longTermIncentiveTripProgram;
    /** @type {?} */
    Language.prototype.COT;
    /** @type {?} */
    Language.prototype.TOT;
    /** @type {?} */
    Language.prototype.SP;
    /** @type {?} */
    Language.prototype.AM;
    /** @type {?} */
    Language.prototype.SM;
    /** @type {?} */
    Language.prototype.dashDash;
    /** @type {?} */
    Language.prototype.personalMonthlyPlanFYFC;
    /** @type {?} */
    Language.prototype.plan;
    /** @type {?} */
    Language.prototype.actual;
    /** @type {?} */
    Language.prototype.overviewStep3Title;
    /** @type {?} */
    Language.prototype.find;
    /** @type {?} */
    Language.prototype.meet;
    /** @type {?} */
    Language.prototype.submit;
    /** @type {?} */
    Language.prototype.inforce;
    /** @type {?} */
    Language.prototype.daily;
    /** @type {?} */
    Language.prototype.weekly;
    /** @type {?} */
    Language.prototype.monthly;
    /** @type {?} */
    Language.prototype.approvalStatus;
    /** @type {?} */
    Language.prototype.goalBeenApproval;
    /** @type {?} */
    Language.prototype.adjustYourGoal;
    /** @type {?} */
    Language.prototype.proceedToProgress;
    /** @type {?} */
    Language.prototype.teamMonthlyPlanFYFCTitle;
    /** @type {?} */
    Language.prototype.completionRate;
    /** @type {?} */
    Language.prototype.editPersonalPlanFYFCTitle;
    /** @type {?} */
    Language.prototype.goalBeenReject;
    /** @type {?} */
    Language.prototype.goalBeenPend;
    /** @type {?} */
    Language.prototype.needToBeRecommentTitle;
    /** @type {?} */
    Language.prototype.needToBeRecommentContent;
    /** @type {?} */
    Language.prototype.workingExperience;
    /** @type {?} */
    Language.prototype.goalSettingStep1Title;
    /** @type {?} */
    Language.prototype.goalSettingStep2Title;
    /** @type {?} */
    Language.prototype.goalSettingStep3Title;
    /** @type {?} */
    Language.prototype.goalSettingStep4Title;
    /** @type {?} */
    Language.prototype.goalSettingStep5Title;
    /** @type {?} */
    Language.prototype.statusBarStep1;
    /** @type {?} */
    Language.prototype.statusBarStep2;
    /** @type {?} */
    Language.prototype.statusBarStep3;
    /** @type {?} */
    Language.prototype.statusBarStep4;
    /** @type {?} */
    Language.prototype.statusBarStep5;
    /** @type {?} */
    Language.prototype.FYFCAllYear;
    /** @type {?} */
    Language.prototype.FYFCNowToYearEnd;
    /** @type {?} */
    Language.prototype.NowToYearEnd;
    /** @type {?} */
    Language.prototype.yourGoal;
    /** @type {?} */
    Language.prototype.comment;
    /** @type {?} */
    Language.prototype.findSubtitle;
    /** @type {?} */
    Language.prototype.scheduleSubtitle;
    /** @type {?} */
    Language.prototype.meetSubtitle;
    /** @type {?} */
    Language.prototype.submitSubtitle;
    /** @type {?} */
    Language.prototype.inforceSubtitle;
    /** @type {?} */
    Language.prototype.reject;
    /** @type {?} */
    Language.prototype.approve;
    /** @type {?} */
    Language.prototype.commitmentTeamGoalTitle;
    /** @type {?} */
    Language.prototype.CommitmentPlaceholder;
    /** @type {?} */
    Language.prototype.progressCongratulationsMessage;
    /** @type {?} */
    Language.prototype.month1;
    /** @type {?} */
    Language.prototype.month2;
    /** @type {?} */
    Language.prototype.month3;
    /** @type {?} */
    Language.prototype.month4;
    /** @type {?} */
    Language.prototype.month5;
    /** @type {?} */
    Language.prototype.month6;
    /** @type {?} */
    Language.prototype.month7;
    /** @type {?} */
    Language.prototype.month8;
    /** @type {?} */
    Language.prototype.month9;
    /** @type {?} */
    Language.prototype.month10;
    /** @type {?} */
    Language.prototype.month11;
    /** @type {?} */
    Language.prototype.month12;
    /** @type {?} */
    Language.prototype.times;
    /** @type {?} */
    Language.prototype.hi;
    /** @type {?} */
    Language.prototype.go;
    /** @type {?} */
    Language.prototype.goalSettingExcel;
    /** @type {?} */
    Language.prototype.setGoalThisYear;
    /** @type {?} */
    Language.prototype.next;
    /** @type {?} */
    Language.prototype.case;
    /** @type {?} */
    Language.prototype.ok;
    /** @type {?} */
    Language.prototype.skip;
    /** @type {?} */
    Language.prototype.goalSettingCreateCustomer;
    /** @type {?} */
    Language.prototype.goalSettingCustomerJournal;
    /** @type {?} */
    Language.prototype.goalSettingActivityType;
    /** @type {?} */
    Language.prototype.goalSettingFastQuotation;
    /** @type {?} */
    Language.prototype.submission;
    /** @type {?} */
    Language.prototype.goalSettingInforcePolicy;
    /** @type {?} */
    Language.prototype.FYFCShortfall;
    /** @type {?} */
    Language.prototype.ANPActualVariable;
    /** @type {?} */
    Language.prototype.ANPAllYear;
    /** @type {?} */
    Language.prototype.ANPNowToYearEnd;
    /** @type {?} */
    Language.prototype.pendingApproval;
    /** @type {?} */
    Language.prototype.dashboardMonth7;
    /** @type {?} */
    Language.prototype.points;
    /** @type {?} */
    Language.prototype.congratulationsMsg;
    /** @type {?} */
    Language.prototype.almostMadeItMsg;
    /** @type {?} */
    Language.prototype.wellDoneMsg;
    /** @type {?} */
    Language.prototype.greatJobMsg;
    /** @type {?} */
    Language.prototype.quarter;
    /** @type {?} */
    Language.prototype.backToProgressBtnText;
    /** @type {?} */
    Language.prototype.goal;
    /** @type {?} */
    Language.prototype.forecast;
    /** @type {?} */
    Language.prototype.shortfall;
    /** @type {?} */
    Language.prototype.activitiesText;
    /** @type {?} */
    Language.prototype.achieveText;
    /** @type {?} */
    Language.prototype.actualGoal;
    /** @type {?} */
    Language.prototype.actualPlan;
    /** @type {?} */
    Language.prototype.meetPresentText;
    /** @type {?} */
    Language.prototype.monthlyPlanFYFCTitleText;
    /** @type {?} */
    Language.prototype.totalForecastTitle;
    /** @type {?} */
    Language.prototype.totalYTDActualTitle;
    /** @type {?} */
    Language.prototype.directUnitTitle;
    /** @type {?} */
    Language.prototype.indirectUnitTitle;
    /** @type {?} */
    Language.prototype.agencyTitle;
    /** @type {?} */
    Language.prototype.allZoneTitle;
    /** @type {?} */
    Language.prototype.informationDescriptionText;
    /** @type {?} */
    Language.prototype.infoTitle;
    /** @type {?} */
    Language.prototype.infoMonthDetailText;
    /** @type {?} */
    Language.prototype.infoQuarterDetailText;
    /** @type {?} */
    Language.prototype.infoYearDetailText;
    /** @type {?} */
    Language.prototype.infoForecastRecruitmentDetailText;
    /** @type {?} */
    Language.prototype.infoHowToReadThisTitle;
    /** @type {?} */
    Language.prototype.infoConversionRateText;
    /** @type {?} */
    Language.prototype.infoConversionRateDetailText;
    /** @type {?} */
    Language.prototype.infoActivityLabelText;
    /** @type {?} */
    Language.prototype.infoRedMeanText;
    /** @type {?} */
    Language.prototype.infoGreyMeanText;
    /** @type {?} */
    Language.prototype.infoIfAnActivity1Text;
    /** @type {?} */
    Language.prototype.infoIfAnActivity2Text;
    /** @type {?} */
    Language.prototype.infoToFindText;
    /** @type {?} */
    Language.prototype.infoTryTo1Text;
    /** @type {?} */
    Language.prototype.infoTryTo2Text;
    /** @type {?} */
    Language.prototype.infoTryTo3Text;
    /** @type {?} */
    Language.prototype.infoMoreActive1Text;
    /** @type {?} */
    Language.prototype.infoMoreActive2Text;
    /** @type {?} */
    Language.prototype.infoMoreActive3Text;
    /** @type {?} */
    Language.prototype.infoMoreActive4Text;
    /** @type {?} */
    Language.prototype.infoTryHard1Text;
    /** @type {?} */
    Language.prototype.infoTryHard2Text;
    /** @type {?} */
    Language.prototype.infoTryHard3Text;
    /** @type {?} */
    Language.prototype.infoHighQuality1Text;
    /** @type {?} */
    Language.prototype.infoHighQuality2Text;
    /** @type {?} */
    Language.prototype.infoAllAmountCountsByMillion;
    /** @type {?} */
    Language.prototype.waitingApproval;
    /** @type {?} */
    Language.prototype.complete;
    /** @type {?} */
    Language.prototype.needToGoalSettingTitle;
    /** @type {?} */
    Language.prototype.goalAutoApproveMessageTitle;
    /** @type {?} */
    Language.prototype.goalAutoApproveMessageDesc;
    /** @type {?} */
    Language.prototype.goalAutoApproveLeaderMessageTitle;
    /** @type {?} */
    Language.prototype.goalAutoApproveLeaderMessageDesc;
    /** @type {?} */
    Language.prototype.approveGoalIsRejectTitle;
    /** @type {?} */
    Language.prototype.approveGoalIsRejectBody;
    /** @type {?} */
    Language.prototype.approveGoalIsApprovedTitle;
    /** @type {?} */
    Language.prototype.approveGoalIsApprovedBody;
    /** @type {?} */
    Language.prototype.pendingReviewTitle;
    /** @type {?} */
    Language.prototype.supervisorHaveChangeAgentTitle;
    /** @type {?} */
    Language.prototype.supervisorHaveChangeAgentBody;
    /** @type {?} */
    Language.prototype.supervisorHaveChangeOldTitle;
    /** @type {?} */
    Language.prototype.supervisorHaveChangeOldBody;
    /** @type {?} */
    Language.prototype.supervisorHaveChangeNewTitle;
    /** @type {?} */
    Language.prototype.supervisorHaveChangeNewBody;
    /** @type {?} */
    Language.prototype.goalAutoRejectMessageTitle;
    /** @type {?} */
    Language.prototype.goalAutoRejectMessageDescription;
    /** @type {?} */
    Language.prototype.goalAutoRejectLeaderMessageTitle;
    /** @type {?} */
    Language.prototype.goalAutoRejectLeaderMessageDescription;
    /** @type {?} */
    Language.prototype.activityTenPointTitle;
    /** @type {?} */
    Language.prototype.activityTenPointBody;
    /** @type {?} */
    Language.prototype.activityTwentyPointTitle;
    /** @type {?} */
    Language.prototype.activityTwentyPointBody;
    /** @type {?} */
    Language.prototype.activityMiniPointTitle;
    /** @type {?} */
    Language.prototype.activityMiniPointBody;
    /** @type {?} */
    Language.prototype.customerOvertimeTitle;
    /** @type {?} */
    Language.prototype.customerAutoDeleteTitle;
    /** @type {?} */
    Language.prototype.goalPeriodNotStartTitle;
    /** @type {?} */
    Language.prototype.goalPeriodNotStartBody;
    /** @type {?} */
    Language.prototype.adjustGoal;
    /** @type {?} */
    Language.prototype.seeProgress;
    /** @type {?} */
    Language.prototype.IGotIt;
    /** @type {?} */
    Language.prototype.dataPrivacyProtectionTitle;
    /** @type {?} */
    Language.prototype.dataPrivacyProtectionBody;
    /** @type {?} */
    Language.prototype.pleaseReconnectInternet;
    /** @type {?} */
    Language.prototype.dataCollectionProcessAndUsageTitle;
    /** @type {?} */
    Language.prototype.dataCollectionProcessAndUsageBody;
    /** @type {?} */
    Language.prototype.versionMessage;
    /** @type {?} */
    Language.prototype.timeOut;
    /** @type {?} */
    Language.prototype.versionUpdate;
    /** @type {?} */
    Language.prototype.later;
    /** @type {?} */
    Language.prototype.noWifiConnected;
    /** @type {?} */
    Language.prototype.pleaseConnectInternet;
    /** @type {?} */
    Language.prototype.deleteDataTitle;
    /** @type {?} */
    Language.prototype.deleteDataBody;
    /** @type {?} */
    Language.prototype.notShowMessage;
    /** @type {?} */
    Language.prototype.languageConversionTitle;
    /** @type {?} */
    Language.prototype.languageConversionBody;
    /** @type {?} */
    Language.prototype.customersUnit;
    /** @type {?} */
    Language.prototype.casesUnit;
    /** @type {?} */
    Language.prototype.todayScheduleBirthday;
    /** @type {?} */
    Language.prototype.yearUnit;
    /** @type {?} */
    Language.prototype.vertical;
    /** @type {?} */
    Language.prototype.horizonal;
    /** @type {?} */
    Language.prototype.addProtection;
    /** @type {?} */
    Language.prototype.more;
    /** @type {?} */
    Language.prototype.submitDeal;
    /** @type {?} */
    Language.prototype.progressGoToCalendar;
    /** @type {?} */
    Language.prototype.homeHi;
    /** @type {?} */
    Language.prototype.homeAppointmentDetails;
    /** @type {?} */
    Language.prototype.homeEdit;
    /** @type {?} */
    Language.prototype.homeDelete;
    /** @type {?} */
    Language.prototype.homeAppointment;
    /** @type {?} */
    Language.prototype.homeSave;
    /** @type {?} */
    Language.prototype.homeFYFC;
    /** @type {?} */
    Language.prototype.homeANP;
    /** @type {?} */
    Language.prototype.homeConfirm;
    /** @type {?} */
    Language.prototype.homePersonal;
    /** @type {?} */
    Language.prototype.homeTeam;
    /** @type {?} */
    Language.prototype.homeDetails;
    /** @type {?} */
    Language.prototype.homeToday;
    /** @type {?} */
    Language.prototype.homeSchedule;
    /** @type {?} */
    Language.prototype.homeBirthday;
    /** @type {?} */
    Language.prototype.customerClear;
    /** @type {?} */
    Language.prototype.customerAppointment;
    /** @type {?} */
    Language.prototype.customerContact;
    /** @type {?} */
    Language.prototype.customerEdit;
    /** @type {?} */
    Language.prototype.customerDelete;
    /** @type {?} */
    Language.prototype.customerAdd;
    /** @type {?} */
    Language.prototype.addProfile;
    /** @type {?} */
    Language.prototype.customerSave;
    /** @type {?} */
    Language.prototype.customerConfirm;
    /** @type {?} */
    Language.prototype.customerDetail;
    /** @type {?} */
    Language.prototype.unbindDevice;
    /** @type {?} */
    Language.prototype.unbind;
    /** @type {?} */
    Language.prototype.settingSeeDetails;
    /** @type {?} */
    Language.prototype.goalSettingReset;
    /** @type {?} */
    Language.prototype.goalSettingNext;
    /** @type {?} */
    Language.prototype.goalSettingSubmit;
    /** @type {?} */
    Language.prototype.goalSettingFind;
    /** @type {?} */
    Language.prototype.goalSettingFindSubtitle;
    /** @type {?} */
    Language.prototype.goalSettingSchedule;
    /** @type {?} */
    Language.prototype.goalSettingScheduleSubtitle;
    /** @type {?} */
    Language.prototype.goalSettingMeetPresent;
    /** @type {?} */
    Language.prototype.goalSettingMeetPresentSubtitle;
    /** @type {?} */
    Language.prototype.goalSettingSubmitDeal;
    /** @type {?} */
    Language.prototype.goalSettingSubmitDealSubtitle;
    /** @type {?} */
    Language.prototype.goalSettingInforce;
    /** @type {?} */
    Language.prototype.goalSettingInforceSubtitle;
    /** @type {?} */
    Language.prototype.goalSettingDaily;
    /** @type {?} */
    Language.prototype.goalSettingWeekly;
    /** @type {?} */
    Language.prototype.goalSettingMonthly;
    /** @type {?} */
    Language.prototype.goalSettingDay;
    /** @type {?} */
    Language.prototype.goalSettingWeek;
    /** @type {?} */
    Language.prototype.goalSettingMonth;
    /** @type {?} */
    Language.prototype.goalSettingActual;
    /** @type {?} */
    Language.prototype.goalSettingFYFC;
    /** @type {?} */
    Language.prototype.goalSettingANP;
    /** @type {?} */
    Language.prototype.goalSettingManpower;
    /** @type {?} */
    Language.prototype.goalSettingRecruitment;
    /** @type {?} */
    Language.prototype.goalSettingPersonal;
    /** @type {?} */
    Language.prototype.goalSettingTeam;
    /** @type {?} */
    Language.prototype.goalSettingClear;
    /** @type {?} */
    Language.prototype.goalSettingSave;
    /** @type {?} */
    Language.prototype.goalSettingPlan;
    /** @type {?} */
    Language.prototype.goalSettingSeeDetails;
    /** @type {?} */
    Language.prototype.goalSettingLandingHi;
    /** @type {?} */
    Language.prototype.goalSettingCalendarJournal;
    /** @type {?} */
    Language.prototype.calendarFilter;
    /** @type {?} */
    Language.prototype.calendarActivity;
    /** @type {?} */
    Language.prototype.calendarCustomerName;
    /** @type {?} */
    Language.prototype.calendarAppointmentDetails;
    /** @type {?} */
    Language.prototype.calendarEdit;
    /** @type {?} */
    Language.prototype.calendarDelete;
    /** @type {?} */
    Language.prototype.calendarAppointment;
    /** @type {?} */
    Language.prototype.calendarSave;
    /** @type {?} */
    Language.prototype.calendarDay;
    /** @type {?} */
    Language.prototype.calendarWeek;
    /** @type {?} */
    Language.prototype.calendarMonth;
    /** @type {?} */
    Language.prototype.calendarYear;
    /** @type {?} */
    Language.prototype.calendarToday;
    /** @type {?} */
    Language.prototype.progressWeek;
    /** @type {?} */
    Language.prototype.progressToday;
    /** @type {?} */
    Language.prototype.progressPersonal;
    /** @type {?} */
    Language.prototype.progressTeam;
    /** @type {?} */
    Language.prototype.progressMonth;
    /** @type {?} */
    Language.prototype.progressQuarter;
    /** @type {?} */
    Language.prototype.progressYear;
    /** @type {?} */
    Language.prototype.progressFYFC;
    /** @type {?} */
    Language.prototype.progressANP;
    /** @type {?} */
    Language.prototype.progressFind;
    /** @type {?} */
    Language.prototype.progressFindSubtitle;
    /** @type {?} */
    Language.prototype.progressSchedule;
    /** @type {?} */
    Language.prototype.progressScheduleSubtitle;
    /** @type {?} */
    Language.prototype.progressMeetPresent;
    /** @type {?} */
    Language.prototype.progressMeetPresentSubtitle;
    /** @type {?} */
    Language.prototype.progressSubmitDeal;
    /** @type {?} */
    Language.prototype.progressSubmitDealSubtitle;
    /** @type {?} */
    Language.prototype.progressInforce;
    /** @type {?} */
    Language.prototype.progressInforceSubtitle;
    /** @type {?} */
    Language.prototype.progressPlan;
    /** @type {?} */
    Language.prototype.progressActual;
    /** @type {?} */
    Language.prototype.progressGoal;
    /** @type {?} */
    Language.prototype.progressForecast;
    /** @type {?} */
    Language.prototype.progressShortfall;
    /** @type {?} */
    Language.prototype.progressManpower;
    /** @type {?} */
    Language.prototype.progressRecruitment;
    /** @type {?} */
    Language.prototype.progressCurrentMonth;
    /** @type {?} */
    Language.prototype.progressCurrentQuarter;
    /** @type {?} */
    Language.prototype.progressCurrentYear;
    /** @type {?} */
    Language.prototype.progressForecastRecruitment;
    /** @type {?} */
    Language.prototype.progressClose;
    /** @type {?} */
    Language.prototype.progressSeeDetails;
    /** @type {?} */
    Language.prototype.progressDetail;
    /** @type {?} */
    Language.prototype.settingYes;
    /** @type {?} */
    Language.prototype.settingNo;
    /** @type {?} */
    Language.prototype.detectScreenshotTitle;
    /** @type {?} */
    Language.prototype.detectScreenshotContent;
    /** @type {?} */
    Language.prototype.noContactPermissionTitle;
    /** @type {?} */
    Language.prototype.noContactPermissionContent;
    /** @type {?} */
    Language.prototype.submitFailTitle;
    /** @type {?} */
    Language.prototype.submitFailContent;
    /** @type {?} */
    Language.prototype.notificationSeeProgress;
    /** @type {?} */
    Language.prototype.notificationSaveFeedback;
    /** @type {?} */
    Language.prototype.notificationDeleteFeedback;
    /** @type {?} */
    Language.prototype.notificationCompleteFeedback;
    /** @type {?} */
    Language.prototype.goalPeriodNotStartOk;
    /** @type {?} */
    Language.prototype.goalPeriodIsBeginOk;
    /** @type {?} */
    Language.prototype.needToGoalSettingAdjustGoal;
    /** @type {?} */
    Language.prototype.goalAutoApproveAdjustGoal;
    /** @type {?} */
    Language.prototype.goalAutoApproveLeaderOk;
    /** @type {?} */
    Language.prototype.approveGoalIsRejectAdjustGoal;
    /** @type {?} */
    Language.prototype.approveGoalIsApprovedOk;
    /** @type {?} */
    Language.prototype.pendingReviewAgencyPlan;
    /** @type {?} */
    Language.prototype.supervisorHaveChangeAgentOk;
    /** @type {?} */
    Language.prototype.supervisorHaveChangeOldOk;
    /** @type {?} */
    Language.prototype.supervisorHaveChangeNewAgencyPlan;
    /** @type {?} */
    Language.prototype.goalAutoRejectAdjustGoal;
    /** @type {?} */
    Language.prototype.goalAutoRejectLeaderOk;
    /** @type {?} */
    Language.prototype.dataPrivacyProtectionConfirm;
    /** @type {?} */
    Language.prototype.customerOvertimeConfirm;
    /** @type {?} */
    Language.prototype.customerAutoDeleteConfirm;
    /** @type {?} */
    Language.prototype.noWifiConnectedOk;
    /** @type {?} */
    Language.prototype.versionUpdateYes;
    /** @type {?} */
    Language.prototype.versionUpdateLater;
    /** @type {?} */
    Language.prototype.timeOutOk;
    /** @type {?} */
    Language.prototype.dataCollectionProcessAndUsageReject;
    /** @type {?} */
    Language.prototype.dataCollectionProcessAndUsageConfirm;
    /** @type {?} */
    Language.prototype.detectScreenshotOk;
    /** @type {?} */
    Language.prototype.submitFailOk;
    /** @type {?} */
    Language.prototype.noContactPermissionOk;
    /** @type {?} */
    Language.prototype.httpErrorOk;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGFuZ3VhZ2VDbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbGFuZ3VhZ2UvTGFuZ3VhZ2VDbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7SUFBQTtRQUVJLFlBQVk7UUFDWixnQkFBVyxHQUFXLGFBQWEsQ0FBQztRQUNwQyxTQUFJLEdBQVcsTUFBTSxDQUFDO1FBQ3RCLGFBQVEsR0FBVyxVQUFVLENBQUM7UUFDOUIscUJBQWdCLEdBQVcsbUJBQW1CLENBQUM7UUFDL0Msb0JBQWUsR0FBVyxrQkFBa0IsQ0FBQztRQUM3QyxtQkFBYyxHQUFXLGlCQUFpQixDQUFDO1FBQzNDLFlBQU8sR0FBVyxTQUFTLENBQUM7UUFDNUIsYUFBUSxHQUFXLFVBQVUsQ0FBQztRQUM5Qix1QkFBa0IsR0FBVyxjQUFjLENBQUM7UUFDNUMsUUFBRyxHQUFXLEtBQUssQ0FBQztRQUNwQixXQUFNLEdBQVcsUUFBUSxDQUFDO1FBQzFCLGNBQVMsR0FBVyxZQUFZLENBQUM7UUFDakMsYUFBUSxHQUFXLFVBQVUsQ0FBQztRQUM5QixlQUFVLEdBQVcsYUFBYSxDQUFDO1FBR25DLGlCQUFZLEdBQVcsZUFBZSxDQUFDO1FBQ3ZDLG1CQUFjLEdBQVcsaUJBQWlCLENBQUM7UUFDM0MsYUFBUSxHQUFXLFVBQVUsQ0FBQztRQUM5QixhQUFRLEdBQVcsV0FBVyxDQUFDO1FBQy9CLFdBQU0sR0FBVyxRQUFRLENBQUM7UUFDMUIsb0RBQW9EO1FBQ3BELFdBQU0sR0FBVyxRQUFRLENBQUM7UUFDMUIsYUFBUSxHQUFXLFVBQVUsQ0FBQztRQUM5QixhQUFRLEdBQVcsVUFBVSxDQUFDO1FBQzlCLGdCQUFXLEdBQVcsYUFBYSxDQUFDO1FBQ3BDLGlCQUFZLEdBQVcsZUFBZSxDQUFDO1FBQ3ZDLG1CQUFjLEdBQVcsaUJBQWlCLENBQUM7UUFDM0MsMEJBQXFCLEdBQVcseUJBQXlCLENBQUM7UUFDMUQsZ0JBQVcsR0FBVyxh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RCwrQ0FBd0U7O0lBR3hFLDZDQUFvRTs7SUFHcEUscURBQXFGOztJQUdyRiw0Q0FBa0U7O0lBR2xFLDBDQUE4RDs7SUFHOUQsZ0RBQXlFOztJQUd6RSwyQ0FBOEQ7O0lBRzlELDZDQUFtRTs7SUFHbkUscUNBQW1EOztJQUduRCxvQ0FBZ0Q7O0lBQ2hELHNDQUFvRDs7SUFHcEQsNkJBQWtDOztJQUdsQyx1REFBeUY7O0lBQ3pGLHdEQUEyRjs7SUFHM0Ysc0NBQW9EOztJQUdwRCxnQ0FBd0M7O0lBQ3hDLHlDQUEyRDs7SUFDM0QsK0JBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIExhbmd1YWdlIHtcblxuICAgIC8vZGFzaGJvYXJkIFxuICAgIHBlcmZvcm1hbmNlOiBzdHJpbmcgPSBcIlBlcmZvcm1hbmNlXCI7XG4gICAgdGVhbTogc3RyaW5nID0gXCJUZWFtXCI7XG4gICAgcGVyc29uYWw6IHN0cmluZyA9IFwiUGVyc29uYWxcIjtcbiAgICBhY3Rpdml0aWVzUG9pbnRzOiBzdHJpbmcgPSBcIkFjdGl2aXRpZXNfUG9pbnRzXCI7XG4gICAgbW9udGhseVByb2dyZXNzOiBzdHJpbmcgPSBcIk1vbnRobHlfUHJvZ3Jlc3NcIjtcbiAgICB5ZWFybHlQcm9ncmVzczogc3RyaW5nID0gXCJZZWFybHlfUHJvZ3Jlc3NcIjtcbiAgICBtZXNzYWdlOiBzdHJpbmcgPSBcIk1lc3NhZ2VcIjtcbiAgICBwcm9ncmVzczogc3RyaW5nID0gXCJQcm9ncmVzc1wiO1xuICAgIGdvYWxTZXR0aW5nTXNnVHlwZTogc3RyaW5nID0gXCJHb2FsX1NldHRpbmdcIjtcbiAgICBhbGw6IHN0cmluZyA9IFwiQWxsXCI7XG4gICAgdW5yZWFkOiBzdHJpbmcgPSBcIlVucmVhZFwiO1xuICAgIG5vTWVzc2FnZTogc3RyaW5nID0gXCJOb19NZXNzYWdlXCI7XG4gICAgc2NoZWR1bGU6IHN0cmluZyA9IFwiU2NoZWR1bGVcIjtcbiAgICBub0JpcnRoZGF5OiBzdHJpbmcgPSBcIk5vX0JpcnRoZGF5XCI7XG5cblxuICAgIGN1c3RvbWVyVHlwZTogc3RyaW5nID0gXCJDdXN0b21lcl9UeXBlXCI7XG4gICAgY3VzdG9tZXJTb3VyY2U6IHN0cmluZyA9IFwiQ3VzdG9tZXJfU291cmNlXCI7XG4gICAgYmlydGhkYXk6IHN0cmluZyA9IFwiQmlydGhkYXlcIjtcbiAgICBhZ2VSYW5nZTogc3RyaW5nID0gXCJBZ2VfcmFuZ2VcIjtcbiAgICBnZW5kZXI6IHN0cmluZyA9IFwiR2VuZGVyXCI7XG4gICAgLy9hbm51YWxJbmNvbWUgOiBzdHJpbmcgPSBcIkFubnVhbF9JbmNvbWUoWWVhci9OVEQpXCI7XG4gICAgc291cmNlOiBzdHJpbmcgPSBcIlNvdXJjZVwiO1xuICAgIG1hcnJpYWdlOiBzdHJpbmcgPSBcIk1hcnJpYWdlXCI7XG4gICAgY2hpbGRyZW46IHN0cmluZyA9IFwiQ2hpbGRyZW5cIjtcbiAgICBmYW1pbGlhcml0eTogc3RyaW5nID0gXCJGYW1pbGlhcml0eVwiO1xuICAgIHJlY2VudFN0YXR1czogc3RyaW5nID0gXCJSZWNlbnRfc3RhdHVzXCI7XG4gICAgY3VzdG9tZXJTdGF0dXM6IHN0cmluZyA9IFwiQ3VzdG9tZXJfU3RhdHVzXCI7XG4gICAgY29udGFjdEZyZXF1ZW5jeU1vbnRoOiBzdHJpbmcgPSBcIkNvbnRhY3RfRnJlcXVlbmN5X01vbnRoXCI7XG4gICAgcG9zc2liaWxpdHk6IHN0cmluZyA9IFwiUG9zc2liaWxpdHlcIjtcbiAgICBjb21wbGV0ZW5lc3M6IHN0cmluZyA9IFwiQ29tcGxldGVuZXNzXCI7XG5cbiAgICBjb250YWN0RnJlcXVlbmN5OiBzdHJpbmcgPSBcIkNvbnRhY3RfRnJlcXVlbmN5XCI7XG4gICAgdGltZVBlclllYXI6IHN0cmluZyA9IFwiVGltZV9QZXJfWWVhclwiO1xuICAgIGFwcG9pbnRtZW50OiBzdHJpbmcgPSBcIkFwcG9pbnRtZW50XCI7XG4gICAgY29udGFjdDogc3RyaW5nID0gXCJDb250YWN0XCI7XG4gICAgZWRpdDogc3RyaW5nID0gXCJFZGl0XCI7XG4gICAgZGVsZXRlOiBzdHJpbmcgPSBcIkRlbGV0ZVwiO1xuICAgIGhvbWU6IHN0cmluZyA9IFwiSG9tZVwiO1xuICAgIGhvbWVwYWdlOiBzdHJpbmcgPSBcIkhvbWVwYWdlXCI7XG4gICAgd29yazogc3RyaW5nID0gXCJXb3JrXCI7XG4gICAgbW9iaWxlOiBzdHJpbmcgPSBcIk1vYmlsZVwiO1xuICAgIGRldGFpbDogc3RyaW5nID0gXCJEZXRhaWxcIjtcbiAgICBvY2N1cGF0aW9uOiBzdHJpbmcgPSBcIk9jY3VwYXRpb25cIjtcbiAgICBjb21wYW55OiBzdHJpbmcgPSBcIkNvbXBhbnlcIjtcbiAgICBhbm51YWxJbmNvbWU6IHN0cmluZyA9IFwiQW5udWFsX0luY29tZVwiO1xuICAgIC8vIGV4dHJhSXRlbSA6IHN0cmluZyA9IFwiRXh0cmFJdGVtXCI7XG4gICAgY29udGFjdE5vdGU6IHN0cmluZyA9IFwiQ29udGFjdF9Ob3RlXCI7XG4gICAgYWRkOiBzdHJpbmcgPSBcIkFkZFwiO1xuICAgIG5vUmVjb3JkOiBzdHJpbmcgPSBcIk5vX1JlY29yZFwiO1xuICAgIGN1c3RvbWVyTGlzdDogc3RyaW5nID0gXCJDdXN0b21lcl9MaXN0XCI7XG4gICAgaW1wb3J0UGhvbmU6IHN0cmluZyA9IFwiSW1wb3J0X1Bob25lXCI7XG4gICAgcGVvcGxlOiBzdHJpbmcgPSBcIlBlb3BsZVwiO1xuXG5cbiAgICAvLyBjdXN0b21lci1lZGl0IHBhZ2VcblxuICAgIGxhc3ROYW1lOiBzdHJpbmcgPSBcIkxhc3RfbmFtZVwiO1xuICAgIGZpcnN0TmFtZTogc3RyaW5nID0gXCJGaXJzdF9uYW1lXCI7XG4gICAgcGhvbmU6IHN0cmluZyA9IFwiUGhvbmVcIjtcbiAgICBlbWFpbDogc3RyaW5nID0gXCJFbWFpbFwiO1xuICAgIGFkZHJlc3M6IHN0cmluZyA9IFwiQWRkcmVzc1wiO1xuICAgIGNvdW50cnk6IHN0cmluZyA9IFwiQ291bnRyeVwiO1xuICAgIGNpdHk6IHN0cmluZyA9IFwiQ2l0eVwiO1xuICAgIGFyZWE6IHN0cmluZyA9IFwiQXJlYVwiO1xuICAgIGNvZGU6IHN0cmluZyA9IFwiQ29kZVwiO1xuICAgIC8vIGJpcnRoZGF5IDogc3RyaW5nID0gXCJCaXJ0aGRheVwiO1xuICAgIGFnZTogc3RyaW5nID0gXCJBZ2VcIjtcbiAgICAvLyBnZW5kZXIgOiBzdHJpbmcgPSBcIkdlbmRlclwiO1xuICAgIC8vIG9jY3VwYXRpb24gOiBzdHJpbmcgPSBcIk9jY3VwYXRpb25cIjtcbiAgICAvLyBjb21wYW55IDogc3RyaW5nID1cIkNvbXBhbnlcIjtcbiAgICAvLyBhbm51YWxJbmNvbWUgOiBzdHJpbmcgPSAgXCJBbm51YWxfSW5jb21lXCI7XG4gICAgc2VsZWN0OiBzdHJpbmcgPSBcIlNlbGVjdFwiO1xuICAgIC8vIHNvdXJjZSA6IHN0cmluZyA9IFwiU291cmNlXCI7XG4gICAgLy8gbWFycmlhZ2UgOiBzdHJpbmcgPSBcIk1hcnJpYWdlXCI7XG4gICAgLy8gY2hpbGRyZW4gOiBzdHJpbmcgPSBcIkNoaWxkcmVuXCI7XG4gICAgLy8gZmFtaWxpYXJpdHkgOiBzdHJpbmcgPSBcIkZhbWlsaWFyaXR5XCI7XG4gICAgLy8gb2NjdXBhdGlvbiA6IHN0cmluZyA9IFwiT2NjdXBhdGlvblwiO1xuICAgIC8vIHJlY2VudFN0YXR1cyA6IHN0cmluZyA9IFwiUmVjZW50X3N0YXR1c1wiO1xuICAgIC8vIGN1c3RvbWVyU3RhdHVzIDogc3RyaW5nID0gXCJDdXN0b21lcl9TdGF0dXNcIjtcbiAgICBjb250YWN0RnJlcXVlbmN5WWVhcjogc3RyaW5nID0gXCJDb250YWN0X0ZyZXF1ZW5jeV9ZZWFyXCI7XG4gICAgLy8gcG9zc2liaWxpdHkgOiBzdHJpbmcgPSBcIlBvc3NpYmlsaXR5XCI7XG4gICAgc2F2ZTogc3RyaW5nID0gXCJTYXZlXCI7XG5cbiAgICBsYXN0TmFtZVBsYWNlaG9sZGVyOiBzdHJpbmcgPSBcIkxhc3RfTmFtZV9QbGFjZWhvbGRlclwiO1xuICAgIGZpcnN0TmFtZVBsYWNlaG9sZGVyOiBzdHJpbmcgPSBcIkZpcnN0X05hbWVfUGxhY2Vob2xkZXJcIjtcblxuICAgIHdyb25nTGFzdE5hbWU6IHN0cmluZyA9IFwiV3JvbmdfTGFzdG5hbWVcIjtcbiAgICB3cm9uZ0VtYWlsOiBzdHJpbmcgPSBcIldyb25nX0VtYWlsXCI7XG4gICAgd3JvbmdCaXJ0aGRheTogc3RyaW5nID0gXCJXcm9uZ19CaXJ0aGRheVwiO1xuXG4gICAgLy8gY3VzdGVybWVyLWZpbHRlciBwYWdlXG5cbiAgICAvLyBjdXN0b21lclR5cGUgOiBzdHJpbmcgPSBcIkN1c3RvbWVyX1R5cGVcIjtcbiAgICAvLyBjdXN0b21lclNvdXJjZSA6IHN0cmluZyA9IFwiQ3VzdG9tZXJfU291cmNlXCI7XG4gICAgLy8gYmlydGhkYXkgOiBzdHJpbmcgPSBcIkJpcnRoZGF5XCI7XG4gICAgLy8gYWdlUmFuZ2UgOiBzdHJpbmcgPSBcIkFnZV9yYW5nZVwiO1xuICAgIC8vIGdlbmRlciA6IHN0cmluZyA9IFwiR2VuZGVyXCI7XG4gICAgYW5udWFsSW5jb21lWWVhck5URDogc3RyaW5nID0gXCJBbm51YWxfSW5jb21lKFllYXIvTlREKVwiO1xuICAgIC8vIHNvdXJjZSA6IHN0cmluZyA9IFwiU291cmNlXCI7XG4gICAgLy8gbWFycmlhZ2UgOiBzdHJpbmcgPSBcIk1hcnJpYWdlXCI7XG4gICAgLy8gZmFtaWxpYXJpdHkgOiBzdHJpbmcgPSBcIkZhbWlsaWFyaXR5XCI7XG4gICAgLy8gY3VzdG9tZXJTdGF0dXMgOiBzdHJpbmcgPSBcIkN1c3RvbWVyX1N0YXR1c1wiO1xuICAgIC8vIGNvbnRhY3RGcmVxdWVuY3lNb250aCA6IHN0cmluZyA9IFwiQ29udGFjdF9GcmVxdWVuY3lfTW9udGhcIjtcbiAgICBwcmVzZXQ6IHN0cmluZyA9IFwiUHJlc2V0XCI7XG4gICAgZGF5OiBzdHJpbmcgPSBcIkRheVwiO1xuICAgIHdlZWs6IHN0cmluZyA9IFwiV2Vla1wiO1xuICAgIG1vbnRoOiBzdHJpbmcgPSBcIk1vbnRoXCI7XG4gICAgeWVhcjogc3RyaW5nID0gXCJZZWFyXCI7XG4gICAgdG9kYXk6IHN0cmluZyA9IFwiVG9kYXlcIjtcbiAgICBmaWx0ZXI6IHN0cmluZyA9IFwiRmlsdGVyXCI7XG4gICAgYXBwb2ludG1lbnREZXRhaWw6IHN0cmluZyA9IFwiQXBwb2ludG1lbnRfRGV0YWlsc1wiO1xuICAgIHNhdmVkOiBzdHJpbmcgPSBcIlNhdmVkXCI7XG4gICAgbG9hZGluZzogc3RyaW5nID0gXCJMb2FkaW5nXCI7XG4gICAgdGl0bGU6IHN0cmluZyA9IFwiVGl0bGVcIjtcbiAgICBsb2NhdGlvbjogc3RyaW5nID0gXCJMb2NhdGlvblwiO1xuICAgIGFjdGl2aXR5OiBzdHJpbmcgPSBcIkFjdGl2aXR5XCI7XG4gICAgZGF0ZTogc3RyaW5nID0gXCJEYXRlXCI7XG4gICAgYWxsRGF5OiBzdHJpbmcgPSBcIkFsbF9EYXlcIjtcbiAgICBmcm9tOiBzdHJpbmcgPSBcIkZyb21cIjtcbiAgICB0bzogc3RyaW5nID0gXCJUb1wiO1xuICAgIGFsZXJ0OiBzdHJpbmcgPSBcIkFsZXJ0XCI7XG4gICAgcmVtYXJrOiBzdHJpbmcgPSBcIlJlbWFya1wiO1xuICAgIHllczogc3RyaW5nID0gXCJZZXNcIjtcbiAgICBubzogc3RyaW5nID0gXCJOb1wiO1xuICAgIGRlbGV0ZUFwcG9pbnRtZW50OiBzdHJpbmcgPSBcIkRlbGV0ZV9BcHBvaW50bWVudFwiO1xuICAgIHdyb25nVGl0bGU6IHN0cmluZyA9IFwid3JvbmdfVGl0bGVcIjtcbiAgICB3cm9uZ0FsZXJ0OiBzdHJpbmcgPSBcIldyb25nX0FsZXJ0XCI7XG4gICAgYWxlcnRQbGFjZWhvbGRlcjogc3RyaW5nID0gXCJBbGVydF9QbGFjZWhvbGRlclwiO1xuICAgIHdyb25nVGl0bGVSZXF1aXJlZDogc3RyaW5nID0gXCJXcm9uZ19UaXRsZV9SZXF1aXJlXCI7XG4gICAgd3JvbmdBY3Rpdml0eVJlcXVpcmVkOiBzdHJpbmcgPSBcIldyb25nX0FjdGl2aXR5X1JlcXVpcmVkXCI7XG4gICAgd3JvbmdEYXRlOiBzdHJpbmcgPSBcIldyb25nX0RhdGVcIjtcbiAgICB3cm9uZ1RpbWU6IHN0cmluZyA9IFwiV3JvbmdfVGltZVwiO1xuICAgIHdyb25nU3RhcnRUaW1lOiBzdHJpbmcgPSBcIldyb25nX1N0YXJ0X1RpbWVcIjtcbiAgICB3cm9uZ0VuZFRpbWU6IHN0cmluZyA9IFwiV3JvbmdfRW5kX1RpbWVcIjtcbiAgICB3cm9uZ0FsZXJ0UmVxdWlyZWQ6IHN0cmluZyA9IFwiV3JvbmdfQWxlcnRfUmVxdWlyZVwiO1xuICAgIG5vU2NoZWR1bGU6IHN0cmluZyA9IFwiTm9fU2NoZWR1bGVcIjtcblxuXG4gICAgLy8gY3VzdG9tZXItbGlzdCBwYWdlXG5cbiAgICBjdXN0b21lckluZm9ybWF0aW9uOiBzdHJpbmcgPSBcIkN1c3RvbWVyX0luZm9ybWF0aW9uXCI7XG4gICAgY2xpY2s6IHN0cmluZyA9IFwiQ2xpY2tcIjtcbiAgICBub0VkaXQ6IHN0cmluZyA9IFwiTm9fRWRpdFwiO1xuICAgIG5vU2VhcmNoOiBzdHJpbmcgPSBcIk5vX1NlYXJjaFwiO1xuICAgIG5vRmlsdGVyOiBzdHJpbmcgPSBcIk5vX0ZpbHRlclwiO1xuXG4gICAgLy8gY3VzdG9tZXIgcGFnZSBcblxuICAgIGltcG9ydDogc3RyaW5nID0gXCJJbXBvcnRcIjtcbiAgICBjdXN0b21lckZpbHRlcjogc3RyaW5nID0gXCJDdXN0b21lcl9GaWx0ZXJcIjtcbiAgICBjbGVhcjogc3RyaW5nID0gXCJDTEVBUlwiO1xuICAgIHNlbGVjdE51bWJlcjogc3RyaW5nID0gXCJTZWxlY3RfTnVtYmVyXCI7XG4gICAgLy8gc2F2ZSA6IHN0cmluZyA9IFwiU2F2ZVwiO1xuICAgIC8vIGNvbnRhY3ROb3RlIDogc3RyaW5nID0gXCJDb250YWN0X05vdGVcIjtcbiAgICBjYW5jZWw6IHN0cmluZyA9IFwiQ2FuY2VsXCI7XG4gICAgcHJvdGVjdGlvblRpdGxlOiBzdHJpbmcgPSBcIlByb3RlY3Rpb25fVGl0bGVcIjtcbiAgICBkZWxldGVNZXNzYWdlOiBzdHJpbmcgPSBcIkRlbGV0ZV9NZXNzYWdlXCI7XG4gICAgY3VzdG9tZXI6IHN0cmluZyA9IFwiQ3VzdG9tZXJcIjtcbiAgICBkZWxldGVQcm90ZWN0aW9uVGl0bGU6IHN0cmluZyA9IFwiRGVsZXRlX1Byb3RlY3Rpb25fVGl0bGVcIjtcbiAgICB1cGRhdGVQcm90ZWN0aW9uVGl0bGU6IHN0cmluZyA9IFwiVXBkYXRlX1Byb3RlY3Rpb25fVGl0bGVcIjtcbiAgICBjb21tZW50UmVtaW5kVGl0bGU6IHN0cmluZyA9IFwiQ29tbWVudF9SZW1pbmRfVGl0bGVcIjtcbiAgICBjb25maXJtOiBzdHJpbmcgPSBcIkNvbmZpcm1cIjtcbiAgICBjb21wbGV0ZWQ6IHN0cmluZyA9IFwiQ29tcGxldGVkXCI7XG4gICAgc2VhcmNoUGxhY2Vob2xkZXI6IHN0cmluZyA9IFwiU2VhcmNoX1BsYWNlaG9sZGVyXCI7XG4gICAgbm90ZVBsYWNlaG9sZGVyOiBzdHJpbmcgPSBcIk5vdGVfUGxhY2Vob2xkZXJcIjtcbiAgICBsb2dPdXQ6IHN0cmluZyA9IFwiTG9nX091dFwiO1xuICAgIG5vQ2xpY2s6IHN0cmluZyA9IFwiTm9fQ2xpY2tcIjtcbiAgICBub0luZm9ybWF0aW9uOiBzdHJpbmcgPSBcIk5vX0luZm9ybWF0aW9uXCI7XG4gICAgbW9yZU9wdGlvbjogc3RyaW5nID0gXCJNb3JlX09wdGlvblwiO1xuICAgIGVtcHR5OiBzdHJpbmcgPSBcIkVtcHR5XCI7XG4gICAgY2FsZW5kYXJNb3JlOiBzdHJpbmcgPSBcIkNhbGVuZGFyX01vcmVcIjtcbiAgICBtYWluTWVudTogc3RyaW5nID0gXCJNYWluX01lbnVcIjtcbiAgICBoYXZlOiBzdHJpbmcgPSBcIkhhdmVcIjtcbiAgICBhcHBvaW50bWVudHM6IHN0cmluZyA9IFwiQXBwb2ludG1lbnRzXCI7XG4gICAgYW5BcHBvaW50bWVudDogc3RyaW5nID0gXCJBbl9BcHBvaW50bWVudFwiO1xuICAgIG5vdGlmaWNhdGlvbjogc3RyaW5nID0gXCJOb3RpZmljYXRpb25cIjtcbiAgICBsYW5ndWFnZTogc3RyaW5nID0gXCJMYW5ndWFnZVwiO1xuICAgIHZlcnNpb246IHN0cmluZyA9IFwiVmVyc2lvblwiO1xuICAgIGNvbnRhY3RNZXNzYWdlOiBzdHJpbmcgPSBcIkNvbnRhY3RfTWVzc2FnZVwiO1xuICAgIHdlbGNvbWU6IHN0cmluZyA9IFwiV2VsY29tZVwiO1xuICAgIGFjY291bnRQYXNzd29yZDogc3RyaW5nID0gXCJBY2NvdW50X1Bhc3N3b3JkXCI7XG4gICAgbmF0aW9uYWxJRDogc3RyaW5nID0gXCJOYXRpb25hbF9JRFwiO1xuICAgIHBhc3N3b3JkOiBzdHJpbmcgPSBcIlBhc3N3b3JkXCI7XG4gICAgZm9yZ290UGFzc3dvcmQ6IHN0cmluZyA9IFwiRm9yZ290X1Bhc3N3b3JkXCI7XG4gICAgbG9naW46IHN0cmluZyA9IFwiTG9naW5cIjtcbiAgICBwbGVhc2VXYWl0OiBzdHJpbmcgPSBcIlBsZWFzZV9XYWl0XCI7XG4gICAgY2hhbmdlTGFuZ3VhZ2U6IHN0cmluZyA9IFwiQ2hhbmdlX0xhbmd1YWdlXCI7XG4gICAgZm9udFNpemU6IHN0cmluZyA9IFwiRm9udF9TaXplXCI7XG4gICAgY2hhbmdlRm9udFNpemU6IHN0cmluZyA9IFwiQ2hhbmdlX0ZvbnRfU2l6ZVwiO1xuICAgIHVwZGF0ZVRpbWU6IHN0cmluZyA9IFwiVXBkYXRlX1RpbWVcIjtcbiAgICBzZWVEZXRhaWxzOiBzdHJpbmcgPSBcIlNlZV9EZXRhaWxzXCI7XG4gICAgZmlsZURvd25sb2FkOiBzdHJpbmcgPSBcIkZpbGVfRG93bmxvYWRcIjtcbiAgICBzaWduSW46IHN0cmluZyA9IFwiU2lnbl9JblwiO1xuICAgIGxvYWRpbmdNZXNzYWdlOiBzdHJpbmcgPSBcIkxhbmRpbmdfTWVzc2FnZVwiO1xuICAgIGxvYWQ6IHN0cmluZyA9IFwiTG9hZFwiO1xuICAgIGFnZW5jeVBsYW5TdWJ0aXRsZTogc3RyaW5nID0gXCJBZ2VuY3lfUGxhbl9TdWJ0aXRsZVwiO1xuICAgIGFnZW5jeVBsYW5PdmVydmlld1RpdGxlOiBzdHJpbmcgPSBcIkFnZW5jeV9QbGFuX092ZXJ2aWV3X1RpdGxlXCI7XG4gICAgRllGQ0ZvcmVjYXN0OiBzdHJpbmcgPSBcIkZZRkNfRm9yZWNhc3RcIjtcbiAgICBGWUZDQWN0dWFsOiBzdHJpbmcgPSBcIkZZRkNfQWN0dWFsXCI7XG4gICAgRllGQ01vbnRoUGxhbjogc3RyaW5nID0gXCJGWUZDX01vbnRoX1BsYW5cIjtcbiAgICBBTlBGb3JlY2FzdDogc3RyaW5nID0gXCJBTlBfRm9yZWNhc3RcIjtcbiAgICBBTlBBY3R1YWw6IHN0cmluZyA9IFwiQU5QX0FjdHVhbFwiO1xuICAgIEFOUE1vbnRoUGxhbjogc3RyaW5nID0gXCJBTlBfTW9udGhfUGxhblwiO1xuICAgIG1hbnBvd2VyUGxhbjogc3RyaW5nID0gXCJNYW5wb3dlcl9QbGFuXCI7XG4gICAgcmVjcnVpdG1lbnRQbGFuOiBzdHJpbmcgPSBcIlJlY3J1aXRtZW50X1BsYW5cIjtcbiAgICBtYW5wb3dlcjogc3RyaW5nID0gXCJNYW5wb3dlclwiO1xuICAgIHJlY3J1aXRtZW50OiBzdHJpbmcgPSBcIlJlY3J1aXRtZW50XCI7XG4gICAgRllGQ0dvYWw6IHN0cmluZyA9IFwiRllGQ19Hb2FsXCI7XG4gICAgZGlyZWN0VW5pdDogc3RyaW5nID0gXCJEaXJlY3RfVW5pdFwiO1xuICAgIGFnZW5jeVBsYW5JbmZvcm1hdGlvblRpdGxlOiBzdHJpbmcgPSBcIkFnZW5jeV9QbGFuX0luZm9ybWF0aW9uX1RpdGxlXCI7XG4gICAgeWVsbG93OiBzdHJpbmcgPSBcIlllbGxvd1wiO1xuICAgIGFnZW5jeVBsYW5JbmZvcm1hdGlvbjogc3RyaW5nID0gXCJBZ2VuY3lfUGxhbl9JbmZvcm1hdGlvblwiO1xuICAgIGFnZW5jeVBsYW5FeHBlY3RlZDogc3RyaW5nID0gXCJBZ2VuY3lfUGxhbl9FeHBlY3RlZFwiO1xuICAgIHRlYW1Hb2FsOiBzdHJpbmcgPSAnVGVhbV9Hb2FsJztcbiAgICBRMTogc3RyaW5nID0gXCJRMVwiO1xuICAgIFEyOiBzdHJpbmcgPSBcIlEyXCI7XG4gICAgUTM6IHN0cmluZyA9IFwiUTNcIjtcbiAgICBRNDogc3RyaW5nID0gXCJRNFwiO1xuICAgIHJlY3J1aXRtZW50VG90YWw6IHN0cmluZyA9IFwiUmVjcnVpdG1lbnRfVG90YWxcIjtcbiAgICBpbmRpcmVjdFVuaXQ6IHN0cmluZyA9IFwiSW5kaXJlY3RfVW5pdFwiO1xuICAgIEFOUEdvYWw6IHN0cmluZyA9IFwiQU5QX0dvYWxcIjtcbiAgICBzYXZlRmlsZTogc3RyaW5nID0gXCJTYXZlX0ZpbGVcIjtcbiAgICBhZ2VuY3lQbGFuOiBzdHJpbmcgPSBcIkFnZW5jeV9QbGFuXCI7XG4gICAgRllGQzogc3RyaW5nID0gXCJGWUZDXCI7XG4gICAgQU5QOiBzdHJpbmcgPSBcIkFOUFwiO1xuICAgIHJlY3J1aXRtZW50Q29tbWl0bWVudDogc3RyaW5nID0gXCJSZWNydWl0bWVudF9Db21taXRtZW50XCI7XG4gICAgY2FzZUNvdW50OiBzdHJpbmcgPSBcIkNhc2VfQ291bnRcIjtcbiAgICBhdmVyYWdlRllGQ1BlckNhc2U6IHN0cmluZyA9IFwiQXZlcmFnZV9GWUZDX1Blcl9DYXNlXCI7XG4gICAgYXZlcmFnZUFOUFBlckNhc2U6IHN0cmluZyA9IFwiQXZlcmFnZV9BTlBfUGVyX0Nhc2VcIjtcbiAgICBtYW5wb3dlckdvYWw6IHN0cmluZyA9IFwiTWFucG93ZXJfR29hbFwiO1xuICAgIHJlc2V0OiBzdHJpbmcgPSBcIlJlc2V0XCI7XG5cblxuICAgIHRoaXNZZWFyVGl0bGU6IHN0cmluZyA9IFwiVGhpc19ZZWFyX1RpdGxlXCI7XG4gICAgdmFyaWFibGVZZWFyVGl0bGU6IHN0cmluZyA9IFwiVmFyaWFibGVfWWVhcl9UaXRsZVwiO1xuICAgIHlvdXJBZ2VuY3lHb2FsOiBzdHJpbmcgPSBcIllvdXJfQWdlbmN5X0dvYWxcIjtcblxuICAgIGFubnVhbENvbnZlbnRpb246IHN0cmluZyA9IFwiQW5udWFsX0NvbnZlbnRpb25cIjtcbiAgICBwcm9tb3Rpb25QbGFuOiBzdHJpbmcgPSBcIlByb21vdGlvbl9QbGFuXCI7XG4gICAgTURSVDogc3RyaW5nID0gXCJNRFJUXCI7XG4gICAgZ29hbEVmZmVjdGl2ZU1vbnRoOiBzdHJpbmcgPSBcIkdvYWxfRWZmZWN0aXZlX01vbnRoXCI7XG4gICAgYWxsWWVhckdvYWw6IHN0cmluZyA9IFwiQWxsX1llYXJfR29hbFwiO1xuICAgIG1vbnRoR29hbDogc3RyaW5nID0gXCJNb250aF9Hb2FsXCI7XG4gICAgYWxsaWFuelN0YXJDbHViOiBzdHJpbmcgPSBcIkFsbGlhbnpfU3Rhcl9DbHViXCI7XG4gICAgc3VtbWl0VHJpcDogc3RyaW5nID0gXCJTdW1taXRfVHJpcFwiO1xuICAgIGxvbmdUZXJtSW5jZW50aXZlVHJpcFByb2dyYW06IHN0cmluZyA9IFwiTG9uZ19UZXJtX0luY2VudGl2ZV9UcmlwX1Byb2dyYW1cIjtcbiAgICBDT1Q6IHN0cmluZyA9IFwiQ09UXCI7XG4gICAgVE9UOiBzdHJpbmcgPSBcIlRPVFwiO1xuICAgIFNQOiBzdHJpbmcgPSBcIlNQXCI7XG4gICAgQU06IHN0cmluZyA9IFwiQU1cIjtcbiAgICBTTTogc3RyaW5nID0gXCJTTVwiO1xuICAgIGRhc2hEYXNoOiBzdHJpbmcgPSBcIkRhc2hfRGFzaFwiO1xuICAgIHBlcnNvbmFsTW9udGhseVBsYW5GWUZDOiBzdHJpbmcgPSBcIlBlcnNvbmFsX01vbnRobHlfUGxhbl9GWUZDXCI7XG4gICAgcGxhbjogc3RyaW5nID0gXCJQbGFuXCI7XG4gICAgYWN0dWFsOiBzdHJpbmcgPSBcIkFjdHVhbFwiO1xuICAgIG92ZXJ2aWV3U3RlcDNUaXRsZTogc3RyaW5nID0gXCJPdmVydmlld19TdGVwM19UaXRsZVwiO1xuICAgIGZpbmQ6IHN0cmluZyA9IFwiRmluZFwiO1xuICAgIG1lZXQ6IHN0cmluZyA9IFwiTWVldFwiO1xuICAgIHN1Ym1pdDogc3RyaW5nID0gXCJTdWJtaXRcIjtcbiAgICBpbmZvcmNlOiBzdHJpbmcgPSBcIkluZm9yY2VcIjtcbiAgICBkYWlseTogc3RyaW5nID0gXCJEYWlseVwiO1xuICAgIHdlZWtseTogc3RyaW5nID0gXCJXZWVrbHlcIjtcbiAgICBtb250aGx5OiBzdHJpbmcgPSBcIk1vbnRobHlcIjtcbiAgICBhcHByb3ZhbFN0YXR1czogc3RyaW5nID0gXCJBcHByb3ZhbF9TdGF0dXNcIjtcbiAgICBnb2FsQmVlbkFwcHJvdmFsOiBzdHJpbmcgPSBcIkdvYWxfQmVlbl9BcHByb3ZhbFwiO1xuICAgIGFkanVzdFlvdXJHb2FsOiBzdHJpbmcgPSBcIkFkanVzdF9Zb3VyX0dvYWxcIjtcbiAgICBwcm9jZWVkVG9Qcm9ncmVzczogc3RyaW5nID0gXCJQcm9jZWVkX1RvX1Byb2dyZXNzXCI7XG4gICAgdGVhbU1vbnRobHlQbGFuRllGQ1RpdGxlOiBzdHJpbmcgPSBcIlRlYW1fTW9udGhseV9QbGFuX0ZZRkNfVGl0bGVcIjtcbiAgICBjb21wbGV0aW9uUmF0ZTogc3RyaW5nID0gXCJDb21wbGV0aW9uX1JhdGVcIjtcbiAgICBlZGl0UGVyc29uYWxQbGFuRllGQ1RpdGxlOiBzdHJpbmcgPSBcIkVkaXRfUGVyc29uYWxfUGxhbl9GWUZDX1RpdGxlXCI7XG4gICAgZ29hbEJlZW5SZWplY3Q6IHN0cmluZyA9IFwiR29hbF9CZWVuX1JlamVjdFwiO1xuICAgIGdvYWxCZWVuUGVuZDogc3RyaW5nID0gXCJHb2FsX0JlZW5fUGVuZFwiO1xuICAgIG5lZWRUb0JlUmVjb21tZW50VGl0bGU6IHN0cmluZyA9IFwiTmVlZF9Ub19CZV9SZWNvbW1lbnRfVGl0bGVcIjtcbiAgICBuZWVkVG9CZVJlY29tbWVudENvbnRlbnQ6IHN0cmluZyA9IFwiTmVlZF9Ub19CZV9SZWNvbW1lbnRfQ29udGVudFwiO1xuICAgIHdvcmtpbmdFeHBlcmllbmNlOiBzdHJpbmcgPSBcIldvcmtpbmdfRXhwZXJpZW5jZVwiO1xuICAgIGdvYWxTZXR0aW5nU3RlcDFUaXRsZTogc3RyaW5nID0gXCJHb2FsX1NldHRpbmdfU3RlcDFfVGl0bGVcIjtcbiAgICBnb2FsU2V0dGluZ1N0ZXAyVGl0bGU6IHN0cmluZyA9IFwiR29hbF9TZXR0aW5nX1N0ZXAyX1RpdGxlXCI7XG4gICAgZ29hbFNldHRpbmdTdGVwM1RpdGxlOiBzdHJpbmcgPSBcIkdvYWxfU2V0dGluZ19TdGVwM19UaXRsZVwiO1xuICAgIGdvYWxTZXR0aW5nU3RlcDRUaXRsZTogc3RyaW5nID0gXCJHb2FsX1NldHRpbmdfU3RlcDRfVGl0bGVcIjtcbiAgICBnb2FsU2V0dGluZ1N0ZXA1VGl0bGU6IHN0cmluZyA9IFwiR29hbF9TZXR0aW5nX1N0ZXA1X1RpdGxlXCI7XG4gICAgc3RhdHVzQmFyU3RlcDE6IHN0cmluZyA9IFwiU3RhdHVzX0Jhcl9TdGVwMVwiO1xuICAgIHN0YXR1c0JhclN0ZXAyOiBzdHJpbmcgPSBcIlN0YXR1c19CYXJfU3RlcDJcIjtcbiAgICBzdGF0dXNCYXJTdGVwMzogc3RyaW5nID0gXCJTdGF0dXNfQmFyX1N0ZXAzXCI7XG4gICAgc3RhdHVzQmFyU3RlcDQ6IHN0cmluZyA9IFwiU3RhdHVzX0Jhcl9TdGVwNFwiO1xuICAgIHN0YXR1c0JhclN0ZXA1OiBzdHJpbmcgPSBcIlN0YXR1c19CYXJfU3RlcDVcIjtcbiAgICBGWUZDQWxsWWVhcjogc3RyaW5nID0gXCJGWUZDX0FsbF9ZZWFyXCI7XG4gICAgRllGQ05vd1RvWWVhckVuZDogc3RyaW5nID0gXCJGWUZDX05vd19Ub19ZZWFyX0VuZFwiO1xuICAgIE5vd1RvWWVhckVuZDogc3RyaW5nID0gXCJOb3dfVG9fWWVhcl9FbmRcIjtcbiAgICB5b3VyR29hbDogc3RyaW5nID0gXCJZb3VyX0dvYWxcIjtcbiAgICBjb21tZW50OiBzdHJpbmcgPSBcIkNvbW1lbnRcIjtcbiAgICBmaW5kU3VidGl0bGU6IHN0cmluZyA9IFwiRmluZF9TdWJ0aXRsZVwiO1xuICAgIHNjaGVkdWxlU3VidGl0bGU6IHN0cmluZyA9IFwiU2NoZWR1bGVfU3VidGl0bGVcIjtcbiAgICBtZWV0U3VidGl0bGU6IHN0cmluZyA9IFwiTWVldF9TdWJ0aXRsZVwiO1xuICAgIHN1Ym1pdFN1YnRpdGxlOiBzdHJpbmcgPSBcIlN1Ym1pdF9TdWJ0aXRsZVwiO1xuICAgIGluZm9yY2VTdWJ0aXRsZTogc3RyaW5nID0gXCJJbmZvcmNlX1N1YnRpdGxlXCI7XG4gICAgcmVqZWN0OiBzdHJpbmcgPSBcIlJlamVjdFwiO1xuICAgIGFwcHJvdmU6IHN0cmluZyA9IFwiQXBwcm92ZVwiO1xuICAgIGNvbW1pdG1lbnRUZWFtR29hbFRpdGxlOiBzdHJpbmcgPSBcIkNvbW1pdG1lbnRfVGVhbV9Hb2FsX1RpdGxlXCI7XG4gICAgQ29tbWl0bWVudFBsYWNlaG9sZGVyOiBzdHJpbmcgPSBcIkNvbW1pdG1lbnRfUGxhY2Vob2xkZXJcIjtcbiAgICBwcm9ncmVzc0NvbmdyYXR1bGF0aW9uc01lc3NhZ2U6IHN0cmluZyA9IFwiUHJvZ3Jlc3NfQ29uZ3JhdHVsYXRpb25zX01lc3NhZ2VcIjtcbiAgICBtb250aDE6IHN0cmluZyA9ICdNb250aF8xJztcbiAgICBtb250aDI6IHN0cmluZyA9ICdNb250aF8yJztcbiAgICBtb250aDM6IHN0cmluZyA9ICdNb250aF8zJztcbiAgICBtb250aDQ6IHN0cmluZyA9ICdNb250aF80JztcbiAgICBtb250aDU6IHN0cmluZyA9ICdNb250aF81JztcbiAgICBtb250aDY6IHN0cmluZyA9ICdNb250aF82JztcbiAgICBtb250aDc6IHN0cmluZyA9ICdNb250aF83JztcbiAgICBtb250aDg6IHN0cmluZyA9ICdNb250aF84JztcbiAgICBtb250aDk6IHN0cmluZyA9ICdNb250aF85JztcbiAgICBtb250aDEwOiBzdHJpbmcgPSAnTW9udGhfMTAnO1xuICAgIG1vbnRoMTE6IHN0cmluZyA9ICdNb250aF8xMSc7XG4gICAgbW9udGgxMjogc3RyaW5nID0gJ01vbnRoXzEyJztcbiAgICB0aW1lczogc3RyaW5nID0gXCJUaW1lc1wiO1xuICAgIGhpOiBzdHJpbmcgPSBcIkhpXCI7XG4gICAgZ286IHN0cmluZyA9IFwiR29cIjtcbiAgICBnb2FsU2V0dGluZ0V4Y2VsOiBzdHJpbmcgPSBcIkdvYWxfU2V0dGluZ19FeGNlbFwiO1xuICAgIHNldEdvYWxUaGlzWWVhcjogc3RyaW5nID0gXCJTZXRfR29hbF9UaGlzX1llYXJcIjtcbiAgICBuZXh0OiBzdHJpbmcgPSBcIk5leHRcIjtcbiAgICBjYXNlOiBzdHJpbmcgPSBcIkNhc2VcIjtcbiAgICBvazogc3RyaW5nID0gXCJPa1wiO1xuICAgIHNraXA6IHN0cmluZyA9IFwiU2tpcFwiO1xuICAgIGdvYWxTZXR0aW5nQ3JlYXRlQ3VzdG9tZXI6IHN0cmluZyA9IFwiR29hbF9TZXR0aW5nX0NyZWF0ZV9DdXN0b21lclwiO1xuICAgIGdvYWxTZXR0aW5nQ3VzdG9tZXJKb3VybmFsOiBzdHJpbmcgPSBcIkdvYWxfU2V0dGluZ19DdXN0b21lcl9Kb3VybmFsXCI7XG4gICAgZ29hbFNldHRpbmdBY3Rpdml0eVR5cGU6IHN0cmluZyA9IFwiR29hbF9TZXR0aW5nX0FjdGl2aXR5X1R5cGVcIjtcbiAgICBnb2FsU2V0dGluZ0Zhc3RRdW90YXRpb246IHN0cmluZyA9IFwiR29hbF9TZXR0aW5nX0Zhc3RfUXVvdGF0aW9uXCI7XG4gICAgc3VibWlzc2lvbjogc3RyaW5nID0gXCJTdWJtaXNzaW9uXCI7XG4gICAgZ29hbFNldHRpbmdJbmZvcmNlUG9saWN5OiBzdHJpbmcgPSBcIkdvYWxfU2V0dGluZ19JbmZvcmNlX1BvbGljeVwiO1xuICAgIEZZRkNTaG9ydGZhbGw6IHN0cmluZyA9IFwiRllGQ19TaG9ydGZhbGxcIjtcbiAgICBBTlBBY3R1YWxWYXJpYWJsZTogc3RyaW5nID0gXCJBTlBfQWN0dWFsX1ZhcmlhYmxlXCI7XG4gICAgQU5QQWxsWWVhcjogc3RyaW5nID0gXCJBTlBfQWxsX1llYXJcIjtcbiAgICBBTlBOb3dUb1llYXJFbmQ6IHN0cmluZyA9IFwiQU5QX05vd19Ub19ZZWFyX0VuZFwiO1xuICAgIHBlbmRpbmdBcHByb3ZhbDogc3RyaW5nID0gXCJQZW5kaW5nX0FwcHJvdmFsXCI7XG4gICAgZGFzaGJvYXJkTW9udGg3OiBzdHJpbmcgPSBcIkRhc2hib2FyZF9Nb250aF83XCI7XG5cbiAgICAvL3Byb2dyZXNzXG4gICAgcG9pbnRzOiBzdHJpbmcgPSBcIlBvaW50c1wiO1xuICAgIGNvbmdyYXR1bGF0aW9uc01zZzogc3RyaW5nID0gJ1Byb2dyZXNzX0NvbmdyYXR1bGF0aW9uc19NZXNzYWdlJztcbiAgICBhbG1vc3RNYWRlSXRNc2c6IHN0cmluZyA9ICdQcm9ncmVzc19BbG1vc3RfTWFkZV9JdF9NZXNzYWdlJztcbiAgICB3ZWxsRG9uZU1zZzogc3RyaW5nID0gJ1Byb2dyZXNzX1dlbGxfRG9uZV9NZXNzYWdlJztcbiAgICBncmVhdEpvYk1zZzogc3RyaW5nID0gJ1Byb2dyZXNzX0dyZWF0X0pvYl9NZXNzYWdlJztcbiAgICBxdWFydGVyOiBzdHJpbmcgPSAnUXVhcnRlcic7XG4gICAgYmFja1RvUHJvZ3Jlc3NCdG5UZXh0OiBzdHJpbmcgPSAnQmFja19Ub19Qcm9ncmVzcyc7XG4gICAgZ29hbDogc3RyaW5nID0gJ0dvYWwnO1xuICAgIGZvcmVjYXN0OiBzdHJpbmcgPSAnRm9yZWNhc3QnO1xuICAgIHNob3J0ZmFsbDogc3RyaW5nID0gJ1Nob3J0ZmFsbCc7XG5cbiAgICAvL3Byb2dyZXMgYWN0aXZpdHlcbiAgICBhY3Rpdml0aWVzVGV4dCA9ICdBY3Rpdml0aWVzJztcbiAgICBhY2hpZXZlVGV4dCA9ICdBY2hpZXZlJztcbiAgICBhY3R1YWxHb2FsID0gJ0FjdHVhbF9Hb2FsJzsvL1xuICAgIGFjdHVhbFBsYW4gPSAnQWN0dWFsX1BsYW4nOy8vXG4gICAgbWVldFByZXNlbnRUZXh0ID0gJ01lZXRfUHJlc2VudCc7XG4gICAgbW9udGhseVBsYW5GWUZDVGl0bGVUZXh0ID0gJ01vbnRobHlfUGxhbl9GWUZDX1RpdGxlJztcbiAgICB0b3RhbEZvcmVjYXN0VGl0bGUgPSAnVG90YWxfRm9yZWNhc3QnO1xuICAgIHRvdGFsWVREQWN0dWFsVGl0bGUgPSAnVG90YWxfWVREX0FjdHVhbCc7XG4gICAgZGlyZWN0VW5pdFRpdGxlID0gJ0RpcmVjdF9Vbml0X1RpdGxlJztcbiAgICBpbmRpcmVjdFVuaXRUaXRsZSA9ICdJbmRpcmVjdF9Vbml0X1RpdGxlJztcbiAgICBhZ2VuY3lUaXRsZSA9ICdBZ2VuY3lfVGl0bGUnO1xuICAgIGFsbFpvbmVUaXRsZSA9ICdBbGxfWm9uZV9UaXRsZSc7XG5cbiAgICAvL2luZm9tYXRpb25cbiAgICBpbmZvcm1hdGlvbkRlc2NyaXB0aW9uVGV4dDogc3RyaW5nID0gJ0luZm9fSW5mb3JtYXRpb25fRGVzY3JpcHRpb24nO1xuICAgIGluZm9UaXRsZTogc3RyaW5nID0gJ0luZm9fVGl0bGUnO1xuICAgIGluZm9Nb250aERldGFpbFRleHQ6IHN0cmluZyA9ICdJbmZvX01vbnRoX0RldGFpbCc7XG4gICAgaW5mb1F1YXJ0ZXJEZXRhaWxUZXh0OiBzdHJpbmcgPSAnSW5mb19RdWFydGVyX0RldGFpbCc7XG4gICAgaW5mb1llYXJEZXRhaWxUZXh0OiBzdHJpbmcgPSAnSW5mb19ZZWFyX0RldGFpbCc7XG4gICAgaW5mb0ZvcmVjYXN0UmVjcnVpdG1lbnREZXRhaWxUZXh0OiBzdHJpbmcgPSAnSW5mb19Gb3JlY2FzdF9SZWNydWl0bWVudF9EZXRhaWwnO1xuICAgIGluZm9Ib3dUb1JlYWRUaGlzVGl0bGU6IHN0cmluZyA9ICdJbmZvX0hvd19Ub19SZWFkX1RoaXMnO1xuICAgIGluZm9Db252ZXJzaW9uUmF0ZVRleHQ6IHN0cmluZyA9ICdJbmZvX0NvbnZlcnNpb25fUmF0ZSc7XG4gICAgaW5mb0NvbnZlcnNpb25SYXRlRGV0YWlsVGV4dDogc3RyaW5nID0gJ0luZm9fQ29udmVyc2lvbl9SYXRlX0RldGFpbCc7XG4gICAgaW5mb0FjdGl2aXR5TGFiZWxUZXh0OiBzdHJpbmcgPSAnSW5mb19BY3Rpdml0eV9MYWJlbCc7XG4gICAgaW5mb1JlZE1lYW5UZXh0OiBzdHJpbmcgPSAnSW5mb19SZWRfTWVhbic7XG4gICAgaW5mb0dyZXlNZWFuVGV4dDogc3RyaW5nID0gJ0luZm9fR3JleV9NZWFuJztcbiAgICBpbmZvSWZBbkFjdGl2aXR5MVRleHQ6IHN0cmluZyA9ICdJbmZvX0lmX0FuX0FjdGl2aXR5XzEnO1xuICAgIGluZm9JZkFuQWN0aXZpdHkyVGV4dDogc3RyaW5nID0gJ0luZm9fSWZfQW5fQWN0aXZpdHlfMic7XG4gICAgaW5mb1RvRmluZFRleHQ6IHN0cmluZyA9ICdJbmZvX1RvX0ZpbmQnO1xuICAgIGluZm9UcnlUbzFUZXh0OiBzdHJpbmcgPSAnSW5mb19UcnlfVG9fMSc7XG4gICAgaW5mb1RyeVRvMlRleHQ6IHN0cmluZyA9ICdJbmZvX1RyeV9Ub18yJztcbiAgICBpbmZvVHJ5VG8zVGV4dDogc3RyaW5nID0gJ0luZm9fVHJ5X1RvXzMnO1xuICAgIGluZm9Nb3JlQWN0aXZlMVRleHQ6IHN0cmluZyA9ICdJbmZvX01vcmVfQWN0aXZlXzEnO1xuICAgIGluZm9Nb3JlQWN0aXZlMlRleHQ6IHN0cmluZyA9ICdJbmZvX01vcmVfQWN0aXZlXzInO1xuICAgIGluZm9Nb3JlQWN0aXZlM1RleHQ6IHN0cmluZyA9ICdJbmZvX01vcmVfQWN0aXZlXzMnO1xuICAgIGluZm9Nb3JlQWN0aXZlNFRleHQ6IHN0cmluZyA9ICdJbmZvX01vcmVfQWN0aXZlXzQnO1xuICAgIGluZm9UcnlIYXJkMVRleHQ6IHN0cmluZyA9ICdJbmZvX1RyeV9IYXJkXzEnO1xuICAgIGluZm9UcnlIYXJkMlRleHQ6IHN0cmluZyA9ICdJbmZvX1RyeV9IYXJkXzInO1xuICAgIGluZm9UcnlIYXJkM1RleHQ6IHN0cmluZyA9ICdJbmZvX1RyeV9IYXJkXzMnO1xuICAgIGluZm9IaWdoUXVhbGl0eTFUZXh0OiBzdHJpbmcgPSAnSW5mb19IaWdoX1F1YWxpdHlfMSc7XG4gICAgaW5mb0hpZ2hRdWFsaXR5MlRleHQ6IHN0cmluZyA9ICdJbmZvX0hpZ2hfUXVhbGl0eV8yJztcbiAgICBpbmZvQWxsQW1vdW50Q291bnRzQnlNaWxsaW9uOiBzdHJpbmcgPSBcIkluZm9fQWxsX0Ftb3VudF9Db3VudHNfQnlfTWlsbGlvblwiO1xuICAgIHdhaXRpbmdBcHByb3ZhbDogc3RyaW5nID0gXCJXYWl0aW5nX0FwcHJvdmFsXCI7XG4gICAgY29tcGxldGU6IHN0cmluZyA9IFwiQ29tcGxldGVcIjtcblxuICAgIC8vbm90aWZpY2F0aW9uXG4gICAgbmVlZFRvR29hbFNldHRpbmdUaXRsZTogc3RyaW5nID0gXCJOZWVkX1RvX0dvYWxfU2V0dGluZ19UaXRsZVwiO1xuICAgIGdvYWxBdXRvQXBwcm92ZU1lc3NhZ2VUaXRsZTogc3RyaW5nID0gXCJHb2FsX0F1dG9fQXBwcm92ZV9NZXNzYWdlX1RpdGxlXCI7XG4gICAgZ29hbEF1dG9BcHByb3ZlTWVzc2FnZURlc2M6IHN0cmluZyA9IFwiR29hbF9BdXRvX0FwcHJvdmVfTWVzc2FnZV9EZXNjXCI7XG4gICAgZ29hbEF1dG9BcHByb3ZlTGVhZGVyTWVzc2FnZVRpdGxlOiBzdHJpbmcgPSBcIkdvYWxfQXV0b19BcHByb3ZlX0xlYWRlcl9NZXNzYWdlX1RpdGxlXCI7XG4gICAgZ29hbEF1dG9BcHByb3ZlTGVhZGVyTWVzc2FnZURlc2M6IHN0cmluZyA9IFwiR29hbF9BdXRvX0FwcHJvdmVfTGVhZGVyX01lc3NhZ2VfRGVzY1wiO1xuICAgIGFwcHJvdmVHb2FsSXNSZWplY3RUaXRsZTogc3RyaW5nID0gXCJBcHByb3ZlX0dvYWxfSXNfUmVqZWN0X1RpdGxlXCI7XG4gICAgYXBwcm92ZUdvYWxJc1JlamVjdEJvZHk6IHN0cmluZyA9IFwiQXBwcm92ZV9Hb2FsX0lzX1JlamVjdF9Cb2R5XCI7XG4gICAgYXBwcm92ZUdvYWxJc0FwcHJvdmVkVGl0bGU6IHN0cmluZyA9IFwiQXBwcm92ZV9Hb2FsX0lzX0FwcHJvdmVkX1RpdGxlXCI7XG4gICAgYXBwcm92ZUdvYWxJc0FwcHJvdmVkQm9keTogc3RyaW5nID0gXCJBcHByb3ZlX0dvYWxfSXNfQXBwcm92ZWRfQm9keVwiO1xuICAgIHBlbmRpbmdSZXZpZXdUaXRsZTogc3RyaW5nID0gXCJQZW5kaW5nX1Jldmlld19UaXRsZVwiO1xuICAgIHN1cGVydmlzb3JIYXZlQ2hhbmdlQWdlbnRUaXRsZTogc3RyaW5nID0gXCJTdXBlcnZpc29yX0hhdmVfQ2hhbmdlX0FnZW50X1RpdGxlXCI7XG4gICAgc3VwZXJ2aXNvckhhdmVDaGFuZ2VBZ2VudEJvZHk6IHN0cmluZyA9IFwiU3VwZXJ2aXNvcl9IYXZlX0NoYW5nZV9BZ2VudF9Cb2R5XCI7XG4gICAgc3VwZXJ2aXNvckhhdmVDaGFuZ2VPbGRUaXRsZTogc3RyaW5nID0gXCJTdXBlcnZpc29yX0hhdmVfQ2hhbmdlX09sZF9UaXRsZVwiO1xuICAgIHN1cGVydmlzb3JIYXZlQ2hhbmdlT2xkQm9keTogc3RyaW5nID0gXCJTdXBlcnZpc29yX0hhdmVfQ2hhbmdlX09sZF9Cb2R5XCI7XG4gICAgc3VwZXJ2aXNvckhhdmVDaGFuZ2VOZXdUaXRsZTogc3RyaW5nID0gXCJTdXBlcnZpc29yX0hhdmVfQ2hhbmdlX05ld19UaXRsZVwiO1xuICAgIHN1cGVydmlzb3JIYXZlQ2hhbmdlTmV3Qm9keTogc3RyaW5nID0gXCJTdXBlcnZpc29yX0hhdmVfQ2hhbmdlX05ld19Cb2R5XCI7XG4gICAgZ29hbEF1dG9SZWplY3RNZXNzYWdlVGl0bGU6IHN0cmluZyA9IFwiR29hbF9BdXRvX1JlamVjdF9NZXNzYWdlX1RpdGxlXCI7XG4gICAgZ29hbEF1dG9SZWplY3RNZXNzYWdlRGVzY3JpcHRpb246IHN0cmluZyA9IFwiR29hbF9BdXRvX1JlamVjdF9NZXNzYWdlX0Rlc2NyaXB0aW9uXCI7XG4gICAgZ29hbEF1dG9SZWplY3RMZWFkZXJNZXNzYWdlVGl0bGU6IHN0cmluZyA9IFwiR29hbF9BdXRvX1JlamVjdF9MZWFkZXJfTWVzc2FnZV9UaXRsZVwiO1xuICAgIGdvYWxBdXRvUmVqZWN0TGVhZGVyTWVzc2FnZURlc2NyaXB0aW9uOiBzdHJpbmcgPSBcIkdvYWxfQXV0b19SZWplY3RfTGVhZGVyX01lc3NhZ2VfRGVzY3JpcHRpb25cIjtcbiAgICBhY3Rpdml0eVRlblBvaW50VGl0bGU6IHN0cmluZyA9IFwiQWN0aXZpdHlfVGVuX1BvaW50X1RpdGxlXCI7XG4gICAgYWN0aXZpdHlUZW5Qb2ludEJvZHk6IHN0cmluZyA9IFwiQWN0aXZpdHlfVGVuX1BvaW50X0JvZHlcIjtcbiAgICBhY3Rpdml0eVR3ZW50eVBvaW50VGl0bGU6IHN0cmluZyA9IFwiQWN0aXZpdHlfVHdlbnR5X1BvaW50X1RpdGxlXCI7XG4gICAgYWN0aXZpdHlUd2VudHlQb2ludEJvZHk6IHN0cmluZyA9IFwiQWN0aXZpdHlfVHdlbnR5X1BvaW50X0JvZHlcIjtcbiAgICBhY3Rpdml0eU1pbmlQb2ludFRpdGxlOiBzdHJpbmcgPSBcIkFjdGl2aXR5X01pbmlfUG9pbnRfVGl0bGVcIjtcbiAgICBhY3Rpdml0eU1pbmlQb2ludEJvZHk6IHN0cmluZyA9IFwiQWN0aXZpdHlfTWluaV9Qb2ludF9Cb2R5XCI7XG4gICAgY3VzdG9tZXJPdmVydGltZVRpdGxlOiBzdHJpbmcgPSBcIkN1c3RvbWVyX092ZXJ0aW1lX1RpdGxlXCI7XG4gICAgY3VzdG9tZXJBdXRvRGVsZXRlVGl0bGU6IHN0cmluZyA9IFwiQ3VzdG9tZXJfQXV0b19EZWxldGVfVGl0bGVcIjtcbiAgICBnb2FsUGVyaW9kTm90U3RhcnRUaXRsZTogc3RyaW5nID0gXCJHb2FsX1BlcmlvZF9Ob3RfU3RhcnRfVGl0bGVcIjtcbiAgICBnb2FsUGVyaW9kTm90U3RhcnRCb2R5OiBzdHJpbmcgPSBcIkdvYWxfUGVyaW9kX05vdF9TdGFydF9Cb2R5XCI7XG4gICAgYWRqdXN0R29hbDogc3RyaW5nID0gXCJBZGp1c3RfR29hbFwiO1xuICAgIHNlZVByb2dyZXNzOiBzdHJpbmcgPSBcIlNlZV9Qcm9ncmVzc1wiO1xuICAgIElHb3RJdDogc3RyaW5nID0gXCJJX0dvdF9JdFwiO1xuICAgIGRhdGFQcml2YWN5UHJvdGVjdGlvblRpdGxlOiBzdHJpbmcgPSBcIkRhdGFfUHJpdmFjeV9Qcm90ZWN0aW9uX1RpdGxlXCI7XG4gICAgZGF0YVByaXZhY3lQcm90ZWN0aW9uQm9keTogc3RyaW5nID0gXCJEYXRhX1ByaXZhY3lfUHJvdGVjdGlvbl9Cb2R5XCI7XG4gICAgcGxlYXNlUmVjb25uZWN0SW50ZXJuZXQ6IHN0cmluZyA9IFwiUGxlYXNlX1JlY29ubmVjdF9JbnRlcm5ldFwiO1xuICAgIGRhdGFDb2xsZWN0aW9uUHJvY2Vzc0FuZFVzYWdlVGl0bGU6IHN0cmluZyA9IFwiRGF0YV9Db2xsZWN0aW9uX1Byb2Nlc3NfQW5kX1VzYWdlX1RpdGxlXCI7XG4gICAgZGF0YUNvbGxlY3Rpb25Qcm9jZXNzQW5kVXNhZ2VCb2R5OiBzdHJpbmcgPSBcIkRhdGFfQ29sbGVjdGlvbl9Qcm9jZXNzX0FuZF9Vc2FnZV9Cb2R5XCI7XG4gICAgdmVyc2lvbk1lc3NhZ2U6IHN0cmluZyA9IFwiVmVyc2lvbl9NZXNzYWdlXCI7XG4gICAgdGltZU91dDogc3RyaW5nID0gXCJUaW1lX091dFwiO1xuICAgIHZlcnNpb25VcGRhdGU6IHN0cmluZyA9IFwiVmVyc2lvbl9VcGRhdGVcIjtcbiAgICBsYXRlcjogc3RyaW5nID0gXCJMYXRlclwiO1xuICAgIG5vV2lmaUNvbm5lY3RlZDogc3RyaW5nID0gXCJOb19XaWZpX0Nvbm5lY3RlZFwiO1xuICAgIHBsZWFzZUNvbm5lY3RJbnRlcm5ldDogc3RyaW5nID0gXCJQbGVhc2VfQ29ubmVjdF9JbnRlcm5ldFwiO1xuICAgIGRlbGV0ZURhdGFUaXRsZTogc3RyaW5nID0gXCJEZWxldGVfRGF0YV9UaXRsZVwiO1xuICAgIGRlbGV0ZURhdGFCb2R5OiBzdHJpbmcgPSBcIkRlbGV0ZV9EYXRhX0JvZHlcIjtcbiAgICBub3RTaG93TWVzc2FnZTogc3RyaW5nID0gXCJOb3RfU2hvd19NZXNzYWdlXCI7XG4gICAgbGFuZ3VhZ2VDb252ZXJzaW9uVGl0bGU6IHN0cmluZyA9IFwiTGFuZ3VhZ2VfQ29udmVyc2lvbl9UaXRsZVwiO1xuICAgIGxhbmd1YWdlQ29udmVyc2lvbkJvZHk6IHN0cmluZyA9IFwiTGFuZ3VhZ2VfQ29udmVyc2lvbl9Cb2R5XCI7XG4gICAgY3VzdG9tZXJzVW5pdDpzdHJpbmcgPSBcIkN1c3RvbWVyc19Vbml0XCI7XG4gICAgY2FzZXNVbml0OnN0cmluZyA9IFwiQ2FzZXNfVW5pdFwiO1xuICAgIHRvZGF5U2NoZWR1bGVCaXJ0aGRheTogc3RyaW5nID0gXCJUb2RheV9TY2hlZHVsZV9CaXJ0aGRheVwiO1xuICAgIHllYXJVbml0OiBzdHJpbmcgPSBcIlllYXJfVW5pdFwiO1xuICAgIHZlcnRpY2FsOiBzdHJpbmcgPSBcIlZlcnRpY2FsXCI7XG4gICAgaG9yaXpvbmFsOiBzdHJpbmcgPSBcIkhvcml6b25hbFwiO1xuICAgIGFkZFByb3RlY3Rpb246IHN0cmluZyA9IFwiQWRkX1Byb3RlY3Rpb25cIjtcbiAgICBtb3JlOiBzdHJpbmcgPSBcIk1vcmVcIjtcbiAgICBzdWJtaXREZWFsOiBzdHJpbmcgPSBcIlN1Ym1pdF9EZWFsXCI7XG4gICAgcHJvZ3Jlc3NHb1RvQ2FsZW5kYXI6IHN0cmluZyA9IFwiUHJvZ3Jlc3NfR29fVG9fQ2FsZW5kYXJcIjtcblxuICAgIGhvbWVIaTogc3RyaW5nID0gXCJIb21lX0hpXCI7XG4gICAgaG9tZUFwcG9pbnRtZW50RGV0YWlsczogc3RyaW5nID0gXCJIb21lX0FwcG9pbnRtZW50X0RldGFpbHNcIjtcbiAgICBob21lRWRpdDogc3RyaW5nID0gXCJIb21lX0VkaXRcIjtcbiAgICBob21lRGVsZXRlOiBzdHJpbmcgPSBcIkhvbWVfRGVsZXRlXCI7XG4gICAgaG9tZUFwcG9pbnRtZW50OiBzdHJpbmcgPSBcIkhvbWVfQXBwb2ludG1lbnRcIjtcbiAgICBob21lU2F2ZTogc3RyaW5nID0gXCJIb21lX1NhdmVcIjtcbiAgICBob21lRllGQzogc3RyaW5nID0gXCJIb21lX0ZZRkNcIjtcbiAgICBob21lQU5QOiBzdHJpbmcgPSBcIkhvbWVfQU5QXCI7XG4gICAgaG9tZUNvbmZpcm06IHN0cmluZyA9IFwiSG9tZV9Db25maXJtXCI7XG4gICAgaG9tZVBlcnNvbmFsOiBzdHJpbmcgPSBcIkhvbWVfUGVyc29uYWxcIjtcbiAgICBob21lVGVhbTogc3RyaW5nID0gXCJIb21lX1RlYW1cIjtcbiAgICBob21lRGV0YWlsczogc3RyaW5nID0gXCJIb21lX0RldGFpbHNcIjtcbiAgICBob21lVG9kYXk6IHN0cmluZyA9IFwiSG9tZV9Ub2RheVwiO1xuICAgIGhvbWVTY2hlZHVsZTogc3RyaW5nID0gXCJIb21lX1NjaGVkdWxlXCI7XG4gICAgaG9tZUJpcnRoZGF5OiBzdHJpbmcgPSBcIkhvbWVfQmlydGhkYXlcIjtcblxuICAgIGN1c3RvbWVyQ2xlYXI6IHN0cmluZyA9IFwiQ3VzdG9tZXJfQ2xlYXJcIjtcbiAgICBjdXN0b21lckFwcG9pbnRtZW50OiBzdHJpbmcgPSBcIkN1c3RvbWVyX0FwcG9pbnRtZW50XCI7XG4gICAgY3VzdG9tZXJDb250YWN0OiBzdHJpbmcgPSBcIkN1c3RvbWVyX0NvbnRhY3RcIjtcbiAgICBjdXN0b21lckVkaXQ6IHN0cmluZyA9IFwiQ3VzdG9tZXJfRWRpdFwiO1xuICAgIGN1c3RvbWVyRGVsZXRlOiBzdHJpbmcgPSBcIkN1c3RvbWVyX0RlbGV0ZVwiO1xuICAgIGN1c3RvbWVyQWRkOiBzdHJpbmcgPSBcIkN1c3RvbWVyX0FkZFwiO1xuICAgIGFkZFByb2ZpbGU6IHN0cmluZyA9IFwiQWRkX1Byb2ZpbGVcIjtcbiAgICBjdXN0b21lclNhdmU6IHN0cmluZyA9IFwiQ3VzdG9tZXJfU2F2ZVwiO1xuICAgIGN1c3RvbWVyQ29uZmlybTogc3RyaW5nID0gXCJDdXN0b21lcl9Db25maXJtXCI7XG4gICAgY3VzdG9tZXJEZXRhaWw6IHN0cmluZyA9IFwiQ3VzdG9tZXJfRGV0YWlsXCI7XG5cbiAgICB1bmJpbmREZXZpY2U6IHN0cmluZyA9IFwiVW5iaW5kX0RldmljZVwiO1xuICAgIHVuYmluZDogc3RyaW5nID0gXCJVbmJpbmRcIjtcbiAgICBzZXR0aW5nU2VlRGV0YWlsczogc3RyaW5nID0gXCJTZXR0aW5nX1NlZV9EZXRhaWxzXCI7XG5cbiAgICBnb2FsU2V0dGluZ1Jlc2V0OiBzdHJpbmcgPSBcIkdvYWxfU2V0dGluZ19SZXNldFwiO1xuICAgIGdvYWxTZXR0aW5nTmV4dDogc3RyaW5nID0gXCJHb2FsX1NldHRpbmdfTmV4dFwiO1xuICAgIGdvYWxTZXR0aW5nU3VibWl0OiBzdHJpbmcgPSBcIkdvYWxfU2V0dGluZ19TdWJtaXRcIjtcbiAgICBnb2FsU2V0dGluZ0ZpbmQ6IHN0cmluZyA9IFwiR29hbF9TZXR0aW5nX0ZpbmRcIjtcbiAgICBnb2FsU2V0dGluZ0ZpbmRTdWJ0aXRsZTogc3RyaW5nID0gXCJHb2FsX1NldHRpbmdfRmluZF9TdWJ0aXRsZVwiO1xuICAgIGdvYWxTZXR0aW5nU2NoZWR1bGU6IHN0cmluZyA9IFwiR29hbF9TZXR0aW5nX1NjaGVkdWxlXCI7XG4gICAgZ29hbFNldHRpbmdTY2hlZHVsZVN1YnRpdGxlOiBzdHJpbmcgPSBcIkdvYWxfU2V0dGluZ19TY2hlZHVsZV9TdWJ0aXRsZVwiO1xuICAgIGdvYWxTZXR0aW5nTWVldFByZXNlbnQ6IHN0cmluZyA9IFwiR29hbF9TZXR0aW5nX01lZXRfUHJlc2VudFwiO1xuICAgIGdvYWxTZXR0aW5nTWVldFByZXNlbnRTdWJ0aXRsZTogc3RyaW5nID0gXCJHb2FsX1NldHRpbmdfTWVldF9QcmVzZW50X1N1YnRpdGxlXCI7XG4gICAgZ29hbFNldHRpbmdTdWJtaXREZWFsOiBzdHJpbmcgPSBcIkdvYWxfU2V0dGluZ19TdWJtaXRfRGVhbFwiO1xuICAgIGdvYWxTZXR0aW5nU3VibWl0RGVhbFN1YnRpdGxlOiBzdHJpbmcgPSBcIkdvYWxfU2V0dGluZ19TdWJtaXRfRGVhbF9TdWJ0aXRsZVwiO1xuICAgIGdvYWxTZXR0aW5nSW5mb3JjZTogc3RyaW5nID0gXCJHb2FsX1NldHRpbmdfSW5mb3JjZVwiO1xuICAgIGdvYWxTZXR0aW5nSW5mb3JjZVN1YnRpdGxlOiBzdHJpbmcgPSBcIkdvYWxfU2V0dGluZ19JbmZvcmNlX1N1YnRpdGxlXCI7XG4gICAgZ29hbFNldHRpbmdEYWlseTogc3RyaW5nID0gXCJHb2FsX1NldHRpbmdfRGFpbHlcIjtcbiAgICBnb2FsU2V0dGluZ1dlZWtseTogc3RyaW5nID0gXCJHb2FsX1NldHRpbmdfV2Vla2x5XCI7XG4gICAgZ29hbFNldHRpbmdNb250aGx5OiBzdHJpbmcgPSBcIkdvYWxfU2V0dGluZ19Nb250aGx5XCI7XG4gICAgZ29hbFNldHRpbmdEYXk6IHN0cmluZyA9IFwiR29hbF9TZXR0aW5nX0RheVwiO1xuICAgIGdvYWxTZXR0aW5nV2Vlazogc3RyaW5nID0gXCJHb2FsX1NldHRpbmdfV2Vla1wiO1xuICAgIGdvYWxTZXR0aW5nTW9udGg6IHN0cmluZyA9IFwiR29hbF9TZXR0aW5nX01vbnRoXCI7XG4gICAgZ29hbFNldHRpbmdBY3R1YWw6IHN0cmluZyA9IFwiR29hbF9TZXR0aW5nX0FjdHVhbFwiO1xuICAgIGdvYWxTZXR0aW5nRllGQzogc3RyaW5nID0gXCJHb2FsX1NldHRpbmdfRllGQ1wiO1xuICAgIGdvYWxTZXR0aW5nQU5QOiBzdHJpbmcgPSBcIkdvYWxfU2V0dGluZ19BTlBcIjtcbiAgICBnb2FsU2V0dGluZ01hbnBvd2VyOiBzdHJpbmcgPSBcIkdvYWxfU2V0dGluZ19NYW5wb3dlclwiO1xuICAgIGdvYWxTZXR0aW5nUmVjcnVpdG1lbnQ6IHN0cmluZyA9IFwiR29hbF9TZXR0aW5nX1JlY3J1aXRtZW50XCI7XG4gICAgZ29hbFNldHRpbmdQZXJzb25hbDogc3RyaW5nID0gXCJHb2FsX1NldHRpbmdfUGVyc29uYWxcIjtcbiAgICBnb2FsU2V0dGluZ1RlYW06IHN0cmluZyA9IFwiR29hbF9TZXR0aW5nX1RlYW1cIjtcbiAgICBnb2FsU2V0dGluZ0NsZWFyOiBzdHJpbmcgPSBcIkdvYWxfU2V0dGluZ19DbGVhclwiO1xuICAgIGdvYWxTZXR0aW5nU2F2ZTogc3RyaW5nID0gXCJHb2FsX1NldHRpbmdfU2F2ZVwiO1xuICAgIGdvYWxTZXR0aW5nUGxhbjogc3RyaW5nID0gXCJHb2FsX1NldHRpbmdfUGxhblwiO1xuICAgIGdvYWxTZXR0aW5nU2VlRGV0YWlsczogc3RyaW5nID0gXCJHb2FsX1NldHRpbmdfU2VlX0RldGFpbHNcIjtcbiAgICBnb2FsU2V0dGluZ0xhbmRpbmdIaTogc3RyaW5nID0gXCJHb2FsX1NldHRpbmdfTGFuZGluZ19IaVwiO1xuICAgIGdvYWxTZXR0aW5nQ2FsZW5kYXJKb3VybmFsOiBzdHJpbmcgPSBcIkdvYWxfU2V0dGluZ19DYWxlbmRhcl9Kb3VybmFsXCI7XG5cbiAgICBjYWxlbmRhckZpbHRlcjogc3RyaW5nID0gXCJDYWxlbmRhcl9GaWx0ZXJcIjtcbiAgICBjYWxlbmRhckFjdGl2aXR5OiBzdHJpbmcgPSBcIkNhbGVuZGFyX0FjdGl2aXR5XCI7XG4gICAgY2FsZW5kYXJDdXN0b21lck5hbWU6IHN0cmluZyA9IFwiQ2FsZW5kYXJfQ3VzdG9tZXJfTmFtZVwiO1xuICAgIGNhbGVuZGFyQXBwb2ludG1lbnREZXRhaWxzOiBzdHJpbmcgPSBcIkNhbGVuZGFyX0FwcG9pbnRtZW50X0RldGFpbHNcIjtcbiAgICBjYWxlbmRhckVkaXQ6IHN0cmluZyA9IFwiQ2FsZW5kYXJfRWRpdFwiO1xuICAgIGNhbGVuZGFyRGVsZXRlOiBzdHJpbmcgPSBcIkNhbGVuZGFyX0RlbGV0ZVwiO1xuICAgIGNhbGVuZGFyQXBwb2ludG1lbnQ6IHN0cmluZyA9IFwiQ2FsZW5kYXJfQXBwb2ludG1lbnRcIjtcbiAgICBjYWxlbmRhclNhdmU6IHN0cmluZyA9IFwiQ2FsZW5kYXJfU2F2ZVwiO1xuICAgIGNhbGVuZGFyRGF5OiBzdHJpbmcgPSBcIkNhbGVuZGFyX0RheVwiO1xuICAgIGNhbGVuZGFyV2Vlazogc3RyaW5nID0gXCJDYWxlbmRhcl9XZWVrXCI7XG4gICAgY2FsZW5kYXJNb250aDogc3RyaW5nID0gXCJDYWxlbmRhcl9Nb250aFwiO1xuICAgIGNhbGVuZGFyWWVhcjogc3RyaW5nID0gXCJDYWxlbmRhcl9ZZWFyXCI7XG4gICAgY2FsZW5kYXJUb2RheTogc3RyaW5nID0gXCJDYWxlbmRhcl9Ub2RheVwiO1xuXG4gICAgcHJvZ3Jlc3NXZWVrOiBzdHJpbmcgPSBcIlByb2dyZXNzX1dlZWtcIjtcbiAgICBwcm9ncmVzc1RvZGF5OiBzdHJpbmcgPSBcIlByb2dyZXNzX1RvZGF5XCI7XG5cbiAgICBwcm9ncmVzc1BlcnNvbmFsOiBzdHJpbmcgPSBcIlByb2dyZXNzX1BlcnNvbmFsXCI7XG4gICAgcHJvZ3Jlc3NUZWFtOiBzdHJpbmcgPSBcIlByb2dyZXNzX1RlYW1cIjtcbiAgICBwcm9ncmVzc01vbnRoOiBzdHJpbmcgPSBcIlByb2dyZXNzX01vbnRoXCI7XG4gICAgcHJvZ3Jlc3NRdWFydGVyOiBzdHJpbmcgPSBcIlByb2dyZXNzX1F1YXJ0ZXJcIjtcbiAgICBwcm9ncmVzc1llYXI6IHN0cmluZyA9IFwiUHJvZ3Jlc3NfWWVhclwiO1xuICAgIHByb2dyZXNzRllGQzogc3RyaW5nID0gXCJQcm9ncmVzc19GWUZDXCI7XG4gICAgcHJvZ3Jlc3NBTlA6IHN0cmluZyA9IFwiUHJvZ3Jlc3NfQU5QXCI7XG4gICAgcHJvZ3Jlc3NGaW5kOiBzdHJpbmcgPSBcIlByb2dyZXNzX0ZpbmRcIjtcbiAgICBwcm9ncmVzc0ZpbmRTdWJ0aXRsZTogc3RyaW5nID0gXCJQcm9ncmVzc19GaW5kX1N1YnRpdGxlXCI7XG4gICAgcHJvZ3Jlc3NTY2hlZHVsZTogc3RyaW5nID0gXCJQcm9ncmVzc19TY2hlZHVsZVwiO1xuICAgIHByb2dyZXNzU2NoZWR1bGVTdWJ0aXRsZTogc3RyaW5nID0gXCJQcm9ncmVzc19TY2hlZHVsZV9TdWJ0aXRsZVwiO1xuICAgIHByb2dyZXNzTWVldFByZXNlbnQ6IHN0cmluZyA9IFwiUHJvZ3Jlc3NfTWVldF9QcmVzZW50XCI7XG4gICAgcHJvZ3Jlc3NNZWV0UHJlc2VudFN1YnRpdGxlOiBzdHJpbmcgPSBcIlByb2dyZXNzX01lZXRfUHJlc2VudF9TdWJ0aXRsZVwiO1xuICAgIHByb2dyZXNzU3VibWl0RGVhbDogc3RyaW5nID0gXCJQcm9ncmVzc19TdWJtaXRfRGVhbFwiO1xuICAgIHByb2dyZXNzU3VibWl0RGVhbFN1YnRpdGxlOiBzdHJpbmcgPSBcIlByb2dyZXNzX1N1Ym1pdF9EZWFsX1N1YnRpdGxlXCI7XG4gICAgcHJvZ3Jlc3NJbmZvcmNlOiBzdHJpbmcgPSBcIlByb2dyZXNzX0luZm9yY2VcIjtcbiAgICBwcm9ncmVzc0luZm9yY2VTdWJ0aXRsZTogc3RyaW5nID0gXCJQcm9ncmVzc19JbmZvcmNlX1N1YnRpdGxlXCI7XG4gICAgcHJvZ3Jlc3NQbGFuOiBzdHJpbmcgPSBcIlByb2dyZXNzX1BsYW5cIjtcbiAgICBwcm9ncmVzc0FjdHVhbDogc3RyaW5nID0gXCJQcm9ncmVzc19BY3R1YWxcIjtcbiAgICBwcm9ncmVzc0dvYWw6IHN0cmluZyA9IFwiUHJvZ3Jlc3NfR29hbFwiO1xuICAgIHByb2dyZXNzRm9yZWNhc3Q6IHN0cmluZyA9IFwiUHJvZ3Jlc3NfRm9yZWNhc3RcIjtcbiAgICBwcm9ncmVzc1Nob3J0ZmFsbDogc3RyaW5nID0gXCJQcm9ncmVzc19TaG9ydGZhbGxcIjtcbiAgICBwcm9ncmVzc01hbnBvd2VyOiBzdHJpbmcgPSBcIlByb2dyZXNzX01hbnBvd2VyXCI7XG4gICAgcHJvZ3Jlc3NSZWNydWl0bWVudDogc3RyaW5nID0gXCJQcm9ncmVzc19SZWNydWl0bWVudFwiO1xuICAgIHByb2dyZXNzQ3VycmVudE1vbnRoOiBzdHJpbmcgPSBcIlByb2dyZXNzX0N1cnJlbnRfTW9udGhcIjtcbiAgICBwcm9ncmVzc0N1cnJlbnRRdWFydGVyOiBzdHJpbmcgPSBcIlByb2dyZXNzX0N1cnJlbnRfUXVhcnRlclwiO1xuICAgIHByb2dyZXNzQ3VycmVudFllYXI6IHN0cmluZyA9IFwiUHJvZ3Jlc3NfQ3VycmVudF9ZZWFyXCI7XG4gICAgcHJvZ3Jlc3NGb3JlY2FzdFJlY3J1aXRtZW50OiBzdHJpbmcgPSBcIlByb2dyZXNzX0ZvcmVjYXN0X1JlY3J1aXRtZW50XCI7XG4gICAgcHJvZ3Jlc3NDbG9zZTogc3RyaW5nID0gXCJQcm9ncmVzc19DbG9zZVwiO1xuICAgIHByb2dyZXNzU2VlRGV0YWlsczogc3RyaW5nID0gXCJQcm9ncmVzc19TZWVfRGV0YWlsc1wiO1xuICAgIHByb2dyZXNzRGV0YWlsOiBzdHJpbmcgPSBcIlByb2dyZXNzX0RldGFpbFwiO1xuXG4gICAgc2V0dGluZ1llczogc3RyaW5nID0gXCJTZXR0aW5nX1llc1wiO1xuICAgIHNldHRpbmdObzogc3RyaW5nID0gXCJTZXR0aW5nX05vXCI7XG5cbiAgICBkZXRlY3RTY3JlZW5zaG90VGl0bGU6IHN0cmluZyA9IFwiRGV0ZWN0X1NjcmVlbnNob3RfVGl0bGVcIjtcbiAgICBkZXRlY3RTY3JlZW5zaG90Q29udGVudDogc3RyaW5nID0gXCJEZXRlY3RfU2NyZWVuc2hvdF9Db250ZW50XCI7XG4gICAgbm9Db250YWN0UGVybWlzc2lvblRpdGxlOiBzdHJpbmcgPSBcIk5vX0NvbnRhY3RfUGVybWlzc2lvbl9UaXRsZVwiO1xuICAgIG5vQ29udGFjdFBlcm1pc3Npb25Db250ZW50OiBzdHJpbmcgPSBcIk5vX0NvbnRhY3RfUGVybWlzc2lvbl9Db250ZW50XCI7XG4gICAgc3VibWl0RmFpbFRpdGxlOiBzdHJpbmcgPSBcIlN1Ym1pdF9GYWlsX1RpdGxlXCI7XG4gICAgc3VibWl0RmFpbENvbnRlbnQ6IHN0cmluZyA9IFwiU3VibWl0X0ZhaWxfQ29udGVudFwiO1xuICAgIG5vdGlmaWNhdGlvblNlZVByb2dyZXNzOiBzdHJpbmcgPSBcIk5vdGlmaWNhdGlvbl9TZWVfUHJvZ3Jlc3NcIjtcbiAgICBub3RpZmljYXRpb25TYXZlRmVlZGJhY2s6IHN0cmluZyA9IFwiTm90aWZpY2F0aW9uX1NhdmVfRmVlZGJhY2tcIjtcbiAgICBub3RpZmljYXRpb25EZWxldGVGZWVkYmFjazogc3RyaW5nID0gXCJOb3RpZmljYXRpb25fRGVsZXRlX0ZlZWRiYWNrXCI7XG4gICAgbm90aWZpY2F0aW9uQ29tcGxldGVGZWVkYmFjazogc3RyaW5nID0gXCJOb3RpZmljYXRpb25fQ29tcGxldGVfRmVlZGJhY2tcIjtcblxuXG4gICAgLy9tZXNzYWdlIDEsIDJcbiAgICBnb2FsUGVyaW9kTm90U3RhcnRPazogc3RyaW5nID0gXCJHb2FsX1BlcmlvZF9Ob3RfU3RhcnRfT2tcIjtcblxuICAgIC8vbWVzc2FnZSAzIFxuICAgIGdvYWxQZXJpb2RJc0JlZ2luT2s6IHN0cmluZyA9IFwiR29hbF9QZXJpb2RfSXNfQmVnaW5fT2tcIjtcblxuICAgIC8vbWVzc2FnZSA1IFxuICAgIG5lZWRUb0dvYWxTZXR0aW5nQWRqdXN0R29hbDogc3RyaW5nID0gXCJOZWVkX1RvX0dvYWxfU2V0dGluZ19BZGp1c3RfR29hbFwiO1xuXG4gICAgLy9tZXNzYWdlIDYgXG4gICAgZ29hbEF1dG9BcHByb3ZlQWRqdXN0R29hbDogc3RyaW5nID0gXCJHb2FsX0F1dG9fQXBwcm92ZV9BZGp1c3RfR29hbFwiO1xuXG4gICAgLy9tZXNzc2FnZSA3IFxuICAgIGdvYWxBdXRvQXBwcm92ZUxlYWRlck9rOiBzdHJpbmcgPSBcIkdvYWxfQXV0b19BcHByb3ZlX0xlYWRlcl9Pa1wiO1xuXG4gICAgLy9tZXNzYWFnZSA4XG4gICAgYXBwcm92ZUdvYWxJc1JlamVjdEFkanVzdEdvYWw6IHN0cmluZyA9IFwiQXBwcm92ZV9Hb2FsX0lzX1JlamVjdF9BZGp1c3RfR29hbFwiO1xuXG4gICAgLy9tZXNzYWdlIDlcbiAgICBhcHByb3ZlR29hbElzQXBwcm92ZWRPazogc3RyaW5nID0gXCJBcHByb3ZlX0dvYWxfSXNfQXBwcm92ZWRfT2tcIjtcblxuICAgIC8vbWVzc2FnZSAxMVxuICAgIHBlbmRpbmdSZXZpZXdBZ2VuY3lQbGFuOiBzdHJpbmcgPSBcIlBlbmRpbmdfUmV2aWV3X0FnZW5jeV9QbGFuXCI7XG5cbiAgICAvL21lc3NhZ2UgMTJcbiAgICBzdXBlcnZpc29ySGF2ZUNoYW5nZUFnZW50T2s6IHN0cmluZyA9IFwiU3VwZXJ2aXNvcl9IYXZlX0NoYW5nZV9BZ2VudF9Pa1wiO1xuXG4gICAgLy9tZXNzYWdlIDEzXG4gICAgc3VwZXJ2aXNvckhhdmVDaGFuZ2VPbGRPazogc3RyaW5nID0gXCJTdXBlcnZpc29yX0hhdmVfQ2hhbmdlX09sZF9Pa1wiO1xuXG4gICAgLy9tZXNzYWdlIDE0XG4gICAgc3VwZXJ2aXNvckhhdmVDaGFuZ2VOZXdBZ2VuY3lQbGFuOiBzdHJpbmcgPSBcIlN1cGVydmlzb3JfSGF2ZV9DaGFuZ2VfTmV3X0FnZW5jeV9QbGFuXCI7XG5cbiAgICAvL21lc3NhZ2UgMTVcbiAgICBnb2FsQXV0b1JlamVjdEFkanVzdEdvYWw6IHN0cmluZyA9IFwiR29hbF9BdXRvX1JlamVjdF9BZGp1c3RfR29hbFwiO1xuXG4gICAgLy9tZXNzYWdlIDE2XG4gICAgZ29hbEF1dG9SZWplY3RMZWFkZXJPazogc3RyaW5nID0gXCJHb2FsX0F1dG9fUmVqZWN0X0xlYWRlcl9Pa1wiO1xuXG4gICAgLy9tZXNzYWdlIDIxXG4gICAgZGF0YVByaXZhY3lQcm90ZWN0aW9uQ29uZmlybTogc3RyaW5nID0gXCJEYXRhX1ByaXZhY3lfUHJvdGVjdGlvbl9Db25maXJtXCI7XG5cbiAgICAvLyBtZXNzYWdlIDIzXG4gICAgY3VzdG9tZXJPdmVydGltZUNvbmZpcm06IHN0cmluZyA9IFwiQ3VzdG9tZXJfT3ZlcnRpbWVfQ29uZmlybVwiO1xuXG4gICAgLy9tZXNzYWdlIDI0XG4gICAgY3VzdG9tZXJBdXRvRGVsZXRlQ29uZmlybTogc3RyaW5nID0gXCJDdXN0b21lcl9BdXRvX0RlbGV0ZV9Db25maXJtXCI7XG5cbiAgICAvL21lc3NhZ2UgMjhcbiAgICBub1dpZmlDb25uZWN0ZWRPazogc3RyaW5nID0gXCJOb19XaWZpX0Nvbm5lY3RlZF9Pa1wiO1xuXG4gICAgLy9tZXNzYWdlIDI5XG4gICAgdmVyc2lvblVwZGF0ZVllczogc3RyaW5nID0gXCJWZXJzaW9uX1VwZGF0ZV9ZZXNcIjtcbiAgICB2ZXJzaW9uVXBkYXRlTGF0ZXI6IHN0cmluZyA9IFwiVmVyc2lvbl9VcGRhdGVfTGF0ZXJcIjtcblxuICAgIC8vbWVzc2FnZSAzMFxuICAgIHRpbWVPdXRPazogc3RyaW5nID0gXCJUaW1lX091dF9Pa1wiO1xuXG4gICAgLy9tZXNzYWdlIDMxXG4gICAgZGF0YUNvbGxlY3Rpb25Qcm9jZXNzQW5kVXNhZ2VSZWplY3Q6IHN0cmluZyA9IFwiRGF0YV9Db2xsZWN0aW9uX1Byb2Nlc3NfQW5kX1VzYWdlX1JlamVjdFwiO1xuICAgIGRhdGFDb2xsZWN0aW9uUHJvY2Vzc0FuZFVzYWdlQ29uZmlybTogc3RyaW5nID0gXCJEYXRhX0NvbGxlY3Rpb25fUHJvY2Vzc19BbmRfVXNhZ2VfQ29uZmlybVwiO1xuXG4gICAgLy9tZXNzYWdlIDM4XG4gICAgZGV0ZWN0U2NyZWVuc2hvdE9rOiBzdHJpbmcgPSBcIkRldGVjdF9TY3JlZW5zaG90X09rXCI7XG5cbiAgICAvL25vdCBvbiBtYXN0ZXIgZmlsZVxuICAgIHN1Ym1pdEZhaWxPazogc3RyaW5nID0gXCJTdWJtaXRfRmFpbF9Pa1wiO1xuICAgIG5vQ29udGFjdFBlcm1pc3Npb25Pazogc3RyaW5nID0gXCJOb19Db250YWN0X1Blcm1pc3Npb25fT2tcIjtcbiAgICBodHRwRXJyb3JPazogc3RyaW5nID0gXCJIVFRQX0Vycm9yX09rXCI7XG5cblxuXG5cblxuXG5cblxufVxuIl19