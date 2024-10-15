import Tournament from './tournament.js'
import Team from './team.js'

const tmt = new Tournament("name", "knockout");
const team1 = new Team("team1");
const team2 = new Team("team2");
const team3 = new Team("team3");
const team4 = new Team("team4");
const team5 = new Team("team5");
const team6 = new Team("team6");
const team7 = new Team("team7");
const team8 = new Team("team8");


tmt.registerTeam(team1);
tmt.registerTeam(team2);
tmt.registerTeam(team3);
tmt.registerTeam(team4);
tmt.registerTeam(team5);
tmt.registerTeam(team6);
tmt.registerTeam(team7);
tmt.registerTeam(team8);


tmt.scheduleMatches();