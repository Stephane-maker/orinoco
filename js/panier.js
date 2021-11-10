function CheckCookie() {
    if (cookie === null) {
        //creation div panier vide
        let focusMain = document.getElementById("main");
        //creation div mere card panier vide 
        let divClassMereCard = document.createElement("div");
        divClassMereCard.classList = "card";
        focusMain.appendChild(divClassMereCard);
        //titre card
        let titreCardPanierVide = document.createElement("h5");
        titreCardPanierVide.textContent = "Orinoco";
        titreCardPanierVide.classList = "card-header";
        divClassMereCard.appendChild(titreCardPanierVide);
        //div card body
        let cardBodyPanierVide = document.createElement("div");
        cardBodyPanierVide.classList = "card-body";
        divClassMereCard.appendChild(cardBodyPanierVide);
        //titre card Panier vide
        let titrePanierVide = document.createElement("h5");
        titrePanierVide.classList = "card-title";
        titrePanierVide.textContent = "Votre panier est actuellement vide";
        cardBodyPanierVide.appendChild(titrePanierVide);
        //creation texte panier vide
        let textePanierVide = document.createElement("p");
        textePanierVide.classList = "card-text";
        textePanierVide.textContent = "Retourner sur la page d'accueille pour pouvoir ajouter des produits a votre panier";
        cardBodyPanierVide.appendChild(textePanierVide);
        //boutton retour a la page d'accueille
        let buttonRetourPageAccueille = document.createElement("button");
        buttonRetourPageAccueille.classList = "btn btn-primary";
        buttonRetourPageAccueille.textContent = "Page d'accueille";
        cardBodyPanierVide.appendChild(buttonRetourPageAccueille);
    } else {
        let crea = document.createElement("ul");
        let tes = document.createElement("li")
        panier = JSON.parse(cookie);
        for (let i = 0; i < panier.length; i++) {
            const element = panier[i];
            fetch("http://localhost:3000/api/" + element["name"] + "/" + element["id"])
                .then(function(res) {
                    if (res.ok) {
                        return res.json();
                    }
                })
                .then(function(value) {
                    for (let i = 0; i < 1; i++) {
                        let arrayForRequeteProduit = value;
                        const newGeneralCLass = new GeneralClassAccesoire(arrayForRequeteProduit, element["name"]);
                        newGeneralCLass.MakkeLineForPanier("main");

                    }
                })
                .catch(function(err) {
                    console.log(err)
                })
        }
    }
}