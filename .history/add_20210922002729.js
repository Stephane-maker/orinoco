if (document.readyState) {
    requete("cameras");
    requete("furniture");
    requete("teddies");
    let bodySelector = document.querySelector("body");
    bodySelector.appendChild(MakkeDiv("teddies"));
    bodySelector.appendChild(MakkeDiv("cameras"));
    bodySelector.appendChild(MakkeDiv("furniture"));


}