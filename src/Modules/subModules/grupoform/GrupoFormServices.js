const GrupoFormService = 'grupoFormService'
angular.module(GrupoFormService, [])
  .factory('GrupoFormService', function ($http) {

    const services = {}

    services.getAll = function () {
      return {
        msg: "De Servicos",
        status: 200
      }
    }
    return services
  })

export default GrupoFormService