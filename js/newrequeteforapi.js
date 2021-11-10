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