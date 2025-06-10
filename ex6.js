/*******************************************************************/
/* EXERCICE 6 */


// let secret;
let secret = "mot de passe";
// alert("Le type de la variable secret est : " + typeof(secret))
alert(`Le type de la variable secret est : ${typeof(secret)}`);

secret = 777;
alert(`Le type de la variable secret est : ${typeof(secret)}`);
// Le type de la variable s'est adapté à la nouvelle valeur de la variable.

let nom = "BOND";
let booleanValue = true;
let nombre = 85;
const PI = 3.14;
let dateValue = new Date();

alert(
    `La variable nom est de type ${typeof(nom)}` + 
    `\nLa variable booleanValue est de type ${typeof(booleanValue)}` + 
    `\nLa variable nombre est de type ${typeof(nombre)}` + 
    `\nLa constance PI est de type ${typeof(PI)}` + 
    `\nLa variable dateValue est de type ${typeof(dateValue)}`
);

let varIndefinie;
alert(`La variable varIndefinie est de type ${typeof(varIndefinie)}`);


const INCORRUPTIBLE = "Président";
console.log(INCORRUPTIBLE);
INCORRUPTIBLE = "Sénateur";
console.log(INCORRUPTIBLE);
// Nous avons un message d'erreur car nous tentons de modifier une constance.
// ex6.js:34 Président
// ex6.js:36 Uncaught TypeError: Assignment to constant variable.
//     at ex6.js:36:15
// (anonymous) @ ex6.js:36

