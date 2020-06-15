import { Component, Input, ViewEncapsulation, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'mnl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {

  @Input()
  header: any;

  @Output()
  menuButonClickEvent: EventEmitter<any> = new EventEmitter<any>();

  menuClick(event) {
    this.menuButonClickEvent.emit(event);
  }
}
