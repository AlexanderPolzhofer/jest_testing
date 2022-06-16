const fetch = require('node-fetch');

//promise
const getPeoplePromise = fetch => {
    return fetch('https://swapi.dev/api/people')
        .then(response => response.json())
        .then(data => {

            return {
                count: data.count,
                results: data.results
            }
        })
}

//async
const getPeople = async (fetch) => {
    const getRequest = await fetch('https://swapi.dev/api/people')
    const data = await getRequest.json();

    const { count, results } = data;
    return {
        count,
        results
    }
}

module.exports = {
    getPeoplePromise,
    getPeople
}
