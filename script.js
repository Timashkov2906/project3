"use strict";
let numberOfFilms;
function start(){
    numberOfFilms=+prompt("Сколько фильмов вы уже посмотрели", '');
    while (numberOfFilms==''|| numberOfFilms==null || isNaN(numberOfFilms)){
        numberOfFilms=+prompt("Сколько фильмов вы уже посмотрели", ''); 
    }
}
start();
const personalMovieDB  = {
count :numberOfFilms,
movies:{},
actors:{},
generas:[],
privat:false
};





function RememberOfFilms(){
    for (let i=0;i<2;i++){
        const  a=prompt('один из последних просмотренных фильмов', ''),
               b=prompt('На сколько оцените его?', '');
         if (a!=null && b!=null&& a!=''&& b!=''&& a.length<50){
             personalMovieDB.movies[a]=b;
             console.log("Done");}
         else {
             
             console.log('error');
             i--;
         }
     
     }
}
RememberOfFilms()

function detectPersonalLevel(){
    if (personalMovieDB.count<10){
        console.log("Просмотрено довольно мало фильмов");
    }
    else if (personalMovieDB.count>=10 && personalMovieDB.count<30){
        console.log("Вы классический зритель");
    }
    else if(personalMovieDB.count>=30) {
        console.log("Вы киноман"); 
    }
  
} 
detectPersonalLevel()
    // function calc(a,b){
        // return(a*b);
    // }
///}


/*const calc=(a,b)=>a+b;
let c=prompt("Введите первое число", '');
let d=prompt("Введите второе число", '');
console.log(calc(c,d));
*/
// const str ="Hello world";
// const num = "12.2px"
// console.log(str.length);
// console.log(str.indexOf("wor"));
// console.log(str.slice(6,11));
// const num1=parseFloat(num);
// console.log(Math.round(num1));
function showMyDB(hidden){
 if(!hidden){
      console.log(personalMovieDB)   
     }
    
    }
//}
showMyDB(personalMovieDB.privat);
function writeYourGeneres(){
    for (let i=1; i<=3;i++){
        
        personalMovieDB.generas[i-1]=prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGeneres();

 //RememberOfFilms();
 //detectPersonalLevel();
 