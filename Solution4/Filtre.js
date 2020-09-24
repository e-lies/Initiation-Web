var filtre = "";
const tab = [
    {
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b9/Logo_Manchester_United.svg/1200px-Logo_Manchester_United.svg.png",
        team: "Manchester United",
        nation: "Angleterre"
    },
    {
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/c/c7/Logo_Real_Madrid.svg/1200px-Logo_Real_Madrid.svg.png",
        team: "Real Madrid",
        nation: "Espagne"
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
//Exécuter la fonction au chargement de la page pour construire le tableau
changeFiltre();
document.body.addEventListener("load",function(){
    alert("load")
    changeFiltre()
})
document.getElementById("filtre").addEventListener("keyup",function(){
    changeFiltre()
})
function changeFiltre(){
    //Affecter la valeur de l'input à la variable filtre
    filtre = document.getElementById('filtre').value;
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
    for(i = 0; i < tab.length; i++){
        //Créer un élément ligne de tableau dynamique (fabriqué avec des variables)
        if(tab[i]['nation'].includes(filtre)){
            //La méthode .innerHTML donne le contenu HTML de l'élément identifier
            rows = rows +
            `<tr class='row'>
                <td class="cell">
                    `+ parseInt(i+1) + `
                </td>
                <td class="logo">
                    <img width="60px" height="60px" alt="`+tab[i]['team']+`" src="`+tab[i]['logo']+`" />
                </td>
                <td class="cell">
                    `+tab[i]['team']+`
                </td>
                <td class="cell">
                    `+tab[i]['nation']+`
                </td>
            </tr>`;
        }
        //Les backticks `` permettent d'écrire des string sur plusieurs lignes
    }
    document.getElementById("tableau").innerHTML = rows;
}