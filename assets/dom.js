document.getElementById('student-label').textContent = student.name + ' · ' + student.group;
// Task 2: change paragraph text.
document.getElementById('change-text').addEventListener('click', function () {
  document.getElementById('changing-text').textContent = 'The paragraph has changed!';
});
// Task 3: change the background and font size.
let box = document.getElementById('style-box');
document.getElementById('change-color').addEventListener('click', function () {
  box.style.backgroundColor = 'lightblue';
});
document.getElementById('change-size').addEventListener('click', function () {
  box.style.fontSize = '24px';
});
// Task 4: add and remove list elements.
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
