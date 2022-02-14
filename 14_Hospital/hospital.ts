class Medico{

    protected nome: string;
    protected pacientes: Map<string, Paciente>;

    constructor(nome: string){
        this.nome = nome;
        this.pacientes = new Map<string, Paciente>();
    }

    getNome(){
        return this.nome;
    }

    addPaciente(paciente: Paciente): void{
        if(this.pacientes.has(paciente.getNome())){
            return;
        this.pacientes.set(paciente.getNome(), paciente)
        paciente.addMedico(this)
        }
    }
    toString(): string{
      let keys = this.pacientes.keys();
      return this.nome + " [" + [...keys].join(", ") + "]"
    }
}

class Paciente{

    protected nome: string;
    protected medicos: Map<string, Medico>;
    constructor(nome: string){
        this.nome = nome;
        this.medicos = new Map<string, Medico>();
    }

    getNome(){ 
        return this.nome;
    }

    addMedico(medico: Medico): void{
        if(this.medicos.has(medico.getNome())){
            return;
            this.medicos.set(medico.getNome(), medico);
            medico.addPaciente(this);
        }
    }

    toString(){
        let keys = this.medicos.keys();
        return this.nome + " [" + [...keys].join(", ") + "]"
      }
}

let Mario = new Paciente("Mario");
let Raul = new Paciente("Raul")
let Paula = new Medico("Paula")

Paula.addPaciente(Raul);
Paula.addPaciente(Mario);

console.log(" " + Paula);
console.log(" " + Raul);
console.log(" " + Mario);