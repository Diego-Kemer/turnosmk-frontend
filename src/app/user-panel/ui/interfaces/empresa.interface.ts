import { DiaHabil } from './dia-habil.interface';

export interface EmpresaInterface {
     _id: string;
    name: string;
    slug: string;
    owner: string;
    activa: boolean;
    duracionTurno: number;

    diasHabiles: DiaHabil[];

    createdAt: string;
    updatedAt: string;
    __v: number;
}
