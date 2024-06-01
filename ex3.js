/*Scrieți o funcție pentru a găsi numărul de apariții al unei litere într-un șir
Funcția letterCount() returnează numărul de apariții al unei litere trimise ca parametru dintr-un șir dat.
*/

const letterCount = (str, letter) => {
    str = str.toLowerCase();
    let count = 0;
    for (i = 0; i < str.length; i++) {
        const el = str[i];
        if (letter.includes(el))
            count++
    }
    return count;
}

const str = "Îmi place programarea";
const str2 = "Vreau să lucrez în IT";
console.log(letterCount(str, "a"));
console.log(letterCount(str2, "u"));