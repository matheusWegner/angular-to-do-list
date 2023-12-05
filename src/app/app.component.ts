import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './service/user.service';
import { User } from './model/User';
import { AuthService } from './service/auth.service';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faTriangleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user = <User>{};
  img!:string;
  title = 'projeto-web';
    constructor(private route: ActivatedRoute,
              private library: FaIconLibrary,
              private userService:UserService,
              public authService:AuthService) {
      this.userService.retornaUsuario().subscribe((user) => this.user = user);
      this.getImg();
      library.addIconPacks(fas);
      library.addIcons(faCoffee);
    }
   
    logout(){
      this.userService.logout();
    }

    getImg() {
      this.userService.getImg().subscribe({
        next: (response) => {
           var userImg = <User> response;
           this.user.img = userImg.img;
        },
        error: (response) => {
         
        },
         complete: () =>{
         }
      });
    }
}
