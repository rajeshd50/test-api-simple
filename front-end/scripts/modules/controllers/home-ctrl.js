'use strict';

module.exports = [
	'userList',
	'apiService',
	function (userList, apiService) {
		// body...
		var vm = this;
		vm.userList = userList;


		vm.deleteUser = function(user) {
			apiService.deleteUser(user.user_id)
			.then(function(data){
				vm.userList.splice(vm.userList.indexOf(user),1);
			},function(error){
				console.log(error);
			});
		}
	}
];