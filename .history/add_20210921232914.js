if (document.readyState) {
    // requete("cameras");
    // requete("furniture");
    // requete("teddies");
    let bodySelector = document.querySelector("body");
    bodySelector.appendChild(MakkeDiv("ourson"));
    bodySelector.appendChild(MakkeDiv("camera"));
    bodySelector.appendChild(MakkeDiv("table"));
    re(requete("cameras", children[i].firstChild));
    re(requete("furniture", children[i].firstChild));
    re(requete("teddies", children[i].firstChild));

}