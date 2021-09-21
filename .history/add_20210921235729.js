if (document.readyState) {
    requete("cameras", divProduits);
    requete("furniture", divProduits);
    requete("teddies", divProduits);
    let bodySelector = document.querySelector("body");
    bodySelector.appendChild(MakkeDiv("ourson"));
    bodySelector.appendChild(MakkeDiv("camera"));
    bodySelector.appendChild(MakkeDiv("table"));


}