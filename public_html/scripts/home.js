
var app = angular.module('StarterApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages', 'ngMdIcons']);

app.controller('AppCtrl', ['$scope', '$mdBottomSheet', '$mdSidenav', '$mdDialog', function ($scope, $mdBottomSheet, $mdSidenav, $mdDialog) {
        $scope.produtos = [
            {nome: 'Uma Pergunta por Dia',
                preco: 'R$57,00',
                descricao: 'Todos os dias criamos uma imensa quantidade de registros em celulares, redes sociais e aplicativos. No entanto, quase nunca temos o hábito de retornar a eles. Às vezes podem parecer só besteiras, mas quantos desses relatos não mostrariam nosso crescimento e nossas mudanças em todos esses anos? Uma pergunta por dia convida você a registrar suas respostas a uma variedade de questões, das mais simples às mais complicadas, como “Para onde você quer fazer sua próxima viagem?” ou “Escreva a primeira linha da sua autobiografia”. Em cada página há espaço para cinco respostas, uma por ano, ao longo de cinco anos. Com o passar do tempo, quando voltar a um dia já anotado, o dono do diário encontrará seus pensamentos anteriores, num exercício divertido e construtivo de recordar e refletir.',
                img: 'images/livro-o-poder-do-habito.jpg'
            },
            {nome: 'O Poder do Hábito',
                preco: 'R$50,00',
                descricao: 'Durante os últimos dois anos, uma jovem transformou quase todos os aspectos de sua vida. Parou de fumar, correu uma maratona e foi promovida. Em um laboratório, neurologistas descobriram que os padrões dentro do cérebro dela – ou seja, seus hábitos – foram modificados de maneira fundamental para que todas essas mudanças ocorressem. Há duas décadas pesquisando ao lado de psicólogos, sociólogos e publicitários, cientistas do cérebro começaram finalmente a entender como os hábitos funcionam – e, mais importante, como podem ser transformados. Embora isoladamente pareçam ter pouca importância, com o tempo, têm um enorme impacto na saúde, na produtividade, na estabilidade financeira e na felicidade. Com base na leitura de centenas de artigos acadêmicos, entrevistas com mais de trezentos cientistas e executivos, além de pesquisas realizadas em dezenas de empresas, o repórter investigativo do New York Times Charles Duhigg elabora, em O Poder do Hábito, um argumento animador: a chave para se exercitar regularmente, perder peso, educar bem os filhos, se tornar uma pessoa mais produtiva, criar empresas revolucionárias e ter sucesso é entender como os hábitos funcionam. Transformá-los pode gerar bilhões e significar a diferença entre fracasso e sucesso, vida e morte.',
                img: 'images/livro-uma-pergunta.jpg'
            }
        ];
        $scope.showCustom = function (event, dadosProduto) {
            $mdDialog.show({
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                template: '<md-dialog class="dialog-detalhes-livro">' +
                        '<md-dialog-content>' +
                        '<h1>' + dadosProduto.nome + '</h1>' +
                        '<img class="dialog-img-livro" src="' + dadosProduto.img + '" title="Livro ' + dadosProduto.nome + '. " alt="Livro ' + dadosProduto.nome + '. "/>' +
                        '<div class="dialog-descricao-livro"><p>' + dadosProduto.descricao + '</p></div>' +
                        '</md-dialog-content>' +
                        '<md-dialog-actions layout="row">' +
                        '<p class="dialog-preco-livro">Preço:<span>' + dadosProduto.preco + '</span></p>' +
                        '<span flex></span>' +
                        '<md-button class="md-icon-button"><i class="material-icons">add_shopping_cart</i></md-button>' +
                        '<md-button class="md-raised md-primary">Comprar</md-button>' +
                        '<md-dialog-actions>' +
                        '</md-dialog>',
                controller: function DialogController($scope, $mdDialog) {
                    $scope.closeDialog = function () {
                        $mdDialog.hide();
                    }
                }
            });
        }
        ;
        $scope.toggleSidenav = function (menuId) {
            console.log('abrindo sidbar');
            $mdSidenav(menuId).toggle();
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
