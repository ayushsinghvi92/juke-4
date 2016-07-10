juke.factory('listFactory', function($http){
	var listObj = {};
	var cachedPlaylists = [];

	listObj.makePlaylist = function(playlist){
		return $http.post('/api/playlists', playlist)
		.then(function(res){
			var playlist = res.data;
			cachedPlaylists.push(playlist);
			return playlist;
		})
	}

	listObj.getAllPlaylists = function () {
		return $http.get('/api/playlists')
				.then(function (res) {
					angular.copy(res.data, cachedPlaylists)
					return cachedPlaylists;
				})
	}

	return listObj;
})