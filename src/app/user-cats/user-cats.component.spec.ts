import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCatsComponent } from './user-cats.component';

describe('UserCatsComponent', () => {
  let component: UserCatsComponent;
  let fixture: ComponentFixture<UserCatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
