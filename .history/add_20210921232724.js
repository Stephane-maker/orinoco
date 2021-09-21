if (document.readyState) {
    requete("cameras", re());
    requete("furniture", re());
    requete("teddies", re());
    let bodySelector = document.querySelector("body");
    bodySelector.appendChild(MakkeDiv("ourson"));
    bodySelector.appendChild(MakkeDiv("camera"));
    bodySelector.appendChild(MakkeDiv("table"));


}