import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mnl-user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  @Input()
  firstName: string;

  @Input()
  lastName: string;

  @Output()
  profileClick: EventEmitter<any> = new EventEmitter<any>();

  onProfileClick(event: any) {
    this.profileClick.emit(event);
  }

}
