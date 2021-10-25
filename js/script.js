function verification() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log({ email, password });
  if (email === "") {
    alert("Le champ e-mail doit contenir une valeur.");
    return;
  }
  if (email.indexOf("@") === -1) {
    alert("Le champ e-mail doit être un E-mail valide.");
    return;
  }

  if (password == "") {
    alert("Le champ mot de passe doit contenir une valeur.");
    return;
  }
  
  alert("Félicitations");
}
