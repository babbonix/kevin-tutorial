import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioGhibliComponent } from './studio-ghibli.component';

describe('StudioGhibliComponent', () => {
  let component: StudioGhibliComponent;
  let fixture: ComponentFixture<StudioGhibliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudioGhibliComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudioGhibliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
