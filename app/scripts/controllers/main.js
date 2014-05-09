'use strict';

angular.module('prismicApp')
.controller('MainCtrl', function ($scope, Prismic) {

    Prismic.query('[[:d = at(document.id, "UlfoxUnM0wkXYXbj")]]').then(function (docs) {
        $scope.data = docs;
    });

});
