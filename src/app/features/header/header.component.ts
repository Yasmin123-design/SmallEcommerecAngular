import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule ]
})
export class HeaderComponent {
  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthService , private router: Router) {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);

  }
}


