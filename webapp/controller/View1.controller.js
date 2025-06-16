sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("sampleflight.controller.View1", {
        onInit: function () {

        },
        onSelect: function (oEvent){
            let sPath = oEvent.getParameter("listItem").getBindingContext().getPath();
            let oModel = this.getView().getModel();
            
            const agencyId = oModel.getProperty(sPath).agencynum;

            const oRoute = this.getOwnerComponent().getRouter();
            oRoute.navTo("AgencyDetails",{agynId : agencyId});
            
        }
    });
});
