var apikey = {
    key: 'b5d2b574-aa0c-4978-956a-e954979e73e5'
}

fetch('pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY='+apikey)
    .then((response) => {
        if(!response.ok) throw new Error('Erro ao executar requisição, status '+response.status);
        return response.json();
    })
    .then((api) => {
        console.log(api);
    })
    .catch((error) => {
        console.error(error.message);
    });