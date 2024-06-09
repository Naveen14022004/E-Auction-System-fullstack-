import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaystatusComponent } from './displaystatus.component';

describe('DisplaystatusComponent', () => {
  let component: DisplaystatusComponent;
  let fixture: ComponentFixture<DisplaystatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplaystatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplaystatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
