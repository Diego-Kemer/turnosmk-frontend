import { Component, computed, effect, inject, OnInit } from '@angular/core';
import { HorariosItem } from "../../ui/components/horarios-item/horarios-item";
import { EmpresaStore } from '../../data-access/empresa.store';
import { DiaHabil } from '../../ui/interfaces/dia-habil.interface';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DiaSemana } from '../../ui/interfaces/dias-semana.enum';
import { DiasHarariosService } from '../../data-access/dias-hararios-service';

@Component({
  selector: 'app-horarios',
  imports: [HorariosItem, ReactiveFormsModule],
  templateUrl: './horarios.html',
  styleUrl: './horarios.css',
})
export class Horarios implements OnInit{
  private fb = inject(FormBuilder)
  private _empresa = inject(EmpresaStore)
  private servDH = inject(DiasHarariosService);
  public diasDeLaSemana: DiaHabil[] = [];
  public id: string | undefined;
  protected readonly diaSemana = DiaSemana

  diasHabiles = computed(()=> this._empresa.empresa()?.diasHabiles ?? [])

  form!: FormGroup;

  constructor(){
    effect(()=>{
      const dias = this.diasHabiles();

      if(!dias.length) return;

      const group: Record<number, boolean> = {};

      dias.forEach(dia=>{
        group[dia.diaSemana] = dia.habilitado;
      });

      this.form = this.fb.group(group)
    })
  }
  
  ngOnInit(): void {
    this.diasDeLaSemana = this._empresa.empresa()?.diasHabiles ?? [];
    this.id = this._empresa.empresa()?._id
  }

  saveDias(){
    const data = Object.entries(this.form.value).map(
      ([diaSemana, habilitado]) => ({
        diaSemana: Number(diaSemana),
        habilitado
      })
    );

    console.log(data);
  
    this.servDH.actualizarDias(this._empresa.empresa()?._id, data).subscribe(res=>{
      alert(res.mensaje)
      console.log(res)
      this._empresa.updateDiasHabiles(res.diasHabiles)  
    })
  }
  
}
