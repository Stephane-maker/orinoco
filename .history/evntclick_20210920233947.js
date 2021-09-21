//requete pour affiche l'integralite des articles 
function clickUser(idButton, urlId, articleContainer, containerBtn) {
    let focusButton = document.getElementById(idButton);
    focusButton.addEventListener('click', function() {
        fetch("http://localhost:3000/api/" + urlId)
            .then(function(res) {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(function(value) {
                for (let i = 2; i < value.length; i++) {
                    const element = value[i];
                    const newGeneralCLass = new GeneralClassAccesoire(element);
                    newGeneralCLass.addLinkForGeneralClassAccesoire(articleContainer);
                }
            })
            .catch(function(err) {
                console.log(err)
            })

        focusButton.remove();
        const afterDelet = document.createElement("button");
        let classmere = document.getElementById(containerBtn);
        classmere.appendChild(afterDelet);
        afterDelet.classList = "btn btn-primary";
        afterDelet.type = "button"
        afterDelet.textContent = "Voir moins";
        afterDelet.id = "s"
        afterDelet.setAttribute("onclick", "clickUserVoirMoins()")
    })
}


function clickUserVoirMoins() {
    let anotherFocusBtn = document.getElementById("s");

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