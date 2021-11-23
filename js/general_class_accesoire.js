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
        let elementDataName = "";
        switch (this.type) {
            case "cameras":
                detail = this.addLensesCamera();
                elementDataName = "cameras";
                break;
            case "furniture":
                detail = this.addVarnishTable();
                elementDataName = "furniture";
                break;
            case "teddies":
                detail = this.addForOurson();
                elementDataName = "teddies";
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
        creationImageForCard.setAttribute("src", this.imageUrl)
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

        creationBouttonCard.textContent = "Voir le produit";
        creationBouttonCard.setAttribute("data-id", this._id);
        creationBouttonCard.setAttribute("data-name", elementDataName)
        creationClassContainerCard.appendChild(creationBouttonCard);
        //preparation de l'evenement ajouté au panier 
        creationBouttonCard.addEventListener("click", function(e) {
            parent.location.hash = "name=" + e.target.getAttribute("data-name") + "&" + "id=" + e.target.getAttribute("data-id");
            document.location.href = "produit.html" + parent.location.hash;
        })
    }
    selectionProduit() {
        let detail = "";
        let elementDataName = "";
        switch (this.type) {
            case "cameras":
                detail = this.addLensesCamera();
                elementDataName = "cameras";
                break;
            case "furniture":
                detail = this.addVarnishTable();
                elementDataName = "furniture";
                break;
            case "teddies":
                detail = this.addForOurson();
                elementDataName = "teddies";
                break;
            default:
                break;
        }
        let focusMainCOntainer = document.getElementById("main");

        //creation de la div container de la card produit
        let divMereProduit = document.createElement("div");
        divMereProduit.classList = "card";
        divMereProduit.style.width = "32rem";
        focusMainCOntainer.appendChild(divMereProduit);

        //creation de l'image du produit
        let imgProduit = document.createElement("img");
        imgProduit.classList = "card-img-top";
        imgProduit.setAttribute("src", this.imageUrl);
        imgProduit.setAttribute("alt", "...");
        divMereProduit.appendChild(imgProduit);

        //creation container card body
        let containerCardBody = document.createElement("div");
        containerCardBody.classList = "card-body";
        divMereProduit.appendChild(containerCardBody);

        //creation du nom du produit 
        let titleForProduit = document.createElement("h5");
        titleForProduit.classList = "card-title";
        titleForProduit.textContent = this.name;
        containerCardBody.appendChild(titleForProduit);

        //creation de la description du produit 
        let descriptionProduit = document.createElement("p");
        descriptionProduit.classList = "card-text";
        descriptionProduit.textContent = this.description;
        containerCardBody.appendChild(descriptionProduit);

        //creation du prix du produit
        let prixProduit = document.createElement("p");
        prixProduit.classList = "card-text";
        prixProduit.textContent = "prix " + this.price;

        containerCardBody.appendChild(prixProduit);

        //creation du detail du produit
        let detailProduit = document.createElement("p");
        detailProduit.classList = "card-text";
        detailProduit.innerHTML = detail;
        containerCardBody.appendChild(detailProduit);

        //creation de la notification ajouté au panier
        let containerNotifProduit = document.createElement("div");
        containerNotifProduit.classList = "toast";
        containerNotifProduit.setAttribute("role", "alert");
        containerNotifProduit.setAttribute("aria-live", "assertive");
        containerNotifProduit.setAttribute("aria-atomic", "true");
        containerNotifProduit.style.position = "absolute";
        containerNotifProduit.style.right = "1px";
        containerNotifProduit.style.bottom = "0px";
        //creation de la div mere quantité produit
        let divMereQuantitéProduit = document.createElement("div");
        containerCardBody.appendChild(divMereQuantitéProduit)
            //creation de la quantité du produit
        let inputQuantiteProduit = document.createElement("input");
        inputQuantiteProduit.setAttribute("type", "number");
        inputQuantiteProduit.id = "quantité"
        inputQuantiteProduit.setAttribute("min", 1);
        inputQuantiteProduit.setAttribute("max", "");
        inputQuantiteProduit.setAttribute("placeholder", "quantité max :10");
        divMereQuantitéProduit.appendChild(inputQuantiteProduit)

        focusMainCOntainer.appendChild(containerNotifProduit);

        //creation du bouton ajouter au panier 
        let bouttonAjouterPanier = document.createElement("button");
        bouttonAjouterPanier.classList = "btn btn-primary";
        bouttonAjouterPanier.textContent = "Ajouter au panier";
        bouttonAjouterPanier.setAttribute("data-type", this.type);
        bouttonAjouterPanier.setAttribute("data-id", this._id);
        containerCardBody.appendChild(bouttonAjouterPanier);
        bouttonAjouterPanier.addEventListener("click", function(e) {
            let elementQuantite = document.getElementById("quantité");
            AddProduitToPanier(e.target.getAttribute('data-type'), e.target.getAttribute('data-id'), elementQuantite.value)
        })
    }
    MakkeLineForPanier(quantite) {
        let detail = "";
        let elementDataName = "";
        switch (this.type) {
            case "cameras":
                detail = this.addLensesCamera();
                elementDataName = "cameras";
                break;
            case "furniture":
                detail = this.addVarnishTable();
                elementDataName = "furniture";
                break;
            case "teddies":
                detail = this.addForOurson();
                elementDataName = "teddies";
                break;
            default:
                break;
        }

        // creation de la card produit panier
        let divMereCardPanier = document.createElement("div");
        divMereCardPanier.classList = "card mb-3"
        divMereCardPanier.style.maxWidth = "50%";

        //creation du row bootstrap pour la card
        let divRowCardProduit = document.createElement("div");
        divRowCardProduit.classList = "row g-0";
        divMereCardPanier.appendChild(divRowCardProduit);
        //row bootstrap pour image
        let rowForImg = document.createElement("div");
        rowForImg.classList = "col-md-4";
        divRowCardProduit.appendChild(rowForImg);
        //creation image produit 
        let imageProduitPanier = document.createElement("img");
        imageProduitPanier.setAttribute("src", this.imageUrl);
        imageProduitPanier.classList = "img-fluid rounded-start";
        rowForImg.appendChild(imageProduitPanier);
        //creation div class mere row texte
        let divClassMereBodyProduitPanier = document.createElement("div");
        divClassMereBodyProduitPanier.classList = "col-md-8";
        divRowCardProduit.appendChild(divClassMereBodyProduitPanier);
        // card Body produit panier
        let cardBodyProduitPanier = document.createElement("div");
        cardBodyProduitPanier.classList = "card-body";
        divClassMereBodyProduitPanier.appendChild(cardBodyProduitPanier);
        //titre produit
        let titreProduit = document.createElement("h5");
        titreProduit.classList = "card-title";
        titreProduit.textContent = this.name;
        cardBodyProduitPanier.appendChild(titreProduit);
        //description du produit
        let descriptionProduit = document.createElement("div");
        descriptionProduit.classList = "card-text";
        descriptionProduit.textContent = this.description;
        cardBodyProduitPanier.appendChild(descriptionProduit);
        //Prix du produit
        let prixProduit = document.createElement("div");
        prixProduit.classList = "card-text";
        prixProduit.textContent = this.price;
        prixProduit.setAttribute("prix", this.price)
        cardBodyProduitPanier.appendChild(prixProduit);
        //personalisation du produit
        let personalisationProduit = document.createElement("div");
        personalisationProduit.classList = "card-text";
        personalisationProduit.innerHTML = detail;
        cardBodyProduitPanier.appendChild(personalisationProduit);
        //creation quantite produit
        let quantiteProduit = document.createElement("div");
        quantiteProduit.classList = "card-text";

        cardBodyProduitPanier.appendChild(quantiteProduit);

        //prix du produit avec quantité 
        let prixTotalDuProduit = document.createElement("div");
        prixTotalDuProduit.classList = "card-text";
        prixTotalDuProduit.innerHTML = "prix total : " + this.price * quantite;
        cardBodyProduitPanier.appendChild(prixTotalDuProduit);

        return divMereCardPanier;
    }
    static AffichagePrixTotal(prixTotal) {
        let prixTotalDuProduit = document.createElement("div");
        prixTotalDuProduit.classList = "card-text";
        prixTotalDuProduit.innerHTML = "prix total du panier : " + prixTotal + "€";
        return prixTotalDuProduit
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