(function() {
    "use strict";

    var module = angular.module("angularAccordionApp");

    module.component("accordion", {
        transclude: true,
        template: "<div class='panel-group' ng-transclude></div>",
        controller: function() {
            var model = this;
            model.panels = [];
               
            model.selectPanel = function(panel) {
                for(var i in model.panels) {
                    if(panel === model.panels[i]) {
                        model.panels[i].turnOn();
                    }
                    else {
                        model.panels[i].turnOff();
                    }
                }   
            };            
                                   
            model.addPanel = function(panel) {
                model.panels.push(panel);
                if(model.panels.length > 0) {
                    model.panels[0].turnOn();
                }
            };
                       
        }
    });

} ());