import { Component } from '@angular/core';
import {TranslateService} from "./services/translate.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-skeleton';
  constructor(private _translateService: TranslateService) {}

  setLang(lang: string) {
    this._translateService.use(lang);
  }
}
