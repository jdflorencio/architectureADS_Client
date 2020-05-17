import angular from 'angular'

import {GrupoComponent} from './grupo/Grupo'
import GrupoService from './grupo/GrupoServices'

import SubModulos from './subModules/SubModulos'

const Modulos = 'modulos'

angular.module(Modulos, [
    SubModulos,
    GrupoService
])

.component('grupo', GrupoComponent)

export default Modulos