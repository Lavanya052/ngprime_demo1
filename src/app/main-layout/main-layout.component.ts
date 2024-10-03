import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

  @ViewChild('sidebar') sidebar!: SidebarComponent;

  toggleSidebar() {
    this.sidebar.toggleSidebar(); // Call the toggle method of SidebarComponent
  }
}
