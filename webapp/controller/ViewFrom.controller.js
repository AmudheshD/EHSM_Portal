sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";

	return Controller.extend("test.routing-sample.controller.ViewFrom", {

		onPress: function(oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("TargetViewTo", {});
		// 	var userId = this.getView().byId("user");
		// 	var Password = this.getView().byId("pass");
		// 	if (userId.getValue() === "amudhesh@gmail.com" && Password.getValue() === "123456") {

		// 		MessageToast.show("success");
		// 	} else {
		// 		MessageToast.show("Try again!");
		// 	}
		},
		onPressWithParameter: function(oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("TargetViewToParameter", {
				parameter: "test"
			});
		}
	});
});