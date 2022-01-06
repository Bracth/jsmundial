 
// Hacemos el llamado de la api y guardamos los nombres de los equipos en un array //

import axios from "axios";

async function fetchTeams(url, amount = 16) {
    // const url = 'https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/es.1.clubs.json';

    let response = await axios.get(url)
    return response.data.clubs.map(club => club.name).slice(0, amount);
}

// utilice dos peticionesa porque cada una tenia un maximo de 20 equipos. asi que use 16 de cada uno y los uni en un solo array //

let response = await fetchTeams('https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/es.1.clubs.json');
let response2 = await fetchTeams('https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/es.2.clubs.json');

export const teamList = response.concat(response2);


