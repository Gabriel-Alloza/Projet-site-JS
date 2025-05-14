
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
    joke.classList.add("user_made");


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

//Ajout images
function addNewImage(){
    const images = document.querySelector('.gallerie');

    const new_url = document.forms["Ajout_images"]["url"].value;
    const alt = document.forms["Ajout_images"]["alt"].value;

    const new_image = document.createElement('img');
    new_image.classList.add("user_made");

    new_image.src = new_url;
    new_image.alt = alt;

    images.appendChild(new_image);

}

//suppréssion d'articles ou d'images
function SupprUserMades(){
    const user_mades = document.getElementsByClassName("user_made");
    const to_delete = user_mades[user_mades.length-1];
    to_delete.remove();
}

//carousel
function initiateCarousel(){
    navigateCarousel(0, 1);
}

function moveToTheRight(){
    let carousel = document.getElementsByClassName("slide");
    let active_slide_num;
    for(i=0; i<carousel.length; i++){
        if(carousel[i].classList.contains("show")){
            active_slide_num = i;
        }
    }
    if(active_slide_num+1>carousel.length-1){
        navigateCarousel(0, active_slide_num);
    }
    else{
    navigateCarousel(active_slide_num+1, active_slide_num);
    }
}


function moveToTheLeft(){
    let carousel = document.getElementsByClassName("slide");
    let active_slide_num;
    for(i=0; i<carousel.length; i++){
        if(carousel[i].classList.contains("show")){
            active_slide_num = i;
        }
    }
    if(active_slide_num-1 < 0){
        navigateCarousel(carousel.length-1, active_slide_num);
    }
    else{
    navigateCarousel(active_slide_num-1, active_slide_num);
    }
}

function navigateCarousel(n, prev_n){
    let carousel = document.getElementsByClassName("slide");
    if(carousel[prev_n].classList.contains("show")){
        carousel[prev_n].classList.remove("show");
    }
    carousel[n].classList.add("show");

}


//Jeux
function getComputerChoice(){
    var choice = Math.round(Math.random()*2);
    if(choice === 0){
        return "Caillou";
    }
    else if(choice === 1){
        return "Papier";
    }
    else{
        console.log("coucou");
        return "Ciseaux";
    }
}


function playGame(){

    const comp_choice = getComputerChoice();
    const page = document.getElementsByClassName("jeux");
    rep = document.createElement('p');
    rep.classList.add("rep")
    const player = document.forms["jeu"]["joueur"].value;
    if(player != "Papier" && player != "Caillou" && player != "Ciseaux"){
        rep.textContent = "Tu l'a mal rentré lol";
    }
    else if(player === "Papier"){
        if(comp_choice === "Caillou"){
            rep.textContent = "T'as gagné";
        }
        else if(comp_choice === "Ciseaux"){
            rep.textContent = "T'as perdu!";
        }
        else{
            rep.textContent = "Egalité!";
        }
    }

        else if(player === "Caillou"){
        if(comp_choice === "Ciseaux"){
            rep.textContent = "T'as gagné";
        }
        else if(comp_choice === "Papier"){
            removeEventListener.textContent = "T'as perdu!";
        }
        else{
            rep.textContent = "Egalité!";
        }
    }

        else {
        if(comp_choice === "Ciseaux"){
            rep.textContent = "T'as gagné";
        }
        else if(comp_choice === "Caillou"){
            removeEventListener.textContent = "T'as perdu!";
        }
        else{
            rep.textContent = "Egalité!";
        }
    }

    page[0].appendChild(rep);
}



