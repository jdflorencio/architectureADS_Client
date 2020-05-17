import template from './tabCadastro.html'

function TabCadastroController($http, TabCadastroService, $state) {
    self = this
    console.log('cadastro')
    TabCadastroService.getAll()
    
    self.irGrupo = function(){
        $state.go('grupo')

    }

    self.verPessoas = function(){
        $state.go('pessoa')

    }
}

export const TabCadastroComponent = {
    controller: TabCadastroController,
    controllerAs: 'ctrl',
    template
}