let age = 0;

function read(name) {
  fetch("https://api.agify.io/?name=" + name)
    .then((prm) => prm.json())
    .then((rep) => {
      age = rep.age;
      document.querySelector("#age").innerText = rep.age; 
      //document.querySelector("#name").select();
    })
    .catch((err) => console.log("Client error = ", err))
    .catch((err) => console.log("Server error = ", err));
}

document.querySelector("#request").addEventListener("click", function (event) {
  let name = document.querySelector("#name").value;
  read(name);
});
