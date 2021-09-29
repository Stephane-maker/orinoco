if (document.readyState) {
    requete("teddies", MakkeDiv("teddies"), 2);
    requete("cameras", MakkeDiv("cameras"), 2);
    requete("furniture", MakkeDiv("furniture"), 2);
    let bodySelector = document.querySelector("body");
    bodySelector.appendChild(MakkeDiv("teddies"));
    bodySelector.appendChild(MakkeDiv("cameras"));
    bodySelector.appendChild(MakkeDiv("furniture"));
}