const list = document.getElementById('numberList');

for (let i= 15; i <= 100; i += 15) {
  const listItem = document.createElement('li');
  listItem.textContent = i;
  list.appendChild(listItem);
}