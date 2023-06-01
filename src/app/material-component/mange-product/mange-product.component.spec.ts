import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeProductComponent } from './mange-product.component';

describe('MangeProductComponent', () => {
  let component: MangeProductComponent;
  let fixture: ComponentFixture<MangeProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangeProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
