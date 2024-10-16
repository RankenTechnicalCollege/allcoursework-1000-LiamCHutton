let score = 0;
do {
  score = parseFloat (prompt("Enter number grade from 0 through 100 \nOr enter 999 to end entries"));

  if (score === 999) {
    break;
  }

  if (score >= 88 && score <= 100)
  {
    document.write(`<p><label>Grade</label> ${score} = A</p>`);
  }
  else if (score >= 80 && score <= 87)
  {
    document.write(`<p><label>Grade</label> ${score} = B</p>`);
  }
  else if (score >= 68 && score <= 79)
  {
    document.write(`<p><label>Grade</label> ${score} = C</p>`);
  }
  else if (score >= 60 && score <= 67)
  {
    document.write(`<p><label>Grade</label> ${score} = D</p>`);
  }
  else if (score < 60)
  {
    document.write(`<p><label>Grade</label> ${score} = F</p>`);
  }
  else
  {
    alert("Please enter a valid grade");
  }
}
while (score !== 999)