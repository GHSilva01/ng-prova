import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/login/models/user.model';
import { AuthService } from 'src/app/login/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user!: IUser | undefined;

  constructor(private auth: AuthService){}

  ngOnInit(): void {
    this.user = this.auth.getUserAuthenticated();
  }

}
