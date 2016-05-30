'use strict';
/**
* Controllers de las vistas
*/
angular
	.module('to-do')
	.controller('detailCtl', detailCtl);

	detailCtl.$injector = ['ionicMaterialInk', 'ionicMaterialMotion', 'Tasks', '$stateParams'];
	function detailCtl(ionicMaterialInk, ionicMaterialMotion, Tasks, $stateParams){
		var vm = this;
		vm.task = Tasks.getTask($stateParams.index) || {};

		vm.addTask = function(){
			var task = {};
			task.description = vm.task.description;
			task.complete = false;
			Tasks.addTask(task);
		}



		ionicMaterialInk.displayEffect();
		ionicMaterialMotion.ripple();
	}
