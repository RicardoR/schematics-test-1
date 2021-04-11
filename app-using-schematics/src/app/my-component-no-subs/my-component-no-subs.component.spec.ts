import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentNoSubsComponent } from './my-component-no-subs.component';

describe('MyComponentNoSubsComponent', () => {
  let component: MyComponentNoSubsComponent;
  let fixture: ComponentFixture<MyComponentNoSubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyComponentNoSubsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponentNoSubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
