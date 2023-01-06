import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeElemComponent } from './tree-elem.component';

describe('TreeElemComponent', () => {
  let component: TreeElemComponent;
  let fixture: ComponentFixture<TreeElemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeElemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
