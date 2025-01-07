
// Step 1: Define the Account class
// - Each Account object will represent an individual user's bank account.
// - Include properties for the account holder's name, balance, and a list to store transaction history.

// Step 2: Add methods to the Account class
// - `deposit(amount)` to add money to the account (only if the amount is positive).
// - `withdraw(amount)` to subtract money (only if there is enough balance).
// - `transfer(amount, recipientAccount)` to send money to another account.
// - `checkBalance()` to return the current balance of the account.

// Step 3: Define the Bank class
// - The Bank class will manage multiple accounts.
// - Include a property to store all accounts in the bank.

// Step 4: Add methods to the Bank class
// - `createAccount(name, initialDeposit)` to create a new account and add it to the bank's list.
// - `getAccount(accountName)` to find and return an account by its name.

// Function to test bank operations
function testBankOperations() {
    const bank = new Bank();

    // Create new accounts
    const johnAccount = bank.createAccount('John Doe', 1000);
    const janeAccount = bank.createAccount('Jane Doe', 500);
    console.log('Accounts created:', johnAccount, janeAccount);

    // Perform some operations on John's account
    johnAccount.deposit(500);
    johnAccount.withdraw(200);

    // Perform a transfer from John to Jane
    johnAccount.transfer(300, janeAccount);

    // Check balances
    const johnFinalBalance = johnAccount.checkBalance();
    const janeFinalBalance = janeAccount.checkBalance();
    console.log('John\'s balance:', johnFinalBalance);
    console.log('Jane\'s balance:', janeFinalBalance);

    // Return balances for testing
    return { 
        johnFinalBalance, 
        janeFinalBalance, 
        johnTransactionHistory: johnAccount.transactionHistory, 
        janeTransactionHistory: janeAccount.transactionHistory 
    };
}

module.exports = testBankOperations;

// Uncomment the following line to run the function manually
// console.log(testBankOperations());
