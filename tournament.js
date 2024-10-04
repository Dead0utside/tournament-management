class Tournament {
    constructor(name, gameType) {
        this.name = name;
        this.gameType = gameType; // possible values: "round-robin", "kickout";
        this.teams = [];
        this.games = [];
    }

    registerTeam(team) {
        if (!this.teams.inclues(team)) {
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
        }
        else if (this.gameType === "knockout") {
            if (!Number.isInteger(Math.sqrt(this.teams.length()))) {
                throw new Exception("Cannot create schedule. The number of teams is not a power of 2");
            }
            let tmpTeams = [...this.teams];
            // TODO implement knockout scheduling
        }
        else {
            throw new Exception("Invalid game type");
        }
    }
}
