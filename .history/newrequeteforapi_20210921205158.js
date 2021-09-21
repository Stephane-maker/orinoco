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
    addLinkForGeneralClassAccesoire(IdAccesoire) {
        let eltGeneral = document.getElementById(IdAccesoire);
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
        eltGeneral.innerHTML = eltGeneral.innerHTML + "<div id =\"containerArticle\" class=\"card\" style=\"width: 30rem;\">" +
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

function MakkeDiv(idCLass) {
    const newDiv = document.createElement("div");

    let divProduits = document.createElement("div");
    divProduits.style.display = "flex";
    divProduits.style.flexDirection = "row";
    divProduits.style.flexWrap = "wrap";
    divProduits.style.justifyContent = "space-around";
    divProduits.style.margin = "2% 0 2% 0";
    newDiv.appendChild(divProduits)

    const divForButton = document.createElement("div");
    divForButton.classList = "d-grid gap-2 col-6 mx-auto";
    newDiv.appendChild(divForButton);

    const newButton = document.createElement("button");
    newButton.style.margin = "2% 0 2% 0";
    newButton.classList = "btn btn-primary";
    newButton.type = "button"
    newButton.textContent = "Voir plus";
    newButton.setAttribute("data-click", "e");

    newButton.addEventListener("click", function() {

        let y = newButton.getAttribute("data-click")



        switch ("click") {
            case y == "e":
                console.log("oui")
                break;

            default:
                break;
        }
    })
    divForButton.appendChild(newButton);

    return newDiv;
}

function requete(elementRequete, idgeneral, valeurMin) {


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
                newGeneralCLass.addLinkForGeneralClassAccesoire(idgeneral);

            }
        })
        .catch(function(err) {
            console.log(err)
        })
}