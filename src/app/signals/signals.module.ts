import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalsRoutingModule } from "./signals-routing.module";
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { UserInfopageComponent } from './pages/user-info-page/user-info-page.component';
import { PropertiesComponent } from './pages/properties-page/properties.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

@NgModule({
  declarations: [
    SignalsLayoutComponent,
    CounterPageComponent,
    UserInfopageComponent,
    PropertiesComponent,
    SideMenuComponent,
  ],
  imports: [
    CommonModule,
    SignalsRoutingModule,
  ]
})
export class SignalsModule { }
