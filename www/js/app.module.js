/**
*Modulo de la Aplicacion
*/
angular
  .module('to-do', ['ionic', 'ionic-material'])
  .run(runSetting);

  runSetting.$injector = ['$ionicPlatform'];
  
  /**
  *@name runSetting
  *@desc Configuración de Ionic
  */
  function runSetting($ionicPlatform){
    $ionicPlatform.ready(function() {
      
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);     
        cordova.plugins.Keyboard.disableScroll(true);
      }

      if(window.StatusBar) {
        StatusBar.styleDefault();
      }

    });
  }
