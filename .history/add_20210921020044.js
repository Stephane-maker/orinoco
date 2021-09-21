if (document.readyState) {
    requete("cameras", idCamera, valeurMin);
    requete("furniture", idTable, valeurMin);
    requete("teddies", idOurson, valeurMin);
    MakkeDiv("ourson");
    MakkeDiv("camera");
    MakkeDiv("table");
    clickUser("teddies", "buttonourson", "generalContainerourson");
    clickUser("cameras", "buttoncamera", "generalContainercamera");
    clickUser("furniture", "buttontable", "generalContainertable")
}