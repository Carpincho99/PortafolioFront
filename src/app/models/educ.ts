export class Educ {
  id?: number;
  name: string = "";
  lugar?: string;

  constructor(name: string, lugar: string){
    this.name = name;
    this.lugar = lugar;
  }
  
}
