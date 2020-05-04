/* @ngInject */
function configRoute($stateProvider, $urlRouterProvider) {
    // $locationProvider.html5Mode(true).hashPrefix('!')
    $urlRouterProvider.otherwise('/')
    $stateProvider
        .state('home', {
            url: '/',
            component: 'home'
        })
}

export default configRoute