import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projeto-web';
  constructor(
    private route: ActivatedRoute,
    private userService:UserService,
    private router: Router  ) {}
    gotoCadastro() {
      this.router.navigate(['/cadastro']);
    }
    logout(){
      this.userService.logout();
    }
}
