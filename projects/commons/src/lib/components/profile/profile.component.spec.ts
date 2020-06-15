import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { Component, ViewChild } from '@angular/core';
import { FirstLetterPipe } from '../../pipes/first-letter-pipe';
import { By } from '@angular/platform-browser';

describe('Profile Component', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent, FirstLetterPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.firstName = 'John';
    component.lastName = 'Ben';
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show as John Ben', () => {
    fixture.detectChanges();
    const userName = fixture.debugElement.query(By.css('#mnl-userinfo-name'));
    expect(userName.nativeElement.textContent).toEqual('John Ben');
  });

  it('should show initials', () => {
    fixture.detectChanges();
    const userInitials = fixture.debugElement.query(By.css('#mnl-initials-button'));
    expect(userInitials.nativeElement.innerText).toEqual('JB');
  });

  it('should print only J when lastName is passed as empty string', () => {
    component.lastName = '';
    fixture.detectChanges();
    const userInitials = fixture.debugElement.query(By.css('#mnl-initials-button'));
    expect(userInitials.nativeElement.innerText).toEqual('J');
  });

  it('should display only J when lastName is null', () => {
    component.lastName = null;
    fixture.detectChanges();
    const userInitials = fixture.debugElement.query(By.css('#mnl-initials-button'));
    expect(userInitials.nativeElement.innerText).toEqual('J');
  });

});
