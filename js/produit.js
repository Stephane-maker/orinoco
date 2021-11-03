let chiffre = 1
class ProduitAffichage {
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
            let z = document.getElementById("quantité");
            AddProduitToPanier(e.target.getAttribute('data-type'), e.target.getAttribute('data-id'), z.value)
        })
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

function SeekUrl() {
    let seekInUrl = window.location.hash.substr(1);
    let resultatId = seekInUrl.split("=");
    let resultatName = resultatId[1].split("&")

    // requetepour affiche le produit selectionné
    fetch("http://localhost:3000/api/" + resultatName[0] + "/" + resultatId[2])
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function(value) {
            for (let i = 0; i < 1; i++) {
                let arrayForRequeteProduit = value;
                const newGeneralCLass = new ProduitAffichage(arrayForRequeteProduit, resultatName[0]);
                newGeneralCLass.addProduitSelectionner("main");
            }
        })
        .catch(function(err) {
            console.log(err)
        })
}

function AddProduitToPanier(dataName, dataID, quantite) {
    let onARienTrouver = true;
    if (quantite != 0 && quantite != "" && quantite < 10) {
        console.log(panier)
        quantite = parseInt(quantite)
        for (let i = 0; i < panier.length; i++) {
            let element = panier[i];
            console.log(element["id"], element["name"])
            if (dataID === element["id"] && dataName === element["name"]) {
                element["quantite"] = element["quantite"] + quantite;
                onARienTrouver = false;
            }
        }
        if (onARienTrouver) {
            panier.push({ "name": dataName, "id": dataID, "quantite": quantite });

        }
        document.cookie = "panier=" + JSON.stringify(panier) + "; path=/";
    }
}