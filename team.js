
class Team {
    constructor(name) {
        this.name = name;
        this.teamScore = 0;
        this.members = [];
    }
    registerPlayer() {
       this.members = this.members.push(new Player)
    }
}