let listeFilms = [
  {
    titre: "Flash",
    annee: 2018,
    realisateur: "Bebert"
  },
  {
    titre: "Thor",
    annee: 2015,
    realisateur: "Morice"
  },
  {
    titre: "Les gendarmes",
    annee: 1985,
    realisateur: "Albert"
  },
  {
    titre: "Bidasse",
    annee: 1996,
    realisateur: "Robert"
  }

];


tbody = document.querySelector('tbody');  // Sélection des élement principaux
div = document.querySelector('#ajout')
divInfoAjout=document.querySelector('.infoAjout')
// TODO : Bon code
function affichage(table) {  // déclarations des fonctions principales affichage
  for (let i = 0; i < table.length; i++) {


    ligne = document.createElement('tr');  // creation des balises du tableau 
    titre = document.createElement('td');
    annee = document.createElement('td');
    realisateur = document.createElement('td');

    titre.textContent = table[i].titre;  // remplissage des colonnes
    realisateur.textContent = table[i].realisateur;
    annee.textContent = table[i].annee;

    ligne.appendChild(titre); // placement des balises dans le html
    ligne.appendChild(annee);
    ligne.appendChild(realisateur);
    tbody.appendChild(ligne);
  }
}

function affichage2(table) {
  ligne = document.createElement('tr');  // creation des balises du tableau 
  titre = document.createElement('td');
  annee = document.createElement('td');
  realisateur = document.createElement('td');

  ligne.appendChild(titre); // placement des balises dans le html
  ligne.appendChild(annee);
  ligne.appendChild(realisateur);
  tbody.appendChild(ligne);

  titre.textContent = table[table.length-1].titre;  // remplissage des colonnes
  realisateur.textContent = table[table.length-1].realisateur;
  annee.textContent = table[table.length-1].annee;

}

function capitalizeFirstLetter(string) {   // fonction pour mettre la 1er lettre d'un mot en majuscul
  return string.charAt(0).toUpperCase() + string.slice(1);
}



affichage(listeFilms);

boutAjouter = document.createElement('button'); // création bouton ajouter
boutAjouter.textContent = 'Ajouter'
div.appendChild(boutAjouter);


boutAjouter.addEventListener('click', function (e) {  // click sur le bouton ajouter

  boutAjouter.style.visibility = 'hidden';  // rend invisible et crée un bouton Ok
  boutOk = document.createElement('button');
  boutOk.textContent = 'ok'


  txtTitre = document.createElement('input');   // zone de text
  txtAnnee = document.createElement('input');
  txtRealisateur = document.createElement('input');


  txtTitre.type = 'text';        // les types de zone de saisie txt ou nombre
  txtRealisateur.type = 'text';
  txtAnnee.type = 'number';

  txtTitre.placeholder = 'Entrez un titre';    // indication de saisie case 1 titre etc
  txtRealisateur.placeholder = 'Entrez un réalisateur';
  txtAnnee.placeholder = 'Entrez une date';

 
  div.appendChild(txtTitre);   // il aurai été mieux de tout mettre dans un form avec 
  div.appendChild(txtAnnee);   // des required pour les input afin de vérifier les contenues vides
  div.appendChild(txtRealisateur);
  div.appendChild(boutOk);



  boutOk.addEventListener('click', function () {

    if (txtTitre.value === '' && txtAnnee.value === '' && txtRealisateur.value === '') { // si les 3 cases sont vides
      spanMessage = document.createElement('span');
      divInfoAjout.appendChild(spanMessage)
      spanMessage.innerHTML = '<strong>Veuillez compléter au moins un des trois champs</strong>'
      divInfoAjout.classList.add("alert")
      divInfoAjout.classList.add("alert-danger")
      setTimeout(function () { 
        divInfoAjout.removeChild(spanMessage);
        divInfoAjout.classList.remove("alert");
        divInfoAjout.classList.remove("alert-danger");
      }, 2000);
     

    }
    else {  // sinon (si au moins une case est remplie)
      
      txtTitrev = capitalizeFirstLetter(txtTitre.value)

      txtAnneev = txtAnnee.value

      txtRealisateurv = capitalizeFirstLetter(txtRealisateur.value)

      a = listeFilms.push({ 'titre': txtTitrev, 'annee': Number(txtAnneev), 'realisateur': txtRealisateurv })

      div.removeChild(txtTitre);
      div.removeChild(txtAnnee);
      div.removeChild(txtRealisateur);
      div.removeChild(boutOk);

      boutAjouter.style.visibility = 'visible';

      spanMessage = document.createElement('span');  // je crée un span pour afficher un message
      divInfoAjout.appendChild(spanMessage)
      spanMessage.innerHTML = '<strong>Film ajouté</strong>'
      divInfoAjout.classList.add("alert")
      divInfoAjout.classList.add("alert-success")
      setTimeout(function () {   // message que je supprime au bout de 2000 ms
        divInfoAjout.removeChild(spanMessage);
        divInfoAjout.classList.remove("alert");
        divInfoAjout.classList.remove("alert-success");
      }, 2000);

      affichage2(listeFilms)
    }
  })
});
select = document.querySelector('select');
select.addEventListener('change', function () { // au changement de valeur de select 
  if (select.value === "date") { // si date sélectionner
    
    listeFilmsSort = listeFilms.sort(function (a, b) {  // tri par date
      return a.annee - b.annee;
    });
  }
  else if (select.value === "titre") {// si titre sélectionner

    listeFilmsSort = listeFilms.sort(function (a, b) { // tri par titre
      if (a.titre < b.titre) {
        return -1;
      }
      if (a.titre > b.titre) {
        return 1;
      }
      if (a.titre = b.titre) {
        return 0;
      }
    });
  }
  else { // si la case selectionné est vide
    listeFilmsSort = listeFilms;
  }
  
  tbody.innerHTML = ''; //vide le tableau
  affichage(listeFilmsSort); // affiche mon nouveau tableau
})


// commenter + pattern +tout mettre dans un form