if (document.readyState) {
    requete("teddies");
    requete("cameras");
    requete("furniture")
    let bodySelector = document.querySelector("body");
    bodySelector.appendChild(MakkeDiv("teddies"));
    bodySelector.appendChild(MakkeDiv("cameras"));
    bodySelector.appendChild(MakkeDiv("furniture"));


}