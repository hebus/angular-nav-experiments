import {
  Component,
  ContentChildren,
  ElementRef,
  QueryList,
  ViewChild,
} from '@angular/core';
import { NavLinkComponent } from './nav-link.component';

@Component({
  selector: 'nav-root',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.css'],
})
export class NavComponent {
  @ContentChildren(NavLinkComponent) links: QueryList<NavLinkComponent>;
  @ViewChild('tubelight', { static: true }) light: ElementRef<HTMLElement>;

  private prevIndex = 0;

  /**
   * move the light div toward the current selection
   * called by it's children
   */
  onActive(offsetLeft: number) {
    this.light.nativeElement.style.setProperty(
      '--left',
      `${offsetLeft + this.light.nativeElement.offsetWidth / 4}px`
    );
  }

  /**
   * Active current link adding .active class
   * Remove .active class from previous selection
   */
  activeMe(index: number) {
    this.links.get(this.prevIndex).host.nativeElement.classList.remove('active');
    this.links.get(index).host.nativeElement.classList.add('active');
    this.prevIndex = index;
  }
}
