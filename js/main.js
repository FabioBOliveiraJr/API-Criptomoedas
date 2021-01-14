/*var apikey = {
    key: 'b5d2b574-aa0c-4978-956a-e954979e73e5'
}*/

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=b5d2b574-aa0c-4978-956a-e954979e73e5')
    .then((response) => {
        if(!response.ok) throw new Error('Erro ao executar requisição, status '+response.status);
        return response.json();
    })
    .then((api) => {
        var texto = "";
        for (let i=0;i<10;i++){
            texto = texto + `
            <div class="media">
                <img src="coin.jpg" alt="coin" class="align-self-center mr-3" width="166" height="100">
                <div class="media-body">
                    <h5 class="mt-2">${api.data[i].name}</h5>
                    <p>${api.data[i].symbol}</p>
                    <p>${api.data[i].first_historical_data}
                </div>
            </div>
            `;
            document.getElementById("coins").innerHTML = texto
        }
    })
    .catch((error) => {
        console.error(error.message);
    });