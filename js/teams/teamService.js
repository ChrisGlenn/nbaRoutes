var app = angular.module('nbaRoutes');

app.service('teamService', function($q, $timeout) {

    var teamData = {
        losangeleslakers: [
            {
                "createdAt": "2015-06-08T22:31:17.477Z",
                "homeTeam": "losangeleslakers",
                "homeTeamScore": "0",
                "opponent": "Boston Celtics",
                "opponentScore": "2",
                "won": false
            },
            {
                "createdAt": "2015-06-08T22:31:47.731Z",
                "homeTeam": "losangeleslakers",
                "homeTeamScore": "0",
                "opponent": "Charlotte Hornets",
                "opponentScore": "123123123123",
            },
            {
                "createdAt": "2015-06-08T22:36:39.611Z",
                "homeTeam": "losangeleslakers",
                "homeTeamScore": "rekt",
                "opponent": "Golden State Warriors",
                "opponentScore": "rekt",
                "won": false
            },
            {
                "createdAt": "2015-06-08T23:23:01.875Z",
                "homeTeam": "losangeleslakers",
                "homeTeamScore": "34",
                "opponent": "Brooklyn Nets",
                "opponentScore": "23",
                "won": true
            },
            {
                "createdAt": "2015-06-08T23:24:29.783Z",
                "homeTeam": "losangeleslakers",
                "homeTeamScore": "4",
                "opponent": "Boston Celtics",
                "opponentScore": "5",
                "won": false
            },
            {
                "createdAt": "2015-06-08T23:25:07.666Z",
                "homeTeam": "losangeleslakers",
                "homeTeamScore": "3",
                "opponent": "Brooklyn Nets",
                "opponentScore": "4",
                "won": false
            },
            {
                "createdAt": "2015-06-09T01:05:45.100Z",
                "homeTeam": "losangeleslakers",
                "homeTeamScore": "90",
                "opponent": "Cleveland Cavaliers",
                "opponentScore": "78",
                "won": true
            },
            {
                "createdAt": "2015-06-09T06:48:40.859Z",
                "homeTeam": "losangeleslakers",
                "won": false
            },
            {
                "createdAt": "2015-06-09T14:02:44.810Z",
                "homeTeam": "losangeleslakers",
                "homeTeamScore": "89",
                "opponentScore": "87",
                "won": true
            },
            {
                "createdAt": "2015-06-09T14:03:13.821Z",
                "homeTeam": "losangeleslakers",
                "homeTeamScore": "89",
                "opponentScore": "98",
                "won": false
            },
            {
                "createdAt": "2015-06-09T15:10:30.372Z",
                "homeTeam": "losangeleslakers",
                "homeTeamScore": "12222",
                "opponent": "Chicago Bulls",
                "opponentScore": "3",
                "win": false
            },
            {
                "createdAt": "2015-07-14T22:29:05.474Z",
                "homeTeam": "losangeleslakers",
                "homeTeamScore": "45",
                "opponent": "Boston Celtics",
                "opponentScore": "43",
                "won": true
            },
            {
                "createdAt": "2015-07-26T22:42:23.134Z",
                "homeTeam": "losangeleslakers",
                "homeTeamScore": "2",
                "opponent": "Utah Jazz",
                "opponentScore": "200000000000000000",
                "won": false
            },
            {
                "createdAt": "2015-07-27T17:42:16.480Z",
                "homeTeam": "losangeleslakers",
                "homeTeamScore": "-37",
                "opponent": "Utah Jazz",
                "opponentScore": "404",
                "won": false
            },
            {
                "createdAt": "2015-07-27T20:59:04.218Z",
                "homeTeam": "losangeleslakers",
                "opponent": "Orlando Magic",
                "won": false
            },
            {
                "createdAt": "2015-07-27T21:58:05.290Z",
                "homeTeam": "losangeleslakers",
                "homeTeamScore": "59",
                "opponent": "Boston Celtics",
                "opponentScore": "73",
                "won": false
            },
            {
                "createdAt": "2015-07-27T22:02:54.052Z",
                "homeTeam": "losangeleslakers",
                "homeTeamScore": "1",
                "opponent": "Atlanta Hawks",
                "opponentScore": "1",
                "won": false
            },
            {
                "createdAt": "2015-07-27T23:13:12.990Z",
                "homeTeam": "losangeleslakers",
                "homeTeamScore": "24",
                "opponentTeam": "Charlotte Hornets",
                "opponentTeamScore": "14",
                "won": true
            },
            {
                "createdAt": "2015-07-27T23:24:36.838Z",
                "homeTeam": "losangeleslakers",
                "homeTeamScore": "12",
                "opponentTeam": "Denver Nuggets",
                "opponentTeamScore": "15",
                "won": false
            },
            {
                "createdAt": "2015-07-27T23:25:25.528Z",
                "homeTeam": "losangeleslakers",
                "homeTeamScore": "12",
                "opponent": "Chicago Bulls",
                "opponentScore": "13",
                "won": false
            },
            {
                "createdAt": "2015-07-27T23:28:39.506Z",
                "homeTeam": "losangeleslakers",
                "homeTeamScore": "34",
                "opponent": "Los Angeles Clippers",
                "opponentScore": "45",
                "won": false
            },
            {
                "createdAt": "2015-07-27T23:33:08.087Z",
                "homeTeam": "losangeleslakers",
                "homeTeamScore": "1",
                "opponent": "Houston Rockets",
                "opponentScore": "2",
                "won": false
            },
            {
                "createdAt": "2015-07-27T23:33:45.065Z",
                "homeTeam": "losangeleslakers",
                "homeTeamScore": "33",
                "opponent": "Indiana Pacers",
                "opponentScore": "12",
                "won": true
            },
            {
                "createdAt": "2015-07-27T23:35:50.696Z",
                "homeTeam": "losangeleslakers",
                "homeTeamScore": "1",
                "opponent": "Chicago Bulls",
                "opponentScore": "9001",
                "won": false
            },
            {
                "createdAt": "2015-07-27T23:36:17.244Z",
                "homeTeam": "losangeleslakers",
                "homeTeamScore": "5",
                "opponent": "Chicago Bulls",
                "opponentScore": "6",
                "won": false
            },
            {
                "createdAt": "2015-07-27T23:36:39.578Z",
                "homeTeam": "losangeleslakers",
                "homeTeamScore": "lose every game forever",
                "opponent": "Chicago Bulls",
                "opponentScore": "champions of the universe",
                "won": false
            },
            {
                "createdAt": "2015-07-28T01:27:43.564Z",
                "homeTeam": "losangeleslakers",
                "homeTeamScore": "90",
                "opponent": "Charlotte Hornets",
                "opponentScore": "120",
                "won": false
            },
            {
                "createdAt": "2015-07-28T01:28:07.804Z",
                "homeTeam": "losangeleslakers",
                "homeTeamScore": "100",
                "opponent": "Golden State Warriors",
                "opponentScore": "200",
                "won": false
            },
            {
                "createdAt": "2015-07-28T02:06:21.647Z",
                "homeTeam": "losangeleslakers",
                "homeTeamScore": "234",
                "opponent": "Brooklyn Nets",
                "opponentScore": "444",
                "won": false
            },
            {
                "createdAt": "2015-07-28T02:30:59.298Z",
                "homeTeam": "losangeleslakers",
                "homeTeamScore": "9",
                "opponent": "Denver Nuggets",
                "opponentScore": "99",
                "won": false
            },
            {
                "createdAt": "2015-07-28T02:48:02.458Z",
                "homeTeam": "losangeleslakers",
                "homeTeamScore": "99",
                "opponent": "Chicago Bulls",
                "opponentScore": "98",
                "won": true
            },
            {
                "createdAt": "2015-07-28T03:40:41.153Z",
                "homeTeam": "losangeleslakers",
                "homeTeamScore": "0",
                "opponent": "Sacramento Kings",
                "opponentScore": "1",
                "won": false
            },
            {
                "createdAt": "2015-07-29T18:22:26.604Z",
                "homeTeam": "losangeleslakers",
                "homeTeamScore": "87",
                "opponent": "Philadelphia 76ers",
                "opponentScore": "374234234",
                "won": false
            },
            {
                "createdAt": "2015-07-29T21:32:33.474Z",
                "homeTeam": "losangeleslakers",
                "homeTeamScore": "67",
                "opponent": "Cleveland Cavaliers",
                "opponentScore": "9909",
                "won": false
            },
            {
                "createdAt": "2015-07-31T03:11:27.245Z",
                "homeTeam": "losangeleslakers",
                "homeTeamScore": "77",
                "opponentScore": "88",
                "oppontent": "Chicago Bulls",
                "won": false
            },
            {
                "createdAt": "2015-07-31T21:33:50.392Z",
                "homeTeam": "losangeleslakers",
                "homeTeamScore": "Da Bulls",
                "opponent": "Dallas Mavericks",
                "opponentScore": "????",
                "won": false
            },
            {
                "createdAt": "2015-08-08T19:28:58.997Z",
                "homeTeam": "losangeleslakers",
                "homeTeamScore": "678",
                "opponent": "New York Knicks",
                "opponentScore": "876",
                "won": false
            },
            {
                "createdAt": "2015-08-08T19:30:54.259Z",
                "homeTeam": "losangeleslakers",
                "homeTeamScore": "1111111",
                "opponent": "Boston Celtics",
                "opponentScore": "2222222",
            }
        ],
        miamiheat: [
            {
                "createdAt": "2015-06-08T22:31:51.760Z",
                "homeTeam": "miamiheat",
                "homeTeamScore": "22233",
                "opponent": "Memphis Grizzlies",
                "opponentScore": "45678",
                "won": false
            },
            {
                "createdAt": "2015-06-08T22:32:22.616Z",
                "homeTeam": "miamiheat",
                "homeTeamScore": "56",
                "opponent": "Chicago Bulls",
                "opponentScore": "90",
                "won": false
            },
            {
                "createdAt": "2015-06-08T22:35:51.100Z",
                "homeTeam": "miamiheat",
                "homeTeamScore": "99",
                "opponent": "Boston Celtics",
                "opponentScore": "97",
                "won": true
            },
            {
                "createdAt": "2015-06-08T22:51:21.739Z",
                "homeTeam": "miamiheat",
                "homeTeamScore": "34",
                "opponent": "Brooklyn Nets",
                "opponentScore": "54",
                "won": false
            },
            {
                "createdAt": "2015-06-08T23:25:26.823Z",
                "homeTeam": "miamiheat",
                "homeTeamScore": "43",
                "opponent": "Boston Celtics",
                "opponentScore": "5",
                "won": true
            },
            {
                "createdAt": "2015-06-08T23:25:45.357Z",
                "homeTeam": "miamiheat",
                "homeTeamScore": "e",
                "opponent": "Atlanta Hawks",
                "opponentScore": "54",
                "won": false
            },
            {
                "createdAt": "2015-06-08T23:26:17.385Z",
                "homeTeam": "miamiheat",
                "homeTeamScore": "3",
                "opponent": "Boston Celtics",
                "opponentScore": "4",
                "won": false
            },
            {
                "createdAt": "2015-06-08T23:26:53.751Z",
                "homeTeam": "miamiheat",
                "homeTeamScore": "3",
                "opponent": "Boston Celtics",
                "opponentScore": "4",
                "won": false
            },
            {
                "createdAt": "2015-06-08T23:27:22.451Z",
                "homeTeam": "miamiheat",
                "homeTeamScore": "3",
                "opponent": "Atlanta Hawks",
                "opponentScore": "4",
                "won": false
            },
            {
                "createdAt": "2015-06-08T23:28:15.568Z",
                "homeTeam": "miamiheat",
                "homeTeamScore": "3",
                "opponent": "Atlanta Hawks",
                "opponentScore": "4",
                "won": false
            },
            {
                "createdAt": "2015-06-08T23:28:16.865Z",
                "homeTeam": "miamiheat",
                "homeTeamScore": "3",
                "opponent": "Atlanta Hawks",
                "opponentScore": "4",
                "won": false
            },
            {
                "createdAt": "2015-06-08T23:28:16.995Z",
                "homeTeam": "miamiheat",
                "homeTeamScore": "3",
                "opponent": "Atlanta Hawks",
                "opponentScore": "4",
                "won": false
            },
            {
                "createdAt": "2015-06-08T23:28:17.063Z",
                "homeTeam": "miamiheat",
                "homeTeamScore": "3",
                "opponent": "Atlanta Hawks",
                "opponentScore": "4",
                "won": false
            },
            {
                "createdAt": "2015-06-08T23:28:52.843Z",
                "homeTeam": "miamiheat",
                "homeTeamScore": "e",
                "opponent": "Boston Celtics",
                "opponentScore": "3",
                "won": false
            },
            {
                "createdAt": "2015-06-08T23:28:53.669Z",
                "homeTeam": "miamiheat",
                "homeTeamScore": "e",
                "opponent": "Boston Celtics",
                "opponentScore": "3",
                "won": false
            },
            {
                "createdAt": "2015-06-08T23:29:27.140Z",
                "homeTeam": "miamiheat",
                "homeTeamScore": "89",
                "opponent": "Boston Celtics",
                "opponentScore": "90",
                "won": false
            },
            {
                "createdAt": "2015-06-09T01:06:05.853Z",
                "homeTeam": "miamiheat",
                "homeTeamScore": "104",
                "opponent": "Boston Celtics",
                "opponentScore": "89",
                "won": true
            },
            {
                "createdAt": "2015-06-09T15:45:50.458Z",
                "homeTeam": "miamiheat",
                "homeTeamScore": "5",
                "opponent": "Boston Celtics",
                "opponentScore": "5",
                "won": false
            },
            {
                "createdAt": "2015-07-27T03:39:05.908Z",
                "homeTeam": "miamiheat",
                "homeTeamScore": "32",
                "opponent": "Houston Rockets",
                "opponentScore": "54",
                "won": false
            },
            {
                "createdAt": "2015-07-27T20:59:30.917Z",
                "homeTeam": "miamiheat",
                "homeTeamScore": "22",
                "opponent": "Brooklyn Nets",
                "opponentScore": "3",
                "won": true
            },
            {
                "createdAt": "2015-07-27T20:59:54.384Z",
                "homeTeam": "miamiheat",
                "homeTeamScore": "74747474774",
                "opponent": "Orlando Magic",
                "opponentScore": "3333333",
                "won": true
            },
            {
                "createdAt": "2015-07-27T22:27:49.372Z",
                "homeTeam": "miamiheat",
                "homeTeamScore": "0",
                "opponentScore": "50000",
                "won": false
            },
            {
                "createdAt": "2015-07-27T22:31:04.730Z",
                "homeTeam": "miamiheat",
                "homeTeamScore": "999999",
                "opponent": "Chicago Bulls",
                "opponentScore": "0",
                "won": true
            },
            {
                "createdAt": "2015-07-27T22:32:17.002Z",
                "homeTeam": "miamiheat",
                "homeTeamScore": "2",
                "opponent": "Los Angeles Clippers",
                "opponentScore": "12893",
                "won": false
            },
            {
                "createdAt": "2015-07-28T01:09:00.706Z",
                "homeTeam": "miamiheat",
                "opponent": "New York Knicks",
                "won": false
            },
            {
                "createdAt": "2015-07-28T02:02:29.582Z",
                "homeTeam": "miamiheat",
                "homeTeamScore": "2",
                "opponent": "Oklahoma City Thunder",
                "opponentScore": "122",
                "won": false
            },
            {
                "createdAt": "2015-07-28T02:31:23.961Z",
                "homeTeam": "miamiheat",
                "homeTeamScore": "98",
                "opponent": "Houston Rockets",
                "opponentScore": "99",
                "won": false
            },
            {
                "createdAt": "2015-07-28T03:25:41.829Z",
                "homeTeam": "miamiheat",
                "homeTeamScore": "23",
                "opponent": "Milwaukee Bucks",
                "opponentScore": "12",
                "won": true
            },
            {
                "createdAt": "2015-07-28T03:36:18.728Z",
                "homeTeam": "miamiheat",
                "homeTeamScore": "34",
                "opponent": "Oklahoma City Thunder",
                "opponentScore": "12",
                "won": true
            },
            {
                "createdAt": "2015-07-28T14:53:36.459Z",
                "homeTeam": "miamiheat",
                "homeTeamScore": "what happens if the heat wins a game?",
                "opponent": "Brendan Dayley",
                "opponentScore": "Turn off the xbox and get a life",
                "won": false
            },
            {
                "createdAt": "2015-07-31T03:11:54.023Z",
                "homeTeam": "miamiheat",
                "homeTeamScore": "99",
                "opponentScore": "89",
                "oppontent": "Los Angeles Clippers",
                "won": true
            },
            {
                "createdAt": "2015-07-31T21:31:38.040Z",
                "homeTeam": "miamiheat",
                "homeTeamScore": "98",
                "opponent": "Oklahoma City Thunder",
                "opponentScore": "110",
                "won": false
            },
            {
                "createdAt": "2015-08-02T21:15:09.121Z",
                "homeTeam": "miamiheat",
                "homeTeamScore": "120",
                "opponentScore": "118",
                "won": true
            },
            {
                "createdAt": "2015-08-05T21:35:24.615Z",
                "homeTeam": "miamiheat",
                "homeTeamScore": "4",
                "opponent": "Brooklyn Nets",
                "opponentScore": "76",
                "won": false
            },
            {
                "createdAt": "2015-08-06T22:48:09.675Z",
                "homeTeam": "miamiheat",
                "won": false
            },
            {
                "createdAt": "2015-08-06T22:48:16.155Z",
                "homeTeam": "miamiheat",
                "won": false
            },
            {
                "createdAt": "2015-08-06T22:48:19.524Z",
                "homeTeam": "miamiheat",
                "won": false
            },
            {
                "createdAt": "2015-08-06T22:48:20.390Z",
                "homeTeam": "miamiheat",
                "won": false
            },
            {
                "createdAt": "2015-08-06T22:48:20.822Z",
                "homeTeam": "miamiheat",
                "won": false
            },
            {
                "createdAt": "2015-08-08T19:31:25.865Z",
                "homeTeam": "miamiheat",
                "homeTeamScore": "22222222222222",
                "opponent": "Cleveland Cavaliers",
                "opponentScore": "313333",
            }
        ],
        utahjazz: [
            {
                "createdAt": "2015-06-08T22:31:04.922Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "100",
                "opponent": "Boston Celtics",
                "opponentScore": "99",
                "won": true
            },
            {
                "createdAt": "2015-06-08T22:31:35.150Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "123123123123",
                "opponent": "Dallas Mavericks",
                "opponentScore": "2",
                "win": false
            },
            {
                "createdAt": "2015-06-08T22:31:53.402Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "20",
                "opponent": "bostonceltics",
                "opponentScore": "2",
                "won": true
            },
            {
                "createdAt": "2015-06-08T22:34:16.540Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "9001",
                "opponent": "Charlotte Hornets",
                "opponentScore": "1",
                "won": true
            },
            {
                "createdAt": "2015-06-08T22:35:44.014Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "234",
                "opponent": "Chicago Bulls",
                "opponentScore": "132",
                "won": true
            },
            {
                "createdAt": "2015-06-08T22:39:55.879Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "342",
                "opponent": "Cleveland Cavaliers",
                "opponentScore": "234",
                "won": true
            },
            {
                "createdAt": "2015-06-08T22:40:12.434Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "123",
                "opponent": "Atlanta Hawks",
                "opponentScore": "456",
                "won": false
            },
            {
                "createdAt": "2015-06-08T22:41:30.815Z",
                "homeTeam": "utahjazz",
                "won": false
            },
            {
                "createdAt": "2015-06-08T22:52:12.697Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "65",
                "opponent": "Boston Celtics",
                "opponentScore": "78",
                "won": false
            },
            {
                "createdAt": "2015-06-08T22:59:01.956Z",
                "homeScore": "99",
                "homeTeam": "utahjazz",
                "opponentScore": "98",
                "won": false
            },
            {
                "createdAt": "2015-06-08T23:01:15.555Z",
                "homeScore": "99",
                "homeTeam": "utahjazz",
                "opponentScore": "102",
                "team": "Detroit Pistons",
                "won": false
            },
            {
                "createdAt": "2015-06-08T23:02:25.131Z",
                "homeScore": "100",
                "homeTeam": "utahjazz",
                "opponentScore": "99",
                "won": false
            },
            {
                "createdAt": "2015-06-08T23:03:13.519Z",
                "homeScore": "100",
                "homeTeam": "utahjazz",
                "opponentScore": "99",
                "won": false
            },
            {
                "createdAt": "2015-06-08T23:03:53.970Z",
                "homeScore": "123",
                "homeTeam": "utahjazz",
                "opponentScore": "102",
                "team": "miamiheat",
                "won": false
            },
            {
                "createdAt": "2015-06-08T23:05:07.032Z",
                "homeScore": "123",
                "homeTeam": "utahjazz",
                "opponentScore": "112",
                "team": "memphisgrizzlies",
                "won": false
            },
            {
                "createdAt": "2015-06-08T23:09:58.165Z",
                "homeScore": "123",
                "homeTeam": "utahjazz",
                "opponentScore": "111",
                "team": "chicagobulls",
                "won": false
            },
            {
                "createdAt": "2015-06-08T23:11:25.509Z",
                "homeScore": "125",
                "homeTeam": "utahjazz",
                "opponentScore": "123",
                "team": "memphisgrizzlies",
                "won": false
            },
            {
                "createdAt": "2015-06-08T23:11:54.444Z",
                "homeScore": "133",
                "homeTeam": "utahjazz",
                "opponentScore": "111",
                "team": "neworleanspelicans",
                "won": false
            },
            {
                "createdAt": "2015-06-08T23:12:20.266Z",
                "test": "test",
            },
            {
                "createdAt": "2015-06-08T23:20:27.546Z",
                "homeScore": "78",
                "homeTeam": "utahjazz",
                "opponent": "Brooklyn Nets",
                "opponentScore": "57",
                "win": false
            },
            {
                "createdAt": "2015-06-08T23:21:21.569Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "100",
                "opponent": "Brooklyn Nets",
                "opponentScore": "102",
                "won": false
            },
            {
                "createdAt": "2015-06-08T23:22:48.248Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "876543",
                "opponent": "Boston Celtics",
                "opponentScore": "76543567",
                "won": false
            },
            {
                "createdAt": "2015-06-08T23:28:06.744Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "78",
                "opponent": "Atlanta Hawks",
                "opponentScore": "89",
                "win": false
            },
            {
                "createdAt": "2015-06-08T23:28:22.655Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "101",
                "opponent": "Atlanta Hawks",
                "opponentScore": "90",
                "win": true
            },
            {
                "createdAt": "2015-06-08T23:29:00.392Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "0010110",
                "opponent": "Brooklyn Nets",
                "opponentScore": "0010110",
                "won": false
            },
            {
                "createdAt": "2015-06-08T23:29:09.885Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "102",
                "opponent": "Boston Celtics",
                "opponentScore": "87",
                "win": true
            },
            {
                "createdAt": "2015-06-08T23:46:01.129Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "104",
                "opponent": "Boston Celtics",
                "opponentScore": "90",
                "win": true
            },
            {
                "createdAt": "2015-06-08T23:50:50.366Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "8987985687564",
                "opponent": "Atlanta Hawks",
                "opponentScore": "5346",
                "win": true
            },
            {
                "createdAt": "2015-06-09T00:39:43.028Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "21",
                "opponent": "Boston Celtics",
                "opponentScore": "12",
                "won": true
            },
            {
                "createdAt": "2015-06-09T00:40:00.732Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "21",
                "opponent": "Philadelphia 76ers",
                "opponentScore": "12",
                "won": true
            },
            {
                "createdAt": "2015-06-09T00:40:23.606Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "21",
                "opponent": "Charlotte Hornets",
                "opponentScore": "12",
                "won": true
            },
            {
                "createdAt": "2015-06-09T00:47:17.951Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "21",
                "opponent": "Philadelphia 76ers",
                "opponentScore": "12",
                "won": true
            },
            {
                "createdAt": "2015-06-09T00:47:25.201Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "21",
                "opponent": "Philadelphia 76ers",
                "opponentScore": "12",
                "won": true
            },
            {
                "createdAt": "2015-06-09T00:47:31.459Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "21",
                "opponent": "New York Knicks",
                "opponentScore": "12",
                "won": true
            },
            {
                "createdAt": "2015-06-09T00:47:38.765Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "21",
                "opponent": "Brooklyn Nets",
                "opponentScore": "2",
                "won": true
            },
            {
                "createdAt": "2015-06-09T00:47:45.846Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "21",
                "opponent": "Houston Rockets",
                "opponentScore": "12",
                "won": true
            },
            {
                "createdAt": "2015-06-09T00:47:53.964Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "211",
                "opponent": "Toronto Raptors",
                "opponentScore": "2",
                "won": true
            },
            {
                "createdAt": "2015-06-09T00:48:02.311Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "21",
                "opponent": "Toronto Raptors",
                "opponentScore": "12",
                "won": true
            },
            {
                "createdAt": "2015-06-09T00:48:10.348Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "21",
                "opponent": "Denver Nuggets",
                "opponentScore": "12",
                "won": true
            },
            {
                "createdAt": "2015-06-09T00:48:18.267Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "31",
                "opponent": "Cleveland Cavaliers",
                "opponentScore": "13",
                "won": true
            },
            {
                "createdAt": "2015-06-09T01:08:17.518Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "2",
                "opponent": "Brooklyn Nets",
                "opponentScore": "3",
                "won": false
            },
            {
                "createdAt": "2015-06-09T02:36:40.093Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "123",
                "opponent": "Detroit Pistons",
                "opponentScore": "234",
                "won": false
            },
            {
                "createdAt": "2015-06-09T06:49:04.118Z",
                "homeTeam": "utahjazz",
                "won": false
            },
            {
                "createdAt": "2015-06-09T03:26:38.748Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "54",
                "opponent": "Houston Rockets",
                "opponentScore": "95",
                "won": false
            },
            {
                "createdAt": "2015-06-09T06:50:44.938Z",
                "homeTeam": "utahjazz",
                "won": false
            },
            {
                "createdAt": "2015-06-09T06:56:23.062Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "678",
                "opponentScore": "654",
                "won": true
            },
            {
                "createdAt": "2015-06-09T14:08:27.146Z",
                "homeTeam": "utahjazz",
                "won": false
            },
            {
                "createdAt": "2015-06-09T14:13:04.525Z",
                "homeTeam": "utahjazz",
                "won": false
            },
            {
                "createdAt": "2015-06-09T14:15:28.756Z",
                "homeTeam": "utahjazz",
                "won": false
            },
            {
                "createdAt": "2015-06-09T14:17:14.709Z",
                "homeTeam": "utahjazz",
                "won": false
            },
            {
                "createdAt": "2015-06-09T14:20:45.397Z",
                "homeTeam": "utahjazz",
                "won": false
            },
            {
                "createdAt": "2015-06-09T14:22:15.122Z",
                "homeTeam": "utahjazz",
                "won": false
            },
            {
                "createdAt": "2015-06-09T14:22:56.017Z",
                "homeTeam": "utahjazz",
                "won": false
            },
            {
                "createdAt": "2015-06-09T14:24:30.015Z",
                "homeTeam": "utahjazz",
                "won": false
            },
            {
                "createdAt": "2015-06-09T14:27:22.451Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "435",
                "opponent": "Atlanta Hawks",
                "opponentScore": "43",
                "won": true
            },
            {
                "createdAt": "2015-06-09T14:27:40.913Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "98",
                "opponent": "Boston Celtics",
                "opponentScore": "101",
                "won": false
            },
            {
                "createdAt": "2015-06-09T14:49:16.846Z",
                "homeScore": "123",
                "homeTeam": "utahjazz",
                "opponentScore": "111",
                "team": "memphisgrizzlies",
                "won": false
            },
            {
                "createdAt": "2015-06-09T14:53:08.962Z",
                "homeScore": "123",
                "homeTeam": "utahjazz",
                "opponentScore": "111",
                "team": "miamiheat",
                "won": false
            },
            {
                "createdAt": "2015-06-09T14:54:28.831Z",
                "homeScore": "145",
                "homeTeam": "utahjazz",
                "opponentScore": "123",
                "team": "atlantahawks",
                "won": false
            },
            {
                "createdAt": "2015-06-09T14:55:30.412Z",
                "homeScore": "123",
                "homeTeam": "utahjazz",
                "opponentScore": "155",
                "team": "dallasmavericks",
                "won": false
            },
            {
                "createdAt": "2015-06-09T15:59:52.890Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "321",
                "opponent": "New York Knicks",
                "opponentScore": "123",
                "won": true
            },
            {
                "createdAt": "2015-06-09T16:00:04.028Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "311",
                "opponent": "Philadelphia 76ers",
                "opponentScore": "113",
                "won": true
            },
            {
                "createdAt": "2015-06-09T16:00:29.296Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "weird test",
                "opponent": "Boston Celtics",
                "opponentScore": "hello",
                "won": false
            },
            {
                "createdAt": "2015-06-09T16:04:13.979Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "HI DAN!!",
                "opponent": "Brooklyn Nets",
                "opponentScore": "0",
            },
            {
                "createdAt": "2015-06-09T16:05:07.641Z",
                "homeTeamScore": "123",
                "opponent": "Dallas Mavericks",
                "opponentScore": "234",
            },
            {
                "createdAt": "2015-06-09T18:25:40.135Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "10",
                "opponent": "Charlotte Hornets",
                "opponentScore": "9",
                "won": true
            },
            {
                "createdAt": "2015-06-24T17:04:09.278Z",
                "homeTeam": "utahjazz",
                "won": false
            },
            {
                "createdAt": "2015-07-15T12:37:09.168Z",
                "homeTeam": "utahjazz",
                "opponent": "Washington Wizards",
                "won": false
            },
            {
                "createdAt": "2015-07-15T22:00:47.596Z",
                "homeTeam": "utahjazz",
                "opponent": "Miami Heat",
                "won": false
            },
            {
                "createdAt": "2015-07-18T06:58:02.863Z",
                "homeTeam": "utahjazz",
                "won": false
            },
            {
                "createdAt": "2015-07-19T02:35:21.916Z",
                "homeTeam": "utahjazz",
                "won": false
            },
            {
                "createdAt": "2015-07-24T18:59:52.829Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "1234567890",
                "opponent": "Chicago Bulls",
                "opponentScore": "22",
                "won": true
            },
            {
                "createdAt": "2015-07-26T04:53:11.775Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "Brendan Was Here!!!",
                "opponent": "Chicago Bulls",
                "opponentScore": "M.J. rules all :)",
                "won": false
            },
            {
                "createdAt": "2015-07-26T22:38:35.009Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "12345",
                "opponent": "Brendan Dayley",
                "opponentScore": "MIGHT! win on an xbox",
                "won": false
            },
            {
                "createdAt": "2015-07-26T22:39:28.753Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "12345",
                "opponent": "Brendan Dayley",
                "opponentScore": "MIGHT! win on an xbox",
                "won": false
            },
            {
                "createdAt": "2015-07-26T22:39:28.928Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "12345",
                "opponent": "Brendan Dayley",
                "opponentScore": "MIGHT! win on an xbox",
                "won": false
            },
            {
                "createdAt": "2015-07-26T22:39:29.069Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "12345",
                "opponent": "Brendan Dayley",
                "opponentScore": "MIGHT! win on an xbox",
                "won": false
            },
            {
                "createdAt": "2015-07-26T22:39:29.123Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "12345",
                "opponent": "Brendan Dayley",
                "opponentScore": "MIGHT! win on an xbox",
                "won": false
            },
            {
                "createdAt": "2015-07-26T22:39:29.316Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "12345",
                "opponent": "Brendan Dayley",
                "opponentScore": "MIGHT! win on an xbox",
                "won": false
            },
            {
                "createdAt": "2015-07-26T22:40:10.428Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "12345",
                "opponent": "Brendan Dayley",
                "opponentScore": "MIGHT! win on an xbox",
                "won": false
            },
            {
                "createdAt": "2015-07-26T22:40:12.762Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "12345",
                "opponent": "Brendan Dayley",
                "opponentScore": "MIGHT! win on an xbox",
                "won": false
            },
            {
                "createdAt": "2015-07-26T22:40:32.462Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "1234512345",
                "opponent": "Brendan Dayley",
                "opponentScore": "MIGHT! win on an xbox",
                "won": false
            },
            {
                "createdAt": "2015-07-26T22:40:58.096Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "12345",
                "opponent": "Utah Jazz",
                "opponentScore": "12345",
                "won": false
            },
            {
                "createdAt": "2015-07-26T22:41:55.622Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "5",
                "opponent": "Boston Celtics",
                "opponentScore": "1",
                "won": true
            },
            {
                "createdAt": "2015-07-27T04:51:09.407Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "99",
                "opponent": "Detroit Pistons",
                "opponentScore": "8",
                "won": true
            },
            {
                "createdAt": "2015-07-27T15:43:10.133Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "55",
                "opponent": "Memphis Grizzlies",
                "opponentScore": "54",
                "won": true
            },
            {
                "createdAt": "2015-07-27T15:47:53.127Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "53",
                "opponent": "Milwaukee Bucks",
                "opponentScore": "55",
                "won": false
            },
            {
                "createdAt": "2015-07-27T15:50:32.435Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "21",
                "opponent": "Milwaukee Bucks",
                "opponentScore": "20",
                "won": true
            },
            {
                "createdAt": "2015-07-27T17:44:07.838Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "15",
                "opponentScore": "14",
                "won": true
            },
            {
                "createdAt": "2015-07-27T20:58:40.318Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "98908088",
                "opponent": "Houston Rockets",
                "opponentScore": "6555",
                "won": true
            },
            {
                "createdAt": "2015-07-27T21:10:16.137Z",
                "homeTeam": "utahjazz",
                "homeTeamScore": "90",
                "opponent": "Indiana Pacers",
                "opponentScore": "45",
                "won": true
            },
            {
                "createdAt": "2015-07-27T21:41:50.340Z",
                "homeTeam": "utahjazz",
                "won": false
            },
            {
                "createdAt": "2015-07-27T21:41:51.338Z",
                "homeTeam": "utahjazz",
                "won": false
            },
            {
                "createdAt": "2015-07-27T21:41:51.556Z",
                "homeTeam": "utahjazz",
                "won": false
            },
            {
                "createdAt": "2015-07-27T21:41:51.753Z",
                "homeTeam": "utahjazz",
                "won": false
            },
            {
                "createdAt": "2015-07-27T21:41:51.866Z",
                "homeTeam": "utahjazz",
                "won": false
            },
            {
                "createdAt": "2015-07-27T21:41:51.991Z",
                "homeTeam": "utahjazz",
                "won": false
            },
            {
                "createdAt": "2015-07-27T21:41:53.549Z",
                "homeTeam": "utahjazz",
                "won": false
            },
            {
                "createdAt": "2015-07-27T21:41:53.825Z",
                "homeTeam": "utahjazz",
                "won": false
            },
            {
                "createdAt": "2015-07-27T21:41:55.221Z",
                "homeTeam": "utahjazz",
                "won": false
            }
        ]
    };

    this.getListOfAllTeams = function(){
        var def = $q.defer();

        var teamList = ["Boston Celtics", "Brooklyn Nets", "New York Knicks", "Philadelphia 76ers", "Toronto Raptors", "Chicago Bulls", "Cleveland Cavaliers", "Detroit Pistons", "Indiana Pacers", "Milwaukee Bucks", "Atlanta Hawks", "Charlotte Hornets", "Miami Heat", "Orlando Magic", "Washington Wizards", "Dallas Mavericks", "Houston Rockets", "Memphis Grizzlies", "New Orleans Pelicans", "San Antonio Spurs", "Denver Nuggets", "Minnesota Timberwolves", "Portland Trail Blazers", "Oklahoma City Thunder", "Utah Jazz", "Golden State Warriors", "Los Angeles Clippers", "Los Angeles Lakers", "Phoenix Suns", "Sacramento Kings"]
        
        $timeout(function(){
            def.resolve(teamList);  
        }, 50)        

        return def.promise;
    };

    this.getTeamData = function(teamName){
        var def = $q.defer();
        
        //TODO: Actually get this information from an external API
        $timeout(function(){
            if(teamData[teamName]){            
                def.resolve(teamData[teamName]);
            } else{
                def.reject("No such team found")
            }
        }, 50)

        return def.promise;
    }

    this.addNewGame = function(team, gameObj){
        var def = $q.defer();

        $timeout(function(){
            if(teamName && teamData[teamName]
                && gameObj.hasOwnProperty('createdAt')
                && gameObj.hasOwnProperty('homeTeam')
                && gameObj.hasOwnProperty('homeTeamScore')
                && gameObj.hasOwnProperty('opponent')
                && gameObj.hasOwnProperty('opponentScore')
                && gameObj.hasOwnProperty('won')
            ){
                teamData[team].push(gameObj);
                def.resolve('Succesfully added game data')
            } else{
                def.reject('Unable to push game data')
            }
        }, 50);

        return def.promise;
    }
})