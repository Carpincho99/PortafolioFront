export class Exp {
  id?: number;
  name: string;
  puesto: string;
  descrip: string;

  constructor(name: string, descrip: string, puesto: string){
    this.name = name;
    this.puesto = puesto;
    this.descrip = descrip;
  }
}
