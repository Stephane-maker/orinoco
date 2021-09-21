if (document.readyState) {
    requete("cameras", re());
    requete("furniture");
    requete("teddies");
    let bodySelector = document.querySelector("body");
    bodySelector.appendChild(MakkeDiv("ourson"));
    bodySelector.appendChild(MakkeDiv("camera"));
    bodySelector.appendChild(MakkeDiv("table"));


}