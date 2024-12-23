if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ToDoListPage_Params {
    totalTasks?: Array<string>;
}
import DataModel from "@bundle:com.huawei.todolist/entry/ets/viewmodel/DataModel";
import CommonConstants from "@bundle:com.huawei.todolist/entry/ets/common/constant/CommonConstant";
import ToDoItem from "@bundle:com.huawei.todolist/entry/ets/view/ToDoItem";
class ToDoListPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.totalTasks = [];
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ToDoListPage_Params) {
        if (params.totalTasks !== undefined) {
            this.totalTasks = params.totalTasks;
        }
    }
    updateStateVars(params: ToDoListPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private totalTasks: Array<string>;
    aboutToAppear() {
        this.totalTasks = DataModel.getData();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: CommonConstants.COLUMN_SPACE });
            Column.width(CommonConstants.FULL_LENGTH);
            Column.height(CommonConstants.FULL_LENGTH);
            Column.backgroundColor({ "id": 16777222, "type": 10001, params: [], "bundleName": "com.huawei.todolist", "moduleName": "entry" });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777221, "type": 10003, params: [], "bundleName": "com.huawei.todolist", "moduleName": "entry" });
            Text.fontSize({ "id": 16777229, "type": 10002, params: [], "bundleName": "com.huawei.todolist", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Bold);
            Text.lineHeight({ "id": 16777228, "type": 10002, params: [], "bundleName": "com.huawei.todolist", "moduleName": "entry" });
            Text.width(CommonConstants.TITLE_WIDTH);
            Text.margin({
                top: { "id": 16777231, "type": 10002, params: [], "bundleName": "com.huawei.todolist", "moduleName": "entry" },
                bottom: { "id": 16777230, "type": 10002, params: [], "bundleName": "com.huawei.todolist", "moduleName": "entry" }
            });
            Text.textAlign(TextAlign.Start);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new ToDoItem(this, { content: item }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/ToDoListPage.ets", line: 43, col: 9 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    content: item
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "ToDoItem" });
                }
            };
            this.forEachUpdateFunction(elmtId, this.totalTasks, forEachItemGenFunction, (item: string) => JSON.stringify(item), false, false);
        }, ForEach);
        ForEach.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "ToDoListPage";
    }
}
registerNamedRoute(() => new ToDoListPage(undefined, {}), "", { bundleName: "com.huawei.todolist", moduleName: "entry", pagePath: "pages/ToDoListPage", pageFullPath: "entry/src/main/ets/pages/ToDoListPage", integratedHsp: "false", moduleType: "followWithHap" });
