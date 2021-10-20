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
        containerNotifProduit.style.bottom = "0px"

        focusMainCOntainer.appendChild(containerNotifProduit);


        //creation du bouton ajouter au panier 
        let bouttonAjouterPanier = document.createElement("button");
        bouttonAjouterPanier.classList = "btn btn-primary";
        bouttonAjouterPanier.textContent = "Ajouter au panier";
        bouttonAjouterPanier.setAttribute("data-type", this.type);
        bouttonAjouterPanier.setAttribute("data-id", this._id);
        containerCardBody.appendChild(bouttonAjouterPanier);

        bouttonAjouterPanier.addEventListener("click", function(e) {
            console.log(e.target);
            console.log(e.target.getAttribute('data-type'));
            AddProduitToPanier(e.target.getAttribute('data-type'), e.target.getAttribute('data-id'))
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
    let seekInUrl = location.href.split('#');
    let resultatName = seekInUrl[2];
    let resultatId = seekInUrl[4]
        // requetepour affiche le produit selectionné
    fetch("http://localhost:3000/api/" + resultatName + "/" + resultatId)
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function(value) {
            for (let i = 0; i < 1; i++) {
                let arrayForRequeteProduit = value;
                const newGeneralCLass = new ProduitAffichage(arrayForRequeteProduit, resultatName);
                newGeneralCLass.addProduitSelectionner("main");
            }
        })
        .catch(function(err) {
            console.log(err)
        })
}

function AddProduitToPanier(typePRoduit, dataId) {

    panier.push({ "type": typePRoduit, "id": dataId })
    console.log(panier);

    document.cookie = "panier= " + JSON.stringify(panier) + ";" + "path=/";
}