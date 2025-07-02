import { Directive, HostListener } from '@angular/core';
import { AccordionLinkDirective } from './accordionlink.directive';

@Directive({
  selector: '[appAccordionToggle]'
})
export class AccordionToggleDirective {
  constructor(private link: AccordionLinkDirective) {}

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    event.preventDefault(); // Optional: prevent default link action
    this.link.toggle();     // Call the toggle() function from AccordionLinkDirective
  }
}
