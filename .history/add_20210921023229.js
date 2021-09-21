if (document.readyState) {
    requete("cameras", idCamera, valeurMin);
    requete("furniture", idTable, valeurMin);
    requete("teddies", idOurson, valeurMin);
    MakkeDiv("ourson");
    MakkeDiv("camera");
    MakkeDiv("table");
    clickUser("teddies", "buttonourson", "generalContainerourson", "oursonButton", "buttonoursonVoirMoins");
    clickUser("cameras", "buttoncamera", "generalContainercamera", "cameraButton", "buttoncameraVoirMoins");
    clickUser("furniture", "buttontable", "generalContainertable", "tableButton", "buttontableVoirMoins");
    max()

}