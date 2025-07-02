import {
  Directive, HostBinding, Inject, Input, OnInit, OnDestroy
} from '@angular/core';

import { AccordionDirective } from './accordion.directive';

@Directive({
  selector: '[appAccordionLink]'
})
export class AccordionLinkDirective implements OnInit, OnDestroy {

  @Input() public group: any;

  @HostBinding('class.pcoded-trigger')
  @Input()
  get open(): boolean {
    return this._open;
  }

  set open(value: boolean) {
  this._open = value;

  const sidebar = document.querySelector('.pcoded-inner-navbar');
  if (sidebar) {
    sidebar.classList.toggle('scroll-sidebar');
  }

  if (value) {
    this.nav.closeOtherLinks(this);
  }
}

  protected _open: boolean=false;
  protected nav: AccordionDirective;

  constructor(@Inject(AccordionDirective) nav: AccordionDirective) {
    this.nav = nav;
  }

  ngOnInit(): any {
    this.nav.addLink(this);
  }

  ngOnDestroy(): any {
    this.nav.removeGroup(this);
  }

  toggle(): any {
  const sidebar = document.querySelector('.pcoded-inner-navbar');
  if (sidebar) {
    sidebar.classList.add('scroll-sidebar');
  }

  this.open = !this.open;
}
}
