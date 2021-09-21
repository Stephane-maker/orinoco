if (document.readyState) {
    requete("cameras", idCamera, valeurMin);
    requete("furniture", idTable, valeurMin);
    requete("teddies", idOurson, valeurMin);
    MakkeDiv("ourson");
    MakkeDiv("camera");
    MakkeDiv("table");
    clickUser(idBtnOurson, "teddies", "oursonButton");
    clickUser(idBtnCamera, "cameras", "cameraButton");
    clickUser(idBtnTable, "furniture", "tableButton");
    clickUserVoirMoins("buttonoursonMoins", "containerArticle")
    clickUserVoirMoins(, "containerArticle")
    clickUserVoirMoins(, "containerArticle")
}