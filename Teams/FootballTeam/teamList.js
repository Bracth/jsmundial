// Hacemos el llamado de la api y guardamos los nombres de los equipos en un array //

import axios from "axios";

async function fetchTeams(amount = 16) {
    const url = 'https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/it.1.clubs.json';

    let response = await axios.get(url)
    return response.data.clubs.map(club => club.name).slice(0, amount);
}

export const teamList = await fetchTeams();
