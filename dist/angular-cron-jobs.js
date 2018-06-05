/**
 * UI Component For Creating Cron Job Syntax To Send To Server
 * @version v3.2.0 - 2018-06-05 * @link https://github.com/jacobscarter/angular-cron-jobs
 * @author Jacob Carter <jc@jacobcarter.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
angular.module('templates-angularcronjobs', ['cronselection.html']);

angular.module("cronselection.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("cronselection.html",
    "<md-layout layout=\"row\">\n" +
    "    <md-layout layout=\"column\">\n" +
    "        <md-input-container>\n" +
    "			<label>Every</label>\n" +
    "			<md-select ng-model=\"myFrequency.base\">\n" +
    "				<md-option ng-repeat=\"item in frequency\" value=\"{{item.value}}\">{{item.label}}</md-option>\n" +
    "			</md-select>\n" +
    "        </md-input-container>\n" +
    "    </md-layout>\n" +
    "    <md-layout layout=\"column\">\n" +
    "		<div layout=\"row\">\n" +
    "			<div ng-show=\"myFrequency.base == 4\">\n" +
    "				<md-input-container>\n" +
    "					<label>On</label>\n" +
    "					<!-- If Multiple is Enabled -->\n" +
    "					<md-select class=\"day-value\"\n" +
    "							ng-model=\"myFrequency.dayValues\"\n" +
    "							ng-if=\"allowMultiple\" multiple>\n" +
    "						<md-option ng-repeat=\"value in dayValues\" value=\"{{value}}\">{{value | cronDayName: cronStyle}}</md-option>\n" +
    "					</md-select>\n" +
    "					<!-- If Multiple is not Enabled -->\n" +
    "					<md-select class=\"day-value\"\n" +
    "							ng-model=\"myFrequency.dayValues\"\n" +
    "							ng-if=\"!allowMultiple\">\n" +
    "						<md-option ng-repeat=\"value in dayValues\" value=\"{{value}}\">{{value | cronDayName: cronStyle}}</md-option>\n" +
    "					</md-select>\n" +
    "				</md-input-container>\n" +
    "			</div>\n" +
    "			<div ng-show=\"myFrequency.base >= 5\">\n" +
    "				<md-input-container>\n" +
    "					<label>On the</label>\n" +
    "					<!-- If Multiple is Enabled -->\n" +
    "					<md-select class=\"day-of-month-value\"\n" +
    "							ng-model=\"myFrequency.dayOfMonthValues\"\n" +
    "							ng-if=\"allowMultiple\" multiple>\n" +
    "						<md-option ng-repeat=\"value in dayOfMonthValues\" value=\"{{value}}\">{{value | cronNumeral}}</md-option>\n" +
    "					</md-select>\n" +
    "					<!-- If Multiple is not Enabled -->\n" +
    "					<md-select class=\"day-of-month-value\"\n" +
    "							ng-model=\"myFrequency.dayOfMonthValues\"\n" +
    "							ng-if=\"!allowMultiple\">\n" +
    "						<md-option ng-repeat=\"value in dayOfMonthValues\" value=\"{{value}}\">{{value | cronNumeral}}</md-option>\n" +
    "					</md-select>\n" +
    "				</md-input-container>\n" +
    "			</div>\n" +
    "			<div ng-show=\"myFrequency.base == 6&&config.options.allowMonth\">\n" +
    "				<md-input-container>\n" +
    "					<label>Of</label>\n" +
    "					<!-- If Multiple is Enabled -->\n" +
    "					<md-select class=\"month-value\"\n" +
    "							ng-model=\"myFrequency.monthValues\"\n" +
    "							ng-if=\"allowMultiple\" multiple>\n" +
    "						<md-option ng-repeat=\"value in monthValues\" value=\"{{value}}\">{{value | cronMonthName}}</md-option>\n" +
    "					</md-select>\n" +
    "					<!-- If Multiple is not Enabled -->\n" +
    "					<md-select class=\"month-value\"\n" +
    "							ng-model=\"myFrequency.monthValues\"\n" +
    "							ng-if=\"!allowMultiple\">\n" +
    "						<md-option ng-repeat=\"value in monthValues\" value=\"{{value}}\">{{value | cronMonthName}}</md-option>\n" +
    "					</md-select>\n" +
    "				</md-input-container>\n" +
    "			</div>\n" +
    "			<div ng-show=\"myFrequency.base >= 3&&config.options.allowHour\">\n" +
    "				<md-input-container>\n" +
    "					<label>At (Hour)</label>\n" +
    "					<!-- If Multiple is Enabled -->\n" +
    "					<md-select class=\"hour-value\"\n" +
    "							ng-model=\"myFrequency.hourValues\"\n" +
    "							ng-if=\"allowMultiple\" multiple>\n" +
    "						<md-option ng-repeat=\"value in hourValues\" value=\"{{value}}\">{{value}}</md-option>\n" +
    "					</md-select>\n" +
    "					<!-- If Multiple is not Enabled -->\n" +
    "					<md-select class=\"hour-value\"\n" +
    "							ng-model=\"myFrequency.hourValues\"\n" +
    "							ng-if=\"!allowMultiple\">\n" +
    "						<md-option ng-repeat=\"value in hourValues\" value=\"{{value}}\">{{value}}</md-option>\n" +
    "					</md-select>				\n" +
    "				</md-input-container>\n" +
    "			</div>\n" +
    "			<div ng-show=\"myFrequency.base >= 2&&config.options.allowMinute\">\n" +
    "				<md-input-container>\n" +
    "					<label>: (Minute)</label>\n" +
    "					<!-- If Multiple is Enabled -->\n" +
    "					<md-select class=\"minute-value\"\n" +
    "							ng-model=\"myFrequency.minuteValues\"\n" +
    "							ng-if=\"allowMultiple\" multiple>\n" +
    "						<md-option ng-repeat=\"value in minuteValues\" value=\"{{value}}\">{{value}}</md-option>\n" +
    "					</md-select>\n" +
    "					<!-- If Multiple is not Enabled -->\n" +
    "					<md-select class=\"minute-value\"\n" +
    "							ng-model=\"myFrequency.minuteValues\"\n" +
    "							ng-if=\"!allowMultiple\">\n" +
    "						<md-option ng-repeat=\"value in minuteValues\" value=\"{{value}}\">{{value}}</md-option>\n" +
    "					</md-select>\n" +
    "				</md-input-container>\n" +
    "			</div>\n" +
    "			<span ng-show=\"myFrequency.base == 2\"> past the hour</span>\n" +
    "		</div>\n" +
    "    </md-layout>\n" +
    "</md-layout>");
}]);

"use strict";

angular.module("angular-cron-jobs", ["templates-angularcronjobs"]);

angular.module("angular-cron-jobs").directive("cronSelection", ["cronService", "baseFrequency", function(cronService, baseFrequency) {
    return {
        restrict: "EA",
        replace: true,
        transclude: true,
        require: "ngModel",
        scope: {
            ngModel: "=",
            config: "=",
            myFrequency: "=?frequency"
        },
        templateUrl: function(element, attributes) {
            return attributes.template || "cronselection.html";
        },
        link: function($scope, $el, $attr, $ngModel) {

            // handles allowHour and allowMinute variable in options
            // by default setting them true
            if(!$scope.config['options']) {
                $scope.config['options'] = {
                    allowHour : true,
                    allowMinute : true
                };
            } else {
                var optionsKeys = Object.keys($scope.config['options']);

                if(!optionsKeys.length) {
                    $scope.config['options'] = {
                        allowHour : true,
                        allowMinute : true
                    };
                } else {
                    // is allowHour key is not present
                    if(typeof $scope.config['options']['allowHour'] == 'undefined' || $scope.config['options']['allowHour'] == null) {
                        $scope.config['options']['allowHour'] = true;
                    }

                    // is allowMinute key is not present
                    if(typeof $scope.config['options']['allowMinute'] == 'undefined' || $scope.config['options']['allowMinute'] == null) {
                        $scope.config['options']['allowMinute'] = true;
                    }
                }
            }



            var modelChanged = false;
            
            $scope.baseFrequency = baseFrequency;

            $scope.frequency = [{
                value: 1,
                label: "Minute"
            }, {
                value: 2,
                label: "Hour"
            }, {
                value: 3,
                label: "Day"
            }, {
                value: 4,
                label: "Week"
            }, {
                value: 5,
                label: "Month"
            }, {
                value: 6,
                label: "Year"
            }, {
                value: 7,
                label: "Quarter"
            }];

            $scope.$watch("ngModel", function (newValue) {
                if (angular.isDefined(newValue) && newValue) {
                    modelChanged = true;
                    $scope.myFrequency = cronService.fromCron(newValue, $scope.allowMultiple, $scope.cronStyle);
                } else if (newValue === "") {
                    $scope.myFrequency = undefined;
                }
            });

            if (typeof $scope.config === "object" && !$scope.config.length) {
                if (typeof $scope.config.options === "object") {
                    var optionsKeyArray = Object.keys($scope.config.options);
                    for (var i in optionsKeyArray) {
                        var currentKey = optionsKeyArray[i].replace(/^allow/, "");
                        var originalKey = optionsKeyArray[i];
                        if (!$scope.config.options[originalKey]) {
                            for (var b in $scope.frequency) {
                                if ($scope.frequency[b].label === currentKey) {
                                    $scope.frequency.splice(b, 1);
                                }
                            }
                        }
                    }
                }
                if (angular.isDefined($scope.config.allowMultiple)) {
                    $scope.allowMultiple = $scope.config.allowMultiple;
                } else {
                    $scope.allowMultiple = false;
                }

                if (angular.isDefined($scope.config.quartz) && $scope.config.quartz) {
                    $scope.cronStyle = "quartz";
                } else {
                    $scope.cronStyle = "default";
                }
            }

            $scope.minuteValues = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
            $scope.hourValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
            $scope.dayOfMonthValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
            $scope.dayValues = [0, 1, 2, 3, 4, 5, 6];
            $scope.monthValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

			if($scope.cronStyle === "quartz") {
                $scope.dayValues = [1, 2, 3, 4, 5, 6, 7];
            }

            $scope.$watch("myFrequency", function (n, o) {
                if (n !== undefined) {
                    if (n && n.base && (!o || n.base !== o.base) && !modelChanged) {
                        setInitialValuesForBase(n);
                    } else if (n && n.base && o && o.base) {
                        modelChanged = false;
                    }
                    
                    var newVal = cronService.setCron(n, $scope.cronStyle);
                    $ngModel.$setViewValue(newVal);
                }
            }, true);

            function setInitialValuesForBase(freq) {
                freq.base = parseInt(freq.base);

                if (freq.base >= baseFrequency.hour) {
                    freq.minuteValues = $scope.minuteValues[0];
                }

                if (freq.base >= baseFrequency.day) {
                    freq.hourValues = $scope.hourValues[0];
                }

                if (freq.base === baseFrequency.week) {
                    freq.dayValues = $scope.dayValues[0];
                }

                if (freq.base >= baseFrequency.month) {
                    freq.dayOfMonthValues = $scope.dayOfMonthValues[0];
                }

                if (freq.base === baseFrequency.year) {
                    freq.monthValues = $scope.monthValues[0];
                }

                if (freq.base === baseFrequency.quarter) {
                    // freq.monthValues = '*/4';
                }
            }
        }
    };
}]).filter("cronNumeral", function() {
    return function(input) {
        switch (input) {
            case 1:
                return "1st";
            case 2:
                return "2nd";
            case 3:
                return "3rd";
            case 21:
                return "21st";
            case 22:
                return "22nd";
            case 23:
                return "23rd";
            case 31:
                return "31st";
            case null:
                return null;
            default:
                return input + "th";
        }
    };
}).filter("cronMonthName", function() {
    return function(input) {
        var months = {
            1: "January",
            2: "February",
            3: "March",
            4: "April",
            5: "May",
            6: "June",
            7: "July",
            8: "August",
            9: "September",
            10: "October",
            11: "November",
            12: "December"
        };

        if (input !== null && angular.isDefined(months[input])) {
            return months[input];
        } else {
            return null;
        }
    };
}).filter("cronDayName", function() {
    return function(input, cronType) {
        var days;
        if(cronType === "quartz") {
            days = {
                1: "Sunday",
                2: "Monday",
                3: "Tuesday",
                4: "Wednesday",
                5: "Thursday",
                6: "Friday",
                7: "Saturday",
            };
        } else {
            days = {
                0: "Sunday",
                1: "Monday",
                2: "Tuesday",
                3: "Wednesday",
                4: "Thursday",
                5: "Friday",
                6: "Saturday",
            };
        }
        

        if (input !== null && angular.isDefined(days[input])) {
            return days[input];
        } else {
            return null;
        }
    };
}).directive("ngMultiple", function() {
    return {
        restrict: "A",
        scope: {
            ngMultiple: "="
        },
        link: function (scope, element) {
            var unwatch = scope.$watch("ngMultiple", function(newValue) {
                if (newValue) {
                    element.attr("multiple", "multiple");
                } else {
                    element.removeAttr("multiple");
                }
            });
        }
    };
});
"use strict";

