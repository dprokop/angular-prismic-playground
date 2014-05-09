//'use strict';
angular
.module('prismicApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'prismic.io',
    'ngPrettyJson'
])
.run(function(Prismic, $http){
    Prismic.setAPIEndpoint('https://lesbonneschoses-u0pleweaacsauej.prismic.io/api');
    Prismic.setAccessToken('');
    Prismic.setClientId('');
    Prismic.setClientSecret('');
})
.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'scripts/features/ContentTypes/content-type-details.html'
    });
})
.controller('HeaderCtrl', ['$scope', 'ContentTypes', function($scope, ContentTypes){

    $scope.selectedType = null;

    ContentTypes.getAllTypes().then(function(data){
        $scope.types = data;
        $scope.selectedType = null;
    });

    $scope.changeType = function () {

        ContentTypes.changeType($scope.selectedType, $scope.types[$scope.selectedType]);
    };


}])
