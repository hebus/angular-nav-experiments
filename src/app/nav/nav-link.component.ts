import {
  Component,
  HostBinding,
  Input,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { NavComponent } from './nav.component';

@Component({
  selector: 'nav-link',
  template: `<ul><li><a #link [ngClass]="{ active: isActive }" [attr.data-active]="isActive"><i [ngClass]="icon"></i></a></li></ul>`,
  styleUrls: ['nav-link.component.css'],
})
export class NavLinkComponent {
  @ViewChild('link', { static: true }) link!: ElementRef<HTMLElement>;
  @HostBinding('class.active') get isActive() {
    // is host element contains .active class ?
    const isActive = this.host.nativeElement.classList.contains('active');
    if (isActive) {
      // yes, so call the onActive()'s host method
      this.parentComponent.onActive(this.link.nativeElement.offsetLeft);
    } else {
      // otherwise remove the .active class from the host
      this.host.nativeElement.classList.remove('active');
    }
    return isActive;
  }
  @Input() icon: string = '';

  /**
   * Using DI, we can retrieve host Element and host Component
   *
   * host is the <nav-link> element
   * parentComponent is the <nav-root> element but in it's component form
   */
  constructor(
    public readonly host: ElementRef<HTMLElement>,
    private readonly parentComponent: NavComponent
  ) {}
}
