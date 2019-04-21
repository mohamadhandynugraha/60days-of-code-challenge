let myAccount = {
    name: "Mohamad",
    expenses: 0,
    income: 0
}

// kodingannya ngaruh ke objek myAccount. Contoh (matiin komennya)
// let otherAccount = myAccount
// otherAccount.income = 1000

let addExpenses = function (account, amount){
    return account.expenses += amount
}

// challenge area
// addIncome function -> 
// resetAccount function -> 
// getAccountSummary function ->

let addIncome = function (account, income){
    return account.income += income
}

let resetAccount = function(_account){
    _account.income = 0
    _account.expenses = 0
    return _account.income + _account.expenses
}

let getAccountSummary = function(account){
    return `Hey, ${account.name} your account has $${account.income} 
    income and $${account.expenses} expenses and you have a $${account.income - account.expenses}
    balance`
}

addIncome(myAccount, 1000)
addExpenses(myAccount, 30.5)
addExpenses(myAccount,60.5)
addExpenses(myAccount, 2.5)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))