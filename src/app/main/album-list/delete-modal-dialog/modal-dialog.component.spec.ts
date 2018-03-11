import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteModalDialogComponent } from './modal-dialog.component';

describe('DeleteModalDialogComponent', () => {
  let component: DeleteModalDialogComponent;
  let fixture: ComponentFixture<DeleteModalDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteModalDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteModalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
