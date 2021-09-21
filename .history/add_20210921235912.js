if (document.readyState) {
    // requete("cameras", divProduits);
    // requete("furniture", divProduits);
    // requete("teddies", divProduits);
    let bodySelector = document.querySelector("body");
    bodySelector.appendChild(MakkeDiv("ourson", divProduits));
    bodySelector.appendChild(MakkeDiv("camera", divProduits));
    bodySelector.appendChild(MakkeDiv("table", divProduits));
    MakkeDiv()
    divProduits

}