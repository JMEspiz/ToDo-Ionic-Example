'use strict';

angular
	.module('to-do')
	.service('Tasks', TasksService);

	function TasksService(){
		var container = [];
		var fakeData =[
			{
				id: 1,
				description: 'Hacer lo Slides',
				complete: false,
				date: '28/05/2016'
			},
			{
				id: 2,
				description: 'Terminar el demo',
				complete: false,
				date: '28/05/2016'
			},
			{
				id: 3,
				description: 'aplicar la Guía de Estilos de Jhon Papa',
				complete: false,
				date: '28/05/2016'
			},
			{
				id: 4,
				description: 'subir codigo a github',
				complete: false,
				date: '28/05/2016'
			}
		];

		fakeData.forEach(function(data){
			container.push(data);
		});

		this.getAllTask = function(){
			return container;
		}

		this.getTask = function(index){
			return container[index];
		}

		this.addTask = function(task){
			container.push(task);
			console.log(container)
		}

		this.deleteTask = function(arr, index){
			arr.splice(index, 1);
		}
	}