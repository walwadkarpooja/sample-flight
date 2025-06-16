sap.ui.define(["sap/ui/core/mvc/Controller"], 
    function(Controller){
        "use strict";
        return Controller.extend("sampleflight.controller.AgencyDetails",{
            onInit: function () {
                let oRouter = this.getOwnerComponent().getRouter();
                oRouter.getRoute("AgencyDetails").attachPatternMatched(this.onRouteMatch, this);

                let editModel = new sap.ui.model.json.JSONModel({
                    isEditableField : false
                });
                this.getView().setModel(editModel,"editModel");
            },
            onGoBack: function(){
                const oRoute = this.getOwnerComponent().getRouter();
                oRoute.navTo("RouteView1")
            },
            onRouteMatch:function(oEvent){
                let argNum = oEvent.getParameter("arguments").agynId;

                let sPath = "/TravelagencyCollection('"+argNum+"')";

                let oModel = this.getOwnerComponent().getModel();
                oModel.read(sPath, {
                    success: function(oData,Response){
                        let jModel = new sap.ui.model.json.JSONModel(oData);
                        this.getView().setModel(jModel);
                    }.bind(this)
                })
            },
            onEdit:function(){
                this.getView().getModel("editModel").setProperty("/isEditableField",true)
            }
        })
    }
)