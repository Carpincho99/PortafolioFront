export class Skill {
  id?: number;
  porcentaje: number;
  icon: string;

  constructor(icon: string, porcentaje: number, ){
    this.porcentaje = porcentaje;
    this.icon = icon;
  }
}
