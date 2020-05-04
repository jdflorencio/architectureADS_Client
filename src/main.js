import angular from 'angular'
import '@uirouter/angularjs'
import 'angular-material'

import './main.scss'
import configRoute from './configRoutes'
import Modulos from './Modules/Modulos'


export const app = 'app'
angular.module('app', [
        'ui.router',
        'ngMaterial',
        Modulos
    ])
    .constant('API', 'http://127.0.0.1:3333')
    .config(configRoute)
    .config(function ($mdThemingProvider, $httpProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('red')

    })
    .controller('appCtrl', ['$mdSidenav', '$stateParams', '$rootScope',

        function ($mdSidenav, $stateParams, $rootScope) {

         console.log('principal')

            self = this;


            self.siderbar = {
                home: {
                    title: "Home",
                    href: "/"
                },
                Cliente: {
                    title: "Cliente",
                    href: "/clientes"
                },
                Produtos: {
                    title: "Produto",
                    href: "/produtos"
                },
                notasFiscais: {
                    title: "Notas Fiscais",
                    href: "/notasfiscais"
                }
            }

            // Update title using rootscope.js
            self.updateTitle = function () {
                $rootScope.title = $stateParams.title;
            }

            // Run updateTitle on each state change
            $rootScope.$on('$stateChangeSuccess', self.updateTitle);

            self.toggleLeft = function () {
                $mdSidenav('left').toggle();
            }

            self.toggleRight = function () {
                $mdSidenav('right').toggle();
            }

            self.doTheBack = function () {
                window.history.back();
            };

            self.logged = function () {
                logged = true
                if (!localStorage.getItem("Authorization")) {
                    logged = true

                }
                $rootScope.sidebar = logged
            }
            $rootScope.$on('$stateChangeSuccess', self.logged);

        }
    ])


    .config(function($mdIconProvider) {
        $mdIconProvider.fontSet('md', 'material-icons')
    })