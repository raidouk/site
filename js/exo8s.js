window.onload = function () {
    //code de la fonction
    nouvelleAdresse = window.location;
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
