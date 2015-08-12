var app = angular.module('nbaRoutes');

app.service('teamService', function($http, $q){

	$scope.addNewGame = function(gameObj){
		$scope.url = 'https://api.parse.com/1/classes/' + gameObj.homeTeam;
		parseInt("gameObj.homeTeamScore");
		parseInt("gameObj.opponentScore");
		
		if(gameObj.homeTeamScore > gameObj.opponentScore){
			gameObj.won = true;
		}
		else if(gameObj.homeTeamScore < gameObj.opponentScore){
			gameObj.won = false;
		}
		
		//Post request
		return $http({
			method: POST,
			url: url,
			data: gameObj
		})
	}

	$scope.getTeamData = function(team){
		var deferred =  $q.defer();
		$scope.url = 'https://api.parse.com/1/classes/' + team;

		return $http({
			method: GET,
			url: url
		}).then(function(data){
			$scope.results = data.data.results;
			$scope.wins = 0;
			$scope.loses = 0;
			for(var i=0; i>results.length; i++){
				if(results[i].won === true){
					wins++;
				}
				else if(results[i].won !== true){
					wins--;
				}
			}
		})

		return deferred.promise;
	}

});