function confirmationCommade() {
    let textOrderId = JSON.parse(orderId);
    let textPrixTotal = JSON.parse(prixTotal);

    let mainSelector = document.getElementById("main");
    //creation de la div mere pour le message de remerciement
    let cardbody = document.createElement("div");
    cardbody.classList = "card text-center";
    mainSelector.appendChild(cardbody);

    let cardContainer = document.createElement("div");
    cardContainer.classList = "card-body";
    cardbody.appendChild(cardContainer);
    //affichage du message de remerciment
    let cardText = document.createElement("p");
    cardText.classList = "card-text";
    cardText.textContent = "MME , M " + textOrderId.contact.firstName + ", " + textOrderId.contact.lastName + " Orinoco vous remercie pour votre commande un email vous sera envoyer a l'addresse email suivante : " + textOrderId.contact.email + " Vos produits vous seront envoyer a l'addresse suivante : " + textOrderId.contact.address + " ville : " + textOrderId.contact.city
    cardContainer.appendChild(cardText);
    //affichage de l'orderID numero de commande
    let cardNumeroSuivit = document.createElement("p");
    cardNumeroSuivit.classList = "card-text";
    cardNumeroSuivit.textContent = "Voici l'Id de votre commande : " + textOrderId.orderId
    cardbody.appendChild(cardNumeroSuivit);
    //affichage du prix total
    let divMerePrixTotal = document.createElement("div");
    divMerePrixTotal.classList = "card-text";
    divMerePrixTotal.textContent = "Voici le prix total de votre commande " + prixTotal + "€";
    cardbody.appendChild(divMerePrixTotal)

    //creation div mere for bouton 
    let divMereBoutton = document.createElement("div");
    cardbody.appendChild(divMereBoutton);
    //affichage du boutton pour retourné a l'accueil
    let buttonAccueille = document.createElement("button");
    buttonAccueille.classList = "btn btn-primary";
    buttonAccueille.textContent = "Retour a l'accueille";
    divMereBoutton.appendChild(buttonAccueille);
    buttonAccueille.addEventListener("click", function() {
        //reset des cookies au click pour retourne a la page d'accueille
        document.cookie = "panier=; path=/";
        document.cookie = "orderId=; path=/";
        document.cookie = "PrixTotal=; path=/";

        document.location = "index.html";
    })
}