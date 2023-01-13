import {
    AfterViewInit,
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
export class NavComponent implements AfterViewInit {
  @ContentChildren(NavLinkComponent) links: QueryList<NavLinkComponent>;
  @ViewChild('tubelight', { static: true }) light: ElementRef<HTMLElement>;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    this.el.nativeElement.style.setProperty('--cols', this.links.length.toString());
  }

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
    this.links.forEach(link => link.host.nativeElement.classList.remove('active'));
    this.links.get(index).host.nativeElement.classList.add('active');
  }
}
