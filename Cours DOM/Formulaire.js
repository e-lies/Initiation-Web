let jsn = {};
const button = document.querySelector("#toJson");

const inputs = document.querySelectorAll("input, select");

for (let i = 0; i < inputs.length; i++) {
  let ev;
  if (inputs[i].tagName === "SELECT") {
    ev = "change";
  } else if (inputs[i].tagName === "INPUT") {
    ev = "keyup";
  }
  console.log(ev, inputs[i].tagName);
  inputs[i].addEventListener(ev, function (event) {
    jsn[event.target.name] = event.target.value;
    console.log(jsn);
    paragraphe(jsn);
  });
}

function paragraphe(j) {
  const txt = `
    Je m'appelle ${jsn.nom} <br/>
    J'ai ${jsn.age} ans <br/>
    Je suis ${jsn.genre === "femme" ? "une" : "un"} ${jsn.genre}
  `;
  document.querySelector("#texte").innerHTML = txt;
}

/*
button.addEventListener("click", function (event) {
  jsn['nom'] = document.querySelector("[name=nom]").value;
  jsn.age = document.querySelector("[name=age]").value;
  jsn.gender = document.querySelector("[name=gender]").value;
  console.log("formulaire = ", jsn);
});*/
