document.querySelector("#request").addEventListener("click", function (event) {
  let name = document.querySelector("#name").value;
  fetch("https://api.agify.io/?name=" + name)
    .then((prm) => prm.json())
    .then((rep) => {
      document.querySelector("#age").innerText = rep.age;
    })
    .catch((err) => console.log("Client error = ", err))
    .catch((err) => console.log("Server error = ", err));
});
