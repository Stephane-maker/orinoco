let idOurson = "generalContainerourson";
let idCamera = "generalContainercamera";
let idTable = "generalContainertable";
let valeurMin = 2;
let idBtnOurson = "buttonourson";
let idBtnCamera = "buttoncamera";
let idBtnTable = "buttontable";
let voirMoins = "Moins";
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
        eltGeneral.innerHTML = eltGeneral.innerHTML + "<div id =\"containerArticle\ class=\"card\" style=\"width: 30rem;\">" +
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
//function creation de class et class mere 
function MakkeDiv(idCLass) {
    //variable pour les differents id des class ou btn 
    const newIdButton = idCLass + "Button";
    const newIdForContainer = idCLass + "Container";
    const newIdGeneralContainer = "generalContainer" + idCLass;
    const newIdForButton = "button" + idCLass;
    //creation de la classe general container ou les articles seront affiche dedans
    const newDiv = document.createElement("div");
    let bodySelector = document.querySelector("body");

    bodySelector.appendChild(newDiv);
    newDiv.id = newIdForContainer;
    //class mere des article 
    let createNewClassContainer = document.createElement("div");
    const selectClassContainer = document.getElementById(newIdForContainer);

    selectClassContainer.appendChild(createNewClassContainer)

    createNewClassContainer.id = newIdGeneralContainer;
    //generation du style pour toute les classe mere des different articles
    let containerstyle = createNewClassContainer.style;
    containerstyle.display = "flex";
    containerstyle.flexDirection = "row";
    containerstyle.flexWrap = "wrap";
    containerstyle.justifyContent = "space-around";
    containerstyle.margin = "2% 0 2% 0";
    //Creation de la classe mere pour le btn bootstrap
    const divForButton = document.createElement("div");
    let eltAfter = document.getElementById(newIdForContainer);
    eltAfter.appendChild(divForButton);
    divForButton.classList = "d-grid gap-2 col-6 mx-auto";
    divForButton.id = newIdButton;
    //Creation du bouton bootstrap
    const newButton = document.createElement("button");
    let ClassButton = document.getElementById(newIdButton);
    ClassButton.appendChild(newButton);
    //style aplique a tout les boutons de la pages
    newButton.id = newIdForButton;
    let buttonStyle = newButton.style;
    buttonStyle.margin = "2% 0 2% 0";
    //mise en place du texte de la classe et du type du boutton bootstrap
    newButton.classList = "btn btn-primary";
    newButton.type = "button"
    newButton.textContent = "Voir plus";
}

//requete pour affiche les deux premiers articles 
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

function del(params) {
    requete("teddies");
    for (let i = 0; i < value.length; i++) {
        const element = value[i];
        const newGeneralCLass = new GeneralClassAccesoire(element, elementRequete);
        newGeneralCLass.addLinkForGeneralClassAccesoire(idgeneral);
    }
}