
var app = angular.module('StarterApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages', 'ngMdIcons']);

app.controller('AppCtrl', ['$scope', '$mdBottomSheet', '$mdSidenav', '$mdDialog', function ($scope, $mdBottomSheet, $mdSidenav, $mdDialog) {
        $scope.produtos = [
            {nome: 'Uma Pergunta por Dia', preco: 'R$57,00', img: 'images/livro-o-poder-do-habito.jpg'},
            {nome: 'O Poder do Hábito', preco: 'R$50,00', img: 'images/livro-uma-pergunta.jpg'}
        ];
        $scope.showCustom = function (event, dadosProduto) {
            $mdDialog.show({
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                template: '<md-dialog>' +
                        '  <md-dialog-content>' +
                        '<h1>'+dadosProduto.nome+'</h1>'                                    +
                        '  </md-dialog-content>' +
                        '</md-dialog>',
                controller: function DialogController($scope, $mdDialog) {
                    $scope.closeDialog = function () {
                        $mdDialog.hide();
                    }
                }
            });
        };
    }]);
app.config(function ($mdThemingProvider) {
    var customBlueMap = $mdThemingProvider.extendPalette('blue-grey', {
        'contrastDefaultColor': 'light',
        'contrastDarkColors': ['50'],
        '50': 'ffffff'
    });
    $mdThemingProvider.definePalette('customBlue', customBlueMap);
    $mdThemingProvider.theme('default')
            .primaryPalette('customBlue', {
                'default': '500',
                'hue-1': '50'
            })
            .accentPalette('light-blue', {
                'default': '500',
                'hue-1': '50'
            })
    $mdThemingProvider.theme('input', 'default')
            .primaryPalette('grey')
});
