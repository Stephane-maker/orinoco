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

        //creation div container notification produit
        let containerBodyNotification = document.createElement("div");
        containerBodyNotification.classList = "toast-header";
        containerNotifProduit.style.width = "20rem";

        containerNotifProduit.appendChild(containerBodyNotification);

        //creation img notif produit
        let notifImgProduit = document.createElement("img");
        notifImgProduit.setAttribute("src", this.imageUrl);
        notifImgProduit.setAttribute("alt", "...");
        notifImgProduit.classList = "rounded mr-2";
        notifImgProduit.style.width = "10rem";

        containerBodyNotification.appendChild(notifImgProduit);

        //creation du nom du produit poru la notification
        let nomNotifProduit = document.createElement("strong");
        nomNotifProduit.classList = "mr-auto";
        nomNotifProduit.textContent = this.name;
        containerNotifProduit.appendChild(nomNotifProduit);

        //creation de la description de la notif
        let descriptionNotifProduit = document.createElement("div");
        descriptionNotifProduit.classList = "toast-body";
        descriptionNotifProduit.textContent = "A bien été ajouté au panier";
        containerNotifProduit.appendChild(descriptionNotifProduit);

        //creation du bouton ajouter au panier 
        let bouttonAjouterPanier = document.createElement("button");
        bouttonAjouterPanier.classList = "btn btn-primary";
        bouttonAjouterPanier.textContent = "Ajouter au panier";
        containerCardBody.appendChild(bouttonAjouterPanier);

        bouttonAjouterPanier.addEventListener("click", function() {
            containerNotifProduit.classList = "";
            setTimeout(() => {
                containerNotifProduit.classList = "toast";
            }, 4000);
            focusMainCOntainer
            //Creation div container btn retour accueil bootstrap
            let creationDivContinerBtnAccueil = document.createElement("div");
            creationDivContinerBtnAccueil.classList = "d-grid gap-2 col-6 mx-auto";
            focusMainCOntainer.appendChild(creationDivContinerBtnAccueil)
                //creation bouton retour a l'accueil
            let creationBtnRetourAccueille = document.createElement("button");
            creationBtnRetourAccueille.classList = "btn btn-primary";
            creationBtnRetourAccueille.textContent = "Retour a l'accueil";
            creationDivContinerBtnAccueil.appendChild(creationBtnRetourAccueille);

            //creation evenement retour a l'accueil
            creationDivContinerBtnAccueil.addEventListener("click", function() {
                document.location.href = "index.html";
            })
            console.log(document.cookie)
            return sessionStorage.setItem("session", JSON.stringify(document.cookie))
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


function SeekCookie() {
    let array = document.cookie;
    //variable pour extraire le type et l'id du produit selectionne 
    let resultatType = array.substring(5, array.indexOf(";"));
    let resultatId = array.substring(array.lastIndexOf("=") + 1);
    //requetepour affiche le produit selectionné 
    fetch("http://localhost:3000/api/" + resultatType + "/" + resultatId)
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function(value) {
            for (let i = 0; i < 1; i++) {
                let arrayForRequeteProduit = value;
                const newGeneralCLass = new ProduitAffichage(arrayForRequeteProduit, resultatType);
                newGeneralCLass.addProduitSelectionner("main");
            }
        })
        .catch(function(err) {
            console.log(err)
        })
    let resultatCookie = { resultatType, resultatId };
    return resultatCookie
}