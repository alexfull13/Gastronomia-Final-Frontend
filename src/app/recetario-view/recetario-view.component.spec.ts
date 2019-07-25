import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetarioViewComponent } from './recetario-view.component';

describe('RecetarioViewComponent', () => {
  let component: RecetarioViewComponent;
  let fixture: ComponentFixture<RecetarioViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetarioViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetarioViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
