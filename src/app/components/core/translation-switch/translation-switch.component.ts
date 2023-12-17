import { Component } from '@angular/core';
import { TranslateService } from "../../../services/translate/translate.service";

@Component({
  selector: 'app-translation-switch',
  templateUrl: './translation-switch.component.html',
  styleUrls: ['./translation-switch.component.css']
})
export class TranslationSwitchComponent {
  constructor(private _translateService: TranslateService) {}

  setLang(lang: string) {
    this._translateService.use(lang);
  }
}
