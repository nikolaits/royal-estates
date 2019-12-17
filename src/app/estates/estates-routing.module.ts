import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstatesPage } from './estates.page';

const routes: Routes = [
  {
    path: '',
    component: EstatesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstatesPageRoutingModule {}