angular.module('angular-cron-jobs')
.value('baseFrequency', {
    minute: 1,
    hour: 2,
    day: 3,
    week: 4,
    month: 5,
    year: 6,
    quarter: 7,
})
.factory('cronService', ['baseFrequency', function(baseFrequency) {
    var service = {};

    service.setCron = function(n, cronType) {
        if(cronType === "quartz") {
            return this.setQuartzCron(n);
        } else {
            return this.setDefaultCron(n);
        }
    };

    service.setQuartzCron = function(n){
        // console.log('setQuartzCron');
        var cron = ["0", "*", "*",  "*",  "*", "?"];
        if(n && n.base && n.base >= baseFrequency.hour) {
            cron[1] = typeof n.minuteValues !== "undefined" ? n.minuteValues : "0";
        }

        if(n && n.base && n.base >= baseFrequency.day) {
            cron[2] = typeof n.hourValues !== "undefined" ? n.hourValues  : "*";
        }

        if(n && n.base && n.base === baseFrequency.week) {
            cron[3] = "?";
            cron[5] = n.dayValues;
        }

        if(n && n.base && n.base >= baseFrequency.month) {
            cron[3] = typeof n.dayOfMonthValues !== "undefined" ? n.dayOfMonthValues : "?";
        }

        if(n && n.base && n.base === baseFrequency.year) {
            cron[4] = typeof n.monthValues !== "undefined" ? n.monthValues : "*";
        }

        if(n && n.base && n.base === baseFrequency.quarter) {
            cron[3] = typeof n.monthValues !== "undefined" ? n.monthValues : "*/4";
        }
        
        return cron.join(" ");
    };

    service.setDefaultCron = function(n){
        // console.log('setDefaultCron : ', n);
        var cron = ["*", "*", "*", "*", "*"];

        // console.log('1', cron);
        if (n && n.base && n.base >= baseFrequency.hour) {
            cron[0] = typeof n.minuteValues !== "undefined" ? n.minuteValues : "*";
        }

        // console.log('2', cron);
        if (n && n.base && n.base >= baseFrequency.day) {
            cron[1] = typeof n.hourValues !== "undefined" ? n.hourValues : "*";
        }

        // console.log('3', cron);
        if (n && n.base && n.base === baseFrequency.week) {
            cron[4] = n.dayValues;
        }

        // console.log('4', cron);
        if (n && n.base && n.base >= baseFrequency.month) {
            cron[2] = typeof n.dayOfMonthValues !== "undefined" ? n.dayOfMonthValues : "*";
        }

        // console.log('5', cron);
        if (n && n.base && n.base === baseFrequency.year) {
            cron[3] = typeof n.monthValues !== "undefined" ? n.monthValues : "*";
        }

        // console.log('6', cron);
        if (n && n.base && n.base === baseFrequency.quarter) {
            cron[3] = typeof n.monthValues !== "undefined" ? n.monthValues : "*/4";
        }
        // console.log('7', cron)

        return cron.join(" ");
    };

	service.fromCron = function(value, allowMultiple, cronType) {
        if(cronType === "quartz") {
            return this.fromQuartzCron(value, allowMultiple);
        } else {
            return this.fromDefaultCron(value, allowMultiple);
        }
    };

    service.fromDefaultCron = function(value, allowMultiple) {
        // console.log('fromDefaultCron', value, allowMultiple);
        var cron = value.replace(/\s+/g, " ").split(" ");
        var frequency = { base: "1" }; // default: every minute
        var tempArray = [];

        // console.log(cron);
        if (cron[0] === "*" && cron[1] === "*" && cron[2] === "*" && cron[3] === "*" && cron[4] === "*") {
            frequency.base = baseFrequency.minute; // every minute
        } else if (cron[1] === "*" && cron[2] === "*" && cron[3] === "*" && cron[4] === "*") {
            frequency.base = baseFrequency.hour; // every hour
        } else if (cron[2] === "*" && cron[3] === "*" && cron[4] === "*") {
            frequency.base = baseFrequency.day; // every day
        } else if (cron[2] === "*" && cron[3] === "*") {
            frequency.base = baseFrequency.week; // every week
        } else if (cron[3] === "*" && cron[4] === "*") {
            frequency.base = baseFrequency.month; // every month
        } else if (cron[3] === "*/4" && cron[4] === "*")     {
            frequency.base = baseFrequency.quarter; // every quarter
        } else if (cron[4] === "*") {
            frequency.base = baseFrequency.year; // every year
        }

        // console.log(frequency)

        if (cron[0] !== "*") {
            //preparing to handle multiple minutes
            if (allowMultiple) {
                tempArray = cron[0].split(',');
                for (var i = 0; i < tempArray.length; i++) { tempArray[i] = +tempArray[i]; }
                frequency.minuteValues = tempArray;
            } else {
                frequency.minuteValues = parseInt(cron[0]);
            }
        }
        if (cron[1] !== "*") {
            //preparing to handle multiple hours
            if (allowMultiple) {
                tempArray = cron[1].split(",");
                for (var i = 0; i < tempArray.length; i++) { tempArray[i] = +tempArray[i]; }
                frequency.hourValues = tempArray;
            } else {
                frequency.hourValues = parseInt(cron[1]);
            }
        }
        if (cron[2] !== "*") {
            //preparing to handle multiple days of the month
            if (allowMultiple) {
                tempArray = cron[2].split(",");
                for (var i = 0; i < tempArray.length; i++) { tempArray[i] = +tempArray[i]; }
                frequency.dayOfMonthValues = tempArray;
            } else {
                frequency.dayOfMonthValues = parseInt(cron[2]);
            }
        }
        if (cron[3] !== "*") {
            //preparing to handle multiple months
            if (allowMultiple) {
                tempArray = cron[3].split(",");
                for (var i = 0; i < tempArray.length; i++) { tempArray[i] = +tempArray[i]; }
                frequency.monthValues = tempArray;
            } else {
                frequency.monthValues = (!isNaN(parseFloat(cron[3])) && isFinite(cron[3]))?parseInt(cron[3]):cron[3]; ;
            }
        }
        if (cron[4] !== "*") {
            //preparing to handle multiple days of the week
            if (allowMultiple) {
                tempArray = cron[4].split(",");
                for (var i = 0; i < tempArray.length; i++) { tempArray[i] = +tempArray[i]; }
                frequency.dayValues = tempArray;
            } else {
                frequency.dayValues = parseInt(cron[4]);
            }
        }
        return frequency;
    };

    service.fromQuartzCron = function(value, allowMultiple) {
        // console.log('fromQuartzCron');
        var cron = value.replace(/\s+/g, " ").split(" ");
        var frequency = {base: "1"}; // default: every minute
        var tempArray = [];
        
        if(cron[1] === "*" && cron[2] === "*" && cron[3] === "*"  && cron[4] === "*" && cron[5] === "?") {
            frequency.base = 1; // every minute
        } else if(cron[2] === "*" && cron[3] === "*"  && cron[4] === "*" && cron[5] === "?") {
            frequency.base = 2; // every hour
        } else if(cron[3] === "*"  && cron[4] === "*" && cron[5] === "?") {
            frequency.base = 3; // every day
        } else if(cron[3] === "?") {
            frequency.base = 4; // every week
        } else if(cron[4] === "*" && cron[5] === "?") {
            frequency.base = 5; // every month
        } else if(cron[5] === "?") {
            frequency.base = 6; // every year
        } else if(cron[4] === "*/4") {
            frequency.base = 7; // every quarter
        }

        if (cron[1] !== "*") {
            //preparing to handle multiple minutes
            if (allowMultiple) {
                tempArray = cron[1].split(",");
                for (var i = 0; i < tempArray.length; i++) { tempArray[i] = +tempArray[i]; }
                frequency.minuteValues = tempArray;
            } else {
                frequency.minuteValues = parseInt(cron[1]);
            }
        }
        if (cron[2] !== "*") {
            //preparing to handle multiple hours
            if (allowMultiple) {
                tempArray = cron[2].split(",");
                for (var i = 0; i < tempArray.length; i++) { tempArray[i] = +tempArray[i]; }
                frequency.hourValues = tempArray;
            } else {
                frequency.hourValues = parseInt(cron[2]);
            }
        }
        if (cron[3] !== "*" && cron[3] !== "?") {
            //preparing to handle multiple days of the month
            if (allowMultiple) {
                tempArray = cron[3].split(",");
                for (var i = 0; i < tempArray.length; i++) { tempArray[i] = +tempArray[i]; }
                frequency.dayOfMonthValues = tempArray;
            } else {
                frequency.dayOfMonthValues = parseInt(cron[3]);
            }
        }
        if (cron[4] !== "*") {
            //preparing to handle multiple months
            if (allowMultiple) {
                tempArray = cron[4].split(",");
                for (var i = 0; i < tempArray.length; i++) { tempArray[i] = +tempArray[i]; }
                frequency.monthValues = tempArray;
            } else {
                frequency.monthValues = parseInt(cron[4]);
            }
        }
        if (cron[5] !== "*" && cron[5] !== "?") {
            //preparing to handle multiple days of the week
            if (allowMultiple) {
                tempArray = cron[5].split(",");
                for (var i = 0; i < tempArray.length; i++) { tempArray[i] = +tempArray[i]; }
                frequency.dayValues = tempArray;
            } else {
                frequency.dayValues = parseInt(cron[5]);
            }
        }

        return frequency;
    };

    return service;
}]);