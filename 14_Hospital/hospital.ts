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
        if(this.pacientes.has(paciente.getNome()))
         return
            this.pacientes.set(paciente.getNome(), paciente)
            paciente.addMedico(this);
        
    }

    rmvpaciente(key: string): void{
    
     // if(!this.pacientes.has(paciente))
     //    return
     //       this.pacientes.get(paciente);
     //       this.pacientes.delete(paciente);
     //       paciente.rmvMedico(this.nome);
        let paciente: Paciente | undefined = this.pacientes.get(key)
            if (paciente !== undefined) {
                this.pacientes.delete(key)
                paciente.rmvMedico(this.nome);
        }
    }

    toString(): string{
        //keys percorre a estrutura e passa por todas as chaves que exsite
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
        if(this.medicos.has(medico.getNome()))
            return;
            this.medicos.set(medico.getNome(), medico);
            medico.addPaciente(this);
    }

    rmvMedico(key: string): void{
       let medico: Medico | undefined = this.medicos.get(key);
            if (medico !== undefined) {
                this.medicos.delete(key);
                medico.rmvpaciente(this.nome);
            }
    }

    toString(){
        let keys = this.medicos.keys();
        return this.nome + " [" + [...keys].join(", ") + "]"
      }
}

let Mario = new Medico("Dr.Mario");
let Raul = new Paciente("Raul")
let Paula = new Paciente("Paula")

Mario.addPaciente(Raul);
Mario.addPaciente(Paula);

console.log(" " + Mario);
console.log(" " + Raul);
console.log(" " + Paula);

Mario.rmvpaciente("Paula")
Paula.rmvMedico("Dr.Mario")