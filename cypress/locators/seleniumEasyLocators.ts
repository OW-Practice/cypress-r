const seleniumEasyLocators = {
    menuArrow: "#treemenu .tree-branch [href]",
    dragAndDropmenu: '.tree-branch [href*= "drag-and-drop"]',
    drag : '[draggable="true"]',
    drop : "#mydropzone",
    droppedList: "#droppedlist",
    radioButtonMenu: '#treemenu [href*="radiobutton"]',
    radioButton : 'input:not([name="gender"])[value="Male"]',
    getCheckedValueButton : "#buttoncheck",
    checkedResultText: ".radiobutton",
    selectDropdownList: '#treemenu [href*="select-dropdown"]',
    panelHeading: ".panel-heading",
    selectListDemo: ".form-control#select-demo",
    selectedday: ".selected-value",
    multiSelectListDemo: '#multi-select[name="States"]',
    getAllSelectedButton: '[value="Print All"]',
    selectedStates: '[class="getall-selected"]',
    javascriptAlertsmenu: '.tree-branch [href*= "javascript-alert"]',
    alertBoxButton: '[onclick="myAlertFunction()"]',
    confirmationBoxButton: '[onclick="myConfirmFunction()"]',
    confirmationBoxText: '#confirm-demo'
}

export default seleniumEasyLocators;