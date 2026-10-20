document.getElementById('student-label').textContent = student.name + ' · ' + student.group;
document.getElementById('change-text').addEventListener('click', function () {
  document.getElementById('changing-text').textContent = 'The paragraph has changed!';
});
let box = document.getElementById('style-box');
document.getElementById('change-color').addEventListener('click', function () {
  box.style.backgroundColor = 'lightblue';
});
document.getElementById('change-size').addEventListener('click', function () {
  box.style.fontSize = '24px';
});
let list = document.getElementById('item-list');
let itemNumber = 2;
document.getElementById('add-item').addEventListener('click', function () {
  let item = document.createElement('li');
  item.textContent = 'Item ' + itemNumber;
  list.appendChild(item);
  itemNumber++;
});
document.getElementById('remove-item').addEventListener('click', function () {
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
});
