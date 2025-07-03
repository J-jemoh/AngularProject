import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router'; // ✅ Import Router
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrl: './login.scss',
  imports: [RouterModule, CommonModule] // ✅ Ensure RouterModule is included
})
export class Login {
  constructor(private router: Router) {}

  signIn() {
    // TODO: Add real authentication logic here
    this.router.navigate(['/dashboard']);
  }
}
