const userDices = (Math.floor(Math.random() * 6) + 1);
const consoleDices = (Math.floor(Math.random() * 6) + 1);

console.log("Il giocatore ha fatto:" + userDices +  "Deep Blue ha fatto:" + consoleDices) 
alert("Il giocatore ha fatto: "+ userDices + ", Deep Blue ha fatto: " + consoleDices)

if (consoleDices > userDices) {
    console.log("Vince Deep Blue!");
    alert("Vince Deep Blue!")
}else if (consoleDices < userDices) {
    console.log("Hai vinto!")
    alert("Hai vinto!")
}else {
    console.log("Pareggio, vince il banco!")
    alert("Pareggio, vince il banco!")
}

   
