import Coup from "../Coup.js";
import { footballTeams } from "../../Teams/FootballTeam/FootballTeam.js";

class FootballCoup extends Coup {
    constructor(coupName, teams) {
        super(coupName);
        this.footballTeams = footballTeams;
        this.winnersTeams = [];
    }
    
    showParticipants() {
        this.footballTeams.forEach(footballTeam => {
            console.log(footballTeam.teamName);
        });
    }
    
    generateGoals() {
        return Math.floor(Math.random()* 9);
    }
    
    playMatch(homeTeam, awayTeam) {
        const result = {
            homeGoals : 0,
            awayGoals : 0,
            winner : undefined
        }
        do {
             result.homeGoals = this.generateGoals();
             result.awayGoals = this.generateGoals();
            if (result.homeGoals > result.awayGoals) {
                result.winner = homeTeam;
            } if (result.homeGoals < result.awayGoals) {
                result.winner = awayTeam;
            } else {
                continue;
            }
        } while (!result.winner)
        return result;
    }
    
    updateTeams(homeTeam, awayTeam, result) {
        homeTeam.goalsFor += result.homeGoals;
        homeTeam.goalsAgainst += result.awayGoals;
        
        awayTeam.goalsFor += result.awayGoals;
        awayTeam.goalsAgainst += result.homeGoals;
        
        if (homeTeam.teamName === result.winner) {
            homeTeam.matchesWon += 1;
            awayTeam.matchesLost += 1;            
        } else {
            awayTeam.matchesWon += 1;
            homeTeam.matchesLost += 1;       
        }
    }
    
    
    play(){
        console.log("==== Octavos de Final ====");
        this.roundOf16();
        console.log("=== Cuartos de Final ===");
        this.RoundOf8();
        console.log("=== Semifinales ===");
        this.RoundOf8(4);
        console.log("=== Final ===");
        this.RoundOf8(2);
        console.log(`El ganador de la ${footballCoup.coupName} es ${footballCoup.winnersTeams[0].teamName}`)
    }
    
    roundOf16(rounds = 16) {
        for (let i = 0; i < rounds; i += 2){
            const homeTeam = this.footballTeams[i];
            const awayTeam = this.footballTeams[i + 1];
            const result = this.playMatch(homeTeam.teamName, awayTeam.teamName);
            this.updateTeams(homeTeam, awayTeam, result);

            console.log(`${ homeTeam.teamName } ${ result.homeGoals } -- ${ awayTeam.teamName } ${ result.awayGoals } ==> ${ result.winner }`);
            
            if (homeTeam.teamName === result.winner) {
                this.winnersTeams.push(homeTeam);
            } else {
                this.winnersTeams.push(awayTeam);
            }
        }
    }
    
    RoundOf8(rounds = 8) {
        const winnersOfThisRound = [];
        for (let i = 0; i < rounds; i += 2){
            const homeTeam = this.winnersTeams[i];
            const awayTeam = this.winnersTeams[i + 1];
            const result = this.playMatch(homeTeam.teamName, awayTeam.teamName);
            this.updateTeams(homeTeam, awayTeam, result);
            
            console.log(`${ homeTeam.teamName } ${ result.homeGoals } -- ${ awayTeam.teamName } ${ result.awayGoals } ==> ${ result.winner }`);
            
            if (homeTeam.teamName === result.winner) {
                winnersOfThisRound.push(homeTeam);
            } else {
                winnersOfThisRound.push(awayTeam);
            }
        }
        this.winnersTeams = winnersOfThisRound;
    }
    
}

export const footballCoup = new FootballCoup("Copa Mundial");

