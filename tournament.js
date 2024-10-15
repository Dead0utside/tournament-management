

/*const createrOW=()=>{
    const table=document.getElementById("round-robin")
    const row=document.createElement("tr")
    const cell1=document.createElement("td")
    const cell2=document.createElement("td")
    const cell3=document.createElement("td")
    const cell4=document.createElement("td")
    cell1.innerHTML="Team 10"
    cell2.innerHTML="Team 2"
    cell3.innerHTML="Team 3"
    cell4.innerHTML="Team 4"
    row.appendChild(cell1)
    row.appendChild(cell2)
    row.appendChild(cell3)
    row.appendChild(cell4)
    table.appendChild(row)

} 
createrOW()*/

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




