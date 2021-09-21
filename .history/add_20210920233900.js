if (document.readyState) {
    requete("cameras", idCamera, valeurMin);
    requete("furniture", idTable, valeurMin);
    requete("teddies", idOurson, valeurMin);
    MakkeDiv("ourson");
    MakkeDiv("camera");
    MakkeDiv("table");
    // clickUser(idBtnOurson, "teddies", "generalContainerourson", "oursonButton");
    // clickUser(idBtnCamera, "cameras", "generalContainercamera", "cameraButton");
    // clickUser(idBtnTable, "furniture", "generalContainertable", "tableButton");


}