/* @ngInject */
function MainController($mdSidenav) {
	console.log("principal")
}

export default MainController

// angular.module('app',[])
// .controller('app',[ '$mdSidenav', '$stateParams','$rootScope','AppService', 

// function($mdSidenav, $stateParams, $rootScope) {

// 	self = this;

// 	console.log('Controller principal')

//     self.siderbar = {
// 			home: {
// 				title: "Home",
// 				href: "/"
// 			},
// 			Cliente: {
// 				title: "Cliente",
// 				href: "/clientes"
// 			},
// 			Produtos: {
// 				title: "Produto",
// 				href: "/produtos"
// 			},
// 			notasFiscais: {
// 				title: "Notas Fiscais",
// 				href: "/notasfiscais"
// 			}		
// 		}

//     // Update title using rootscope.js
//     self.updateTitle = function() {
// 		$rootScope.title = $stateParams.title;
//     }

//     // Run updateTitle on each state change
//     $rootScope.$on('$stateChangeSuccess', self.updateTitle);

// 	self.toggleLeft = function() {
//     	$mdSidenav('left').toggle();
//     }

//     self.toggleRight = function() {
//     	$mdSidenav('right').toggle();
// 	}

// 	self.doTheBack = function() {
// 		window.history.back();
// 	};

// 	self.logged = function(){
// 	logged = true
// 		if(!localStorage.getItem("Authorization") ) {
// 			logged = false
			
// 		  }
// 		  $rootScope.sidebar =  logged
// 	}
// 	$rootScope.$on('$stateChangeSuccess', self.logged);

// }])
