export class Skill {
  id?: number;
  porcentaje: number;
  icon: string;

  constructor(porcentaje: number, icon: string){
    this.porcentaje = porcentaje;
    this.icon = icon;
  }
}
