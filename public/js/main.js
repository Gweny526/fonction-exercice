// #Exo 1
// let reverse_a_number = (n) => {
// 	n = n + "";
// 	return n.split("").reverse().join("");
// }
// console.log(Number(reverse_a_number(851)));
console.log("______");

// Exo 2
// let divPar2 =  (n) =>{
//     switch (n % 2 == 0) {
//         case true:
//             return n / 2; 
//         default: console.log("erreur");
//             break;
//     }
// }
// let n = Number(prompt('enter a number please'))
// console.log(divPar2(n));
// console.log("______");

// correction
// let chiffre = Number(prompt("choississez un chiffre"))

// Exo 3
// let logIn = () => {
//     let pwd = prompt("veuillez entrer votre mdp").toLowerCase();
//     switch (pwd === "pwd") {
//         case true :
//             return "bon pwd";
    
//         default:
//             return "false";
//     };

// };
// console.log(logIn());
// correction

// const logIn = () => {
//     let count = 3;
//     let mdp = prompt ("entrez un mdp").toLowerCase();
//     let reponse = true
//     while (reponse && count > 0){
//         if (mdp === "mdp"){
//             reponse = falsereturn ("vous êtes connectés");
//         } else {
//             alert(`mauvais mdp, vous avez encore ${count} essaie`)
//             mdp = prompt("entrez un mdp").toLowerCase
//             count --
//         }
//     }
// }
// console.log(logIn);

// Exo04
let tab = []
// ... = destructuring
let rentrer = (...nom) =>{
    console.log(nom);
    nom.forEach(el =>{
        tab.push(el)
    })
};

let sortir = (nom) =>{
    tab = tab.filter(el => el !== nom)
}

rentrer('ayhan', 'andré');
console.log(tab);
sortir('andré')
console.log(tab);
console.log("____");
// Exo 4 lvl up
// exo scenario class

let coding20 = [];
let coding = (name) => {
    let boucle = true;
    while (boucle && coding20.length < 11){
        let stagiraire = prompt ('personnes à introduire dans la coding?')
        let rep = prompt("veux tu faire une action avec l'étudiant? (oui ou non").toLowerCase();
        if (choix === "oui"){
            let choix = prompt("Veut tu ajoutez ou supprimer une personne? (ajout ou supp)")
            if (choix === "supp"){
                if (coding20.includes(stagiraire) == true){
                    sortir(stagiraire)
                }else {
                    log
                }
            }
        }
    }
}