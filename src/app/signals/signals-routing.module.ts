import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { PropertiesComponent } from './pages/properties-page/properties.component';
import { UserInfopageComponent } from './pages/user-info-page/user-info-page.component';

const routes: Routes = [
  {
    path: '',
    component: SignalsLayoutComponent,
    children: [
      { path: 'counter',    component: CounterPageComponent },
      { path: 'properties', component: PropertiesComponent },
      { path: 'user-info',  component: UserInfopageComponent },
      { path: '**',         redirectTo: 'counter' },
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class SignalsRoutingModule { }
