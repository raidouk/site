/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

alert("Bienvenue dans ce jeu de devinette ! Trouvez mon chiffre compris entre 1 et 100");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var i = 0;
var reponse = 0;

while (reponse !== solution && i < 6) {
  i = i + 1;
  var reponse = Number(prompt("rentrez votre chiffre"));
  if (reponse < solution) {
    alert("plus grande");
  }
  else if (reponse > solution) {
    alert("plus petit");
  }
  else {
    alert("BRAVO ! vous avez trouvé en "+ i +" essais");
    break;
  }
  
  if (i === 6) {
    alert("vous avez perdu");
    alert("la réponse été " + solution);
  }
}


