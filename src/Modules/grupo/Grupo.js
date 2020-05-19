import template from './Grupo.html'

function GrupoController($http, GrupoService, $state) {
    self = this
    console.log('grupo')
    GrupoService.getAll()
    
    self.verCidades = function(){
        $state.go('cidade')
    }

    self.verPessoas = function(){
        $state.go('pessoa')
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