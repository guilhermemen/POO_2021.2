class Person{

    age: number;
    name: string;

    constructor(age: number,name: string){
        this.age = age;
        this.name = name;
    }

    toString(): string{ 
        return this.name + " tem " + this.age + " anos";
    }
}

class Motocycles{
    person: Person | null;
    power: number;
    time: number;

    constructor(power: number){
        this.power = power;
        this.time = 0;
        this.person = null;
    }

    buy(time: number){
        this.time += time;
    }

    drive(time: number){
        if (this.person == null) {
            console.log("moto vazia");
        }else if (this.person.age > 10){
            console.log("não cabe na moto");
        }else if (this.time == 0){
            console.log("tempo zerado");
        }else if (this.time < time){
            console.log("andou" + this.time + "min");
            this.time = 0;
        }else{
            this.time -= time;
        }
    }

    honk(){
       let res;
        res = "e";
        for(let i = 0; i < this.power; i++){
            res += "e";
        }
        console.log("p" + res + "m")
   }

    in(person: Person): boolean{
        if (this.person == null) {
            this.person = person;
            return true;
        }
        console.log("moto ocupada");
        return false;
    }

    out(){
        if (this.person == null) {
           // Person person = this.person;
            return null;
        }else{
           const person = this.person;
           this.person = null;
           return person;
        }
    }

    toString(): string{
        return "power: " + this.power + ", minutos: "
        + this.time + ", person: " + this.person;
    }
}

let moto = new Motocycles(2);
console.log(moto.toString());
moto.in(new Person(2,"Marcos"));
console.log(moto.toString())
moto.out();
moto.in(new Person(4, "Márcio"));
moto.honk()
console.log(moto.toString());
moto.in(new Person(12, "Roberta"));
console.log(moto.toString());
