import angular from 'angular'

import {HomeComponent} from './home/Home'
import HomeService from './home/HomeServices'

import {LoginComponent} from './login/Login'
import LoginService from './login/LoginServices'
import SubModulos from './subModules/SubModulos'

const Modulos = 'modulos'

angular.module(Modulos, [
    SubModulos,
    HomeService,
    LoginService
])
.component('home', HomeComponent)
.component('login', LoginComponent)

export default Modulos