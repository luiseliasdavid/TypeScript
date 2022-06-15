import { Account,Entry, CategoryEnum } from "./Account.js";

let account: Account;
const initialAccount = getAccountFromStorage();

if(initialAccount){
    account= new Account(initialAccount as Account);
    updateBalanceAmount(account)
 } else{
    account= createInitialAccount();
    updateBalanceAmount(account)
    }


function createInitialAccount(): Account{
    const setupAccount= new Account();
    const expenseEjemplo= new Entry('ejemplo de gasto',100,CategoryEnum.expense);
    const incomeEjemplo= new Entry('ejemplo de ingreso',150,CategoryEnum.income);

    setupAccount.addEntry(expenseEjemplo);
    setupAccount.addEntry(incomeEjemplo);

   return setupAccount;
}

function getAccountFromStorage():Account | boolean{
    const accountFromStorage = localStorage.getItem('account');
    return accountFromStorage ? JSON.parse(accountFromStorage) : false;
}

function setAccountToStorage(account:Account):void{
    localStorage.setItem('account',JSON.stringify(account));
}

function updateBalanceAmount(account:Account){
    const balanceAmountHtmlElement = document.querySelector('#balanceAmount') as HTMLElement;
    const balanceAccount = account.getBalance();
    balanceAmountHtmlElement.textContent = `${balanceAccount}$`
}

const entrytemplate = document.querySelector(`#entryTemplate`)as HTMLAnchorElement;
const fragment = document.createDocumentFragment();
const recordsContainer = document.querySelector(
    `#recordsContainer`
)as HTMLElement






