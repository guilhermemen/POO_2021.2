class fone{
    id: string;
    number: string;

    constructor(id: string, number: string){
        this.id = id;
        this.number = number;
    }

    validate(number: string): boolean {
        let permit: string[] = ["0","1","2","3","4","5",
        "6","7","8","9","(",")","."];
        for(let i of number){
            if(!permit.includes(i)){
                return false;
            }
        }
        return true;
    }
    getId(){
        return this.id;
    }
    setId(id: string){
         this.id = id;
    }

    getNumber(){
        return this.number;
    }
    setNumber(number: string){
        this.number = number;
    }
}

class Contato{
    nome: string
    fones: Fone[];
    prefix: string = '-'

    constructor(nome: string, fones: Fone[]){
        this.nome = nome;
        this.fones = fones;
    }

    add(fone: Fone){
        if(Fone.validate(fone.getNumber())==true){
            this.fones.push(fone);
        }else{
            console.log("número invalido, tente novamente");
        }
    }

    remove(index: number){
        this.fones.splice(index,1);
    }

    public toString() {
        let result =  this.prefix + " " + this.nome + " ";
        for(let i in this.fones){
            result += ("[" + i + ":" + this.fones[i].getId() 
            + ":" + this.fones[i].getNumber)
        }
        return result;
    }
}

let contato2 = new Contato('Mário',[])
console.log(contato2.toString());

contato2.add(new Fone('tim', '9943355'));
contato2.add(new Fone('claro', '9124567'));
contato2.add(new Fone('oi', '3423523'));

console.log(contato2.toString());

contato2.remove(3);

let contato3 = new Contato('Mário',[])
console.log(contato3.toString());

contato3.add(new Fone('tim', '99'));
contato3.add(new Fone('claro', '91'));
console.log(contato3.toString());