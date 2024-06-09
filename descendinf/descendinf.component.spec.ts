import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescendinfComponent } from './descendinf.component';

describe('DescendinfComponent', () => {
  let component: DescendinfComponent;
  let fixture: ComponentFixture<DescendinfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescendinfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescendinfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
