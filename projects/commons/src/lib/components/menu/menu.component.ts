import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mnl-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Input()
  menuData: any;

  @Output()
  menuSideNavClickEvent: EventEmitter<any> = new EventEmitter<any>();

  onSidenavClose(menu) {
    this.menuSideNavClickEvent.emit(menu);
  }
}
