import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacthersComponent } from './characthers.component';

describe('CharacthersComponent', () => {
  let component: CharacthersComponent;
  let fixture: ComponentFixture<CharacthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacthersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
