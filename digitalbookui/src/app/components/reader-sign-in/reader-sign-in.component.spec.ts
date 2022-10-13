import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderSignInComponent } from './reader-sign-in.component';

describe('ReaderSignInComponent', () => {
  let component: ReaderSignInComponent;
  let fixture: ComponentFixture<ReaderSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaderSignInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReaderSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
