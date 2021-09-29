if (document.readyState) {
    let mainFocus = document.getElementById("main");
    mainFocus.appendChild(makkeNavBar());

    let mainSelector = document.getElementById("main");
    mainSelector.appendChild(MakkeDiv("teddies"));
    mainSelector.appendChild(MakkeDiv("cameras"));
    mainSelector.appendChild(MakkeDiv("furniture"));

}