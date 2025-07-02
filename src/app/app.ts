import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpinnerComponent } from "../app/shared/spinner/spinner.component";

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet,SpinnerComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected title = 'Angular-App';
}
