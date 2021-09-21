if (document.readyState) {
    requete("cameras", idCamera, valeurMin);
    requete("furniture", idTable, valeurMin);
    requete("teddies", idOurson, valeurMin);
    MakkeDiv("ourson");
    MakkeDiv("camera");
    MakkeDiv("table");
    clickUser(idBtnOurson, "teddies");
    clickUser(idBtnCamera, "cameras");
    clickUser(idBtnTable, "furniture");


}