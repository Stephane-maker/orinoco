if (document.readyState) {
    requete("teddies", valeurMin, MakkeDiv("teddies"));
    requete("cameras", valeurMin, MakkeDiv("cameras"));
    requete("furniture", valeurMin, MakkeDiv("furniture"));
    let bodySelector = document.querySelector("body");
    bodySelector.appendChild(MakkeDiv("teddies"));
    bodySelector.appendChild(MakkeDiv("cameras"));
    bodySelector.appendChild(MakkeDiv("furniture"));


}