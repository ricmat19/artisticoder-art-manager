import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { NgIf } from '@angular/common';
import { Observable, of } from 'rxjs';
import { IUser } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.scss',
})
export class LoginModalComponent implements OnInit {
  model: any = {};
  showLoginModal = false;
  currentUser$: Observable<IUser | null> = of(null);

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: (response) => {
        this.router.navigateByUrl("/projects")
      },
      error: (error) => console.log(error)
    });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
