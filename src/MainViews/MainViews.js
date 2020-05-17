import angular from 'angular'
import {HomeComponent} from './home/Home'
import HomeService from './home/HomeServices'

import {CadastroComponent} from './cadastro/Cadastro'
import CadastroService from './cadastro/CadastroServices'
import {LoginComponent} from './login/Login'
import LoginService from './login/LoginServices'


const Views = 'views'

angular.module(Views, [
    HomeService,
    LoginService,
    CadastroService    
])
.component('home', HomeComponent)
.component('login', LoginComponent)
.component('cadastro', CadastroComponent)


export default Views