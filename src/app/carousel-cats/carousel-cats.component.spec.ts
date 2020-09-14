import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCatsComponent } from './carousel-cats.component';

describe('CarouselCatsComponent', () => {
  let component: CarouselCatsComponent;
  let fixture: ComponentFixture<CarouselCatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselCatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
