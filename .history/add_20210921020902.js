if (document.readyState) {
    requete("cameras", idCamera, valeurMin);
    requete("furniture", idTable, valeurMin);
    requete("teddies", idOurson, valeurMin);
    MakkeDiv("ourson");
    MakkeDiv("camera");
    MakkeDiv("table");
    clickUser("teddies", "buttonourson", "generalContainerourson", "oursonButton");
    clickUser("cameras", "buttoncamera", "generalContainercamera", "cameraButton");
    clickUser("furniture", "buttontable", "generalContainertable", "tableButton");
    clickUserVoirMoins("buttonoursonVoirMoins")
    clickUserVoirMoins("buttoncameraVoirMoins")
    clickUserVoirMoins("buttontableVoirMoins")
}