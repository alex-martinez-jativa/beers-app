const API_URL = 'https://api.punkapi.com/v2/beers?per_page=10';

function getBeersService(page: number) : Promise<any> {
    return(async() => {
        const response = await fetch(`${API_URL}&page=${page}`, {
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