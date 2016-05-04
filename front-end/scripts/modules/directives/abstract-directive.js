'use strict';

module.exports = [function() {
    return {
        restrict: 'AE',
        template: require('../templates/abstract-template.html'),
        scope: {},
        link: function(scope, elem, attrs) {
        },
        controller: 'abstractCtl',
        controllerAs: 'vm'
    };
}];