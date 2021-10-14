console.log(document.cookie)

function e() {
    let y = document.getElementById("main");
    y.innerHTML = y.innerHTML + document.cookie
}
e()