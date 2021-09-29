let valeurMin = 2;
let valeurMax = 5;

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
        eltGeneral.innerHTML = eltGeneral.innerHTML + "<div id=\"generalContainer\" class=\"card\" style=\"width: 30rem;\">" +
            "<img src=" + this.imageUrl + " class=\"card-img-top\" alt=\"...\">" +
            "<div class=\"card-body\">" +
            "<h5 class=\"card-title\">Nom : " + this.name + "</h5>" +
            "<p class=\"card-text\">description : " + this.description + "</p>" +
            "<p class=\"card-text\">Price :" + this.price + " </p>" +
            "<p>" + detail + "</p>" +
            "<a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>" +
            "</div>" +
            "</div>";
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

function MakkeDiv(elementRequete, valeurMin) {
    const newDiv = document.createElement("div");

    let divProduits = document.createElement("div");
    divProduits.classList = "container_produits";
    newDiv.appendChild(divProduits)

    requete(elementRequete, divProduits);

    const divForButton = document.createElement("div");
    divForButton.classList = "d-grid gap-2 col-6 mx-auto";
    newDiv.appendChild(divForButton);

    const newButton = document.createElement("button");

    newButton.classList = "btn btn-primary margin_style";
    newButton.type = "button"
    newButton.textContent = "Voir plus";
    newButton.setAttribute("data-click", "first-click");
    newButton.addEventListener("click", function() {

        let y = newButton.getAttribute("data-click")

        if (y == "first-click") {
            newButton.setAttribute("data-click", "second-click");
            newButton.textContent = "Voir Moins";
            requete(elementRequete, divProduits)

        } else if (y == "second-click") {
            for (let i = 0; i < 3; i++) {
                let focusGeneralContainer = document.getElementById("generalContainer");
                focusGeneralContainer.remove();
            }
            newButton.setAttribute("data-click", "first-click")
        }
    })
    divForButton.appendChild(newButton);

    return newDiv;
}

function requete(elementRequete, divProduits) {

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
                newGeneralCLass.addLinkForGeneralClassAccesoire(divProduits);

            }
        })
        .catch(function(err) {
            console.log(err)
        })
}

function re() {
    let r = document.querySelector("body");
    var children = r.childNodes;

    // console.log(r.childNodes[2])

    for (let i = 0, c = children.length; i < c; i++) {
        if (children[i].nodeType === Node.ELEMENT_NODE) {
            console.log(children[i].firstChild)



        }

    }
}