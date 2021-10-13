function makkeNavBar() {

    const createClassForNavBar = document.createElement("div");

    let navClass = document.createElement("nav");
    navClass.classList = "navbar navbar-expand-lg navbar-light bg-light";

    createClassForNavBar.appendChild(navClass);

    let createElementFluidNavBarContainer = document.createElement("div");
    navClass.appendChild(createElementFluidNavBarContainer);
    createElementFluidNavBarContainer.classList = "container-fluid";

    let createLinkTitleForNavBar = document.createElement("a");
    createLinkTitleForNavBar.textContent = "Orinoco";
    createLinkTitleForNavBar.classList = "navbar-brand";
    createLinkTitleForNavBar.setAttribute("href", "#");
    createElementFluidNavBarContainer.appendChild(createLinkTitleForNavBar);

    //button bootstrap for responsive 
    let createButtonBootstrapForResponsive = document.createElement("button");
    createButtonBootstrapForResponsive.classList = "navbar-toggler";
    createButtonBootstrapForResponsive.setAttribute("data-bs-toggle", "collapse");
    createButtonBootstrapForResponsive.setAttribute("data-bs-target", "#navbarTogglerDemo02");
    createButtonBootstrapForResponsive.setAttribute("aria-controls", "navbarTogglerDemo02");
    createButtonBootstrapForResponsive.setAttribute("aria-expanded", false);
    createButtonBootstrapForResponsive.setAttribute("aria-label", "Toggle navigation")
    createButtonBootstrapForResponsive.type = "button";

    createElementFluidNavBarContainer.appendChild(createButtonBootstrapForResponsive);

    let createSpanForResponsiveMod = document.createElement("span");
    createSpanForResponsiveMod.classList = "navbar-toggler-icon";
    createButtonBootstrapForResponsive.appendChild(createSpanForResponsiveMod);

    //create div for liste puce containe navBar 
    let createDivForListePuce = document.createElement("div");
    createDivForListePuce.classList = "collapse navbar-collapse";
    createDivForListePuce.id = "navbarTogglerDemo02";

    createElementFluidNavBarContainer.appendChild(createDivForListePuce);

    let createListPuce = document.createElement("ul");
    createListPuce.classList = "navbar-nav me-auto mb-2 mb-lg-0";
    createDivForListePuce.appendChild(createListPuce);

    let createPuceForListAPuce = document.createElement("li");
    createPuceForListAPuce.classList = "nav-item";

    createListPuce.appendChild(createPuceForListAPuce);

    let createLinForLi = document.createElement("a");
    createLinForLi.classList = "nav-link active";
    createLinForLi.setAttribute("href", "#");
    createLinForLi.textContent = "Home";

    createPuceForListAPuce.appendChild(createLinForLi);

    let createPuceForPanier = document.createElement("li");
    createPuceForPanier.classList = "nav-item";

    createListPuce.appendChild(createPuceForPanier);

    let createLinkForPanier = document.createElement("a");
    createLinkForPanier.classList = "nav-link active";
    createLinkForPanier.setAttribute("href", "#");
    createLinkForPanier.textContent = "Panier";

    createPuceForPanier.appendChild(createLinkForPanier);

    let createIconPanier = document.createElement("i");
    createIconPanier.classList = "fas fa-shopping-basket";
    createLinkForPanier.appendChild(createIconPanier);



    let createFormForSearchNavBar = document.createElement("form");
    createFormForSearchNavBar.classList = "d-flex";
    createDivForListePuce.appendChild(createFormForSearchNavBar);

    let createInputForSearch = document.createElement("input");
    createInputForSearch.classList = "form-control me-2";
    createInputForSearch.setAttribute("type", "search")
    createFormForSearchNavBar.appendChild(createInputForSearch);

    let createButtonForSearch = document.createElement("button");
    createButtonForSearch.classList = "btn btn-outline-success";
    createButtonForSearch.setAttribute("type", "submit");
    createButtonForSearch.textContent = "Recherche";
    createFormForSearchNavBar.appendChild(createButtonForSearch);

    return createClassForNavBar
}