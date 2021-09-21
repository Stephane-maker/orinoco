if (document.readyState) {
    requete("cameras", idCamera, valeurMin);
    requete("furniture", idTable, valeurMin);
    requete("teddies", idOurson, valeurMin);
    MakkeDiv("ourson");
    let bodySelector = document.querySelector("body");

    bodySelector.appendChild(MakkeDiv("ourson"));
    MakkeDiv("camera");
    MakkeDiv("table");

    clickUser();




}