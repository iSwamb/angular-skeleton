import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StartPageComponent} from "./components/start-page/start-page.component";

const ROUTES: Routes = [
  {path: '', redirectTo: '/start', pathMatch: 'full'},
  {
    path: 'start',
    component: StartPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
