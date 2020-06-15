import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDemoComponent } from './login-demo.component';
import { LogService } from '@muraai/mnl-commons';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginDemoComponent', () => {
  let component: LoginDemoComponent;
  let fixture: ComponentFixture<LoginDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
      declarations: [ LoginDemoComponent ],
      providers: [LogService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
