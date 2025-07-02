import { Directive,Input  } from '@angular/core';

@Directive({
  selector: '[appAccordionLink]',
  standalone: true
})
export class AccordionLink {

  @Input() group: string = '';
  
  constructor() { }

}
