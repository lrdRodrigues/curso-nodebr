const axios = require('axios')
const URL = `https://swapi.co/api`

async function obterPessoas(nome) {
    const url = `${URL}/people/?search=${nome}&format=json`
    const response = await axios.get(url)
    return response.data
}

module.exports = {
    obterPessoas
}

