import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { DiaHabil } from '../../interfaces/dia-habil.interface';
import { DiaSemana } from '../../interfaces/dias-semana.enum';
import { EmpresaStore } from '../../../data-access/empresa.store';
import { DiasHarariosService } from '../../../data-access/dias-hararios-service';

@Component({
  selector: 'app-add-rango',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './add-rango.html',
  styleUrl: './add-rango.css',
})
export class AddRango implements OnInit {
  @Input() dia!: DiaHabil;
  @Output() closeEvent = new EventEmitter<void>();
  private _empresa = inject(EmpresaStore);
  private servHD = inject(DiasHarariosService)
  protected readonly diasSemana = DiaSemana

  form!: FormGroup;
  private fb = inject(FormBuilder);

  ngOnInit() {
    this.form = this.fb.group({
      desde: [''],
      hasta: [''],
      diaSemana: this.dia.diaSemana
    });
  }

  save(){
    this.servHD.addRango(this._empresa.empresa()?._id, this.form.value).subscribe(res=>{
      alert(res.mensaje)
      this._empresa.updateDiasHabiles(res.emp.diasHabiles)
      this.closeEvent.emit();
    })
  }
  close(){
    this.closeEvent.emit();
  }
}
