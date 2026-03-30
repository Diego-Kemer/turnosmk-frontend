import { Injectable, signal } from "@angular/core";
import { EmpresaInterface } from "../ui/interfaces/empresa.interface";
import { DiaHabil } from "../ui/interfaces/dia-habil.interface";

@Injectable({providedIn: 'root'})
export class EmpresaStore{
    private _empresa = signal<EmpresaInterface | null>(null);

    empresa = this._empresa.asReadonly();

    setEmpresa(empresa: EmpresaInterface){
        this._empresa.set(empresa);
    }

    clear(){
        this._empresa.set(null);
    }

    updateDiasHabiles(dias: DiaHabil[]) {
        this._empresa.update(emp => {
        if (!emp) return emp;
        return {
            ...emp,
            diasHabiles: dias
        };
        });
    }
}