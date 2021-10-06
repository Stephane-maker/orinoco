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
    addLinkForGeneralClassAccesoire(divProduits) {
        let eltGeneral = divProduits
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

        //creation class container card bootstrap 
        let creationClassContainerCard = document.createElement("div");
        creationClassContainerCard.classList = "card";
        creationClassContainerCard.style.width = "32rem";
        eltGeneral.appendChild(creationClassContainerCard);

        //creation image card boostrap
        let creationImageForCard = document.createElement("img");
        creationImageForCard.setAttribute("src", this.imageUrl);
        creationClassContainerCard.appendChild(creationImageForCard);

        //creation container card body
        let divForContainerClassBody = document.createElement("div");
        divForContainerClassBody.classList = "card-body";
        creationClassContainerCard.appendChild(divForContainerClassBody);

        //creation du titre du produit
        let titleCardBody = document.createElement("h5");
        titleCardBody.classList = "card-title";
        titleCardBody.textContent = "Nom :" + this.name;
        divForContainerClassBody.appendChild(titleCardBody);

        //creation de la description du produit
        let descriptionCardBody = document.createElement("p");
        descriptionCardBody.classList = "card-text";
        descriptionCardBody.textContent = "Description :" + this.description;
        creationClassContainerCard.appendChild(descriptionCardBody);

        //creation du prix du produit
        let prixDuProduit = document.createElement("p");
        prixDuProduit.classList = "card-text";
        prixDuProduit.textContent = "Price :" + this.price;
        creationClassContainerCard.appendChild(prixDuProduit);

        //creation du detail des produits
        let detailProduit = document.createElement("p");
        detailProduit.classList = "card-text";
        detailProduit.innerHTML = detailProduit.innerHTML + detail;
        creationClassContainerCard.appendChild(detailProduit);

        //creation du bouton pour la card
        let creationBouttonCard = document.createElement("button");
        creationBouttonCard.setAttribute("type", "button");
        creationBouttonCard.classList = "btn btn-primary";
        creationBouttonCard.textContent = "Ajouter au panier";
        creationBouttonCard.setAttribute("data-id", this._id);
        creationClassContainerCard.appendChild(creationBouttonCard);

        //preparation de l'evenement pour ajouter un article au panier
        creationBouttonCard.addEventListener("click", function() {
            let c = creationBouttonCard.getAttribute("data-id");
            console.log(c)

            return ForCookie(c)
        })
    }
    addLensesCamera() {
        return "<p class=\"cameras\">lenses :" + this.lenses + "</p>";
    }
    addVarnishTable() {
        return "<p>Varnish :" + this.varnish + "</p>";
    }
    addForOurson() {
        return "<p class=\"ourson\">colors :" + this.colors + "</p>";
    }
}


function ForCookie(userNmae) {
    let a = document.cookie;
    let empty = ""
    a = userNmae;
    console.log(a)
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
                const newGeneralCLass = new GeneralClassAccesoire(element, elementRequete);
                newGeneralCLass.addLinkForGeneralClassAccesoire(divIsertion);
            }
        })
        .catch(function(err) {
            console.log(err)
        })
}