import { Component, inject, OnInit, Signal } from '@angular/core';
import { EmpresaStore } from '../../data-access/empresa.store';
import { EmpresaInterface } from '../../ui/interfaces/empresa.interface';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-mi-link',
  imports: [],
  templateUrl: './mi-link.html',
  styleUrl: './mi-link.css',
})
export class MiLink implements OnInit{
  public miLinkUrl!: string;
  public copySuccess: boolean = false;
  private _empresa = inject(EmpresaStore)
  public empresa!: any;
  public url: string = window.location.origin;
  
  ngOnInit(): void {
    this.empresa = this._empresa.empresa
    this.miLinkUrl =`${this.url}/res/${this.empresa()?.slug}`  
  }

  copyLink(): void {
    navigator.clipboard.writeText(this.miLinkUrl).then(() => {
      this.copySuccess = true;
      setTimeout(() => {
        this.copySuccess = false;
      }, 5000);
    });  }
}
