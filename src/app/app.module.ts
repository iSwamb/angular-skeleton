// Angular imports
import { APP_INITIALIZER, NgModule } from '@angular/core';

// Commons modules imports
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';

// Shared modules imports
import { SharedModule } from "./shared/shared.module";

// Material modules imports
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTableModule } from "@angular/material/table";

// Services imports
import { TranslateService } from "./services/translate/translate.service";

// Pipes imports
import { TranslatePipe } from './pipes/translate/translate.pipe';
import { UppercasePipe } from './pipes/uppercase/uppercase.pipe';

// Components imports
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/core/header/header.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { TranslationSwitchComponent } from "./components/core/translation-switch/translation-switch.component";
import { StartPageComponent } from './components/start-page/start-page.component';

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
    HeaderComponent,
    FooterComponent,
    StartPageComponent,
    UppercasePipe,
  ],
  imports: [
    // Angular modules
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    SharedModule,

    // Material modules
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTableModule
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
