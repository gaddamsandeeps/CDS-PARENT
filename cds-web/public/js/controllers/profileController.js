
 

define(['controllers/controllerModule','jquery'], function (controllerModule,$) {

	 controllerModule.controller('profileController', ['$rootScope','$state','$http',"appUrlService","cdsService",'$scope','$sessionStorage',"roleService", "$window", function($rootScope,$state,$http,appUrlService,cdsService,$scope,$sessionStorage, roleService, $window){		
	 

	 		var self = this;

			cdsService.getProfileInfo(initiateProfile);

			function initiateProfile(resp){
				console.log(resp);
				self.user = resp.data;
			}	 		




	}]);

});

