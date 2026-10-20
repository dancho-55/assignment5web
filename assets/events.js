'use strict';
document.querySelector('#student-label').textContent = student.name + ' · ' + student.group;

const box = document.querySelector('#hover-box');
box.addEventListener('mouseover', () => { box.style.backgroundColor = '#d9f99d'; });
box.addEventListener('mouseout', () => { box.style.backgroundColor = ''; });
const input = document.querySelector('#live-input');
const showValue = () => { document.querySelector('#live-output').textContent = input.value || 'Your text will appear here.'; };
input.addEventListener('keyup', showValue);
input.addEventListener('input', showValue);
document.querySelector('#calculator').addEventListener('submit', event => {
  event.preventDefault();
  const a = Number(document.querySelector('#first-number').value);
  const b = Number(document.querySelector('#second-number').value);
  const operator = document.querySelector('#operation').value;
  const output = document.querySelector('#calc-result');
  if (!Number.isFinite(a) || !Number.isFinite(b)) { output.textContent = 'Enter two valid numbers.'; return; }
  if (operator === '/' && b === 0) { output.textContent = 'Cannot divide by zero.'; return; }
  let result;
  switch (operator) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '*': result = a * b; break;
    case '/': result = a / b; break;
  }
  output.textContent = Number.isFinite(result) ? `${a} ${operator} ${b} = ${Number(result.toPrecision(12))}` : 'Result is outside the supported number range.';
});
