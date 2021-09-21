if (document.readyState) {
    requete("cameras");
    requete("furniture");
    requete("teddies");

    let bodySelector = document.querySelector("body");

    bodySelector.appendChild(MakkeDiv("ourson"));
    bodySelector.appendChild(MakkeDiv("camera"));
    bodySelector.appendChild(MakkeDiv("table"));

}