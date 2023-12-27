// Angular imports
import { NgModule } from '@angular/core';

// Commons modules imports
import { HttpClient, HttpClientModule } from "@angular/common/http";
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
import { CrudService } from "./services/crud/crud.service";

// NGX Translate imports
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// Components imports
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/core/header/header.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { TranslationSwitchComponent } from "./components/core/translation-switch/translation-switch.component";
import { StartPageComponent } from './components/start-page/start-page.component';

// NGX Translate loader
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    TranslationSwitchComponent,
    HeaderComponent,
    FooterComponent,
    StartPageComponent,
  ],
  imports: [
    // Angular modules
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    SharedModule,

    // NGX Translate modules
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

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
    {
      provide: CrudService,
      deps: [HttpClient]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
