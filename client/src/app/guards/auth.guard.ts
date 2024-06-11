import { inject } from '@angular/core';
import { AccountService } from './../services/account.service';
import { CanActivateFn } from '@angular/router';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {

  const accountService = inject(AccountService);

  return accountService.currentUser$.pipe(
    map(user => {
      if (user) {
        return true;
      } else {
        console.log("user not logged in");
        return false;
      }
    })
  );
};
