import { Component, inject, Input } from '@angular/core';
import { AddRango } from "../add-rango/add-rango";
import { DiaHabil } from '../../interfaces/dia-habil.interface';
import { DiaSemana } from '../../interfaces/dias-semana.enum';
import { DiasHarariosService } from '../../../data-access/dias-hararios-service';
import { EmpresaStore } from '../../../data-access/empresa.store';

@Component({
  selector: 'app-horarios-item',
  imports: [AddRango],
  templateUrl: './horarios-item.html',
  styleUrl: './horarios-item.css',
})
export class HorariosItem{
  @Input() diaSelect!: DiaHabil;
  private _empresa = inject(EmpresaStore)
  private servDH = inject(DiasHarariosService)
  public addRango: boolean = false;
  public editDia: string = '';
  protected readonly diasSemana = DiaSemana;
  
  toggleAddRango() {
    this.addRango = !this.addRango;
  }

  edit(dia: string) {
    this.editDia = dia;
    this.toggleAddRango();
  }

  deleteRango(id: string){
    if(confirm('Desea eliminar este rango horario')){
      this.servDH.deleteRango(
        this._empresa.empresa()?._id, 
        this.diaSelect.diaSemana,
        id
      ).subscribe(res=>{
        alert(res.mensaje)
        this._empresa.updateDiasHabiles(res.emp.diasHabiles)
      })
    }
  }

}
