juke.config(function ($stateProvider) {
	$stateProvider.state('newPlaylist', {
		url: '/playlist/new',
		templateUrl: '/js/playlist/template/new-playlist.html',
		controller: 'PlayerListCtrl'
	})
})