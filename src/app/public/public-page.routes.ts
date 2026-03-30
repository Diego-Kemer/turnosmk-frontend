import { Routes } from "@angular/router";
import { PageBooking } from "./features/page-booking/page-booking";
import { Confirmacion } from "./ui/components/confirmacion/confirmacion";

export default [
    {path: ':slug/confirmacion/:turnoId',component: Confirmacion},
    {path: ':slug', component: PageBooking}
] as Routes