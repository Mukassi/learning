let numberOfFilms = prompt("Сколько фильмов вы посмотрели?", "");



let personaMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};



let one = prompt("Один из последних просмотренных фильмов?");
let star = prompt("На сколько его оцените?");

personaMovieDB.movies [one] = star;

console.log (personaMovieDB);