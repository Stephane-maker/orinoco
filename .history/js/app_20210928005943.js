if (document.readyState) {
    requete("teddies", MakkeDiv("teddies") i, valeurMin);
    requete("cameras", MakkeDiv("cameras") i, valeurMin);
    requete("furniture", MakkeDiv("furniture") i, valeurMin);
    let bodySelector = document.querySelector("body");
    bodySelector.appendChild(MakkeDiv("teddies"));
    bodySelector.appendChild(MakkeDiv("cameras"));
    bodySelector.appendChild(MakkeDiv("furniture"));
}