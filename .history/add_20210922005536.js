if (document.readyState) {
    requete("teddies", divProduits);
    requete("cameras", divProduits);
    requete("furniture", divProduits);
    let bodySelector = document.querySelector("body");
    bodySelector.appendChild(MakkeDiv("teddies"));
    bodySelector.appendChild(MakkeDiv("cameras"));
    bodySelector.appendChild(MakkeDiv("furniture"));


}