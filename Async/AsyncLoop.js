let ids = null;
let htmlIds;
document.querySelector("#ids").addEventListener("keyup", (event) => {
  ids = event.target.value;
});

async function getAllData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      let html = "";
      for (let i = 0; i < json.length; i++) {
        console.log(`${json[i]["userId"]}: ${json[i].title}`);
        html += `<li id="list${i}">${json[i]["userId"]}: ${json[i].title}</li>`;
      }
      document.querySelector("#serverData").innerHTML = html;
    })
    .catch((err) => console.log("erreur client = ", err))
    .catch((err) => console.log("erreur serveur = ", err));
}

async function getIdData(id) {
  let rslt = "";
  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error("code réponse échec !");
      }
      console.log(`id = ${id}`);
      return response.json();
    })
    .then((json) => {
      rslt = `<li>${json.id}: ${json.title}</li>`;
    })
    .catch((err) => console.log("erreur client = ", err))
    .catch((err) => console.log("erreur serveur = ", err));
  return rslt;
}

document.querySelector("#getData").addEventListener("click", function (event) {
  getAllData();
});

document
  .querySelector("#getFromIds")
  .addEventListener("click", async function (event) {
    htmlIds = "";
    let tabIds = ids.split(",");
    let mapId = tabIds.map(async (id) => {
      return await getIdData(id);
    });
    let arrIds = await Promise.all(mapId);
    htmlIds = arrIds.join(" ");
    /*for (let i = 0; i < tabIds.length; i++) {
      const id = tabIds[i];
      htmlIds += await getIdData(id);
    }*/
    document.querySelector("#serverData").innerHTML = htmlIds;
  });
