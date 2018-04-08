angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.inicio', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('menu.cTalogos', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cTalogos.html',
        controller: 'cTalogosCtrl'
      }
    }
  })

  .state('menu.pedidos', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pedidos.html',
        controller: 'pedidosCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.apartados', {
    url: '/apartados',
    views: {
      'side-menu21': {
        templateUrl: 'templates/apartados.html',
        controller: 'apartadosCtrl'
      }
    }
  })

  .state('menu.pedidos2', {
    url: '/pedidos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pedidos2.html',
        controller: 'pedidos2Ctrl'
      }
    }
  })

  .state('menu.editorial', {
    url: '/editorial',
    views: {
      'side-menu21': {
        templateUrl: 'templates/editorial.html',
        controller: 'editorialCtrl'
      }
    }
  })

  .state('menu.genero', {
    url: '/genero',
    views: {
      'side-menu21': {
        templateUrl: 'templates/genero.html',
        controller: 'generoCtrl'
      }
    }
  })

  .state('menu.libros', {
    url: '/libros',
    views: {
      'side-menu21': {
        templateUrl: 'templates/libros.html',
        controller: 'librosCtrl'
      }
    }
  })

  .state('menu.roles', {
    url: '/roles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/roles.html',
        controller: 'rolesCtrl'
      }
    }
  })

  .state('menu.usuarios', {
    url: '/usuarios',
    views: {
      'side-menu21': {
        templateUrl: 'templates/usuarios.html',
        controller: 'usuariosCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});