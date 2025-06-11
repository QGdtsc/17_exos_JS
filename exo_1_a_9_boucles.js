/*******************************************************************/
/* EXERCICE 1 */

// let i = 1
// while (i <= 100) {
//     console.log(i)
//     i++
// }

/*******************************************************************/
/* EXERCICE 2 */

// let i = 100
// while(i>=0) {
//     if (i % 2 ==0 && i != 0){
//         console.log(i)
//     }
//     i--
// }

/*******************************************************************/
/* EXERCICE 3 */

// let nb1 = 3
// let nb2 = 6
// // console.log(nb1 + nb2) // pour test
// while ((nb1 + nb2) < 2025) {
//     console.log(nb1 + nb2)
//     nb2 += (nb1 + nb2)      
//     nb2 = nb2 + (nb1 + nb2)    
//     console.log(`Valeur de nb2 a la fin de l'itération: ${nb2}`);
// }

/*******************************************************************/
/* EXERCICE 4 */

// let i = 1
// while (i <= 10) {
//     i < 10 ? console.log(`Message ${i}`) : console.log(`Message ${i}, c'est le dernier message !`)
//     i++
// }

/*******************************************************************/
/* EXERCICE 5 */

// for (i=0; i<13; i++) {
//     console.log("Vendredi 13")
//     // console.log(i)
// }

/*******************************************************************/
/* EXERCICE 6 */

// let i = 0
// // for (i=0; i<100; i=i+3) // CHERCHER UNE METHODE POUR INCREMENTER DIRECTEMENT GENRE i++
// for (i=0; i<100; i+=3)
// {
//     console.log(i)
// }

/*******************************************************************/
/* EXERCICE 7 */

// for (i = 20; i >= 0; i--) {
//     if (i == 20) {
//         console.log("Start !!")
//     }
//     console.log(i)
// }
// console.log("Finish !!") // hors de la boucle pour economiser un calcul par itération (un if en moins)

/*******************************************************************/
/* EXERCICE 8 */
// i = 100
// // Avec boucle while
// while (i > 0) {
//     // console.log(i)
//     if ((i % 5 ==0) && (i % 3 ==0)) {
//         console.log("FizzBuzz")
//     }
//     else if (i % 5==0) {
//         console.log("Buzz")
//     }
//     else if (i % 3==0) {
//         console.log("Fizz")
//     }
//     else {
//         console.log(i)
//     }
//     i--
// }


// // Avec boucle while
// for (i = 100 ; i>0; i--) {
//     // console.log(i)
//     if ((i % 5 ==0) && (i % 3 ==0)) {
//         console.log("FizzBuzz")
//     }
//     else if (i % 5==0) {
//         console.log("Buzz")
//     }
//     else if (i % 3==0) {
//         console.log("Fizz")
//     }
//     else {
//         console.log(i)
//     }
// }

/*******************************************************************/
/* EXERCICE 9 */
// let string_kebabcase = ""
// let stringtest
// for (i=1; i<=10; i++) {
//     stringtest = Number(i).toString()
//     // console.log(typeof stringtest)
//     // console.log(stringtest)

//     string_kebabcase = string_kebabcase + "-" + stringtest
//     // string_kebabcase = string_kebabcase + "-" + toString(i)
// }
// console.log(string_kebabcase)

// Amelioration pour demander a l'utilisateur le nombre
let string_kebabcase = ""
do {
    ctr = prompt("on compte jusqu'à combien ? (entrer un entier)")
    // console.log(typeof ctr)
} while (isNaN(ctr) || ctr <= 0)
for (i = 1; i <= ctr; i++) {
    string_kebabcase += Number(i).toString()
    if (i == 0 || i == ctr) {
        continue
    }
    string_kebabcase += "-"
}
console.log(string_kebabcase)