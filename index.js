import {footballCoup} from "./Coups/FootballCoup/FootballCoup.js"
import { footballTeams } from "./Teams/FootballTeam/FootballTeam.js";
import { footballLeague } from "./League/FootballLeague/FootballLeague.js";

// Indicacion de que el torneo a comenzado //

console.log("Iniciamos el torneo");

// Iniciamos la liga//

footballLeague.makingSchedule();
footballLeague.showSchedule();

// Mostramos los equipos participantes //


// footballCoup.showParticipants();

// Mostramos los resultados de los partidos //

// footballCoup.play();


// Mostramos final y ganador de la copa //


