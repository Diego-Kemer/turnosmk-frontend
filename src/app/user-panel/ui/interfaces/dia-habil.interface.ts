import { RangoHorarioInterface } from './rango-horario.interface';

export interface DiaHabil {
  diaSemana: number;      // 0 = Domingo, 6 = Sábado
  habilitado: boolean;
  rangos: RangoHorarioInterface[];
}