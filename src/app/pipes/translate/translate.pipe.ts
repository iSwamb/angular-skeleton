import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from "../../services/translate/translate.service";

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {
  constructor(private _translate: TranslateService) {}

  transform(key: string): any {
    if (!key) return key;

    let keys = key.split('.');
    let value = this._translate.data;

    for (let i = 0; i < keys.length; i++) {
      value = value[keys[i]];
      if (value === undefined) {
        return key;
      }
    }

    return value;
  }
}
