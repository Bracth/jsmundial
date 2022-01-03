import League from "../League.js";
import { footballTeams } from "../../Teams/FootballTeam/FootballTeam.js";


class FootballLeague extends League {
    constructor(leagueName) {
        super(leagueName);
        this.footballTeams = footballTeams;
        
    }
    
    makingSchedule(participatingTeams = 4) {
        const fixture = [];
        let teamCounter = 0;
        for (let i = 0; i < participatingTeams - 1; i++){
            const round = [];
            for (let j = 0; j < participatingTeams / 2; j++) {
                const match = [];
                if (teamCounter < 3) {
                    match.push(this.footballTeams[teamCounter].teamName);
                    match.push(this.footballTeams[3].teamName);
                    teamCounter++;
                } else {
                    teamCounter = 0;
                    match.push(this.footballTeams[teamCounter].teamName);
                    match.push(this.footballTeams[3].teamName);
                    teamCounter++;
                }
                round.push(match);
            }      
            fixture.push(round);            
        }
        this.schedule = fixture;
    }
}

export const footballLeague = new FootballLeague("Liga Mundial");

