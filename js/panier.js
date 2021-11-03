let panier = [];
let cookie = getCookie("panier");

class ProduitForPanier {
    constructor(source, type) {
        this.colors = source.colors;
        this._id = source._id;
        this.name = source.name;
        this.price = source.price;
        this.imageUrl = source.imageUrl;
        this.description = source.description;
        this.varnish = source.varnish;
        this.lenses = source.lenses;
        this.type = type;
    }
    addProduitSelectionner() {
        let detail = "";
        switch (this.type) {
            case "teddies":
                detail = this.addForOursonProduit();
                break;
            case "cameras":
                detail = this.addLensesCameraProduit();
                break;
            case "furniture":
                detail = this.addVarnishTableProduit();
                break;
            default:
                break;
        }
        let focusMainCOntainer = document.getElementById("main");

        // creation de la card produit panier
        let divMereCardPanier = document.createElement("div");
        divMereCardPanier.classList = "card mb-3"
        divMereCardPanier.style.maxWidth = "50%";
        focusMainCOntainer.appendChild(divMereCardPanier);
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
        cardBodyProduitPanier.appendChild(prixProduit);
        //personalisation du produit
        let personalisationProduit = document.createElement("div");
        personalisationProduit.classList = "card-text";
        personalisationProduit.innerHTML = detail;
        cardBodyProduitPanier.appendChild(personalisationProduit);
    }
    addLensesCameraProduit() {
        return "<p>lenses :" + this.lenses + "</p>";
    }
    addVarnishTableProduit() {
        return "<p>Varnish :" + this.varnish + "</p>";
    }
    addForOursonProduit() {
        return "<p>colors :" + this.colors + "</p>";
    }
}

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
    }
    if (cookie != null) {
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
                        const newGeneralCLass = new ProduitForPanier(arrayForRequeteProduit, element["name"]);
                        newGeneralCLass.addProduitSelectionner("main");
                    }
                })
                .catch(function(err) {
                    console.log(err)
                })
        }
    }
}

function getCookie(name) {
    var re = new RegExp("panier" + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
}