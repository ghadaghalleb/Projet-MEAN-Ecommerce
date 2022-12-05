import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardaccComponent } from './cardacc.component';

describe('CardaccComponent', () => {
  let component: CardaccComponent;
  let fixture: ComponentFixture<CardaccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardaccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
