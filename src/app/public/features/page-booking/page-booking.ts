import { Component, effect, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';

import { EmpresaPublic } from '../../data-access/empresa-public';
import { ActivatedRoute, Router } from '@angular/router';
import { Calendar } from "../../ui/components/calendar/calendar";
import { Horario } from "../../ui/components/horario/horario";
import { ClienteForm } from "../../ui/components/cliente-form/cliente-form";


@Component({
  selector: 'app-page-booking',
  imports: [Calendar, Horario, ClienteForm],
  templateUrl: './page-booking.html',
  styleUrl: './page-booking.css',
})
export class PageBooking implements OnInit{
  private empServ = inject(EmpresaPublic);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  slug!: string;
  empresa = this.empServ.empresa;
  

  

    ngOnInit() {
      const slug = this.route.snapshot.paramMap.get('slug')!;
      this.slug = slug;
      this.empServ.cargarEmpresa(this.slug)
    }

  irAConfirmacion(turno: any) {
    if (!turno?._id) return;

    this.router.navigate(['confirmacion', turno._id], {
      relativeTo: this.route
    });
  }

}
