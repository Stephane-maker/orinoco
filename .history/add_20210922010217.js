if (document.readyState) {
    requete("teddies", 2, MakkeDiv("teddies"));
    requete("cameras", 2, MakkeDiv("cameras"));
    requete("furniture", 2, MakkeDiv("furniture"));
    let bodySelector = document.querySelector("body");
    bodySelector.appendChild(MakkeDiv("teddies"));
    bodySelector.appendChild(MakkeDiv("cameras"));
    bodySelector.appendChild(MakkeDiv("furniture"));


}