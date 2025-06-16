/*******************************************************************/
/* EXERCICE 1 */

// let listMonth = [
//     "Janvier",
//     "Fevrier",
//     "Mars",
//     "Avril",
//     "Mai",
//     "Juin",
//     "Juillet",
//     "Aout",
//     "Septembre",
//     "Octobre",
//     "Novembre",
//     "Decembre",
// ]
// for (i = 0; i < 12; i++) {
//     console.log(listMonth[i])
// }
// console.log(listMonth)
// console.table(listMonth)

/*******************************************************************/
/* EXERCICE 2 */

// let listDay=[
//     "Lundi",
//     "Mardi",
//     "Mercredi",
//     "Jeudi",
//     "Vendredi",
//     "Samedi",
//     "Dimanche"
// ]
// console.log(listDay[4])

/*******************************************************************/
/* EXERCICE 3*/

// let listDay=[
//     "Lundi",
//     "Mardi",
//     "Mercredi",
//     "Jeudi",
//     "Vendredi",
//     "Samedi",
//     "Dimanche"
// ]
// console.log(listDay[5])

/*******************************************************************/
/* EXERCICE 4 */

// let listMonth = [
//     "Janvier",
//     "Fevrier",
//     "Mars",
//     "Avril",
//     "Mai",
//     "Juin",
//     "Juillet",
//     "Aout",
//     "Septembre",
//     "Octobre",
//     "Novembre",
//     "Decembre",
// ]
// // avec boucle for
// for ( let i = 0; i < 12; i++) {
//     console.log(i + 1 + " - " + listMonth[i]) // utilisation de i+1 pour le numero a afficher car le 1er element de la liste est 0
// }
// // avec boucle foreach
// // let i = 1
// listMonth.forEach((value, index) => {
//     index++
//     console.log(index + " - " + value)
//     // i++
// });


// console.log("\n\n\n\n")
// // ou
// listMonth.forEach((value, index) => {
//     console.log((index + 1) + " - " + value)
// });

// console.log("\n\n\n\n")
// // ou
// listMonth.forEach(value => {
//     console.log((listMonth.indexOf(value) + 1) + " - " + value)
// });


/*******************************************************************/
/* EXERCICE 5 */

// let frenchMonth = [
//     "Janvier",
//     "Fevrier",
//     "Mars",
//     "Avril",
//     "Mai",
//     "Juin",
//     "Juillet",
//     "Aout",
//     "Septembre",
//     "Octobre",
//     "Novembre",
//     "Decembre",
// ]
// let frenchDay = [
//     "Lundi",
//     "Mardi",
//     "Mercredi",
//     "Jeudi",
//     "Vendredi",
//     "Samedi",
//     "Dimanche"
// ]
// let englishMonth = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
// ]
// let englishDay = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday"
// ]


// let aggregatedArray = [
//     frenchMonth,
//     frenchDay,
//     englishMonth,
//     englishDay,
// ]
// // Afficher Novembre (11eme (donc 10) element du tableau frenchMonth (qui est les 1er (donc 0) array))
// console.log(aggregatedArray[0][10])
// // Afficher Friday (englishDay[4] qui est le 4eme tableau(donc 3))
// console.log(aggregatedArray[3][4])
// // Afficher tous les mois en anglais
// // console.log(aggregatedArray[2])
// // ou
// let str_result = ""
// max_ctr = 11
// for (i = 0; i <= max_ctr; i++) {
//     i == max_ctr ? str_result += aggregatedArray[2][i] : str_result += aggregatedArray[2][i] + ", "
//     // str_result += aggregatedArray[2][i] + ", "
// }
// console.log(str_result)
// // Afficher tous les jours en français
// // console.log(aggregatedArray[1])
// // ou
// str_result = ""
// max_ctr = 6
// for (i = 0; i <= max_ctr; i++) {
//     i == max_ctr ? str_result += aggregatedArray[1][i] : str_result += aggregatedArray[1][i] + ", "
//     // str_result += aggregatedArray[1][i] + ", "
// }
// console.log(str_result)


// // Correction
// console.log("\n\n\nCORRECTION\n\n")
// let tableau_french = [frenchMonth, frenchDay]
// let tableau_english = [englishMonth, englishDay]
// let tableau_total = [tableau_french, tableau_english]
// // ou tableau total = [frenchMonth, frenchDay], [englishMonth, englishDay]
// // Afficher Novembre 
// console.log(tableau_total[0][0][10])
// // Afficher Friday 
// console.log(tableau_total[1][1][4])
// // Afficher tous les mois en anglais
// console.log(tableau_total[1][0])
// for (i = 0; i < tableau_total[1][0].length; i++) {
//     console.log(tableau_total[1][0][i])
// }
// // Afficher tous les jours en français
// console.log(tableau_total[0][1])
// for (i = 0; i < tableau_total[0][1].length; i++) {
//     console.log(tableau_total[0][1][i])
// }

/*******************************************************************/
/* EXERCICE 6 */

// Afficher le tableau
listPrincesses = ["Cendrillon"]
console.log(listPrincesses)
// Ajouter des elements avec push
listPrincesses.push("Mulan", "Peach", "Raiponce", "Belle", "Vaiana", "Daisy", "Jasmine")
console.log(listPrincesses)

// Supprimer 2 elements
// Methode 1
// Suppression de Peach
// Trouver index de l'element à supprimer
let indexElementToBeRemoved = listPrincesses.indexOf("Peach")
// console.log(indexElementToBeRemoved +" is the index of element Peach in the list.")
// Supprimer l'element grace a l'index
listPrincesses.splice(indexElementToBeRemoved,1)
// ou 
// listPrincesses.splice(listPrincesses.indexOf("Peach"),1)
// Suppression de Daisy
// indexElementToBeRemoved = listPrincesses.indexOf("Daisy")
// listPrincesses.splice(indexElementToBeRemoved,1)
// ou
let filteredList = listPrincesses.filter(names => names != "Daisy" && names != "Vaiana")
console.log(filteredList)

// Afficher la list apres les 2 suppressions
console.log(listPrincesses)
// Trier le tableau alphabetiquement
listPrincesses.sort()
console.log(listPrincesses)

// Trier le tableau alphabetiquement a l'envers
listPrincesses.sort().reverse()
console.log(listPrincesses)

// Afficher le nombre de princesses dans le tableau
listPrincesses.length > 1 ? console.log(`Il y a ${listPrincesses.length} princesses dans le tableau`) : console.log(`Il y a ${listPrincesses.length} princesse dans le tableau`)

// BONUS : Utilisation de shift et unshift
console.log("\n\n\n")
// shift pour enlever le 1er element de l'array
listPrincesses.shift()
console.log(listPrincesses)
// unshift ajout un element au début
listPrincesses.unshift("blanche Neige")
console.log(listPrincesses)

// BONUS : Afficher les elements les uns a la suite des autres avec une virgule entre chaque element
// remettre par orfre alphabetique
listPrincesses.sort()
listPrincesses = listPrincesses.join(" , ")
console.log(listPrincesses)

