import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerShowcaseComponent } from './sneaker-showcase.component';

describe('SneakerShowcaseComponent', () => {
  let component: SneakerShowcaseComponent;
  let fixture: ComponentFixture<SneakerShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SneakerShowcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
