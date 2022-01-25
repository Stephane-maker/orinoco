function confirmationCommade() {
    let separationCookie = document.cookie.split(";");
    let recuperatopnEmail = separationCookie[1].split(",")[0].split(":")[2];
    let recuperationCity = separationCookie[1].split(",")[1].split(':')[1];
    let recuperationFirstName = separationCookie[1].split(",")[2].split(":")[1];
    let recuperationLastName = separationCookie[1].split(",")[3].split(":")[1];
    let recuperationAddress = separationCookie[1].split(",")[4].split(":")[1].split("}")[0];
    let recuperationOrderId = separationCookie[1].split(",")[16].split(":")[1].split("}")[0]
    console.log(recuperationOrderId)

    let mainSelector = document.getElementById("main");

    let cardbody = document.createElement("div");
    cardbody.classList = "card text-center";
    mainSelector.appendChild(cardbody);

    let cardContainer = document.createElement("div");
    cardContainer.classList = "card-body";
    cardbody.appendChild(cardContainer);

    let cardText = document.createElement("p");
    cardText.classList = "card-text";
    cardText.textContent = "MME , M " + recuperationFirstName + ", " + recuperationLastName + "Orinoco vous remercie pour votre commande un email vous sera envoyer a l'addresse email suivante : " + recuperatopnEmail + "Vos produits vous seront envoyer a l'addresse suivante :" + recuperationAddress + "ville : " + recuperationCity
    cardContainer.appendChild(cardText);

    let cardNumeroSuivit = document.createElement("p");
    cardNumeroSuivit.classList = "card-text";
    cardNumeroSuivit.textContent = "Voici l'Id de votre commande : " + recuperationOrderId
    cardbody.appendChild(cardNumeroSuivit);

    let buttonAccueille = document.createElement("button");
    buttonAccueille.classList = "btn btn-primary";
    buttonAccueille.textContent = "Retour a l'accueille";
    cardbody.appendChild(buttonAccueille);
    cardbody.addEventListener("click", function() {
        document.cookie = "panier=; path=/";
        document.cookie = "orderId=; path=/"

        document.location = "index.html";
    })

}