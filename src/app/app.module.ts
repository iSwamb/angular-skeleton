// Angular imports
import {APP_INITIALIZER, NgModule} from '@angular/core';

// Material modules imports
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

// Commons modules imports
import {HttpClientModule} from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Services imports
import {TranslateService} from "./services/translate.service";

// Pipes imports
import { TranslatePipe } from './pipes/translate.pipe';

// Components imports
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TranslationSwitchComponent } from './shared/translation-switch/translation-switch.component';

// This function is used to initialize the translation service
export function setupTranslateServiceFactory(
  service: TranslateService): Function {
  return () => service.use('fr');
}

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe,
    TranslationSwitchComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule
  ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateServiceFactory,
      deps: [
        TranslateService
      ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
