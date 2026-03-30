import { Component, Input } from '@angular/core';
import { Client } from '../../interfaces/client';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clientes-item',
  imports: [CommonModule],
  templateUrl: './clientes-item.html',
  styleUrl: './clientes-item.css',
})
export class ClientesItem {
  @Input() cliente: Client | null = null;

}
