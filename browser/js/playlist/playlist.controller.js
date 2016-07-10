'use strict';

juke.controller('PlayerListCtrl', function($scope, $rootScope, listFactory){

	listFactory.getAllPlaylists()
		.then(function (res) {
			$scope.playlists = res;
		});

	$scope.submit = function(){
		var playlist = {
			name : $scope.listName
		}
		listFactory.makePlaylist(playlist)

		$scope.listName = undefined
	}


})