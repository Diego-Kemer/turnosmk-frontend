import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStorage } from '../../auth/data-access/auth-storage';

export const authCanGuard: CanActivateFn = (route, state) => {
  const storageServ = inject(AuthStorage);
  const router = inject(Router);

  if(!storageServ.isLoggedIn()){
    router.navigate(['/login']);
    return false
  }
  return true;
};
