const bouton = document.getElementById("Submit");

bouton.addEventListener("click", function() {
  const day = parseInt(document.getElementById("day").value, 10);
  const month = parseInt(document.getElementById("month").value, 10);
  const year = parseInt(document.getElementById("year").value, 10);

  if (isNaN(day) || isNaN(month) || isNaN(year) || day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > 2021){
    alert("Please enter a valid date");
    return;
  }

  /* Calculer avec les informations reçues, la date d'anniversaire (années, mois, jour) exemple : information saisie : Day : 24 Month 09 Year : 1984 || result : 38 years 3months 26days*/
  const today = new Date();
  const birthday = new Date(year, month - 1, day);

  if (today < birthday) {
    alert("Please enter a valid date"); // La date saisie est dans le futur
    return;
  }

  const age = today.getFullYear() - birthday.getFullYear();
  const monthDiff = today.getMonth() - birthday.getMonth();
  const dayDiff = today.getDate() - birthday.getDate();

  let monthAge = 0;
  let dayAge = 0;

  if (dayDiff < 0) {
    // La date d'anniversaire est dans le futur ce mois-ci
    const lastMonthDate = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    monthAge = monthDiff - 1;
    dayAge = lastMonthDate + dayDiff;
  } else {
    monthAge = monthDiff;
    dayAge = dayDiff;
  }

  // Mettre à jour les valeurs dans les pseudo-éléments
  document.getElementById("Years").setAttribute("data-content", age);
  document.getElementById("Months").setAttribute("data-content", monthAge);
  document.getElementById("Days").setAttribute("data-content", dayAge);

  // Ajouter la classe "with-content" pour afficher les valeurs
  document.getElementById("Years").classList.add("with-content");
  document.getElementById("Months").classList.add("with-content");
  document.getElementById("Days").classList.add("with-content");
});
