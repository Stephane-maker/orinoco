if (document.readyState) {
    requete("teddies", "body");
    requete("cameras", "body");
    requete("furniture", "body");
    let bodySelector = document.querySelector("body");
    bodySelector.appendChild(MakkeDiv("teddies"));
    bodySelector.appendChild(MakkeDiv("cameras"));
    bodySelector.appendChild(MakkeDiv("furniture"));


}