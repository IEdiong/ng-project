import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HektoBannerComponent } from './hekto-banner.component';

describe('HektoBannerComponent', () => {
  let component: HektoBannerComponent;
  let fixture: ComponentFixture<HektoBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HektoBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HektoBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
