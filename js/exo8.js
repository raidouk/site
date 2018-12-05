var text = document.querySelector('#txt');
var nb = document.querySelector('#nb');
var bouton = document.querySelector('button');

bouton.addEventListener('click', function () {
    valeurnb = nb.value;
    valeurtext = text.value;
    console.log(nb.value);
    var adresseActuelle = window.location;
    console.log(adresseActuelle);

    nouvelleAdresse = 'exo8s.html?clé1=' + valeurnb + '&clé2=' + valeurtext;
    window.location = nouvelleAdresse;

    var maChaine1 = nouvelleAdresse.split('?');
    var maChaine2 = maChaine1[1].split('&');
    var maChainenb = maChaine2[0].split('=');
    var maChainetxt = maChaine2[1].split('=');
    console.log(maChainenb[1]);
    console.log(maChainetxt[1]);
    var txtinfo = document.querySelector('#txtinfo');
    var nbinfo = document.querySelector('#nbinfo');
    txtinfo.innerText = maChainenb[1];
    nbinfo.innerText = maChainetxt[1];
}
)
