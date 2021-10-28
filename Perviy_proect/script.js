"use strict";
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
    }
}
start();


const personaMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};


 


function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        let a = prompt("Один из последних просмотренных фильмов?"),
            b = prompt("На сколько его оцените?");
        if ( a != null && a != "" && a.length < 50 && b != null && b != "" && b.length < 50){
            personaMovieDB.movies [a] = b;
        } else {
           i--;
        
     }
    }
}

// rememberMyFilms();


function detectedPersonalLVL(){
    if (numberOfFilms < 10){
        alert ("Prosmotreno malo");
    } else if(numberOfFilms >10 && numberOfFilms < 30){
        alert ("You are classic whatcher");
    } else {
        alert(" you are cinemafan");
    }
}
// detectedPersonalLVL();


function showMyDB(){
    if (personaMovieDB.privat == false){
        console.log(personaMovieDB);
    }
}
showMyDB();


function writeYuorGenres(){
    for (let i = 1; i < 4; i++ ){
        let genr = prompt(`Ваш любимый жанр под номером ${i}?`);
        personaMovieDB.genres[i-1] = genr;
    }
}
writeYuorGenres();