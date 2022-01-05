import League from "../League.js";
import { footballTeams } from "../../Teams/FootballTeam/FootballTeam.js";


class FootballLeague extends League {
    constructor(leagueName) {
        super(leagueName);
        this.footballTeams = footballTeams;
        this.winners = [];
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
                console.log(`${ group[i][0][0].teamName } ${ homeGoals } - ${ awayGoals } ${ group[i][0][1].teamName }`);
                this.updateTeams(homeGoals, group[i][0][0], awayGoals, group[i][0][1]);
                
                homeGoals = this.generateGoals();
                awayGoals = this.generateGoals();
                console.log(`${ group[i][1][0].teamName } ${ homeGoals } - ${ awayGoals } ${ group[i][1][1].teamName }`);
                this.updateTeams(homeGoals, group[i][1][0], awayGoals, group[i][1][1]);
                console.log("");
                
                const groupMatches = group[i][0].concat(group[i][1]);
                this.ordeningTeam(groupMatches);
                
                console.table(groupMatches);
                
                if (i === numberOfRounds - 1) {
                    this.winners.push(groupMatches[0]);
                    this.winners.push(groupMatches[1]);                    
                }
            })
        }
    }
    
    updateTeams(homeGoals, homeTeam, awayGoals, awayTeam) {
        homeTeam.goalsFor += homeGoals;
        homeTeam.goalsAgainst += awayGoals;
        homeTeam.diffGoals = homeTeam.goalsFor - homeTeam.goalsAgainst;
        
        awayTeam.goalsFor += awayGoals;
        awayTeam.goalsAgainst += homeGoals;
        awayTeam.diffGoals = awayTeam.goalsFor - awayTeam.goalsAgainst;
        
        if (homeGoals > awayGoals) {
            homeTeam.matchesWon += 1;
            homeTeam.points += 3;
            awayTeam.matchesLost += 1;
            awayTeam.points += 0;
        } else if (homeGoals < awayGoals) {
            awayTeam.matchesWon += 1;
            awayTeam.points += 3;
            homeTeam.matchesLost += 1;
            homeTeam.points += 0;
        } else {
            homeTeam.matchesDraw += 1;
            homeTeam.points += 1;
            awayTeam.matchesDraw += 1;
            awayTeam.points += 1;
        }
    }
    
    ordeningTeam(groupMatches) {
        return groupMatches.sort((teamA, teamB) => {
            if (teamA.points > teamB.points) {
                return -1;
            } else if (teamA.points < teamB.points) {
                return 1;
            } else {
                
                if(teamA.diffGoals > teamB.diffGoals) {
                    return -1
                } else if (teamA.diffGoals < teamB.diffGoals) {
                    return 1
                } else {
                    
                    if (teamA.teamName < teamB.teamName) {
                        return -1
                    } else if (teamA.teamName > teamB.teamName) {
                        return 1
                    } else {
                        return 0
                    }
                }
            }
        })
    }
    
}

export const footballLeague = new FootballLeague("Liga Mundial");

