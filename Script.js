
//Fetchning data:
async function getData(){
    const rawData = await fetch("https://v2.jokeapi.dev/joke/Any?lang=fr");
    const data = await rawData.json();
    return data;
}

console.log(getData());

async function displayData(){
    const article = document.querySelector('.container');

    for(i=0; i<= 50; i++){
        const data = await getData();

        const joke = document.createElement('div');
        joke.classList.add('joke');


        const setup = document.createElement('p');
        setup.textContent = data.setup;

        const delivery = document.createElement('h3');
        delivery.textContent = data.delivery;

        joke.appendChild(setup);
        joke.appendChild(delivery);
        article.appendChild(joke);
    }
}

displayData();


//dropdown
function showDropdown(){
    const liste = document.querySelector('.liste');
    liste.classList.add('show');
}

function hideDropdown(){
    const liste = document.querySelector('.liste');
    liste.classList.remove('show');
}

window.addEventListener("click", function(e) {
    if (!e.target.matches("button")) {
      hideDropdown();
    }
});