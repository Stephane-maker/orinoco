let prixTotalCommande = 0
async function CheckCookie() {
    let focusMain = document.getElementById("main");
    //si le cookie panier est vide
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
        buttonRetourPageAccueille.addEventListener("click", function() {
            document.location.href = "index.html";
        })
    }
    // si le cookie panier n'est pas vide 
    else {
        let prixTotal = 0;
        //ont recherche dans le tableau panier 
        for (let i = 0; i < panier.length; i++) {
            const element = panier[i];
            //sur une fonction asynchronique ont recupére tout les choix de l'utilisateur name et id pour affiche de manier plus rapide
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
                    //recuperation et affichage du prix total
                    prixTotal += element["quantite"] * value["price"];
                })
                .catch(function(err) {
                    console.log(err)
                })

        }
        prixTotalCommande = prixTotal;
        focusMain.appendChild(GeneralClassAccesoire.AffichagePrixTotal(prixTotal));
        //creation du boutton commander

        let divMereBtn = document.createElement("div");
        divMereBtn.classList = "container_produits"
        focusMain.appendChild(divMereBtn);

        let buttonCommader = document.createElement("a");

        buttonCommader.classList = "btn btn-primary btn-lg";
        buttonCommader.textContent = "Commader";

        divMereBtn.appendChild(buttonCommader);
        //creation de l'evnt click boutton commander deploiment du formulaire 
        buttonCommader.addEventListener("click", function() {
            divMereBtn.remove();

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
            inputEmailUser.id = "email";
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
            labelForLastNameUser.textContent = "Last-name";
            divMereLastNameUser.appendChild(labelForLastNameUser);
            //cretion input last name User
            let inputForLastNameUser = document.createElement("input");
            inputForLastNameUser.setAttribute("type", "text");
            inputForLastNameUser.classList = "form-control";
            divMereLastNameUser.appendChild(inputForLastNameUser);

            //Creation  addresse user 
            let divMereAddresseUser = document.createElement("div");
            divMereAddresseUser.classList = "col-md-6";
            formForFomulaire.appendChild(divMereAddresseUser);
            //creation label last name User
            let labelForAdresseUser = document.createElement("label");
            labelForAdresseUser.classList = "form-label";
            labelForAdresseUser.textContent = "Addresse";
            divMereAddresseUser.appendChild(labelForAdresseUser);
            //creation input addresse user 
            let inputForAddresseUser = document.createElement("input");
            inputForAddresseUser.setAttribute("type", "text");
            inputForAddresseUser.classList = "form-control";
            labelForAdresseUser.appendChild(inputForAddresseUser);

            //creation button confirmer votre commande
            let divClassMereButton = document.createElement("div");
            divClassMereButton.classList = "col-12";
            formForFomulaire.appendChild(divClassMereButton);
            //Creation button confirmer la commander
            let buttonConfirmerCommande = document.createElement("a");
            buttonConfirmerCommande.setAttribute("type", "submit");
            buttonConfirmerCommande.classList = "btn btn-primary";
            buttonConfirmerCommande.textContent = "Commander !";
            divClassMereButton.appendChild(buttonConfirmerCommande);
            buttonConfirmerCommande.addEventListener("click", function() {
                //regex pour verifie l'email de l'user
                let verificationEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                //si tout les champs sont bien remplit ont envoie la reponse a la function EnvoyeDeDonneFetch
                if (inputEmailUser.value.match(verificationEmail) && inputForCityUser.value != "" && inputForFirstNameUser.value != "" && inputForLastNameUser.value != "" && inputForAddresseUser != "") {
                    EnvoyeDeDonneFetch(inputEmailUser.value, inputForCityUser.value, inputForFirstNameUser.value, inputForLastNameUser.value, inputForAddresseUser.value)
                } else {
                    //si rien n'est remplit int retourne false pour que rien ne se produit
                    return false
                }
            })
        })
    }
}

async function EnvoyeDeDonneFetch(email, city, firstName, lastName, address) {
    //traitement des donner du formulaire
    let tableauProduit = [];
    for (let i = 0; i < panier.length; i++) {
        const element = panier[i];
        //si le tableau tableauProduit ne contient pas le nom de l'element ont push 
        if (!tableauProduit.hasOwnProperty(element["name"])) {
            tableauProduit[element["name"]] = [];
        }
        //et on push aussi l'id du produitr
        tableauProduit[element["name"]].push(element["id"]);
    }
    //l'object contanct
    for (let categorie in tableauProduit) {
        //des les donnée envoye on traite les object email city firstName LastName et address
        let contact = { "email": email, "city": city, "firstName": firstName, "lastName": lastName, "address": address };
        let products = tableauProduit[categorie];
        //dans un sous tableau ont ranche categorie dans le sous tabkeau tableauProduit
        //une fonction ansychronique pour le temps du traitement des tableau contact et products une fois fini on lance l'envoye
        await fetch("http://localhost:3000/api/" + categorie + "/order", {
                //recupere la categorie pour envoyer la requete au bon endroit
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                //l'envoye des object a l'api
                body: JSON.stringify({ "contact": contact, "products": products })
            })
            //Ont ecoute la reponse de l'api
            .then(function(res) {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(function(value) {
                //ont traite la reponse de l'api en l'ajoutant au cookie
                document.cookie = "orderId=" + JSON.stringify(value) + "; path=/";
                document.cookie = "PrixTotal=" + JSON.stringify(prixTotalCommande) + "; path=/";
                document.location = "confirmation_commande.html";
            });
    }
}