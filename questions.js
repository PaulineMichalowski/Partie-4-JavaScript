/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieurs façon de faire.
 */
var tailleString = function (texte) {
    var result = texte.length;
    return result;
}
var remplaceECar = function (texte) {
  var result = texte.replace('e',' ');
    return result;
}
var concatString = function (texte1, texte2) {
  var result = texte1 + texte2;
    return result
}
var afficherCar5 = function (texte) {
  var result = texte.split('');
    result = result[4];
    return result;
}
var afficher9Car = function (texte) {
  var result = texte.split('');
    var result ='';
    for(text = 0; text < 9; text++) {
      result +=texte[text];
    }
    return result;
}
var majusculeString = function (texte) {
  result = texte.toUpperCase();
    return result;
}
var minusculeString = function (texte) {
  result = texte.toLowerCase();
    return result;
}
var SupprEspaceString = function (texte) {
  result = texte.trim();
    return result;
}
var IsString = function (texte) {
  if(typeof texte == 'string') {
    var result = true;
  }
    return result;
}
var AfficherExtensionString = function (texte) {
  result = texte.split('.').pop();
    return result;
}
var NombreEspaceString = function (texte) {
  var texte = texte.split(' ');
  result = (texte.length)-1;
    return result;
}
var InverseString = function (texte) {
  texte = texte.split('');
  result = texte.reverse().join('');
    return result;
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
  var result = Math.pow(x, y);
    return result;
}
var valeurAbsolue = function (nombre) {
  var result = Math.abs(nombre);
    return result;
}
var valeurAbsolueArray = function (array) {
    return 'A completer';
}
var sufaceCercle = function (rayon) {
  var result = Math.PI*Math.pow(rayon,2);
    return Math.round(result);
}
var hypothenuse = function (ab, ac) {
    return 'A completer';
}
var calculIMC = function (poids, taille) {
  var result = poids/(taille*taille);
    return parseFloat(result.toFixed(2));
}
