if (document.readyState) {


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