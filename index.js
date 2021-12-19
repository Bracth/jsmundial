import {teams} from "./Teams/teams.js";

class Team{
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.winMatches = 0;
        this.drawMatches = 0;
        this.loseMatches = 0;
    }
    
    showName() {
        console.log(this.name)
    }
}

const bulls = new Team("Chicago Bulls");
bulls.showName();