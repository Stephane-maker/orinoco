if (document.readyState) {
    requete("cameras", idCamera, valeurMin);
    requete("furniture", idTable, valeurMin);
    requete("teddies", idOurson, valeurMin);
    MakkeDiv("ourson");
    MakkeDiv("camera");
    MakkeDiv("table");
    clickUser("buttonourson", "teddies", "generalContainerourson", "oursonButton");
    clickUser("buttoncamera", "cameras", "generalContainercamera", "cameraButton");
    clickUser("buttontable", "furniture", "generalContainertable", "tableButton");
    clickUserVoirMoins("buttonourson", "containerArticle");
    clickUserVoirMoins("buttoncamera", "containerArticle");
    clickUserVoirMoins("buttontable", "containerArticle");
}