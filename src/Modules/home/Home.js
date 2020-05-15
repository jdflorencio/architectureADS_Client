import template from './Home.html'

function HomeController($http, HomeService, $state, $scope) {
    self = this
    HomeService.getAll()
    
    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.data = [300, 500, 100];
 
   
}

export const HomeComponent = {
    controller: HomeController,
    controllerAs: 'ctrl',
    template
}