class ProduitAffichage {
    constructor(source) {
        this.colors = source.colors;
        this._id = source._id;
        this.name = source.name;
        this.price = source.price;
        this.imageUrl = source.imageUrl;
        this.description = source.description;
    }
    addProduitSelectionner() {
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
        //creation du bouton ajouter au panier 
        let bouttonAjouterPanier = document.createElement("button");
        bouttonAjouterPanier.classList = "btn btn-primary";
        bouttonAjouterPanier.textContent = "Ajouter au panier";
        containerCardBody.appendChild(bouttonAjouterPanier);
    }
}

function SeekCookie() {
    let array = document.cookie;

    let resultatType = array.substring(5, array.indexOf(";"));
    let resultatId = array.substring(array.lastIndexOf("=") + 1);
    console.log(resultatType, resultatId)
    console.log("http://localhost:3000/api/" + resultatType + "/" + resultatId)
    fetch("http://localhost:3000/api/" + resultatType + "/" + resultatId)
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function(value) {
            let arrayForRequeteProduit = value;
            const newGeneralCLass = new ProduitAffichage(arrayForRequeteProduit);
            newGeneralCLass.addProduitSelectionner("main");
        })
        .catch(function(err) {
            console.log(err)
        })
}