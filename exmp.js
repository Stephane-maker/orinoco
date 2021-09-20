// let valeurMax = value.length;

// let z = document.getElementById("button_ourson");
// z.addEventListener('click', function() {
//     fetch("http://localhost:3000/api/teddies")
//         .then(function(res) {
//             if (res.ok) {
//                 return res.json();
//             }
//         })
//         .then(function(value) {
//             for (let i = 2; i < value.length; i++) {
//                 const element = value[i];
//                 const ClassForClickUserEvnt = new GeneralClassAccesoire(element);
//                 ClassForClickUserEvnt.addLinkForGeneralClassAccesoire("ourson");
//             }
//         })
//         .catch(function(err) {
//             console.log(err)
//         })
// })
// let a = document.getElementById("button_ourson");
// a.remove();
// let b = document.getElementById("container_btn");
// b.innerHTML = b.innerHTML + "<button  id=\"moin_oursons\" class=\"btn btn-primary\" type=\"button\">Voir moins d'ourson</button>";

// function ClickUserVoirMoins() {
//     let r = document.getElementById("moin_oursons");
//     r.onclick =
//         fetch("http://localhost:3000/api/teddies")
//         .then(function(res) {
//             if (res.ok) {
//                 return res.json();
//             }
//         })
//         .then(function(value) {
//             for (let i = 0; i < 3; i++) {
//                 let t = document.getElementById("generalContainer");
//                 t.remove();
//             }
//         })
//         .catch(function(err) {
//             console.log(err)
//         })
//     let c = document.getElementById("moin_oursons");
//     c.remove();
//     let b = document.getElementById("container_btn");
//     b.innerHTML = b.innerHTML + "<button onclick=\"ClickUser()\" id=\"button_ourson\" class=\"btn btn-primary\" type=\"button\">Voir plus d'ourson</button>";
// }