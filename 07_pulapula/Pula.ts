class kid{
    age: number;
    name: string;

    constructor(age: number, name: string){
        this.age = age;
        this.name = name;
    }

    toString(){
        return "Age: " + this.age + " - " + " Name: " + this.name
    }
}

class Trampoline{
    playing: kid[];
    waiting: kid[];

    constructor(){
        this.playing = [];
        this.waiting = []; 
    }

    wait(kid: kid){
       this.waiting.push(kid);
    }

    play(): boolean{
        if(this.waiting == null){
            console.log('não tem crianças esperando');
            return false;
        }
        this.playing.push(this.waiting.shift());
        return true;
    }

    out(): boolean{
        if(this.playing == null){
            console.log('não tem criança brincando');
            return false;
        }
        this.waiting.push(this.playing.shift());
        return true;
    }

    toString(){
        let res = "";
        for(let i = 0; i < this.waiting.length; i++){
            if(this.waiting[i] == null){
                res += "-"
            }else{
                res += this.waiting[i].toString() + " ";
            }
        }

        res += "[ ";
        for(let i = 0; i < this.playing.length; i++){
            if(this.playing[i] == null){
                res += "-"
            }else{
                res += this.playing[i].toString() + " ";
            }
        }
        res += " ]";
        return res;
    }
}

let Trampoline1 = new Trampoline();
Trampoline1.wait(new kid(3, "Márcio"));
Trampoline1.wait(new kid(5, "Alex"));
Trampoline1.wait(new kid(7, "Maria"))

console.log(Trampoline1.toString());
Trampoline1.play();
Trampoline1.play();
console.log(Trampoline1.toString());
Trampoline1.out();
console.log(Trampoline1.toString());
