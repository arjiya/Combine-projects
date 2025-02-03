let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expensesTableBody = document.getElementById('expense-table-body');
const totalAmountCell = document.getElementById('total-amount');

addBtn.addEventListener('click', function() {
    const category = categorySelect.value;
    const amount = Number(amountInput.value); 
    const date = dateInput.value;

    if (category === '') {
        alert('Please select a category');
        return;
    }

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }

    if (date === '') {
        alert('Please select a date');
        return;
    }

    const expense = { category, amount, date };
    expenses.push(expense);
    totalAmount += amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expensesTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        const index = expenses.indexOf(expense);
        if (index > -1) {
            expenses.splice(index, 1);
            totalAmount -= expense.amount;
            totalAmountCell.textContent = totalAmount;
            expensesTableBody.deleteRow(newRow.rowIndex - 1);
        }
    });

    deleteCell.appendChild(deleteBtn);
});


for (const expense of expenses) {
    totalAmount += expense.amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expensesTableBody.insertRow();
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        const index = expenses.indexOf(expense);
        if (index > -1) {
            expenses.splice(index, 1);
            totalAmount -= expense.amount;
            totalAmountCell.textContent = totalAmount;
            expensesTableBody.deleteRow(newRow.rowIndex - 1);
        }
const viewCategoryBtn = document.getElementById('view-category-btn');
const categoryTablesContainer = document.getElementById('category-tables-container');

viewCategoryBtn.addEventListener('click', function () {
   
    categoryTablesContainer.innerHTML = '';

   
    const expensesByCategory = expenses.reduce((acc, expense) => {
        if (!acc[expense.category]) {
            acc[expense.category] = [];
        }
        acc[expense.category].push(expense);
        return acc;
    }, {});

    for (const [category, categoryExpenses] of Object.entries(expensesByCategory)) {
        
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category-table');
        categoryDiv.innerHTML = `<h3>${category}</h3>`;
        
        
        const table = document.createElement('table');
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Amount</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                ${categoryExpenses.map(expense => `
                    <tr>
                        <td>${expense.amount}</td>
                        <td>${expense.date}</td>
                    </tr>`).join('')}
            </tbody>
        `;
        categoryDiv.appendChild(table);

     
        categoryTablesContainer.appendChild(categoryDiv);
    }
});

        
    });



    deleteCell.appendChild(deleteBtn);
}

const viewCategoryBtn = document.getElementById('view-category-btn');
const categoryTablesContainer = document.getElementById('category-tables-container');

viewCategoryBtn.addEventListener('click', function () {
  
    categoryTablesContainer.innerHTML = '';


    const expensesByCategory = expenses.reduce((acc, expense) => {
        if (!acc[expense.category]) {
            acc[expense.category] = [];
        }
        acc[expense.category].push(expense);
        return acc;
    }, {});

  
    for (const [category, categoryExpenses] of Object.entries(expensesByCategory)) {
        
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category-table');
        categoryDiv.innerHTML = `<h3>${category}</h3>`;
        
      
        const table = document.createElement('table');
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Amount</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                ${categoryExpenses.map(expense => `
                    <tr>
                        <td>${expense.amount}</td>
                        <td>${expense.date}</td>
                    </tr>`).join('')}
            </tbody>
        `;
        categoryDiv.appendChild(table);

        // Append the category container to the main container
        categoryTablesContainer.appendChild(categoryDiv);
    }
});

