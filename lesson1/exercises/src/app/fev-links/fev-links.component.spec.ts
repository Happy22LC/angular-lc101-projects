import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FevLinksComponent } from './fev-links.component';

describe('FevLinksComponent', () => {
  let component: FevLinksComponent;
  let fixture: ComponentFixture<FevLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FevLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FevLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
