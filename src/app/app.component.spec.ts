import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const FIXTURE = TestBed.createComponent(AppComponent);
    const APP = FIXTURE.componentInstance;
    expect(APP).toBeTruthy();
  });

  it(`should have as title 'angular-skeleton'`, () => {
    const FIXTURE = TestBed.createComponent(AppComponent);
    const APP = FIXTURE.componentInstance;
    expect(APP.title).toEqual('angular-skeleton');
  });

  it('should render title', () => {
    const FIXTURE = TestBed.createComponent(AppComponent);
    FIXTURE.detectChanges();
    const COMPILED = FIXTURE.nativeElement as HTMLElement;
    expect(COMPILED.querySelector('.content span')?.textContent).toContain('angular-skeleton app is running!');
  });
});
