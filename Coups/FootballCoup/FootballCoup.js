import Coup from "../Coup.js";
import { footballTeams } from "../../Teams/FootballTeam/FootballTeam.js";


export default class FootballCoup extends Coup {
    constructor(coupName, footballTeams) {
        super(coupName);
        this.footballTeams = footballTeams;
        this.participatingTeams = footballTeams;
        this.partipipatingLossersTeams = [];
    }
    
    // metodo para mostrar los participantes de los playoff //
    
    showParticipants() {
        console.log("");
        this.footballTeams.forEach(footballTeam => {
            console.log(footballTeam.teamName);
        });
    }
    
    // metodo para generar goles //
    
    generateGoals() {
        return Math.floor(Math.random()* 9);
    }
    
    // metodo para jugar los partidos //
    
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
    
    // metodo para actualizar la informacion de los equipos //
    
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
    
    // metodo en donde mostramos los resultados y llamamos al metodo para jugar //
    
    play() {
        console.log("");
        console.log("======================== Octavos de Final =============================");
        this.roundOf(16);
        console.log("======================== Cuartos de Final =============================");
        this.roundOf(8);
        console.log("======================== Semifinales ==================================");
        this.roundOf(4);
        console.log("=========================== Terceros ===================================");
        this.roundOf(2, true);
        console.log("=========================== Final =======================================");
        this.roundOf(2);
        console.log("");
        console.log(`El ganador de la ${this.coupName} es ${this.participatingTeams[0].teamName}`)
    }
    
    // metodo que se encarga de recorrer la lista de equipos y emparejarlos para jugar //
    
    roundOf(rounds = 16, lossers = false) {
        const winnersTeams = [];
        const lossersTeams = [];
        for (let i = 0; i < rounds; i += 2) {
            let homeTeam;
            let awayTeam;
            if (lossers) {
             homeTeam = this.participatingLossersTeams[i];
             awayTeam = this.participatingLossersTeams[i + 1];
            } else {
             homeTeam = this.participatingTeams[i];
             awayTeam = this.participatingTeams[i + 1];
            }
            const result = this.playMatch(homeTeam.teamName, awayTeam.teamName);
            this.updateTeams(homeTeam, awayTeam, result);
            
            console.log(`${ homeTeam.teamName } ${ result.homeGoals } -- ${ awayTeam.teamName } ${ result.awayGoals } ==> ${ result.winner }`);
            
            if (homeTeam.teamName === result.winner) {
                winnersTeams.push(homeTeam);
                lossersTeams.push(awayTeam);
            } else {
                winnersTeams.push(awayTeam);
                lossersTeams.push(homeTeam);
            }
        }
        if (lossers) {
        } else {
             this.participatingTeams = winnersTeams;
             this.participatingLossersTeams = lossersTeams;
        }
        
    }
    
    
    
}

