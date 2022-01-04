import {footballCoup} from "./Coups/FootballCoup/FootballCoup.js"
import { footballTeams } from "./Teams/FootballTeam/FootballTeam.js";
import { footballLeague } from "./League/FootballLeague/FootballLeague.js";

// Indicacion de que el torneo a comenzado //

console.log("Iniciamos el torneo");

// Iniciamos la liga//

footballLeague.makingSchedule();
console.log("Grupo A")
console.log(footballLeague.schedule[0]);
console.log("Grupo B")
console.log(footballLeague.schedule[1]);
console.log("Grupo C")
console.log(footballLeague.schedule[2]);
console.log("Grupo D")
console.log(footballLeague.schedule[3]);

// Mostramos los equipos participantes //


// footballCoup.showParticipants();

// Mostramos los resultados de los partidos //

// footballCoup.play();


// Mostramos final y ganador de la copa //


