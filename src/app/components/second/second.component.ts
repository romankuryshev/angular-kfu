import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateFn} from '@angular/router'

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  constructor(private router: Router, private authService : AuthenticationService) {}

  logout () {
    this.authService.logout();
  }

  onClick() {
    this.router.navigate(['/admin']);
  }
} 
