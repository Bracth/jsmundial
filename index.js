import { footballLeague } from "./League/FootballLeague/FootballLeague.js";
import FootballCoup from "./Coups/FootballCoup/FootballCoup.js";

// Indicacion de que el torneo a comenzado //

console.log("Iniciamos el torneo");

// Iniciamos la liga//

footballLeague.makingSchedule();
footballLeague.showSchedule();
footballLeague.playLeague();

const footballCoup = new FootballCoup("Copa Mundial", footballLeague.winners);

// Mostramos los equipos participantes del playoff //

console.log("");
console.log("equipos que van a participar en la playOff")
footballCoup.showParticipants();

// Mostramos los resultados de los partidos y ganador de la copa//

footballCoup.play();



