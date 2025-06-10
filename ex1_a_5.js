/*******************************************************************/
/* EXERCICE 1 */

// let message = "hello";
// alert(message);

/*******************************************************************/
/* EXERCICE 2 */

// let partOne = "Hello";
// let partTwo = "World";
// alert(partOne + " " + partTwo);

/*******************************************************************/
/* EXERCICE 3 */

// let firstname = "Quentin";
// let age = 32;
// let city = "Caen"
// let message_v1 = "Je m'appelle " + firstname + ", j'ai " + age + " ans et j'habite à " + city + ".";
// let message_v2 = `Je m'appelle ${firstname}, j'ai ${age} ans et j'habite à ${city}` // utilisation de backsticks
// alert(message_v1);
// alert(message_v2);

/*******************************************************************/
/* EXERCICE 4 */

// let firstName = prompt("Quel est votre prénom ? ");
// let lastName = prompt("Quel est votre nom ? ");
// let age = prompt("Quel est votre age ? ");
// let emailAddress = prompt("Quel est votre adresse email ? ");
// alert(
//     "Nom : " + lastName +
//     "\nPrenom : " + firstName +
//     "\nAge : " + age +
//     " ans \nAdresse email : " + emailAddress
// );

/*******************************************************************/
/* EXERCICE 5 */

let nombre1;
let nombre2;
let valeurAddition;


// Methode 1
nombre1 = prompt("Entrez un nombre :");
nombre2 = prompt("Entrez un deuxième nombre :");
valeurAddition = Number(nombre1) + Number(nombre2)
alert("Methode 1 : Number()\nL'addition de ces deux nombres donne : " + valeurAddition)
alert( nombre1 + " + " + nombre2 + " = " + (Number(nombre1) + Number(nombre2)))

// Methode 1
nombre1 = Number(prompt("Entrez un nombre :"));
nombre2 = Number(prompt("Entrez un deuxième nombre :"));
valeurAddition = nombre1 + nombre2
alert("Methode 1 : Number()\nL'addition de ces deux nombres donne : " + valeurAddition)
alert( nombre1 + " + " + nombre2 + " = " + (nombre1 + nombre2))

// Methode 2
nombre1 = +prompt("Entrez un nombre :");
nombre2 = +prompt("Entrez un deuxième nombre :");
valeurAddition = nombre1 + nombre2
alert("Methode 2 : +unaire\nL'addition de ces deux nombres donne : " + valeurAddition)
// alert( nombre1 + " + " + nombre2 + " = " + (Number(nombre1) + Number(nombre2)))

// Methode 3
nombre1 = parseInt(prompt("Entrez un nombre :"));
nombre2 = parseInt(prompt("Entrez un deuxième nombre :"));
valeurAddition = nombre1 + nombre2
alert("Methode 3 : parseInt\nL'addition de ces deux nombres donne : " + valeurAddition)
alert(nombre1 + " + " + nombre2 + " = " + (nombre1 + nombre2))















