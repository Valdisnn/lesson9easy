'use strict';

//Кнопку "Рассчитать" через id
const //сalculationBtn = document.getElementById('start'),
  сalculationBtn = document.querySelector('#start'),

  //Кнопки “+” (плюс) через Tag, каждую в своей переменной.
  btnPlus = document.getElementsByClassName('btn_plus'),
  plusInc = btnPlus[0],
  plusExp = btnPlus[1],

  // plusInc = document.querySelector('.income_add'),
  // plusExp = document.querySelector('.expenses_add'),

  //Чекбокс по id через querySelector
  checkBox = document.querySelector('#deposit-check'),

  //Поля для ввода возможных доходов (additional_income-item) при помощи querySelectorAll
  incomeItem = document.querySelectorAll('.additional_income-item'),

  /*Каждый элемент в правой части программы через класс, которые имеют в имени класса "-value",
  начиная с class="budget_day-value" и заканчивая class="target_month-value">*/
  //budgetMonVal = document.getElementsByClassName('budget_month-value')[0],
  budgetMonVal = document.querySelector('.budget_month-value'),
  budgetDayVal = document.querySelector('.budget_day-value'),
  expensesMonVal = document.querySelector('.expenses_month-value'),
  additionalIncVal = document.querySelector('.additional_income-value'),
  additionalExpVal = document.querySelector('.additional_expenses-value'),
  incomePerVal = document.querySelector('.income_period-value'),
  targetMonVal = document.querySelector('.target_month-value'),

  /*Оставшиеся поля через querySelector каждый в отдельную переменную:
  поля ввода (input) с левой стороны и не забудьте про range.*/
  expensesTitle = document.querySelector('input.expenses-title'),
  expensesAmount = document.querySelector('.expenses-amount'),
  additionalExpensesItem = document.querySelector('.additional_expenses-item'),
  salaryAmount = document.querySelector('.salary-amount'),
  incomeTitle = document.querySelector('input.income-title'),
  incomeAmount = document.querySelector('.income-amount'),
  targetAmount = document.querySelector('.target-amount'),

  //range = document.querySelector('.period '),
  rangePeriod = document.querySelector('.period-select');


console.log('сalculationBtn: ', сalculationBtn);
console.log('plusInc: ', plusInc);
console.log('plusExp: ', plusExp);
console.log('checkBox: ', checkBox);
console.log('incomeItem: ', incomeItem);
console.log('budget_month-value: ', budgetMonVal);
console.log('budget_day-value: ', budgetDayVal);
console.log('expenses_month-value: ', expensesMonVal);
console.log('additional_income-value: ', additionalIncVal);
console.log('additional_expenses-value: ', additionalExpVal);
console.log('income_period-value: ', incomePerVal);
console.log('target_month-value: ', targetMonVal);
console.log('salaryAmount: ', salaryAmount);
console.log('incomeTitle: ', incomeTitle);
console.log('expensesTitle: ', expensesTitle);
console.log('incomeAmount: ', incomeAmount);
console.log('expensesAmount: ', expensesAmount);
console.log('additionalExpensesItem: ', additionalExpensesItem);
console.log('targetAmount: ', targetAmount);
console.log('range: ', rangePeriod);
