import League from "../League.js";
import { footballTeams } from "../../Teams/FootballTeam/FootballTeam.js";


class FootballLeague extends League {
    constructor(leagueName) {
        super(leagueName);
        this.footballTeams = footballTeams;
        
    }
    
    makingSchedule(participatingTeams = 4, numberOfGroups = 8) {
        let counterForTeamsGroups = 0;
        for (let groupCounter = 0; groupCounter < numberOfGroups; groupCounter++) {
            const group = [];
            let homeTeamCounter = 0;
            let awayTeamCounter = 0;
            for (let i = 0; i < participatingTeams - 1; i++) {
                const round = [];
                for (let j = 0; j < participatingTeams / 2; j++) {
                    const match = [];
                    if (homeTeamCounter < 3) {
                        match.push(this.footballTeams[(homeTeamCounter) + counterForTeamsGroups].teamName);
                        homeTeamCounter++;
                    } else {
                        homeTeamCounter = 0;
                        match.push(this.footballTeams[(homeTeamCounter) + counterForTeamsGroups].teamName);
                        homeTeamCounter++;
                    } if (j === 0) {
                        match.push(this.footballTeams[(participatingTeams - 1) + counterForTeamsGroups].teamName);
                    } else if (awayTeamCounter < participatingTeams - 1) {
                        match.push(this.footballTeams[((participatingTeams - 2) - awayTeamCounter) + counterForTeamsGroups].teamName);
                        awayTeamCounter++;
                    } else {
                        awayTeamCounter = 0;
                        match.push(this.footballTeams[((participatingTeams - 2) - awayTeamCounter) + counterForTeamsGroups].teamName);
                        awayTeamCounter++;
                    }
                    round.push(match);
                }
                group.push(round);
            }
            this.schedule.push(group);
            counterForTeamsGroups += participatingTeams;
        }
    }
}

export const footballLeague = new FootballLeague("Liga Mundial");

