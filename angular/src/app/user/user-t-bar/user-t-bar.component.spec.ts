import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTBarComponent } from './user-t-bar.component';

describe('UserTBarComponent', () => {
  let component: UserTBarComponent;
  let fixture: ComponentFixture<UserTBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
