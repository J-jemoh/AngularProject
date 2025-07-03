import { Component,OnInit } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';

@Component({
  standalone:true,
  selector: 'app-create',
  imports: [CardComponent],
  templateUrl: './create.html',
  styleUrl: './create.scss'
})
export class Create implements OnInit{
 constructor() { }

  ngOnInit() {
  }
}
