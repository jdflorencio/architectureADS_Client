import template from './GrupoForm.html'

function GrupoFormController($http, GrupoFormService, $state) {
    self = this
    GrupoFormService.getAll()
    
    self.verCidades = function(){
        $state.go('cidade')
    }

    self.verPessoas = function(){
        $state.go('pessoa')
    }

    self.back = function() {
        $state.go('grupo')
    }
}

export const GrupoFormComponent = {
    controller: GrupoFormController,
    controllerAs: 'ctrl',
    template
}