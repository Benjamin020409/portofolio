function envoie() {
  let name = document.getElementById("nm").value.trim();
  let pname = document.getElementById("pn").value.trim();
  let sujet = document.getElementById("sj").value.trim();
  let desc = document.getElementById("dc").value.trim();

  if (name === "") {
    window.alert("Veuillez entrer votre nom.");
    return;
  }
  if (pname === "") {
    window.alert("Veuillez entrer votre prénom.");
    return;
  }
  if (sujet === "") {
    window.alert("Veuillez entrer le sujet.");
    return;
  }
  if (desc === "") {
    window.alert("Veuillez entrer la description du projet.");
    return;
  }

  const destinataire = "benjaminavoumado38@gmail.com";
  const sujetMail = `Message de ${name} ${pname}`;
  const corps = `Nom : ${name}%0D%0APrénom : ${pname}%0D%0ASujet : ${sujet}%0D%0ADescription du projet : ${desc}`;

  window.alert("Envoi réussi !");
  window.location.href = `mailto:${destinataire}?subject=${encodeURIComponent(
    sujetMail
  )}&body=${encodeURIComponent(corps)}`;
}
