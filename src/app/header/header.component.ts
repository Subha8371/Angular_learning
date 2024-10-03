import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/home'] },
      { label: 'Calendar', icon: 'pi pi-fw pi-calendar', routerLink: ['/calendar'] },
      { label: 'Edit', icon: 'pi pi-fw pi-pencil', routerLink: ['/edit'] },
      { label: 'Documentation', icon: 'pi pi-fw pi-file', routerLink: ['/documentation'] },
      { label: 'Settings', icon: 'pi pi-fw pi-cog', routerLink: ['/settings'] }
    ];

    this.activeItem = this.items[0];
  }
}
