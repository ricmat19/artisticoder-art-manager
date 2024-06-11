import { NgIf } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from 'stream';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-register-modal',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './register-modal.component.html',
  styleUrl: './register-modal.component.scss',
})
export class RegisterModalComponent implements OnInit {
  model: any = {};
  showRegisterModal = false;

  constructor(private accountService: AccountService) {

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  register() {
    this.accountService.register(this.model).subscribe({
      next: response => {
        console.log(response);
      },
      error: error => {
        console.log(error);
      }
    })
  }
}
