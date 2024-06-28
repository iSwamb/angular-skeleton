import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translation-switch',
  templateUrl: './translation-switch.component.html',
  styleUrls: ['./translation-switch.component.scss']
})
export class TranslationSwitchComponent {
  constructor(public translate: TranslateService) {}

  setLang(lang: string) {
    this.translate.use(lang);
  }
}
