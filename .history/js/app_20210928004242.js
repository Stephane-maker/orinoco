if (document.readyState) {

    let bodySelector = document.querySelector("body");
    bodySelector.appendChild(MakkeDiv("teddies"));
    bodySelector.appendChild(MakkeDiv("cameras"));
    bodySelector.appendChild(MakkeDiv("furniture"));
}
requete("teddies", MakkeDiv("teddies"));
requete("cameras", MakkeDiv("cameras"));
requete("furniture", MakkeDiv("furniture"));