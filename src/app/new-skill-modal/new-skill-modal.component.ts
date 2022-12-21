import { Component, EventEmitter, Output } from '@angular/core';
import { Skill } from '../models/skill';
import { SkillService } from '../service/skill.service';

declare var jQuery:any;
declare var $: any;

@Component({
  selector: 'app-new-skill-modal',
  templateUrl: './new-skill-modal.component.html',
  styleUrls: ['./new-skill-modal.component.css']
})
export class NewSkillModalComponent {
  newSkill!: Skill;
  icon: string = "";
  porcentaje: number = 0;
  porcentajeDrag: number = 0;

  @Output() emiter = new EventEmitter<void>();
  
  constructor(private skillServ: SkillService){ }

  onChange(event: any): void{
    this.porcentaje = parseInt(event.target.value);
  }

  onCreate(): void{
    this.newSkill = new Skill("devicon-" + this.icon, this.porcentaje);
    this.skillServ.save(this.newSkill).subscribe(data => {
    this.emiter.emit();
    $('#newSkillModal').modal('hide');
    $('#newSkillModal').on('hidden.bs.modal', function () {
      $('#newSkillModal').find('form').trigger('reset');
    })
    }, err =>{
      alert(err.error.mensaje);
    });
  }



}
