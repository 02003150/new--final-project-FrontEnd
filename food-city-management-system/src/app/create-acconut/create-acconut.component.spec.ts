import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAcconutComponent } from './create-acconut.component';

describe('CreateAcconutComponent', () => {
  let component: CreateAcconutComponent;
  let fixture: ComponentFixture<CreateAcconutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAcconutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAcconutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
