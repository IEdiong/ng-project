import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HektoFooterComponent } from './hekto-footer.component';

describe('HektoFooterComponent', () => {
  let component: HektoFooterComponent;
  let fixture: ComponentFixture<HektoFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HektoFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HektoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
