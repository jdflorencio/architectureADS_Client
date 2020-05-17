const GrupoService = 'grupoService'
angular.module(GrupoService, [])
.factory('GrupoService', function($http){

    const services = {}

    services.getAll = function() {
      return {
          msg: "De Servicos", 
          status: 200
      }
    }
    return services    
})

export default GrupoService