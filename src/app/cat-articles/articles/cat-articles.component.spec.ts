import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatArticlesComponent } from './cat-articles.component';

describe('CatArticlesComponent', () => {
  let component: CatArticlesComponent;
  let fixture: ComponentFixture<CatArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
