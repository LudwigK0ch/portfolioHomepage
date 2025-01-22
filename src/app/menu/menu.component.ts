import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [TabMenuModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  items = [
    { label: 'Home', icon: 'pi pi-home', routerLink: '/', fragment: 'home' },
    {
      label: 'About',
      icon: 'pi pi-info-circle',
      routerLink: '/',
      fragment: 'about',
    },
    {
      label: 'Timeline',
      icon: 'pi pi-history',
      routerLink: '/',
      fragment: 'timeline',
    },
    {
      label: 'Projects',
      icon: 'pi pi-objects-column',
      routerLink: '/',
      fragment: 'projects',
    },
    {
      label: 'Contact',
      icon: 'pi pi-envelope',
      routerLink: '/',
      fragment: 'contact',
    },
  ];

  constructor(private router: Router) {}

  private menuHeight = 60;

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.url.split('#')[1];
        if (fragment) {
          const element = document.getElementById(fragment);
          if (element) {
            window.scrollTo({
              top: element.offsetTop - this.menuHeight,
              behavior: 'smooth'
            });
          }
        }
      }
    });
  }
}
