'use strict';

// Код возьмите из предыдущего домашнего задания
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?',''); 

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    ganres: [],
    privat: false
};
if (personalMovieDB.count < 10) {
 console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30 ) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}



for (let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов?', '');
    let b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
    } else {
        console.log('error');
         i--;
    }
    
}

console.log(personalMovieDB);

function show(text) {
    console.log(text);
}
show('Hello');


const logg = "Так и думал чот";
console.log(logg.substr(6,10));



