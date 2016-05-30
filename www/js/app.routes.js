'use strict';
/**
*Manejo de las rutas de la App
*/
angular
	.module('to-do')
	.config(configRoutes);

	configRoutes.$injector = ['$stateProvider', '$urlRouterProvider'];

	/**
	*@name configRoutes
	*@desc Routing de la App.
	*/
	function configRoutes($stateProvider, $urlRouterProvider){

		/*
		* @desc Ruta por defecto.
		* @params {string} path.
		*/
		$urlRouterProvider.otherwise('/app');

		/*
		*@desc Rutas
		*params {string} path, {object} state data
		*/
		$stateProvider
			.state('app', {
				url: '/app',
				templateUrl: 'template/tpl_home.html',
				controller: 'homeCtl',
				controllerAs: 'home'
			})
			.state('completo', {
				url: '/completo',
				templateUrl: 'template/tpl_completed.html',
				controller: 'homeCtl',
				controllerAs: 'home'
			})
			.state('detail', {
				url: '/detalles/:index',
				templateUrl: 'template/tpl_detail.html',
				controller: 'detailCtl',
				controllerAs: 'detail'
			})
			.state('create', {
				url: '/create',
				templateUrl: 'template/tpl_create.html',
				controller: 'detailCtl',
				controllerAs: 'detail'
			})
	}
