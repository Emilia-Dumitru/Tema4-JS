/*Scrieți o funcție pentru a adăuga numere nelimitate
Funcția addNumber() returnează suma tuturor numerelor transmise ca argumente funcției. 
Numărul de argumente nu este definit. Se poate transmite un număr nelimitat de numere.
*/
const addNumber = (...argumente) => {
    const initialValue = 0;
    const sum = argumente.reduce((accumulator , currentValue) => accumulator + currentValue, initialValue);
    return sum;
}
const args = addNumber(1,2,3);
const args2 = addNumber(1,2,3,4,5);

console.log(args); // 6
console.log (args2); // 15
