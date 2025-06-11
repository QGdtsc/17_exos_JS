/*******************************************************************/
/* EXERCICE 1 */

// let age = (prompt("Quel est votre age ?"));
// if (parseInt(age)) {
//     if (age >= 18) {
//         alert("L'utilisateur est majeur.");
//     }
//     else {
//         alert("L'utilisateur est mineur.");
//     }
// } 
// else { 
//     alert("Veuillez entrer un nombre entier.") 
// }

/*******************************************************************/
/* EXERCICE 2 */

// // Methode 1
// let number = (prompt("Veuillez entrer un nombre entier."))
// if (Number.isInteger(Number(number)) && number != "") {
//     // alert("C'est un entier.")
//     if (number % 2 ==0) {
//         alert("Le nombre est pair.")
//     }
//     else { 
//         alert("Le nombre est impair.")
//     }
// }
// else {
//     alert("Ce n'est pas un entier.")
// }

// // Methode 2
// let number = (prompt("Veuillez entrer un nombre entier."))
// if (isNaN(parseInt(number)) == false && number != "") {
//     if (number % 2 == 0) {
//         alert("Le nombre est pair.")
//     }
//     else {
//         alert("Le nombre est impair.")
//     }
// }
// else {
//     alert("Ce n'est pas un entier.")
// }

/*******************************************************************/
/* EXERCICE 3 */

// let password = "abc"
// let passwordUser = prompt("Veuillez entrer le mot de passe.")

// if (passwordUser == password) {
//     alert("Hello Mr Anderson.")
// }
// else {
//     alert("Mauvais mot de passe.")
// }

/*******************************************************************/
/* EXERCICE 4 */

// let genre = prompt("Quel est votre genre ? (Entrez h ou f)").toLowerCase()
// if (genre == "h" || genre == "homme") genre = "homme"
// else if (genre == "f" || genre == "femme") genre = "femme"
// else genre = "Saisie invalide"
// if (genre != "Saisie invalide") {
//     let age = prompt("Quel est votre age ? (Entrez un nombre entier)")
//     let maturite;
//     if (Number.isInteger(Number(age)) && age != "")
//         if (age >= 18) {
//             maturite = 'majeur'
//         }
//         else {
//             maturite = 'mineur'
//         }
//     else {
//         maturite = "Saisie invalide"
//     }
//     console.log(`L'utilisateur est de sexe ${genre} et ${maturite}`)
// }

/*******************************************************************/
/* EXERCICE 5 */

// let total = 0
// let moyenne = -1
// let i = 0
// for (i=0; i<5; i++) {
//     note = prompt(`Entrez la note #${i+1} : \n\n(Pour annuler la saisie, tapez "quit")`)
//     console.log(note)
//     if (note == "quit")
//     {
//         break
//     }
//     if ((note < 0 || note > 20) || note == "") {
//         alert("Note invalide, veuillez entrer une note entre 0 et 20.")
//         i--
//     }
//     note = parseFloat(note)
//     console.log(typeof note)
//     total += note
// }
// moyenne = total / i
// console.log(`total est égal a ${total}`)
// console.log(`i est égal à ${i}`)
// console.log(`moyenne est égale a ${moyenne}`)
// if (moyenne > 18)
// {
//     alert("Félicitation.")
// }
// else if (moyenne >= 14)
// {
//     alert("Excellent trimestre.")
// }
// else if (moyenne >= 11 )
// {
//     alert("Bon trimestre.")
// }
// else if (moyenne >= 6)
// {
//     alert("Trimestre moyen.")
// }
// else if (moyenne >= 1)
// {
//     alert("Trimestre insuffisant.")
// }
// else
// {
//     alert("Un rendez-vous sera programmé en raison de la moyenne.")
// }

/*******************************************************************/
/* EXERCICE 6 */

// let nombre = prompt("Entrez le numéro d'un mois (entier de 1 à 12) :")
// if (Number.isInteger(Number(nombre)) && (nombre > 0 && nombre <= 12)) {
//     // console.log("C'est un nombre entier entre 1 et 12.")
//     switch (parseInt(nombre)) {
//         case 1:
//             console.log("Janvier")
//             break
//         case 2:
//             console.log("Février")
//             break
//         case 3:
//             console.log("Mars")
//             break
//         case 4:
//             console.log("Avril")
//             break
//         case 5:
//             console.log("Mai")
//             break
//         case 6:
//             console.log("Juin")
//             break
//         case 7:
//             console.log("Juillet")
//             break
//         case 8:
//             console.log("Aout")
//             break
//         case 9:
//             console.log("Septembre")
//             break
//         case 10:
//             console.log("Octobre")
//             break
//         case 11:
//             console.log("Novembre")
//             break
//         case 12:
//             console.log("Décembre")
//             break
//     }
// }
// else {
//     alert("Vous n'avez pas entré un nombre entier entre 1 et 12.")
// }

/*******************************************************************/
/* EXERCICE 7 */

// let nombre
// do {
//     nombre = prompt("Entrez un nombre entier : ")
// } while (Number.isInteger(Number(nombre)) == false || nombre == "")

// if (nombre != 0) {
//     console.log((nombre % 2 == 0 ? "nombre pair" : "nombre impair"))
// }

/*******************************************************************/
/* EXERCICE 8 */

validation = window.confirm("En cliquant sur OK, je confirme.")
validation ? console.log("L'utilisateur a cliqué sur ok") : console.log("L'utilisateur n'a pas validé") // avec ternaire
if (validation == true) // avec if else
{
    answer = "L'utilisateur a cliqué sur OK."
}
else
{
    answer = "L'utilisateur n'a pas validé."
}
console.log(answer)