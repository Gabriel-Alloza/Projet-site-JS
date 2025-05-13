
//Fetchning data:
async function getData(){
    const rawData = await fetch("https://v2.jokeapi.dev/joke/Any?lang=fr");
    const data = await rawData.json();
    return data;
}



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

//Formulaire
function addNewData(){
    const article = document.querySelector('.container');

    const new_setup = document.forms["Ajout de blagues"]["setup"].value;
    const new_payoff = document.forms["Ajout de blagues"]["payoff"].value;

    const joke = document.createElement('div');
    joke.classList.add('joke');


    const setup = document.createElement('p');
    setup.textContent = new_setup

    const delivery = document.createElement('h3');
    delivery.textContent = new_payoff;

    joke.appendChild(setup);
    joke.appendChild(delivery);
    article.appendChild(joke);


}

//Gallerie
function galleryCollumn(){
    const gallery = document.querySelector('.gallerie');
    gallery.classList.add('col');
}

function galleryMosaic(){
    const gallery = document.querySelector('.gallerie');
    gallery.classList.remove('col');
}

function addNewImage(){
    const images = document.querySelector('.gallerie');

    const new_url = document.forms["Ajout_images"]["url"].value;
    const alt = document.forms["Ajout_images"]["alt"].value;

    const new_image = document.createElement('img');

    new_image.src = new_url;
    new_image.alt = alt;

    images.appendChild(new_image);

}