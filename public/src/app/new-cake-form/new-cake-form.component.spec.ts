import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCakeFormComponent } from './new-cake-form.component';

describe('NewCakeFormComponent', () => {
  let component: NewCakeFormComponent;
  let fixture: ComponentFixture<NewCakeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCakeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCakeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
