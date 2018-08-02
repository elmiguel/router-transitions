import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { routerTransition } from './router.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent {
  title = 'app';

  constructor(public authService: AuthService) { }

  getState(outlet: any) {
    return outlet.activatedRouteData.state;
  }
}

