if (document.readyState) {
    requete("cameras", valueLength);
    requete("furniture", valueLength);
    requete("teddies", valueLength);

    let bodySelector = document.querySelector("body");

    bodySelector.appendChild(MakkeDiv("ourson"));
    bodySelector.appendChild(MakkeDiv("camera"));
    bodySelector.appendChild(MakkeDiv("table"));

}