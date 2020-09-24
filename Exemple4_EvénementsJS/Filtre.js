var filtre = "";
document.getElementById("filtre").addEventListener("keyup",function(){
    changeFiltre()
})
function changeFiltre(){
    //Affecter la valeur de l'input à la variable filtre
    filtre = document.getElementById('filtre').value;
    const tab = [
        {
            logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b9/Logo_Manchester_United.svg/1200px-Logo_Manchester_United.svg.png",
            team: "Manchester United",
            nation: "Angleterre"
        },
        {
            logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/9/9f/Logo_Juventus.svg/1200px-Logo_Juventus.svg.png",
            team: "Juventus Turin",
            nation: "Italie"
        },
        {
            logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/a/a1/Logo_FC_Barcelona.svg/1200px-Logo_FC_Barcelona.svg.png",
            team: "FC Barcelone",
            nation: "Espagne"
        }
    ];
    var i = 0;
    var rows = `<tr id="titles" class="row">
        <th class="titre">
            N°
        </th>
        <th class="titre">
            Logo*
        </th>
        <th class="titre">
            Club
        </th>
        <th class="titre">
            Pays
        </th>
    </tr>`;
    //Pour chaque élément de la liste qui correspond au filtre, on va créer une ligne dans le tableau "équipes"
        /* code... */
    }
    document.getElementById("tableau").innerHTML = rows;
}