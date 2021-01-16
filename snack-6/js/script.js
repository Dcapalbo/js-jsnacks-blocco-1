// 1 creo l'array
var invitatiFesta = ["francesco", "lorenzo", "samuele", "vincenzo", "enrico", "gianni"]
//2 chiedo il nome all'utente
var nomeUtente = prompt("inserire il proprio nome");

var invito = false

for (var i = 0; i < invitatiFesta.length; i++) {
  if (nomeUtente === invitatiFesta[i]) {
    invito = true;
    alert("Il nome è sulla lista");
    break;
  }
  else {
    (nomeUtente !== invitatiFesta[i])
    invito = false;
    alert("il nome non è sulla lista");
    break;
  }
}
