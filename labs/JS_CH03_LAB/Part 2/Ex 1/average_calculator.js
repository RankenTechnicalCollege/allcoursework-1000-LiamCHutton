function calculateAverage()
{
  let num1 = parseFloat(document.getElementById("box1").value);
  let num2 = parseFloat(document.getElementById("box2").value);
  let num3 = parseFloat(document.getElementById("box3").value);
  let num4 = parseFloat(document.getElementById("box4").value);
  let num5 = parseFloat(document.getElementById("box5").value);

  let average = (num1 + num2 + num3 + num4 + num5) / 5;

  document.getElementById("result").innerHTML = "The average is: " + average;
}