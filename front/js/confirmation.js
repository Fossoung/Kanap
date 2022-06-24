
// fonction affichage autoinvoquée du numéro de commande et vide du storage lorsque l'on est sur la page confirmation
//On clear le localStorage
localStorage.clear();

//On récupere l'ID dans l'url
let numCom = new URLSearchParams(document.location.search).get("commande");

// On l'affiche dans la balise orderID
document.getElementById("orderId").innerHTML = numCom;