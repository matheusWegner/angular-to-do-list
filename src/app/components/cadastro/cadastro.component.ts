import { Component } from '@angular/core';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/service/auth.service';
import { FormGroup, FormControl ,NgForm} from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
     user: User = new User();
     userForm = new FormGroup({
        login: new FormControl(''),
        password: new FormControl(''),
    });

     constructor(private authService:AuthService){}

    register(){
      this.authService.register(this.user);
    }
}
