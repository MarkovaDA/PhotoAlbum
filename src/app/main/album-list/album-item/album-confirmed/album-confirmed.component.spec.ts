import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumConfirmedComponent } from './album-confirmed.component';

describe('AlbumConfirmedComponent', () => {
  let component: AlbumConfirmedComponent;
  let fixture: ComponentFixture<AlbumConfirmedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumConfirmedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
