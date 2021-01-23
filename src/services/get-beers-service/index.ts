const API_URL = 'https://api.punkapi.com/v2/beers';

function getBeersService() : Promise<any> {
    return(async() => {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await response.json();
        return data;
    })();
}

export default getBeersService;