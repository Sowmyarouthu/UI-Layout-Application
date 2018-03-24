import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTestingComponent } from './basic-testing.component';

describe('BasicTestingComponent', () => {
  let component: BasicTestingComponent;
  let fixture: ComponentFixture<BasicTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
