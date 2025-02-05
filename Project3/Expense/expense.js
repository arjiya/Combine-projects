let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

     
        function saveToLocalStorage() {
            localStorage.setItem('expenses', JSON.stringify(expenses));
        }

        document.getElementById('expense-form').addEventListener('submit', function(event) {
            event.preventDefault();

            const expenseName = document.getElementById('expense-name').value;
            const expenseAmount = parseFloat(document.getElementById('expense-amount').value);
            const expenseCategory = document.getElementById('expense-category').value;

            if (expenseName && expenseAmount && expenseCategory) {
                const expense = {
                    name: expenseName,
                    amount: expenseAmount,
                    category: expenseCategory,
                    id: Date.now()
                };

                expenses.push(expense);
                saveToLocalStorage();
                updateExpenseTable();
            }

            document.getElementById('expense-name').value = '';
            document.getElementById('expense-amount').value = '';
            document.getElementById('expense-category').value = '';
        });

      
        function updateExpenseTable() {
            const expenseTableBody = document.getElementById('expense-table').getElementsByTagName('tbody')[0];
            expenseTableBody.innerHTML = '';

            expenses.forEach(expense => {
                const row = document.createElement('tr');

                const nameCell = document.createElement('td');
                nameCell.textContent = expense.name;

                const amountCell = document.createElement('td');
                amountCell.textContent = `RS. ${expense.amount.toFixed(2)}`;

                const categoryCell = document.createElement('td');
                categoryCell.textContent = expense.category;

                const actionsCell = document.createElement('td');

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.onclick = () => deleteExpense(expense.id);
                actionsCell.appendChild(deleteButton);

                row.appendChild(nameCell);
                row.appendChild(amountCell);
                row.appendChild(categoryCell);
                row.appendChild(actionsCell);

                expenseTableBody.appendChild(row);
            });
        }

       
        function deleteExpense(id) {
            expenses = expenses.filter(exp => exp.id !== id);
            saveToLocalStorage();
            updateExpenseTable();
        }

        document.getElementById('toggle-expenses-btn').addEventListener('click', function () {
            const expenseTable = document.getElementById('expense-table');
            if (expenseTable.style.display === 'none' || expenseTable.style.display === '') {
                expenseTable.style.display = 'table';
            } else {
                expenseTable.style.display = 'none';
            }
        });

        document.getElementById('total-expenses-btn').addEventListener('click', function () {
            const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
            document.getElementById('total-expenses-display').textContent = `You have spent a total of : RS. ${totalExpenses.toFixed(2)}`;
        });

     
        updateExpenseTable();