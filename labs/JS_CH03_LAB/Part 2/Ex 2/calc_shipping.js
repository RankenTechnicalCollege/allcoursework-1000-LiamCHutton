function calculatePrice()
{
  let purchaseAmount = parseFloat(document.getElementById("purchaseAmount").value);

  let shippingFee = 0;

  //Minimum Fee
  if (purchaseAmount <= 25.00)
  {
    shippingFee = 1.50;
  }
  else 
  {
    shippingFee = purchaseAmount * 0.10;
  }

  let totalAmount = purchaseAmount + shippingFee

  alert("Total cost including shipping: $" + totalAmount.toFixed(2));
}