import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerItemComponent } from './sneaker-item.component';

describe('SneakerItemComponent', () => {
  let component: SneakerItemComponent;
  let fixture: ComponentFixture<SneakerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SneakerItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
