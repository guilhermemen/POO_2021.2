class Pet{
    private energy: number;
    private energyMax: number;
    private hungry: number;
    private hungryMax: number;
    private clean: number;
    private cleanMax: number;
    private age: number;
    private diamonds: number;
    private alive: boolean;

    constructor(energyMax: number, hungryMax: number, cleanMax: number){
        this.energy = energyMax;
        this.energyMax = energyMax;
        this.hungry = hungryMax;
        this.hungryMax = hungryMax;
        this.clean = cleanMax;
        this.cleanMax = cleanMax;
        this.age = 0;
        this.diamonds = 0;
        this.alive = true;
    }

    setEnergy(value: number): any{
        this.energy = value;
        if (this.energy <= 0) {
            this.energy = 0;
            this.alive = false;
            console.log("fail: o pet morreu de fraqueza")
        }if (this.energy > this.energyMax) {
            this.energy = this.energyMax;
        }
    }

    setHungry(value: number): any{
        this.hungry = value;
        if (this.hungry <= 0) {
            this.hungry = 0;
            this.alive = false;
            console.log("fail: o pet morreu de fome")
        }if (this.hungry > this.hungryMax) {
            this.hungry = this.hungryMax;
        }
    } 
    
    setClean(value: number): any{
        this.clean = value;
        if (this.clean <= 0) {
            this.clean = 0;
            this.alive = false;
            console.log("fail: o pet morreu de sujeira")
        }if(this.clean > this.cleanMax){
            this.clean = this.cleanMax;
        }
    }
    
    play(): any{
        if (!this.alive) {
            return;
        }
        this.setEnergy(this.energy -2);
        this.setHungry(this.hungry -1);
        this.setClean(this.clean -3);
        this.diamonds +=1;
        this.age +=1;
    }

    eat(): any{
        if (!this.alive) {
            return;
        }
        this.setEnergy(this.energy -1);
        this.setHungry(this.hungry +4);
        this.setClean(this.clean -2);
        this.diamonds += 0;
        this.age +=1;
    }

    sleep(): any{
        if (!this.alive) {
            return
        }if (this.energy >= 5) {
            console.log("o pet está sem sono");
            return
        }
        this.setEnergy(this.energy +1);
        this.setHungry(this.hungry +4);
        this.setClean(this.clean -2);
        this.diamonds += 0;
        this.age +=1;
    }

    shower(): any{
        if (!this.alive) {
            return;
        }
        this.setEnergy(this.energy -3);
        this.setHungry(this.hungry -1);
        this.setClean(this.clean +2);
        this.diamonds += 0;
        this.age +=2;
    }

    getEnergy(){
        return this.energy;
    }

    getHungry(){
        return this.hungry;
    }

    getClean(){
        return this.clean;
    }

    isAlive(){
        if (!this.alive) {
            console.log("o pet está morto")
            return false;
        }
        return true;
    }


    toString(): String{
        return "E:" + this.energy + "|" + this.energyMax + " " + "H:" + this.hungry + "|" + this.hungryMax + " " + 
        "C:" + this.clean + "|" + this.cleanMax + " " + "D:" + this.diamonds + " " + "A:" + this.age;
    }
}
// TESTE 1 - OK
//let pet:Pet = new Pet(20,10,15);
//console.log(pet.toString());

// TESTE 2 - OK
//let pet:Pet = new Pet(10,20,50);
//console.log(pet.toString());

//TESTE 3 - PLAY
let pet:Pet = new Pet(10,20,15)
pet.play();
pet.play();
console.log(pet.toString());
pet.sleep();
console.log(pet.toString());
pet.shower();
console.log(pet.toString());
pet.sleep();
console.log(pet.toString());

const readline = require('readline-sync');
console.log('qual o seu nome');
readline.question();
let nome = readline.question();
console.log('meu nome é ' + nome);