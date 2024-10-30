function getLyrics() {
  const lyricNumber = document.getElementById("numberInput").value; // Get the input value
  const input = Number(lyricNumber);

  if (isNaN(input) || lyricNumber.trim() === "") {
    alert("Please enter a number, not a word.");
  } else {
    if (input === 1) {
      alert("One is the loneliest number that you'll ever do.");
    } else if (input === 2) {
      alert("Two can be as bad as one. It's the lonely number since the number one.");
    } else if (input === 3) {
      alert("There is no three.");
    } else {
      alert("You didn't enter a valid number.");
    }
  }
}