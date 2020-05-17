import template from './Cadastro.html'

function CadastroController($http, CadastroService, $state) {
    self = this
    console.log('cadastro')
    CadastroService.getAll()
    
    self.irGrupo = function(){
        $state.go('grupo')

    }

    self.verPessoas = function(){
        $state.go('pessoa')

    }
}

export const CadastroComponent = {
    controller: CadastroController,
    controllerAs: 'ctrl',
    template
}