import template from './GrupoForm.html'

function GrupoFormController($http, GrupoFormService, $state, API, $stateParams, appService) {
    self = this
    GrupoFormService.getAll()

    self.init = function () {
        switch ("id" in $stateParams) {
            case true:
                self.consultarGrupo()
                break
            default:
                console.log('testando...')
        }
    }

    self.consultarGrupo = function () {
        $http.get(`${API}/grupo/${$stateParams.id}`)
            .then((obj) => {
                self.grupo = obj.data.dados

            })
            .catch((error) => {
                appService.notificacao(null, null)

            })
    }

    self.cancelar = function () {
        $state.go('grupos');
    }

    self.salvarAtualizar = () => {
        switch ("id" in $stateParams && $stateParams.id != '') {
            case true:
                const result = $http.put(`${API}/grupo`, self.grupo)
                    .then((result => {
                        $state.go('grupo', {
                            id: result.data.id
                        })
                        const {
                            mensagem
                        } = result.data
                        appService.notificacao(result.status, mensagem)
                    }))
                    .catch((error) => {
                        appService.notificacao(null, null)
                    })
                break
            case false:
                $http.post(`${API}/grupo`, self.grupo)
                    .then((result) => {
                        $state.go('grupo');
                        const {
                            mensagem
                        } = result.data
                        appService.notificacao(result.status, mensagem)
                    }).catch(error => {

                        appService.notificacao(null, null)
                    })
        }
    }
    self.init()

    self.back = function () {
        $state.go('grupo')
    }
}

export const GrupoFormComponent = {
    controller: GrupoFormController,
    controllerAs: 'ctrl',
    template
}