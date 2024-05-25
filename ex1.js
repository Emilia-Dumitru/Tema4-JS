/*Scrieți o funcție care returnează pătratul unui număr
Funcția findSquare(num) returnează pătratul numărului primit ca date de intrare (este transmis ca argument în apelul funcției).
*/
const getSquareNumbers = (number) => number ** 2;
const number = 6;
const result= getSquareNumbers(number);
console.log(result);

// Simple method
const findSquare = (number) => number **2;
console.log(findSquare(-18));

//Using Math.pow Function
const findSquareNum =(number)=>{
    return Math.pow (number, 2);
}
console.log (findSquareNum(5));