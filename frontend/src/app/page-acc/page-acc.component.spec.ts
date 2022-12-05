import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAccComponent } from './page-acc.component';

describe('PageAccComponent', () => {
  let component: PageAccComponent;
  let fixture: ComponentFixture<PageAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
