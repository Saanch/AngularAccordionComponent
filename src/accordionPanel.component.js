(function() {
    "use strict";

    var module = angular.module("angularAccordionApp");

    module.component("accordionPanel", {
        bindings: {
            "heading": "@"
        },
        require: {
            "parent": "^accordion"
        },
        transclude: true,
        controllerAs: "model",
        controller: function() {
            var model = this;
            model.selected = false;

            model.$onInit = function() {
                model.parent.addPanel(model);
            };

            model.select = function() {
                model.parent.selectPanel(this);  
            };

            model.turnOn = function() {
                model.selected = true;
            };

            model.turnOff = function() {
                model.selected = false;
            };
        },
        template: "<div class='panel panel-default'> " +
                        "<div class='panel-heading' ng-click='model.select()'>" +
                            "<h4 class='panel-title'>{{model.heading}}</h4>" +
                        "</div>" +
                        "<div ng-if='model.selected' class='panel-body collapse in' ng-transclude>" +
                        "</div>" +
                    "</div>"
    });
} ());