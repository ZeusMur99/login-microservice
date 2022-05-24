'use strict'

// function to write data to the browser
function addData(data){
    const p = document.createElement('p')
    p.textContent = "First: " + data['results'][0]['name']['first'] +
                    " Last: " + data['results'][0]['name']['last'] +
                    " Phone: " + data['results'][0]['phone'] + 
                    " Email: " + data['results'][0]['email'];
    const rpapi = document.getElementById("link-output");
    rpapi.appendChild(p);
}

function getData(url){
    return fetch(url)
            .then(response => response.json())
            .then(data => addData(data))
            .catch(error => console.error(error))
}

function registerHandlers(){
    function directLinkClick(){
        event.preventDefault();
        getData("https://randomuser.me/api/");
    }

    function expressLinkClick(){
        event.preventDefault();
        getData("http://localhost:3000/random-person")
    }

    document.getElementById("direct-link").addEventListener("click", directLinkClick);
    document.getElementById("express-link").addEventListener("click", expressLinkClick);
}

document.addEventListener("DOMContentLoaded", registerHandlers);

