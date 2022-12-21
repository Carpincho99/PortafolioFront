import { Component, EventEmitter, Output } from '@angular/core';
import { Educ } from '../models/educ';
import { EducService } from '../service/educ.service';

declare var jQuery:any;
declare var $: any;

@Component({
  selector: 'app-new-educ-modal',
  templateUrl: './new-educ-modal.component.html',
  styleUrls: ['./new-educ-modal.component.css']
})
export class NewEducModalComponent {
  newEduc!: Educ;
  name: string = "";
  lugar: string = "";

  @Output() emiter = new EventEmitter<void>();
  
  constructor(private educServ: EducService){ }

  onCreate(): void{
    this.newEduc = new Educ(this.name, this.lugar);
    this.educServ.save(this.newEduc).subscribe(data => {
    this.emiter.emit();
    $('#newEducModal').modal('hide');
    $('#newEducModal').on('hidden.bs.modal', function () {
      $('#newEducModal').find('form').trigger('reset');
    })
    }, err =>{
      alert(err.error.mensaje);
    });
  }


}
