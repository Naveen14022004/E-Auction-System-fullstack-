import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddplayerComponent } from './addplayer.component';

describe('AddplayerComponent', () => {
  let component: AddplayerComponent;
  let fixture: ComponentFixture<AddplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddplayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
