const CadastroService = 'cadastroService'
angular.module(CadastroService, [])
.factory('CadastroService', function($http){

    const services = {}

    services.getAll = function() {
      return {
          msg: "De Servicos", 
          status: 200
      }
    }
    return services    
})

export default CadastroService