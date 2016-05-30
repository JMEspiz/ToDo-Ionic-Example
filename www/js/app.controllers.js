'use strict';
/**
* Controllers de las vistas
*/
angular
	.module('to-do')
	.controller('homeCtl', homeCtl);

	homeCtl.$injector = ['ionicMaterialInk', 'ionicMaterialMotion', 'Tasks'];
	function homeCtl(ionicMaterialInk, ionicMaterialMotion, Tasks){
		var vm = this;
		vm.tasks = Tasks.getAllTasks();
		console.log(vm.tasks);

		/**
		*@name setComplete
		*@desc invierte el valor de complete
		*@params {Object} tarea selecciona
		*/
		vm.setComplete = function(task){
			task.complete = !(task.complete);
		}

		/**
		*@name deleteTask
		*@desc invierte el valor de complete
		*@params {String} index: indice de la tarea selecciona
		*/
		vm.deleteTask = function(index){
			Tasks.deleteTask(vm.tasks, index);
		}

		Tasks.$watch;

		ionicMaterialInk.displayEffect();
		ionicMaterialMotion.ripple();
	}
