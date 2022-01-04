import League from "../League.js";
import { footballTeams } from "../../Teams/FootballTeam/FootballTeam.js";


class FootballLeague extends League {
    constructor(leagueName) {
        super(leagueName);
        this.footballTeams = footballTeams;
        
    }
    
     generateGoals() {
        return Math.floor(Math.random()* 9);
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
                        match.push(this.footballTeams[(homeTeamCounter) + counterForTeamsGroups]);
                        homeTeamCounter++;
                    } else {
                        homeTeamCounter = 0;
                        match.push(this.footballTeams[(homeTeamCounter) + counterForTeamsGroups]);
                        homeTeamCounter++;
                    } if (j === 0) {
                        match.push(this.footballTeams[(participatingTeams - 1) + counterForTeamsGroups]);
                    } else if (awayTeamCounter < participatingTeams - 1) {
                        match.push(this.footballTeams[((participatingTeams - 2) - awayTeamCounter) + counterForTeamsGroups]);
                        awayTeamCounter++;
                    } else {
                        awayTeamCounter = 0;
                        match.push(this.footballTeams[((participatingTeams - 2) - awayTeamCounter) + counterForTeamsGroups]);
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
    
    showSchedule() {
        let count = 0;
        this.schedule.forEach((group, index) => {
            console.log("");
            console.log(`Grupo ${ index + 1 }`)
            console.log("=====================================")
            console.log(this.footballTeams[0 + count].teamName)
            console.log(this.footballTeams[1 + count].teamName)
            console.log(this.footballTeams[2 + count].teamName)
            console.log(this.footballTeams[3 + count].teamName)
            
            group.forEach((round, roundIndex) => {
                    console.log("");
                    console.log(`Jornada ${ roundIndex + 1 }:`)
                    
                    round.forEach(match => {
                        console.log(`- ${match[0].teamName} VS ${match[1].teamName}`)
                    });
                })
            count += 4;
        });
    
    }
    
    playLeague() {
        const numberOfRounds = this.schedule[0].length;
        for (let i = 0; i < numberOfRounds; i++){
            this.schedule.forEach((group, index) => {
                console.log(`Grupo ${ index + 1 } - Jornada ${ i + 1 }:`)
                console.log("----------------------------")
                
                let homeGoals = this.generateGoals();
                let awayGoals = this.generateGoals();
                console.log(`${ group[i][0][0].teamName } ${homeGoals} - ${awayGoals} ${ group[i][0][1].teamName }`);
                
                homeGoals = this.generateGoals();
                awayGoals = this.generateGoals();
                console.log(`${ group[i][1][0].teamName } ${homeGoals} - ${awayGoals} ${ group[i][1][1].teamName }`);
                console.log("");
            })
        }
    }
    
}

export const footballLeague = new FootballLeague("Liga Mundial");

