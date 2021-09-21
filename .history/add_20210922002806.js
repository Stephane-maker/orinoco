if (document.readyState) {
    requete("cameras", divProduits);
    requete("furniture", divProduits);
    requete("teddies", divProduits);
    let bodySelector = document.querySelector("body");
    bodySelector.appendChild(MakkeDiv("teddies"));
    bodySelector.appendChild(MakkeDiv("cameras"));
    bodySelector.appendChild(MakkeDiv("furniture"));


}