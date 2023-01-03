import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4OTAiLCJuYW1lIjoiSm9lIFNhbSJ9.RpYD7qsSX8UvhHeBarSe67yJo-OXU2UNtIvmme0u2vo'
  private readonly NAME = 'Gabriel Silva'
  private readonly PASSWORD = '12345'

  constructor(private router: Router) { }

  login(name: string, password: string): void {
    if (name == this.NAME && password == this.PASSWORD) {
      sessionStorage.setItem('@user', this.JWT)
      this.router.navigateByUrl('home')
      return;
    }
    throw new Error('Nome ou senha inválido');
  }

  getUserAuthenticated(): IUser | undefined {
    const jwt = sessionStorage.getItem('@user')

    if (typeof jwt == 'string') {
      const decoded = jwt_decode(jwt) as IUser
      return decoded;
    }

    return undefined
  }

  hasUserAuthenticated(): boolean {
    return !!this.getUserAuthenticated()
  }
}
