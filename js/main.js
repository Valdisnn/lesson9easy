'use strict';

let money,

  start = function() {
    do {
      money = prompt('Ваш месячный доход?');
    } while (isNaN(money) || money === '' || money === null);
  };

start();

let appData = {

  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: true,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 50000,
  period: 3,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,

  asking: function() {

    if (confirm('Есть ли у вас дополнительный источник заработка ?')) {

      let itemIncome;
      do {
        itemIncome = prompt('Какой у вас дополнительный заработок ?', 'Таксую');
      } while (!isNaN(itemIncome) || itemIncome === '' || itemIncome === null);

      let cashIncome;
      do {
        cashIncome = prompt('Сколько вы получаете ?', '10000');
      } while (isNaN(cashIncome) || cashIncome === '' || cashIncome === null);

      appData.income[itemIncome] = cashIncome;
    }

    // ВОЗМОЖНЫЕ РАСХОДЫ (ADDEXPENSES) ВЫВЕСТИ СТРОКОЙ В КОНСОЛЬ
    // КАЖДОЕ СЛОВО С БОЛЬШОЙ БУКВЫ СЛОВА РАЗДЕЛЕНЫ ЗАПЯТОЙ И ПРОБЕЛОМ

    let addExpenses;

    do {
      addExpenses = prompt('Перечислите возможные расходы через запятую', 'Интернет,квартплата,ремонт');
    } while (!isNaN(addExpenses) || addExpenses === '' || addExpenses === null);

    appData.addExpenses = addExpenses.split(',');

    let addExpensesNew;
    let arrayOfExpenses = [];

    // Перебираем свойства объекта, для каждого свойства
    // выполнияем заданный код ниже (Каждое слово с заглавной буквы)
    for (let key in appData.addExpenses) {

      addExpensesNew = appData.addExpenses[key].trim(); // Метод trim() удаляет пробельные символы с начала и конца строки
      // charAt() - указываем номера  символа слева направо ( 0 - первая буква )
      addExpensesNew = addExpensesNew.charAt(0).toUpperCase() + addExpensesNew.slice(1); // slice - возращает часть массива
      arrayOfExpenses.push(addExpensesNew); // добавление новых элементов
    }
    appData.addExpenses = arrayOfExpenses; // переприсваиваем значения

    appData.deposit = confirm('Есть ли у вас депозит?');

    for (let i = 0; i < 2; i++) {

      let trickyExpenses;

      do {
        trickyExpenses = prompt('Введите обязательную статью расходов');
      } while ((!isNaN(trickyExpenses) || trickyExpenses === '' || trickyExpenses === null));

      let myAnswer;

      do {
        myAnswer = prompt('Во сколько это обойдется?');
      } while (isNaN(myAnswer) || myAnswer === '' || myAnswer === null);

      appData.expenses[trickyExpenses] = myAnswer;
    }

    console.log('Список расходов: ', appData.expenses);
  },


  getExpensesMonth: function() {

    for (let key in appData.expenses) {
      appData.expensesMonth += +appData.expenses[key];
    }
  },

  getBudget: function() {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.ceil(appData.budgetMonth / 30);
    return;
  },

  getTargetMonth: function() {
    return appData.mission / appData.budgetMonth;
  },

  getStatusIncome: function() {
    if (appData.budgetDay < 300) {
      return ('Низкий уровыень доходов');
    } else if (appData.budgetDay <= 800) {
      return ('Средний уровень доходов');
    } else {
      return ('Высокий уровень дохода');
    }
  },

  getInfoDeposit: function() {
    if (appData.deposit) {

      do {
        appData.percentDeposit = prompt('Какой у вас процент ?', 10);

      } while (isNaN(appData.percentDeposit) || appData.percentDeposit === '' || appData.percentDeposit === null);

      do {
        appData.moneyDeposit = prompt('Какая сумма заложена ?', 10000);
      } while (isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null);
    }
  },

  calcSavedMoney: function() {
    return appData.budgetMonth * appData.period;
  },

};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getInfoDeposit();

console.log('Обязательные расходы: ', appData.addExpenses.join(', '));

console.log('Расходы за месяц: ', appData.expensesMonth);

if (appData.getTargetMonth() > 0) {

  console.log('Цель будет достигнута за: ' + Math.ceil(appData.getTargetMonth()) + ' месяц/месяцев');
} else {

  console.log('Цель не будет достигнута');
}

console.log(appData.getStatusIncome());

//console.log(appData.moneyDeposit,appData.percentDeposit,appData.calcSavedMoney());
