'use strict';

angular.module('prismicApp')
.controller('ContentTypeCtrl', ['$scope', 'ContentTypes', 'ContentParser', 'Prismic',  function($scope, ContentTypes, ContentParser, Prismic ){

    $scope.jsonVisible = false;
    $scope.htmlVisible = false;
    $scope.parsedHtml = null;

    var _toggleJson = function(){
        $scope.htmlVisible = false;
        $scope.jsonVisible =  !$scope.jsonVisible;
        console.log("toggleJson")
        $scope.parseJson();
    }

    var _toggleHtml = function(){
        $scope.jsonVisible = false;
        $scope.htmlVisible =  !$scope.htmlVisible;

    }

    var _parseJson = function(){

        if($scope.parsedHtml)
            return;
        else
            $scope.parseHtml = ContentParser.parsePrismicJson();

        ContentParser.parsePrismicJson();
    }


    $scope.parseJson =  _parseJson;

    $scope.toggleJson = _toggleJson;
    $scope.toggleHtml = _toggleHtml;


}]);
