import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimilarPage } from './similar.page';

const routes: Routes = [
  {
    path: '',
    component: SimilarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimilarPageRoutingModule {}
