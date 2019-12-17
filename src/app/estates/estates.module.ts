import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstatesPageRoutingModule } from './estates-routing.module';

import { EstatesPage } from './estates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstatesPageRoutingModule
  ],
  declarations: [EstatesPage]
})
export class EstatesPageModule {}
