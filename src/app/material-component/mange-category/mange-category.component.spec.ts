import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeCategoryComponent } from './mange-category.component';

describe('MangeCategoryComponent', () => {
  let component: MangeCategoryComponent;
  let fixture: ComponentFixture<MangeCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangeCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangeCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
