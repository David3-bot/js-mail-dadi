const userMail = (prompt("Inserisci la tua mail:"));

console.log(userMail);
console.log("Mail Utente");


const utenti = ["pippo@gmail.com", "paperino@gmail.com", "gastone@gmail.com", "d-arrighi@gmail.com"];

for (let i = 0; i < userMail.length; i++) {


    if (userMail === "d-arrighi@gmail.com") {
        console.log(userMail + " : Mail autorizzata. ");

    }

}

