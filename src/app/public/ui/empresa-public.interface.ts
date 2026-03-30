export interface EmpresaPublica {
  _id: string;
  name: string;
  slug: string;
  descripcion: string;
  colorTema: string;
  duracionTurno: number;
  diasHabiles: DiaHabil[];
}

export interface DiaHabil {
  diaSemana: number;
  habilitado: boolean;
  rangos: Rango[];
}

export interface Rango {
  _id?: string;
  desde: string;
  hasta: string;
}
