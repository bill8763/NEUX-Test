import { OnInit } from '@angular/core';
import { SelectOption } from '@allianzSND/core';
import { CONTENTGAP } from '../model/Enum/UIStyleType';
import { STEPSTYLETYPE } from '../model/Enum/UIStyleType';
import { TABLETIELESTYLETYPE } from '../model/Enum/UIStyleType';
import { TABLELISTSTYLETYPE } from '../model/Enum/UIStyleType';
import { UiInformationBtnComponent } from '../components/ui-information-btn/ui-information-btn.component';
import { ModalManager } from '../components/ui-modal-control/modal-manager.service';
export declare class UiComponent implements OnInit {
    private modelManager;
    inputText1: string;
    inputText2: string;
    inputText3: string;
    isInputError: boolean;
    testValue: string;
    testValue2: string;
    testcb: boolean;
    testcb2: boolean;
    testcb3: boolean;
    testcb4: boolean;
    testcb2_1: boolean;
    colorCodeCB1: boolean;
    colorCodeCB2: boolean;
    colorCodeCB3: boolean;
    colorCodeCB4: boolean;
    testSearch: string;
    test_radio: string;
    test_radio2: string;
    test_radio3: string;
    testDatepick: string;
    test_select: string;
    test_switcher: boolean;
    test_datetimepicker: Date;
    resultCheck1: string[];
    isSelectError: boolean;
    isModalAOpen: boolean;
    isModalBOpen: boolean;
    isModalImgOpen1: boolean;
    isModalImgOpen2: boolean;
    isModalCOpen: boolean;
    isLoadingBoxOpen: boolean;
    isPopupOpenModal: boolean;
    isCheck: boolean;
    selectErrorClick(): void;
    options: Array<SelectOption>;
    options2: Array<SelectOption>;
    isPopupAOpen: boolean;
    isPopupImgOpen: boolean;
    isPopupFeedbackOpen: boolean;
    isPopupText1Open: boolean;
    isPopupList: boolean;
    isPopupMesg: boolean;
    isPopupFilter: boolean;
    isPopupText2Open: boolean;
    isPopupContactNoteOpen: boolean;
    isPopupCustInfoOpen: boolean;
    isPopupCustUpdateRemindOpen: boolean;
    isPopupAlertOpen: boolean;
    isPopupMenuOpen: boolean;
    isAgreeBtnDisable: boolean;
    constructor(modelManager: ModalManager);
    ngOnInit(): void;
    laodinBoxStatus(): void;
    onAlertCancel(): void;
    onAlertConfirm(): void;
    itemClick(): void;
    itemOptionClick(): void;
    onClickBtn(name: any): void;
    toggleErrorStatus(): void;
    clickLinkImg(event: any): void;
    onDataAddClick(groupName: any): void;
    onDataRemoveClick(groupName: any): void;
    onRemove(): void;
    onAdd(): void;
    onBtnLinkClick(textInput: any): void;
    consoleEvent(string: any, number: any): void;
    onClickCheck3(): void;
    tabStyle002Alert(event: any): void;
    nowShowBtn: UiInformationBtnComponent;
    infoTabClick(dom: any): void;
    resetInfoPos(): void;
    closeInfo(): void;
    detectScroll(isBtm: any): void;
    agreePopupContent(status: any): void;
    GAP_SIZE_20: CONTENTGAP;
    GAP_SIZE_40: CONTENTGAP;
    testStepsData: string[];
    STEP_STYLE_1: STEPSTYLETYPE;
    STEP_STYLE_2: STEPSTYLETYPE;
    STEP_STYLE_2_2: STEPSTYLETYPE;
    TABLETIELE_STYLE_1: TABLETIELESTYLETYPE;
    TABLETIELE_STYLE_2: TABLETIELESTYLETYPE;
    TABLETIELE_STYLE_3: TABLETIELESTYLETYPE;
    TABLETIELE_STYLE_4: TABLETIELESTYLETYPE;
    TABLETIELE_STYLE_5: TABLETIELESTYLETYPE;
    TABLELIST_STYLE_1: TABLELISTSTYLETYPE;
    TABLELIST_STYLE_2: TABLELISTSTYLETYPE;
}
