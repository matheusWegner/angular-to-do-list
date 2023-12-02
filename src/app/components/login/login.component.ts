import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: User = new User();
  userForm = new FormGroup({
     login: new FormControl(''),
     password: new FormControl(''),
  });
  constructor(private authService:AuthService,
              private spinner: NgxSpinnerService,
              private router:Router, 
              private userService: UserService) {}
 
   login(){
      this.spinner.show();
      this.authService.login(this.user).subscribe({
         next: (response) => {
             const authToken = response.token;
             this.userService.salvaToken(authToken);
             this.router.navigate(["/tarefas"]);
         },
         error: (error) => {
           console.error(error);
         },
         complete: () =>{
            this.spinner.hide();
         }
     });
   } 
}
