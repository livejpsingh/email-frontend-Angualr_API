import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmaillComponent } from './components/emaill/emaill.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'sendEmail',
    component: EmaillComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
