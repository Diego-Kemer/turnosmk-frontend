import { Routes } from "@angular/router";
import { PanelPro } from "./features/panel-pro/panel-pro";
import { Inicio } from "./features/inicio/inicio";
import { Turnos } from "./features/turnos/turnos";
import { Horarios } from "./features/horarios/horarios";
import { MiLink } from "./features/mi-link/mi-link";
import { Clientes } from "./features/clientes/clientes";
import { ListaTurnos } from "./ui/components/lista-turnos/lista-turnos";

export default [
    {path: ':id', component: PanelPro, children: [
        {path: 'inicio', component: Inicio},
        {path: 'turnos', component: Turnos, children: [
            {path: 'hoy', component: ListaTurnos},
            {path: 'manana', component: ListaTurnos},
            {path: 'proximos', component: ListaTurnos},
            {path: '', redirectTo: 'hoy', pathMatch: 'full'},
        ]},
        {path: 'horarios', component: Horarios},
        {path: 'mi-link', component: MiLink},
        {path: 'clientes', component: Clientes},
        {path: '', redirectTo: 'inicio', pathMatch: 'full'},
        {path: '**', redirectTo: 'inicio'}
    ]
    }
] as Routes;