import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDragonComponent } from './register-dragon.component';

describe('RegisterDragonComponent', () => {
  let component: RegisterDragonComponent;
  let fixture: ComponentFixture<RegisterDragonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterDragonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDragonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
