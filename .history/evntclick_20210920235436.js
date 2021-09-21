if (document.readyState) {
    function clickUser(idBtn, idUrl, idArticle, classMereBtn) {
        let focusButton = document.getElementById(idBtn);
        focusButton.addEventListener('click', function() {
            fetch("http://localhost:3000/api/" + idUrl)
                .then(function(res) {
                    if (res.ok) {
                        return res.json();
                    }
                })
                .then(function(value) {
                    for (let i = 2; i < 5; i++) {
                        const element = value[i];
                        const newGeneralCLass = new GeneralClassAccesoire(element);
                        newGeneralCLass.addLinkForGeneralClassAccesoire(idArticle);
                    }
                })
                .catch(function(err) {
                    console.log(err)
                })

            focusButton.remove();
            const afterDelet = document.createElement("button");
            let classmere = document.getElementById(classMereBtn);
            classmere.appendChild(afterDelet);
            afterDelet.classList = "btn btn-primary";
            afterDelet.type = "button"
            afterDelet.textContent = "Voir moins";
            afterDelet.id = idBtn + "VoirMoins";
            afterDelet.setAttribute("onclick", "clickUserVoirMoins()")
        })
    }


    function clickUserVoirMoins(focus, container, focusdivBtn, oldIdBtn) {
        let anotherFocusBtn = document.getElementById(focus + "VoirMoins");

        anotherFocusBtn.addEventListener("click", function() {
            for (let i = 0; i < 3; i++) {
                let t = document.getElementById(container);
                t.remove();
            }

            anotherFocusBtn.remove();
            const z = document.createElement("button");
            let b = document.getElementById(focusdivBtn);
            b.appendChild(z);
            z.classList = "btn btn-primary";
            z.type = "button"
            z.textContent = "Voir plus";
            z.id = oldIdBtn;
            z.setAttribute("onclick", "clickUser()")

        })

    }
}