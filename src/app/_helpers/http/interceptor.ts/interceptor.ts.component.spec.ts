import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptorTsComponent } from './interceptor.ts.component';

describe('InterceptorTsComponent', () => {
  let component: InterceptorTsComponent;
  let fixture: ComponentFixture<InterceptorTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterceptorTsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterceptorTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
