if (document.readyState) {
    requete("cameras", idCamera, valeurMin);
    requete("furniture", idTable, valeurMin);
    requete("teddies", idOurson, valeurMin);
    MakkeDiv("ourson");
    MakkeDiv("camera");
    MakkeDiv("table");
    clickUser("teddies", "buttonourson", "generalContainerourson", "oursonButton");
    clickUser("cameras", "buttoncamera", "generalContainercamera", "cameraButton");
    clickUser("furniture", "buttontable", "generalContainertable", "tableButton");


    clickUserVoirMoins("buttonoursonVoirMoins")
    clickUserVoirMoins("buttoncameraVoirMoins")
    clickUserVoirMoins("buttontableVoirMoins")
}

function clickUserVoirMoins(idMoins) {
    let anotherFocusBtn = document.getElementById(idMoins);
    anotherFocusBtn.addEventListener("click", function() {
        for (let i = 0; i < 3; i++) {
            let t = document.getElementById("containerArticle");
            t.remove();
        }
        anotherFocusBtn.remove();
        const z = document.createElement("button");
        let b = document.getElementById("oursonButton");
        b.appendChild(z);
        z.classList = "btn btn-primary";
        z.type = "button"
        z.textContent = "Voir plus";
        z.id = "buttonourson";
        z.setAttribute("onclick", "clickUser()")
    })
}