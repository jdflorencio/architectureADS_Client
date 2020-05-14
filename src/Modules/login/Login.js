import template from './Login.html'

function LoginController($http, $state, API) {
    self = this

    self.usuario ="joaodiego@gmail.com"
    self.password = 123456

    self.conectar = function() {
        console.log('ERROR')
        $http.post(`${API}/login`, {usuario: self.usuario, senha: `${self.password}`})
        .then( res => {
            

            if (res.status == 200) {
                localStorage.setItem("Authorization", res.data.dados)
                $state.go('home')
            }
        })
    }
}

export const LoginComponent = {
    controller: LoginController,
    controllerAs: 'ctrl',
    template
}