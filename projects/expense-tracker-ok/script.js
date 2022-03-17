var amountDescriptionInput = document.querySelector('.new-transaction-text-input');
var amountInput = document.querySelector('.new-transaction-amount-input');
var addButton = document.querySelector('.add-transaction-button');
var historyContainer = document.querySelector('.history-container');
var balanceIncomeAmount = document.querySelector('.balance-income-amount');
var balanceExpenseAmount = document.querySelector('.balance-expense-amount');
var balanceInput = document.querySelector('.balance-input');
var removeButton = document.querySelector('.remove-item-button');

// save to local storage
var localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));
var localStorageBalanceIncome = JSON.parse(localStorage.getItem('balanceIncome'));
var localStorageBalanceExpense = JSON.parse(localStorage.getItem('balanceExpense'));

var transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : [];
var balanceIncome = localStorage.getItem('balanceIncome') !== null ? localStorageBalanceIncome : 0;
var balanceExpense = localStorage.getItem('balanceExpense') !== null ? localStorageBalanceExpense : 0;

addButton.addEventListener('click', (event) => {
  event.preventDefault();

  var description = amountDescriptionInput.value;
  var amount = Number(amountInput.value);

  if (!amount) {
    alert('Please enter a positive or negative number!');
  }
  else {
    transactions.push({description, amount, id: Date.now()});
    localStorage.setItem('transactions', JSON.stringify(transactions));

    renderTransaction({description, amount, id: Date.now()});

    amountDescriptionInput.value = '';
    amountInput.value = '';

    if (amount > 0) {
      balanceIncomeAmount.innerText = Number(balanceIncomeAmount.innerText) + amount;
      localStorage.setItem('balanceIncome', Number(balanceIncomeAmount.innerText));
    } else {
      balanceExpenseAmount.innerText = Number(balanceExpenseAmount.innerText) + amount;
      localStorage.setItem('balanceExpense', Number(balanceExpenseAmount.innerText));
    }

    balanceInput.value = `$${ Number(balanceIncomeAmount.innerText) + Number(balanceExpenseAmount.innerText)}`;
  }
});

var renderTransaction = (transaction) => {
  var {amount, description, id} = transaction;
  var transactionItem =document.createElement('div');
  var removeItemButton =document.createElement('div');
  var removeItemButtonIcon =document.createElement('img');
  var transactionItemDetail =document.createElement('div');
  var transactionItemDescription =document.createElement('div');
  var transactionItemAmount =document.createElement('div');


  transactionItem.className = `transaction-item ${amount > 0 ? 'income' : 'expense'}`;
  transactionItem.setAttribute('data-id', `${id}`);
  removeItemButton.className = 'remove-item-button';
  removeItemButton.setAttribute('data-id', `${id}`);
  transactionItemDetail.className = 'item-detail';
  transactionItemDescription.className = 'item-description';
  transactionItemAmount.className = 'item-amount';

  transactionItemDescription.innerText = description;
  transactionItemAmount.innerText = amount;
  removeItemButtonIcon.src = './image/close.svg';
  transactionItemDetail.appendChild(transactionItemDescription);
  transactionItemDetail.appendChild(transactionItemAmount);
  removeItemButton.appendChild(removeItemButtonIcon);
  transactionItem.appendChild(removeItemButton);
  transactionItem.appendChild(transactionItemDetail);

  historyContainer.appendChild(transactionItem);


  removeItemButton.addEventListener('click', () => {
    var newTransactions = transactions.filter(transaction => transaction.id != id);
    var item = document.querySelector(`[data-id="${id}"]`);
    var amount = Number(item.querySelector('.item-amount').innerText);

    transactions = newTransactions;
    localStorage.setItem('transactions', JSON.stringify(transactions));

    historyContainer.innerHTML = '';

    if (amount > 0) {
      balanceIncomeAmount.innerText = Number(balanceIncomeAmount.innerText) - amount;
      localStorage.setItem('balanceIncome', Number(balanceIncomeAmount.innerText));
    } else {
      balanceExpenseAmount.innerText = Number(balanceExpenseAmount.innerText) - amount;
      localStorage.setItem('balanceExpense', Number(balanceExpenseAmount.innerText));
    }
    balanceInput.value = `$${ Number(balanceIncomeAmount.innerText) + Number(balanceExpenseAmount.innerText)}`;

    transactions.forEach(transaction => {
      renderTransaction(transaction);
    });
  });
}

transactions.forEach(transaction => {
  renderTransaction(transaction);
});

balanceIncomeAmount.innerText = balanceIncome;
balanceExpenseAmount.innerText = balanceExpense;
balanceInput.value = `$${balanceIncome + balanceExpense}`;
