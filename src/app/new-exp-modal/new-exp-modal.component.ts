import { Component, EventEmitter, Output } from '@angular/core';
import { Exp } from '../models/exp';
import { ExpService } from '../service/exp.service';

declare var jQuery:any;
declare var $: any;

@Component({
  selector: 'app-new-exp-modal',
  templateUrl: './new-exp-modal.component.html',
  styleUrls: ['./new-exp-modal.component.css']
})
export class NewExpModalComponent {
  newExp!: Exp;
  name: string = "";
  puesto: string = "";
  descrip: string = "";
  @Output() emiter = new EventEmitter<void>();
  
  constructor(private expServ: ExpService){ }

  onCreate(): void{
    console.log("submit")
    this.newExp = new Exp(this.name, this.descrip, this.puesto);
    this.expServ.save(this.newExp).subscribe(data => {
    this.emiter.emit();
    $('#newExpModal').modal('hide');
    $('#newEducModal').on('hidden.bs.modal', function () {
      $('#newEducModal').find('form').trigger('reset');
    })
    }, err =>{
      alert(err.error.mensaje);
    });
  }

}
