const account = {
    name: "Mohamad Handy Nugraha",
    expenses: [], // arrays of expenses (array dari biaya yang keluar)
    income: [], // arrays of income. Ada orang yang mempunyai beberapa income.
    addExpenses: function(description, amount){
        const Expenses = {
            description: description,
            amount: amount
        }
        this.expenses.push(Expenses);
        
    },
    addIncome: function(description, amount){
        const income = {
            description: description,
            amount: amount
        }
        this.income.push(income);
    },
    getExpensesDescriptionSummary: function(){
        let totalDescription = "";
        for(let i = 0; i <= this.expenses.length - 1; i++){
            totalDescription += this.expenses[i].description + " sebanyak $" + this.expenses[i].amount + " ";
        }
        return totalDescription;
    },
    getIncomeDescriptionSummary: function(){
        let totalDescription = "";
        for(let i = 0; i <= this.income.length - 1; i++){
            totalDescription += "hasil dari " + this.income[i].description + " didapatkan sebanyak $" + this.income[i].amount + " ";
        }
        return totalDescription;
    },
    getAccountSummary: function(){
        const balance = this.getTotalIncome() - this.getTotalExpenses()
        return `${this.name} has a balance $${balance}. $${this.getTotalIncome()} in income. $${this.getTotalExpenses()} in expenses.`;
    },
    getTotalExpenses: function(){
        let totalExpensesUsingForEach = 0;
        this.expenses.forEach(function(item){
            // pake item.namaProperty untuk akses nilainya
            totalExpensesUsingForEach += item.amount
        })
        return totalExpensesUsingForEach;
    },
    getTotalIncome: function(){
        let totalExpensesUsingForEach = 0;
        this.income.forEach(function(item){
            // pake item.namaProperty untuk akses nilainya
            totalExpensesUsingForEach += item.amount
        })
        return totalExpensesUsingForEach;
    }
}

account.addExpenses("bayar kostan", 100);
account.addExpenses("minum kopi", 2);
account.addExpenses("wifi", 30);
// console.log(account.getAccountSummary());
account.addIncome("jual emas", 90);
account.addIncome("Job", 200);
console.log(account.getExpensesDescriptionSummary());
console.log(account.getIncomeDescriptionSummary());
console.log(account.getAccountSummary());
// challenge area coding  part 2 video 46