import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstateHomePageRoutingModule } from './estate-home-routing.module';

import { EstateHomePage } from './estate-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstateHomePageRoutingModule
  ],
  declarations: [EstateHomePage]
})
export class EstateHomePageModule {}
