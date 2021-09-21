let idOurson = "generalContainerourson";
let idCamera = "generalContainercamera";
let idTable = "generalContainertable";
let valeurMin = 2;
let valeurMax = "value.length";

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

    addLinkForGeneralClassAccesoire() {
        let eltGeneral = document.querySelector("body");
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
        eltGeneral.innerHTML = eltGeneral.innerHTML + "<div class=\"card\" style=\"width: 30rem;\">" +
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

function MakkeDiv() {
    const newDiv = document.createElement("div");

    let divProduits = document.createElement("div");
    divProduits.classList = "container_produits";
    newDiv.appendChild(divProduits)

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
            console.log("oui")
            newButton.setAttribute("data-click", "second-click")
        } else if (y == "second-click") {
            console.log("non")
            newButton.setAttribute("data-click", "first-click")
        }

    })
    divForButton.appendChild(newButton);

    return newDiv;
}

function requete(elementRequete) {


    fetch("http://localhost:3000/api/" + elementRequete)
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function(value) {
            for (let i = 0; i < value.length; i++) {
                const element = value[i];
                let tableauProduit = { element }



                // console.log(tableauProduit)
                // let r = document.querySelector("body");

                let r = document.querySelector("body");
                var children = r.childNodes;
                const newGeneralCLass = new GeneralClassAccesoire(element);
                newGeneralCLass.addLinkForGeneralClassAccesoire("container_produits");
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