import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};
  submitted = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
    this.authService.loginUser(this.model)
      .subscribe((res: any) => {
        if (res.token) {
          localStorage.setItem('token', 'just a simple auth example, NOT THE WAY TO DO THIS, USE JWT Strategy!!!!!!!!');
          this.router.navigate(['/home']);
        }
      });
  }
}
