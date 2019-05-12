import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoverImageComponent } from './rover-image.component';

describe('RoverImageComponent', () => {
  let component: RoverImageComponent;
  let fixture: ComponentFixture<RoverImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoverImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoverImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
