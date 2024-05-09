import { getKeres } from "./async.js";

console.log("1. üzenet");

getKeres("adatok.json", megjelenit1);
    

console.log("2. üzenet");

getKeres("https://www.boredapi.com/api/activity", megjelenitBored)
getKeres("https://pokeapi.co/api/v2/pokemon/ditto", megjelenitPokemon)

function megjelenit1(adat){
    console.log(adat);
}

function megjelenitBored(adat){
    $("body").append(`<h1>Mit csináljak ha unatkozok? Tippek időtöltéshez:</h1>`)
    $("body").append(`<h2>Tevékenységek:${adat.activity}</h2>`)
    $("body").append(`<p>Minimum lérszám:${adat.participants}</p>`)
    $("body").append(`<p>${adat.type}</p>`)
}

function megjelenitPokemon(adat){
    $("body").append(`<h1>Pokemon</h1>`)
    $("body").append(`<h2>Név: ${adat.name}</h2>`)
    $("body").append(`<img src="${adat.sprites.front_default}" alt="">`)
}

