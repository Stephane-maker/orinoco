if (document.readyState) {
    let mainSelector = document.getElementById("main");
    mainSelector.appendChild(MakkeDiv("teddies"));
    mainSelector.appendChild(MakkeDiv("cameras"));
    mainSelector.appendChild(MakkeDiv("furniture"));

    let mainSelectorForNavBar = document.getElementsByTagName("main");
    mainSelectorForNavBar.appendChild(makkeNavBar("div"));
    console.log(mainSelectorForNavBar);
}