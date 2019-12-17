import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimilarPageRoutingModule } from './similar-routing.module';

import { SimilarPage } from './similar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimilarPageRoutingModule
  ],
  declarations: [SimilarPage]
})
export class SimilarPageModule {}
