async function getData(){
    const rawData = await fetch("https://v2.jokeapi.dev/joke/Any?lang=fr");
    const data = await rawData.json();
    return data;
}

console.log(getData());

async function displayData(){
    const article = document.querySelector('.container');

    for(i=0; i<= 5; i++){
        const data = await getData();
        const setup = document.createElement('p');
        setup.textContent = data.setup;

        const delivery = document.createElement('h3');
        delivery.textContent = data.delivery;

        article.appendChild(setup);
        article.appendChild(delivery);
    }
}

displayData();