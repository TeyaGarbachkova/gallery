import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselArticlesComponent } from './carousel-articles.component';

describe('CarouselArticlesComponent', () => {
  let component: CarouselArticlesComponent;
  let fixture: ComponentFixture<CarouselArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
