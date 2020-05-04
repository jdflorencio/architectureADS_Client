import angular from 'angular'
import '@uirouter/angularjs'
import 'angular-material'

import './main.scss'
import configRoute from './configRoutes'
import Modulos from './Modules/Modulos'

export const app = 'app'
angular.module('app',  [
    'ui.router',
    'ngMaterial',
    Modulos
    
])
.constant('API', 'http://127.0.0.1:3333')
.config(configRoute)
