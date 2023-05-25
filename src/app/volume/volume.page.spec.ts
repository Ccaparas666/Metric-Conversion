import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VolumePage } from './volume.page';

describe('VolumePage', () => {
  let component: VolumePage;
  let fixture: ComponentFixture<VolumePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VolumePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
