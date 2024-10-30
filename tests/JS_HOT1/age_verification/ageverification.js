function checkAge() {
  const ageInput = document.getElementById("ageInput").value;

  if (ageInput === "" || isNaN(ageInput)) {
    alert("Please enter a valid age!");
  } 
  else {
    const age = Number(ageInput);

    if (age >= 21 && age < 200) {
      alert("Welcome to the venue!");
    }
    else if (age < 21 && age > 1) {
      alert("You're not old enough!");
    }
    else {
      alert("Age out of range!");
    }
  }
}