import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthStorage } from '../../auth/data-access/auth-storage';

export const authJWTInterceptor: HttpInterceptorFn = (req, next) => {
  const storageServ = inject(AuthStorage);
  const token = storageServ.getToken();

  if(token){
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
  }
  return next(req);
};
