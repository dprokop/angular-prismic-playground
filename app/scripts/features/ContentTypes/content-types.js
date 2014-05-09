'use strict';

angular.module('prismicApp')
.controller('ContentTypesCtrl', ['$scope', '$location', 'ContentTypes', 'ContentParser', 'Prismic',  function($scope, $location, ContentTypes, ContentParser, Prismic ){

    ContentTypes.onTypeChange($scope, function(type) {

        $scope.selectedType = type;

        ContentTypes.getTypeDetails(type.id).then(function(typeDetails){

            $scope.selectedType.size = typeDetails.total_results_size;
            $scope.selectedType.docs = typeDetails.results;

            angular.forEach($scope.selectedType.docs, function(doc){
                var json = doc.fragments;
                doc.fragments = {
                    json : json
                };
            });

        });
    });


}]);
