class GeneralClassAccesoire {
    constructor(source, type) {
        this.imageUrl = source.imageUrl;
        this.colors = source.colors;
        this._id = source._id;
        this.name = source.name;
        this.price = source.price;
        this.description = source.description;
        this.varnish = source.varnish;
        this.lenses = source.lenses;
        this.type = type;
    }
    addLinkForGeneralClassAccesoire(classMereCardProduit) {
        let eltGeneral = classMereCardProduit
        let detail = "";
        switch (this.type) {
            case "cameras":
                detail = this.addLensesCamera();
                break;
            case "furniture":
                detail = this.addVarnishTable();
                break;
            case "teddies":
                detail = this.addForOurson();
                break;
            default:
                break;
        }
        eltGeneral.innerHTML = +innerHTML + this.price;
    }
    addLensesCamera() {
        return "<p>lenses :" + this.lenses + "</p>";
    }
    addVarnishTable() {
        return "<p>Varnish :" + this.varnish + "</p>";
    }
    addForOurson() {
        return "<p>colors :" + this.colors + "</p>";
    }

}

function MakkeDiv(elementRequete) {
    //creation de la div mere des produits
    const newDiv = document.createElement("div");
    //creation de la div container produit pour applique le style css
    let divProduits = document.createElement("div");
    divProduits.classList = "container_produits";
    newDiv.appendChild(divProduits);
    //importation des valeur de requete pour divProduits 
    requete(elementRequete, divProduits, 2);
    //creation de la classe mere du boutton bootstrap voir plus voir moins
    const divForButton = document.createElement("div");
    divForButton.classList = "d-grid gap-2 col-6 mx-auto";
    newDiv.appendChild(divForButton);
    //Creation du boutton bootstrap Voir plus voir moins
    const newButton = document.createElement("button");
    newButton.classList = "btn btn-primary margin_style";
    newButton.type = "button";
    newButton.textContent = "Voir plus";
    newButton.setAttribute("data-click", "first-click");
    //Creation de l'evenement voir plus voir moin avec le boutton bootstrap
    newButton.addEventListener("click", function() {
        let y = newButton.getAttribute("data-click");
        if (y == "first-click") {
            requete(elementRequete, divProduits, 5);
            newButton.setAttribute("data-click", "second-click");
        } else if (y == "second-click") {
            requete(elementRequete, divProduits, 2);
            newButton.setAttribute("data-click", "first-click");
        }
    })
    divForButton.appendChild(newButton);
    // retour de valeur pour l'app.js

    //creation de la card pour les different produits
    //creation de la classe mere card
    let classMereCardProduit = document.createElement("div");
    classMereCardProduit.classList = "card";

    divProduits.appendChild(classMereCardProduit);

    //creation de l'image du produit
    let imageProduit = document.createElement("img");
    imageProduit.setAttribute("src", "#")
    classMereCardProduit.appendChild(imageProduit);

    // creation container card body
    let creationContainerCardBody = document.createElement("div");
    creationContainerCardBody.classList = "card-body";
    classMereCardProduit.appendChild(creationContainerCardBody);

    //creation titre card body
    let creationTitleCardBody = document.createElement("h5");
    creationTitleCardBody.classList = "card-title";
    creationTitleCardBody.textContent = "Nom";
    creationTitleCardBody.textContent = this.name;
    creationContainerCardBody.appendChild(creationTitleCardBody);

    //creation description du porduit 
    let creationTextDescriptionProduitCardBody = document.createElement("p");
    creationTextDescriptionProduitCardBody.classList = "card-text";
    creationTextDescriptionProduitCardBody.textContent = "description" + this.description;
    creationContainerCardBody.appendChild(creationTextDescriptionProduitCardBody);

    //creation prix du produit
    let creationClassPrixProduitCardBody = document.createElement("p");
    creationClassPrixProduitCardBody.classList = "card-text";
    creationClassPrixProduitCardBody.textContent = "Price" + this.price;
    creationContainerCardBody.appendChild(creationClassPrixProduitCardBody);

    //creation du contenue detail des different produit
    let creationDetailProduitCardBody = document.createElement("p");
    creationDetailProduitCardBody.classList = "card-text";
    creationDetailProduitCardBody.textContent = "" + this.detail;
    creationContainerCardBody.appendChild(creationDetailProduitCardBody);

    //creation du boutton ajouter au pannier 
    let creationBouttonAjouterPanierCardBody = document.createElement("a");
    creationBouttonAjouterPanierCardBody.classList = "btn btn-primary";
    creationBouttonAjouterPanierCardBody.setAttribute("href", "#");
    creationBouttonAjouterPanierCardBody.textContent = "Ajouter au panier";
    creationContainerCardBody.appendChild(creationBouttonAjouterPanierCardBody);

    return newDiv;
}

function requete(elementRequete, divIsertion, valeurMin) {
    divIsertion.innerHTML = "";
    fetch("http://localhost:3000/api/" + elementRequete)
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function(value) {
            for (let i = 0; i < valeurMin; i++) {
                const element = value[i];
                const newGeneralCLass = new GeneralClassAccesoire(element);
                newGeneralCLass.addLinkForGeneralClassAccesoire(divIsertion);
            }
        })
        .catch(function(err) {
            console.log(err)
        })
}

function envoieDonner() {
    fetch("http://localhost:3000/api/teddies", {
        method: "POST",
        Headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(jsonBody)
    });
}