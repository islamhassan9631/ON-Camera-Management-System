import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirationComponent } from './confiration.component';

describe('ConfirationComponent', () => {
  let component: ConfirationComponent;
  let fixture: ComponentFixture<ConfirationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
