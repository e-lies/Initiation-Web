import * as tab from "./Teams.json";
function buildTable(word = "") {
  //Header du tableau
  let content = `
    <tr id="titles">
        <th class="titles"> N° </th>
        <th class="titles"> Club </th>
        <th class="titles"> Pays </th>
        <th class="titles"> Logo </th>
    </tr>
`;
  let tableau = document.querySelector("#clubsList");
  //Parcourir la liste des clubs
  for (let index = 0; index < tab.length; index++) {
    let club = tab[index];
    console.log("word = ", word);
    if (club.nation.toLowerCase().includes(word.toLowerCase())) {
      content += `<tr class ='row'>`;
      content += `<td> 
        ${parseInt(index + 1)} 
    </td>`;
      content += `<td> ${club.team} </td>`;
      content += `<td> ${club.nation} </td>`;
      content += `<td> 
        <img 
            width = '60' 
            heigth = '60' 
            src = ${club.logo}
            alt = ${club.team}
        />
    </td>`;
    }
  }
  tableau.innerHTML = content;
}
buildTable();
let filtre = document.querySelector("#filtre");
console.log(filtre);
filtre.addEventListener("keyup", function (event) {
  //let word = event.target.value;
  buildTable(event.target.value);
});
