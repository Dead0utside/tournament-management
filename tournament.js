import getRandomInt from "./getRandomInt.js";
import isPowerOfTwo from "./isPowerOfTwo.js";
import Game from "./game.js";

class Tournament {
	constructor(name, gameType) {
		this.name = name;
		this.gameType = gameType; // possible values: "round-robin", "knockout";
		this.teams = [];
		this.games = [];
	}

	registerTeam(team) {
		if (!this.teams.includes(team)) {
			this.teams.push(team);
		}
	}

	scheduleMatches() {
		if (this.gameType === "round-robin") {
			for (let i = 0; i < this.teams.length(); i++) {
				for (let j = i + 1; j < this.teams.length(); j++) {
					if (team1 != team2) {
						this.games.push(new Game(team1, team2));
					}
				}
			}
		} else if (this.gameType === "knockout") {
			if (!isPowerOfTwo(this.teams.length)) {
				throw new Error(
					"Cannot create schedule. The number of teams is not a power of 2"
				);
			}

			// Create a copy of the teams array to perform manipulations on
			let tmpTeams = [...this.teams];

			// Count the rounds
			let round = 0;
			if (this.games.length === 0) {
				while (tmpTeams.length > 0) {
					// Get 2 teams from the copy of team list
					let team1 = tmpTeams[getRandomInt(tmpTeams.length)];
					tmpTeams = tmpTeams.filter((item) => item !== team1);
					let team2 = tmpTeams[getRandomInt(tmpTeams.length)];
					tmpTeams = tmpTeams.filter((item) => item !== team2);

					// Create a new game with the two teams
					let tmpGame = new Game(team1, team2);

					// Determine a winner by random
					getRandomInt(2) === 0
						? (tmpGame.winner = team1)
						: (tmpGame.winner = team2);
					this.games.push(tmpGame);
					round++;
				}
			}

			// Testing
			console.log(this.games);
		} else {
			throw new Error("Invalid game type");
		}
	}
}

export default Tournament;
