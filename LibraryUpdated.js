class Account {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
        this.transactionHistory = [];
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            this.transactionHistory.push(`Deposited $${amount}`);
            return true;
        } else {
            return false;
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.transactionHistory.push(`Withdrawn $${amount}`);
            return true;
        } else {
            return false;
        }
    }

    transfer(amount, recipientAccount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.transactionHistory.push(`Transferred $${amount} to ${recipientAccount.name}`);
            
            // Directly update the recipient's balance and transaction history
            recipientAccount.balance += amount;
            recipientAccount.transactionHistory.push(`Received $${amount} from ${this.name}`);
            
            return true;
        } else {
            return false;
        }
    }

    checkBalance() {
        return this.balance;
    }
}

class Bank {
    constructor() {
        this.accounts = [];
    }

    createAccount(name, initialDeposit = 0) {
        const account = new Account(name, initialDeposit);
        this.accounts.push(account);
        return account;
    }

    getAccount(accountName) {
        return this.accounts.find(account => account.name === accountName);
    }
}

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
