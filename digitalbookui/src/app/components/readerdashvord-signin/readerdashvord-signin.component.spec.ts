import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderdashvordSigninComponent } from './readerdashvord-signin.component';

describe('ReaderdashvordSigninComponent', () => {
  let component: ReaderdashvordSigninComponent;
  let fixture: ComponentFixture<ReaderdashvordSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaderdashvordSigninComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReaderdashvordSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
