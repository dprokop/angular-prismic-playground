'use strict';

angular.module('prismicApp')
.factory('ContentParser', ['$rootScope', function($rootScope){

    var _parsePrismicJson = function(){
        console.log("parsePrismicJson");
    }

    return {
        parsePrismicJson : _parsePrismicJson
    }
}]);
