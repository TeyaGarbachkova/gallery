import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatNamesComponent } from './cat-names.component';

describe('CatNamesComponent', () => {
  let component: CatNamesComponent;
  let fixture: ComponentFixture<CatNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
