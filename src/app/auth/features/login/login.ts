import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../data-access/auth';
import { Router } from '@angular/router';
import { AuthStorage } from '../../data-access/auth-storage';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit{
  public form!: FormGroup;
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private auth = inject(Auth);
  private storageServ = inject(AuthStorage)
  
  
  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  send(){
    this.auth.login(this.form.value).subscribe((res: any) =>{
      if(res.token){
        alert(res.mensaje)
        const id = res.empresa.owner
        this.storageServ.setToken(res.token)  
        this.router.navigate([`/user-panel/${id}/inicio`])
      }else{
        alert('Datos incorrectos')
      }
    })
  }

}
