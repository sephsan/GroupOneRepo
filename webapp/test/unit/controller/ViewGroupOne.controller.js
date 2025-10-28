/*global QUnit*/

sap.ui.define([
	"prjgroupone/controller/ViewGroupOne.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ViewGroupOne Controller");

	QUnit.test("I should test the ViewGroupOne controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
