if (document.readyState) {
    requete("teddies", MakkeDiv("teddies"), test);
    requete("cameras", MakkeDiv("cameras"), test);
    requete("furniture", MakkeDiv("furniture"), test);
    let bodySelector = document.querySelector("body");
    bodySelector.appendChild(MakkeDiv("teddies"));
    bodySelector.appendChild(MakkeDiv("cameras"));
    bodySelector.appendChild(MakkeDiv("furniture"));
}