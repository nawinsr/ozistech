import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulluserComponent } from './fulluser.component';

describe('FulluserComponent', () => {
  let component: FulluserComponent;
  let fixture: ComponentFixture<FulluserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FulluserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FulluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
