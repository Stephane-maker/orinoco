if (document.readyState) {
    requete("teddies", MakkeDiv("teddies", valeurMin), valeurMin);
    requete("cameras", MakkeDiv("cameras", valeurMin), valeurMin);
    requete("furniture", MakkeDiv("furniture", valeurMin), valeurMin);
    let bodySelector = document.querySelector("body");
    bodySelector.appendChild(MakkeDiv("teddies"));
    bodySelector.appendChild(MakkeDiv("cameras"));
    bodySelector.appendChild(MakkeDiv("furniture"));
}