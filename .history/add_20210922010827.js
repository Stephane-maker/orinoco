if (document.readyState) {
    requete("teddies", MakkeDiv("teddies"));
    requete("cameras", MakkeDiv("cameras"));
    requete("furniture", MakkeDiv("furniture"));
    let bodySelector = document.querySelector("body");
    bodySelector.appendChild(MakkeDiv("teddies"));
    bodySelector.appendChild(MakkeDiv("cameras"));
    bodySelector.appendChild(MakkeDiv("furniture"));


}