'use strict';

angular.module('prismicApp')
.factory('ContentTypes', ['$rootScope', '$q', 'Prismic', function($rootScope, $q, Prismic){

    var TYPE_CHANGED = "changeType";

    var _getAllTypes  = function(){

        return Prismic.types().then(function(data){
            return data;
        });
    }

    var _getTypeDetails = function(type) {
        var query = '[[:d = any(document.type, ["'+ type+ '"])]]';


        return Prismic.query(query, {pageSize: 2, page: 1});

    }

    var _changeType = function(type, typeName){

        $rootScope.$broadcast(TYPE_CHANGED, {
            id: type,
            name: typeName
        });

    }

    var _onTypeChange = function($scope, handler){
        $scope.$on(TYPE_CHANGED, function(event, type){
            handler(type)
        })
    };

    return {
        getAllTypes: _getAllTypes,
        changeType: _changeType,
        onTypeChange: _onTypeChange,
        getTypeDetails:_getTypeDetails
    }

}]);
