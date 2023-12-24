import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  sidebar: boolean = false;
  constructor(private elementRef: ElementRef) {}
  openSidebar() {
    console.log('sidebar is opened');
    this.sidebar = !this.sidebar;
    console.log(this.sidebar);
  }
  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.sidebar = false; // Close sidebar when clicked outside
    }
  }
}
