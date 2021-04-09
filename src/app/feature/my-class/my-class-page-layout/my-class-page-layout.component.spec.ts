import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyClassPageLayoutComponent } from './my-class-page-layout.component';

describe('MyClassPageLayoutComponent', () => {
  let component: MyClassPageLayoutComponent;
  let fixture: ComponentFixture<MyClassPageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyClassPageLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyClassPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
