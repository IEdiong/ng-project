import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HektoNavigationComponent } from './hekto-navigation.component';

describe('HektoNavigationComponent', () => {
  let component: HektoNavigationComponent;
  let fixture: ComponentFixture<HektoNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HektoNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HektoNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
