import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicrlesComponent } from './cicrles.component';

describe('CicrlesComponent', () => {
  let component: CicrlesComponent;
  let fixture: ComponentFixture<CicrlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CicrlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CicrlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
