"use strict";

let money, time;

money = prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
	budget : +money,
	timeData : time,
	expenses : {},
	optionalExpenses : {},
	income : [],
	saving : false,
};

appData.expenses[prompt("Введите обязательную статью расходов в этом месяце")] = prompt("Во сколько обойдется?");
alert(appData.budget / 30);