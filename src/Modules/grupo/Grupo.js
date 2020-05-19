import template from './Grupo.html'

function GrupoController($http, GrupoService, $state) {
    self = this
    console.log('grupo')
    GrupoService.getAll()
    
    self.adicionar = function() {
        $state.go('grupoform-add')
    }

    self.back = function() {
        $state.go('home')
    }
}

export const GrupoComponent = {
    controller: GrupoController,
    controllerAs: 'ctrl',
    template
}