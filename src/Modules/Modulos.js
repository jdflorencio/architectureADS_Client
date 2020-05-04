import angular from 'angular'
import {HomeComponent} from './home/Home'
import HomeService from './home/HomeServices'

const Modulos = 'modulos'

angular.module(Modulos, [
    HomeService
])
.component('home', HomeComponent)

export default Modulos