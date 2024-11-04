const tax = .07;

const getCost = (itemCost, numItems) => {

   const subtotal = itemCost * numItems;

   const tax = 0.06;

   const total = subtotal + subtotal * tax;

   return total;

}
alert(tax)