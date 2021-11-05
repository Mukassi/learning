"use strict";
let personaMovieDB = {
    count : 0,
    movies : {},
    actors : {},
    genres : [],
    privat : true,
    start: function() {
        personaMovieDB.count = +prompt("Сколько фильмов вы посмотрели?", "");
    
        while (personaMovieDB.count == "" || personaMovieDB.count == null || isNaN(personaMovieDB.count)){
            personaMovieDB.count = +prompt("Сколько фильмов вы посмотрели?", "");
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++){
            let a = prompt("Один из последних просмотренных фильмов?"),
                b = prompt("На сколько его оцените?");
            if ( a != null && a != "" && a.length < 50 && b != null && b != "" && b.length < 50){
                personaMovieDB.movies [a] = b;
            } else {
               i--;
            
         }
        }
    },
    detectedPersonalLVL: function(){
   
        if (personaMovieDB.count < 10){
            alert ("Просмотрено мало");
        }  
         else if(personaMovieDB.count >10 && personaMovieDB.count < 30){
            alert ("Вы классический зритель");
        } else if(personaMovieDB.count >= 30){
            alert("Вы киноман!");
        } else {
            alert ("произошла ошибка"); 
            }
        
    },
    showMyDB: function(hidden){
        if (!hidden){
            console.log(personaMovieDB);
        }
    },
    toggleVisibleMyDB: function(){
        if(personaMovieDB.privat == true){
            personaMovieDB.privat = false;
        } else  if(personaMovieDB.privat == false) {
            personaMovieDB.privat = true;
        }
    },
    writeYourGenres: function(){
        for (let i = 1; i < 4; i++ ){
            let genre = prompt(`Ваш любимый жанр под номером ${i}?`);
            if (genre === null|| genre === ""){
                console.log("Вы ввели некоретные данный или не ввели их вообще");
                i--;
            }
            personaMovieDB.genres[i-1] = genre;
        }

        personaMovieDB.genres.forEach((item, i) => {console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
    
};

