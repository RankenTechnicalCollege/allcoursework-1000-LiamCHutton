function calcBMI()
{
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("weight").value);

  let bmiResult = (weight * 703) / (height * height);

  document.getElementById("result").value = `${bmiResult}`;
}