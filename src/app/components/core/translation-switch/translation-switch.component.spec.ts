import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslationSwitchComponent } from './translation-switch.component';

describe('TranslationSwitchComponent', () => {
  let component: TranslationSwitchComponent;
  let fixture: ComponentFixture<TranslationSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranslationSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranslationSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
