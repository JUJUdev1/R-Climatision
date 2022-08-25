////////////////////////////////////////////////////////////////////////////////////envoi formulaire/////////////////////////////////////////////

// recuperer l id du formulaire
const formulaire = document.getElementById("formulaire");

let defaultInput = {
  nom: false,
  prenom: false,
  email: false,
  telephone: false,
  message: false,
};
// fonction pour controler le formulaire avec des regex
function controlerFormulaire() {
  // regex pour le nom
  const regexNom = /^([a-zA-Z,éêèàëÉÈÊË.'-]+[ ]?){2,}$/;
  // regex pour le prenom
  const regexPrenom = /^([a-zA-Z,éêèàëÉÈÊË.'-]+[ ]?){2,}$/;
  // regex pour le email
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  // regex pour le telephone
  const regexTelephone = /^[0-9]{10}$/;

  // recuperer les valeurs des champs
  const nom = document.getElementById("nom");
  const prenom = document.getElementById("prenom");
  const email = document.getElementById("email_id");
  const telephone = document.getElementById("telephone_id");
  // verifier les champs
  nom.addEventListener("input", function (event) {
    let nomInput = event.target.value;
    let valid = regexNom.test(nomInput);
    if (valid === false) {
      nom.style.borderColor = "red";
      defaultInput.nom = false;
    } else {
      nom.style.borderColor = "green";
      defaultInput.nom = true;
    }
  });
  prenom.addEventListener("input", function (event) {
    let prenomInput = event.target.value;
    let valid = regexPrenom.test(prenomInput);
    if (valid === false) {
      prenom.style.borderColor = "red";
      defaultInput.prenom = false;
    } else {
      prenom.style.borderColor = "green";
      defaultInput.prenom = true;
    }
  }),
    email.addEventListener("input", function (event) {
      let emailInput = event.target.value;
      let valid = regexEmail.test(emailInput);
      if (valid === false) {
        email.style.borderColor = "red";
        defaultInput.email = false;
      } else {
        email.style.borderColor = "green";
        defaultInput.email = true;
      }
    });
  telephone.addEventListener("input", function (event) {
    let telephoneInput = event.target.value;
    let valid = regexTelephone.test(telephoneInput);
    if (valid === false) {
      telephone.style.borderColor = "red";
      defaultInput.telephone = false;
    } else {
      telephone.style.borderColor = "green";
      defaultInput.telephone = true;
    }
  });
}
controlerFormulaire();

// fonction pour envoyer le formulaire si tous les champs sont valides et si le bouton envoyer est cliqué
function envoyerFormulaire() {
  let envoyer = document.getElementById("envoyer");
  envoyer.addEventListener("click", function (event) {
    if (
      defaultInput.nom === true &&
      defaultInput.prenom === true &&
      defaultInput.email === true &&
      defaultInput.telephone === true
    ) {
      event.preventDefault();
      const params = {
        from_name: document.getElementById("nom").value,
        from_prenom: document.getElementById("prenom").value,
        email_id: document.getElementById("email_id").value,
        telephone_id: document.getElementById("telephone_id").value,
        message: document.getElementById("message").value,
      };
      emailjs
        .send("service_0qqbpmf", "template_i7d6i4i", params)
        .then(function (res) {
          let p = document.createElement("p");
          p.innerHTML = "Votre message a bien été envoyé";
          p.style.color = "green";
          p.style.fontSize = "15px";
          p.style.fontWeight = "bold";
          formulaire.appendChild(p);
          setTimeout(function () {
            p.style.display = "none";
            closeForm();
          }, 5000);
        })
        .catch(function (err) {
          let p = document.createElement("p");
          p.innerHTML = "votre message n'a pas été envoyé";
          p.style.color = "red";
          p.style.fontSize = "15px";
          p.style.fontWeight = "bold";
          formulaire.appendChild(p);
          setTimeout(function () {
            p.style.display = "none";
          }, 5000);
        });
    } else {
      let p = document.createElement("p");
      p.innerHTML = "Veuillez remplir tous les champs";
      p.style.color = "red";
      p.style.fontSize = "15px";
      p.style.fontWeight = "bold";
      formulaire.appendChild(p);
      setTimeout(function () {
        p.style.display = "none";
      }, 5000);
    }
  }),
    closeForm();
}
envoyerFormulaire();
