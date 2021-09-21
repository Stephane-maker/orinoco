if (document.readyState) {
    requete("teddies", MakkeDiv("teddies"),
        let valeurMin = 2);
    requete("cameras", MakkeDiv("cameras"),
        let valeurMin = 2);
    requete("furniture", MakkeDiv("furniture"),
        let valeurMin = 2);
    let bodySelector = document.querySelector("body");
    bodySelector.appendChild(MakkeDiv("teddies"));
    bodySelector.appendChild(MakkeDiv("cameras"));
    bodySelector.appendChild(MakkeDiv("furniture"));


}