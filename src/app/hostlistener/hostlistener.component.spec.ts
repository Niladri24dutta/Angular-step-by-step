import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostlistenerComponent } from './hostlistener.component';

describe('HostlistenerComponent', () => {
  let component: HostlistenerComponent;
  let fixture: ComponentFixture<HostlistenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostlistenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostlistenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
