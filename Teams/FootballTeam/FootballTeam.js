// Tomamos el array con los nombres de los equipos y creamos los equipos de football//

import Team from "../Team.js";
import { teamList } from "./teamList.js";

class FootballTeam extends Team{
    constructor(teamName) {
        super(teamName)
        this.points = 0;
        this.goalsFor = 0;
        this.goalsAgainst = 0;
    }
}

const footballTeams = teamList.map(teamName => new FootballTeam(teamName));

console.log(footballTeams);