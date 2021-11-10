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
                const newGeneralCLass = new GeneralClassAccesoire(arrayForRequeteProduit, resultatName[0]);
                newGeneralCLass.selectionProduit("main");
            }
        })
        .catch(function(err) {
            console.log(err)
        })
}

function AddProduitToPanier(dataName, dataID, quantite, prix) {
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
            panier.push({ "name": dataName, "id": dataID, "quantite": quantite, "prix": prix });
        }
        document.cookie = "panier=" + JSON.stringify(panier) + "; path=/";
    }
}