sap.ui.define(["sap/ui/core/mvc/Controller"], 
    function(Controller){
        "use strict";
        return Controller.extend("sampleflight.controller.AgencyDetails",{
            onInit: function () {

            },
            onGoBack: function(){
                const oRoute = this.getOwnerComponent().getRouter();
                oRoute.navTo("RouteView1")
            }
        })
    }
)