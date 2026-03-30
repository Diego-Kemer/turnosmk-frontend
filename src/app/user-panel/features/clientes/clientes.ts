import { Component, inject, OnInit, signal } from '@angular/core';
import { Client } from '../../ui/interfaces/client';
import { ClientesItem } from "../../ui/components/clientes-item/clientes-item";
import { TurnosData } from '../../data-access/turnos-data';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { GeneralData } from '../../data-access/general-data';
import { EmpresaStore } from '../../data-access/empresa.store';

@Component({
  selector: 'app-clientes',
  imports: [ClientesItem, ReactiveFormsModule],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class Clientes implements OnInit{
  private servGral = inject(GeneralData);
  private _empresa = inject(EmpresaStore)
  private _clientes = signal<Client[]>([])
  public listClientes: Array<Client> = [];
  public clientesFiltrados: Array<Client> = [];
  public busqueda = new FormControl('');

  clientes = this._clientes.asReadonly()


  ngOnInit(): void {
    this.servGral.getClientes(this._empresa.empresa()?._id || '').subscribe(res=>{
      this._clientes.set(res.clientes) 
      this.listClientes = res.clientes
    })

    this.busqueda.valueChanges.subscribe(valor => {
      if(!valor){
        this._clientes.set(this.listClientes) 
      }
    });
  }

  filtrarClientes() {
    const valor = this.busqueda.value
    const texto = valor?.trim().toLowerCase();

    if (!texto) {
      this._clientes.set(this.listClientes)
      return;
    }

    this.clientesFiltrados = this.listClientes.filter(cliente =>
      cliente.nombre.toLowerCase().includes(texto) 
    );
    
    if(this.clientesFiltrados.length > 0){
      this._clientes.set(this.clientesFiltrados)
    }else{
      alert("No hay clientes para tu busqueda")
      this._clientes.set(this.listClientes)
    }
  }

  

}
