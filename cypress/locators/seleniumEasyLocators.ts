const seleniumEasyLocators = {
    menuArrow: "#treemenu .tree-branch [href]",
    dragAndDropmenu: '.tree-branch [href*= "drag-and-drop"]',
    drag : '[draggable="true"]',
    drop : "#mydropzone",
    droppedList: "#droppedlist",
    radioButtonMenu: '#treemenu [href*="radiobutton"]',
    radioButton : 'input:not([name="gender"])[value="Male"]',
    getCheckedValueButton : "#buttoncheck",
    checkedResultText: '.radiobutton'
}

export default seleniumEasyLocators;