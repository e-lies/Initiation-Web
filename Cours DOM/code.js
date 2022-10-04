//console.log("welcome");
function test(color) {
  let elements = window.document.querySelectorAll(".inputs");
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    console.log(element.name);
    element.disabled = true;
    element.style["background-color"] = color;
    element.before(element.name);
  }
}
//Evènements
function evenements() {
  document.querySelector("#blue").addEventListener("click", () => {
    test("blue");
  });
  document.querySelector("#orange").addEventListener("click", function (event) {
    test("orange");
  });
}
