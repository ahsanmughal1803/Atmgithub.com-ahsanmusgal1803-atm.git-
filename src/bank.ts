class BankAccount {
    private balance: number;
  
    constructor(public accountNumber: number, public owner: string, initialBalance: number) {
      this.balance = initialBalance;
    }
  
    deposit(amount: number): void {
      if (amount > 0) {
        this.balance += amount;
      }
    }
  
    withdraw(amount: number): boolean {
      if (amount > 0 && this.balance >= amount) {
        this.balance -= amount;
        return true;
      }
      return false;
    }
  
    getBalance(): number {
      return this.balance;
    }
  }
  
  class Bank {
    private accounts: BankAccount[] = [];
  
    createAccount(owner: string, initialBalance: number): BankAccount {
      const accountNumber = this.accounts.length + 1;
      const account = new BankAccount(accountNumber, owner, initialBalance);
      this.accounts.push(account);
      return account;
    }
  
    getAccounts(): BankAccount[] {
      return this.accounts;
    }
  }
  
  const myBank = new Bank();
  
  const aliceAccount = myBank.createAccount("Alice", 1000.0);
  const bobAccount = myBank.createAccount("Bob", 500.0);
  
  console.log("Account Information for Alice:");
  console.log(`Account Number: ${aliceAccount.accountNumber}`);
  console.log(`Owner: ${aliceAccount.owner}`);
  console.log(`Balance: $${aliceAccount.getBalance().toFixed(2)}`);
  
  aliceAccount.deposit(200.0);
  console.log(`New Balance after Deposit: $${aliceAccount.getBalance().toFixed(2)}`);
  
  console.log("All Accounts:");
  for (const account of myBank.getAccounts()) {
    console.log(`Account Number: ${account.accountNumber}, Owner: ${account.owner}, Balance: $${account.getBalance().toFixed(2)}`);
  }
  