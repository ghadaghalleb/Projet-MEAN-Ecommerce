import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBouttComponent } from './page-boutt.component';

describe('PageBouttComponent', () => {
  let component: PageBouttComponent;
  let fixture: ComponentFixture<PageBouttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBouttComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBouttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
