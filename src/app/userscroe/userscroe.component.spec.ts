import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserscroeComponent } from './userscroe.component';

describe('UserscroeComponent', () => {
  let component: UserscroeComponent;
  let fixture: ComponentFixture<UserscroeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserscroeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserscroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
