/*Scrieți o funcție pentru a genera un număr aleatoriu mai mare sau egal 
cu o variabilă start și strict mai mic decât o variabilă end . 
Aceste două variabile sunt capetele intervalului pentru numărul general: [start, end)
*/

const getRandomNumber = (start, end) => {
    return Math.random() * (end - start ) + start;
};
// Nu ne va da un numar intreg 
console.log(getRandomNumber(3, 5)); 

const getRandomNumber2 = (start, end) => {
    return Math.floor(getRandomNumber(start, end));
};
 //Cu math floor ne va da un numar intreg 
console.log(getRandomNumber2(3, 5)); 

const returnRandomNum = "Acesta este un numar >= 3 si < 5: " + getRandomNumber2 (3,5);
console.log(returnRandomNum);