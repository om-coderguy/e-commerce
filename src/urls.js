export default () => {
    if (window.location.href.indexOf('localhost:8081') > -1) {
      return {
        login: 'http://localhost:8080/login',
        register: 'http://localhost:8080/api/users',
        resendotp: 'http://localhost:8080/login/resendotp',
        clients: 'http://localhost:8080/api/clients/',
        endClients: 'http://localhost:8080/api/end-clients',
        therapy: 'http://localhost:8080/api/therapies',  
      }
    }
  }