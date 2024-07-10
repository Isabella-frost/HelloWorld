/*global QUnit*/

sap.ui.define([
	"testhello/hello01/controller/ViewIFL.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ViewIFL Controller");

	QUnit.test("I should test the ViewIFL controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
