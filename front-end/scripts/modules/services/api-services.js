'use strict';

module.exports = [
	'$q',
	'$http',	
	function ($q, $http) {
		// body...
		var apiBase = '/api/';

		function getUserList() {
			var defered = $q.defer();
			$http({
				url: apiBase+'users',
				method: 'GET'
			})
			.success(function(data) {
				defered.resolve(data);
			})
			.error(function(error,status){
				defered.reject({data:error,status:status});
			})
			return defered.promise;
		}

		function addUser(data) {
			var defered = $q.defer();
			$http({
				url: apiBase+'users',
				method: 'POST',
				data: data
			})
			.success(function(data) {
				defered.resolve(data);
			})
			.error(function(error,status){
				defered.reject({data:error,status:status});
			})
			return defered.promise;
		}

		function deleteUser(id) {
			var defered = $q.defer();
			$http({
				url: apiBase+'user/'+id,
				method: 'DELETE'
			})
			.success(function(data) {
				defered.resolve(data);
			})
			.error(function(error,status){
				defered.reject({data:error,status:status});
			})
			return defered.promise;
		}

		return {
			getUserList: getUserList,
			addUser: addUser,
			deleteUser: deleteUser
		};
	}
]