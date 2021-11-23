async function CheckCookie() {
    let focusMain = document.getElementById("main");
    if (cookie === null) {
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
        let prixTotal = 0;
        for (let i = 0; i < panier.length; i++) {
            const element = panier[i];
            await fetch("http://localhost:3000/api/" + element["name"] + "/" + element["id"])
                .then(function(res) {
                    if (res.ok) {
                        return res.json();
                    }
                })
                .then(function(value) {
                    let arrayForRequeteProduit = value;
                    const newGeneralCLass = new GeneralClassAccesoire(arrayForRequeteProduit, element["name"]);
                    focusMain.appendChild(newGeneralCLass.MakkeLineForPanier(element["quantite"]));
                    prixTotal += element["quantite"] * value["price"];
                })
                .catch(function(err) {
                    console.log(err)
                })
        }
        focusMain.appendChild(GeneralClassAccesoire.AffichagePrixTotal(prixTotal));
        //creation du boutton commander
        let buttonCommader = document.createElement("a");

        buttonCommader.classList = "btn btn-primary btn-lg";
        buttonCommader.textContent = "Commader";
        focusMain.appendChild(buttonCommader);
        //creation de l'evnt click boutton commander deploiment du formulaire 
        buttonCommader.addEventListener("click", function() {
            buttonCommader.remove()
            let formForFomulaire = document.createElement("form");
            formForFomulaire.classList = "row g-3";
            focusMain.appendChild(formForFomulaire)
                //Creation div container email 
            let divContainerEmail = document.createElement("div");
            divContainerEmail.classList = "col-md-6";
            formForFomulaire.appendChild(divContainerEmail);
            //creation label email 
            let labelForEmailUser = document.createElement("label");
            labelForEmailUser.textContent = "Email";
            labelForEmailUser.classList = "form-label";
            divContainerEmail.appendChild(labelForEmailUser);
            //creation input email
            let inputEmailUser = document.createElement("input");
            inputEmailUser.setAttribute("type", "email");
            inputEmailUser.classList = "form-control";
            divContainerEmail.appendChild(inputEmailUser);

            //Creation div mere city 
            let divMereCityUser = document.createElement("div");
            divMereCityUser.classList = "col-md-6";
            formForFomulaire.appendChild(divMereCityUser);
            //creation label city User
            let labelForCityUSer = document.createElement("label");
            labelForCityUSer.classList = "form-label";
            labelForCityUSer.textContent = "City";
            divMereCityUser.appendChild(labelForCityUSer);
            //cretion input city User
            let inputForCityUser = document.createElement("input");
            inputForCityUser.setAttribute("type", "text");
            inputForCityUser.classList = "form-control";
            divMereCityUser.appendChild(inputForCityUser);

            //Creation div first name  
            let divMereFirstNameUser = document.createElement("div");
            divMereFirstNameUser.classList = "col-md-6";
            formForFomulaire.appendChild(divMereFirstNameUser);
            //creation label first name User
            let labelForFirstNameUser = document.createElement("label");
            labelForFirstNameUser.classList = "form-label";
            labelForFirstNameUser.textContent = "First-name";
            divMereFirstNameUser.appendChild(labelForFirstNameUser);
            //cretion input first name User
            let inputForFirstNameUser = document.createElement("input");
            inputForFirstNameUser.setAttribute("type", "text");
            inputForFirstNameUser.classList = "form-control";
            divMereFirstNameUser.appendChild(inputForFirstNameUser);

            //Creation div last name  
            let divMereLastNameUser = document.createElement("div");
            divMereLastNameUser.classList = "col-md-6";
            formForFomulaire.appendChild(divMereLastNameUser);
            //creation label last name User
            let labelForLastNameUser = document.createElement("label");
            labelForLastNameUser.classList = "form-label";
            labelForLastNameUser.textContent = "First-name";
            divMereLastNameUser.appendChild(labelForLastNameUser);
            //cretion input last name User
            let inputForLastNameUser = document.createElement("input");
            inputForLastNameUser.setAttribute("type", "text");
            inputForLastNameUser.classList = "form-control";
            divMereLastNameUser.appendChild(inputForLastNameUser);

            //creation button confirmer votre commande
            let divClassMereButton = document.createElement("div");
            divClassMereButton.classList = "col-12";
            formForFomulaire.appendChild(divClassMereButton);
            //Creation button confirmer la commander
            let buttonConfirmerCommande = document.createElement("button");
            buttonConfirmerCommande.setAttribute("type", "submit");
            buttonConfirmerCommande.classList = "btn btn-primary";
            buttonConfirmerCommande.textContent = "Commander !";
            divClassMereButton.appendChild(buttonConfirmerCommande);

        })
    }
}