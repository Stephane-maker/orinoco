let idOurson = "generalContainerourson";
let idCamera = "generalContainercamera";
let idTable = "generalContainertable";
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
    const newIdButton = idCLass + "Button";
    const newIdForContainer = idCLass + "Container";
    const newIdGeneralContainer = "generalContainer" + idCLass;
    const newIdForButton = "button" + idCLass;

    const newDiv = document.createElement("div");
    let bodySelector = document.querySelector("body");

    bodySelector.appendChild(newDiv);
    newDiv.id = newIdForContainer;

    let createNewClassContainer = document.createElement("div");
    const selectClassContainer = document.getElementById(newIdForContainer);

    selectClassContainer.appendChild(createNewClassContainer)

    createNewClassContainer.id = newIdGeneralContainer;

    let containerstyle = createNewClassContainer.style;
    containerstyle.display = "flex";
    containerstyle.flexDirection = "row";
    containerstyle.flexWrap = "wrap";
    containerstyle.justifyContent = "space-around";
    containerstyle.margin = "2% 0 2% 0";

    const divForButton = document.createElement("div");
    let eltAfter = document.getElementById(newIdForContainer);
    eltAfter.appendChild(divForButton);
    divForButton.classList = "d-grid gap-2 col-6 mx-auto";
    divForButton.id = newIdButton;

    const newButton = document.createElement("button");
    let ClassButton = document.getElementById(newIdButton);
    ClassButton.appendChild(newButton);

    newButton.id = newIdForButton;
    let buttonStyle = newButton.style;
    buttonStyle.margin = "2% 0 2% 0";

    newButton.classList = "btn btn-primary";
    newButton.type = "button"
    newButton.textContent = "Voir plus";
}

function requete(elementRequete, idgeneral, valeurMin) {


    fetch("http://localhost:3000/api/" + elementRequete)
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function(value) {
            for (let i = 0; i < e(d); i++) {
                const element = value[i];
                const newGeneralCLass = new GeneralClassAccesoire(element, elementRequete);
                newGeneralCLass.addLinkForGeneralClassAccesoire(idgeneral);

            }
        })
        .catch(function(err) {
            console.log(err)
        })


}

function e() {
    let a = 2

}

function b(d) {
    let focusButton = document.getElementById("buttonourson");
    focusButton.addEventListener("click", function() {
        console.log("ok")



    })
}


// function clickUser(idUrl, idbtn, containerdiv, classmerebtn, newId) {
//     let focusButton = document.getElementById(idbtn);
//     focusButton.addEventListener('click', function() {
//         fetch("http://localhost:3000/api/" + idUrl)
//             .then(function(res) {
//                 if (res.ok) {
//                     return res.json();
//                 }
//             })
//             .then(function(value) {
//                 for (let i = 0; i < valeurMin; i++) {
//                     const element = value[i];
//                     const newGeneralCLass = new GeneralClassAccesoire(element);
//                     newGeneralCLass.addLinkForGeneralClassAccesoire(containerdiv);
//                 }
//             })
//             .catch(function(err) {
//                 console.log(err)
//             })
//         focusButton.remove();
//         const afterDelet = document.createElement("button");
//         let classmere = document.getElementById(classmerebtn);
//         classmere.appendChild(afterDelet);
//         afterDelet.classList = "btn btn-primary";
//         afterDelet.type = "button"
//         afterDelet.textContent = "Voir moins";
//         afterDelet.id = newId;
//         afterDelet.setAttribute("onclick", "clickUserVoirMoins()")
//     })
// }

// function clickUserVoirMoins() {
//     let anotherFocusBtn = document.getElementById("s");

//     anotherFocusBtn.addEventListener("click", function() {
//         for (let i = 0; i < 3; i++) {
//             let t = document.getElementById("containerArticle");
//             t.remove();
//         }

//         anotherFocusBtn.remove();
//         const z = document.createElement("button");
//         let b = document.getElementById("oursonButton");
//         b.appendChild(z);
//         z.classList = "btn btn-primary";
//         z.type = "button"
//         z.textContent = "Voir plus";
//         z.id = "buttonourson";
//         z.setAttribute("onclick", "clickUser()")

//     })

// }