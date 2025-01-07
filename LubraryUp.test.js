const testBankOperations = require('./LibraryUpdated'); // Adjust the path accordingly

describe('Bank Operations', () => {
    test('testBankOperations should create accounts, perform operations, transfer money, and check balances', () => {
        // Run the test function
        const { johnFinalBalance, janeFinalBalance, johnTransactionHistory, janeTransactionHistory } = testBankOperations();

        // Verify the final balances
        expect(johnFinalBalance).toBe(1000); // 1000 initial + 500 deposit - 200 withdraw - 300 transfer
        expect(janeFinalBalance).toBe(800);  // 500 initial + 300 transfer

        // Verify the transaction histories
        expect(johnTransactionHistory).toEqual([
            'Deposited $500',
            'Withdrawn $200',
            'Transferred $300 to Jane Doe'
        ]);
        expect(janeTransactionHistory).toEqual([
            'Received $300 from John Doe'
        ]);
    });
});