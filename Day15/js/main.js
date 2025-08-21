
class Account  {
    #balance=0;
    #accountNumber;

    static totalAccounts=0;

    constructor(accountHolder,initialBalance=0) {
        this.accountHolder=accountHolder;
        this.#accountNumber=`ACC${++Account.totalAccounts}`;
        this.#balance=initialBalance;
    }

    deposit(amount){
        if(amount>0){
            this.#balance+=amount;
            console.log(`${amount} deposit. new balance : ${this.#balance}`); 
        }else{
            console.log(`Deposit amount must be positive !!`);
        }
    }

    withdraw(amount){
        if(amount>0 && amount<=this.#balance){
            this.#balance-=amount;
            console.log(`${amount} withdraw. New balance : ${this.#balance}`); 
        }else{
            console.log(`Invalid amount`);
        }
    }
    getBalance(){
        return this.#balance;
    }

    static showTotalAccounts(){
        console.log(`Total accounts created: ${Account.totalAccounts}`);
        
    }

}


class SavingAccount extends Account{
    constructor(accountHolder,initialBalance,interestedRate=0.05) {
        super(accountHolder,initialBalance)
        this.interestedRate=interestedRate;
    }
    withdraw(amount){
        const balance=this.getBalance();
        if(amount > balance*0.2){
            console.log(`Saving account: cannot withdraw more than 20% of balance at once.`); 
        }else{
           super.withdraw(amount);
        }
    }
    addInterest(){
        const interest=this.getBalance() * this.interestedRate;
        this.deposit(interest);
        console.log(`Interest added: ${interest}`);        
    }
}


let account=new SavingAccount("Alice",1000);

account.deposit(200);//balance=1200

account.withdraw(300);
account.withdraw(200);

console.log(account.getBalance());

Account.showTotalAccounts();
console.log(Account.totalAccounts);


account.addInterest();


