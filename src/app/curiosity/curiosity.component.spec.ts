import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { LogsService } from '../shared/services/logs.service';

import { CuriosityComponent } from './curiosity.component';

describe('CuriosityComponent', () => {
  let component: CuriosityComponent;
  let fixture: ComponentFixture<CuriosityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuriosityComponent ],
      providers: [
        LogsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuriosityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
