let panier = [];
let cookie = getCookie("panier");
if (cookie != null) {
    panier = JSON.parse(cookie);
}

function getCookie(name) {
    var re = new RegExp("panier" + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
}