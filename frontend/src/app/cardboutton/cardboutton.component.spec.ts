import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardbouttonComponent } from './cardboutton.component';

describe('CardbouttonComponent', () => {
  let component: CardbouttonComponent;
  let fixture: ComponentFixture<CardbouttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardbouttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardbouttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
