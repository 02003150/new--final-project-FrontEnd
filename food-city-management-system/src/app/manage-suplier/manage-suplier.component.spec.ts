import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSuplierComponent } from './manage-suplier.component';

describe('ManageSuplierComponent', () => {
  let component: ManageSuplierComponent;
  let fixture: ComponentFixture<ManageSuplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageSuplierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageSuplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
