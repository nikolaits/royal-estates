import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyEstatesPageRoutingModule } from './my-estates-routing.module';

import { MyEstatesPage } from './my-estates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyEstatesPageRoutingModule
  ],
  declarations: [MyEstatesPage]
})
export class MyEstatesPageModule {}
