const list = document.getElementById('oddNumbersList');

for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
      const listItem = document.createElement('li');
      listItem.textContent = i;
      list.appendChild(listItem);
  }
}