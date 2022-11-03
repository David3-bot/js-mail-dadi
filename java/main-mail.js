const userMail = (prompt("Inserisci la tua mail:"));
const i = userMail
console.log(userMail);
console.log("Mail Utente");
let trovata = false

const utenti = ["pippo@gmail.com", "paperino@gmail.com", "gastone@gmail.com", "d-arrighi@gmail.com"];

for (let i = 0; i < utenti.length; i++) {


    if (userMail === "d-arrighi@gmail.com") {
        trovata = true
    }

}

if (userMail === "d-arrighi@gmail.com") {
    console.log(userMail + ": Mail autorizzata.");
    alert(userMail + "Mail autorizzata.")
}


else {
    console.log(userMail + ": Mail rifiutata.")
    alert(userMail + "Mail rifiutata.")
}