let jsn = {};
const button = document.querySelector("#toJson");
const inputs = document.querySelectorAll("input,select");
button.addEventListener("click", function (event) {
  for (let i = 0; i < inputs.length; i++) {
    jsn[inputs[i]["name"]] = inputs[i]["value"];
  }
  console.log(jsn);
});

/*
button.addEventListener("click", function (event) {
  jsn['nom'] = document.querySelector("[name=nom]").value;
  jsn.age = document.querySelector("[name=age]").value;
  jsn.gender = document.querySelector("[name=gender]").value;
  console.log("formulaire = ", jsn);
});*/
