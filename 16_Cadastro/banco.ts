abstract class Account{
    id: number;
    balance: number;
    ClientId: string;
    type: string; //Conta corrente - CC ou Conta poupança - CP

    constructor(id: number, ClientId: string){
        this.id = id;
        this.balance = 0;
        this.ClientId = ClientId;
        this.type = "CC" || "CP";
    }

    public attMensal(): void{

    }

    public withdraw(valor: number): void{
        if(this.balance < valor){
            console.log("saldo insuficiente");
            return;
        }
        this.balance -= valor;
    }

    public depositar(valor: number): void{
        this.balance += valor;
    }

    public transferir(other: Account, valor: number){
        if(other.balance < valor){
            console.log("não tem dinheiro também")
        } else if(other.balance >= valor){
            this.balance += valor;
        }
    }

    toString(): string{
        return this.id + " " + this.ClientId + " ";
    }
    getId(){
        return this.id;
    }

    getBalance(){
        return this.balance;
    }

    getClientId(){
        return this.ClientId;
    }

    getType(){
        return this.type;
    }
}

class CheckingAccount extends Account{

    type: string = "CC"

    public CheckingAccount(id: number, ClientId: string){
        super(id, ClientId);
    }

    public attMensal(): void{
         this.balance -= 20;
    }
}

class SavingAccount extends Account{


    public savingAccount(id: number, ClientId: string){
        super(id, ClientId);
    }

    public attMensal(): void{
        let conta = this.balance * 0.01;
        conta += this.balance
    }

}

class Client {
    private ClientId: string
    private account: Account[];

    constructor(ClientId: string){
        this.ClientId = ClientId;
        this.account = []
    }

    addAccount(account: Account){
        this.account.push(account);
    }

    getAccount(){
        return this.account.valor()
    }

    setAccount(accounts: Account[]){
        this.account = accounts
    }

    setClientId(ClientId: string){
        return this.ClientId = ClientId;
    }

    getClientId(){
        return this.ClientId;
    }

    toString(){
        //interpolação de strings, coloco valores dentro de uma string de forma direta
        return '${this.ClientId} [${this.getAccount()}]';
    }
}

class BankAgency{
    private clients: Map<string, Client>
    private accounts: Map<number, Account>
    private nextAccountId: number = 0;

    constructor(){
        this.clients = new Map<string, Client>();
        this.accounts = new Map<number, Account>();
        this.nextAccountId = this.nextAccountId;
    }

    addClient(clientId: string){
        if(!this.clients.has(clientId)){
            this.clients.set(clientId, new Client(clientId));
        } 
        
        if(this.clients.get(clientId)){
            let CC = new CheckingAccount(this.nextAccountId, clientId);
            let CP = new SavingAccount(this.nextAccountId, clientId);

            this.clients.addAccount(CC);
            this.clients.addAccount(CP);

            this.accounts.set(CC.getId(), CC);
            this.accounts.set(CP,getId(), CP)
        }
        return;
    }

    withdraw(idConta: number, valor: number){
        if(this.clients.has(idConta)){
            this.accounts.get(idConta);
        }
        if(this.accounts.get(idConta) != null){
            this.accounts.depositar(valor);
        }
    }

    depositar(idConta: number, valor: number){

    }

    transferir(contaDe: number, contaPara: number, valor: number){

    }

    attMensal(){

    }

    getAccount(id: number){

    }
    
    toString(){
        return 
    }
}