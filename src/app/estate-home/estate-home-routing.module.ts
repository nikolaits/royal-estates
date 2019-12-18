import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstateHomePage } from './estate-home.page';

const routes: Routes = [ 
  {
    path: '', 
    component: EstateHomePage,
    children: [
      {
        path: 'overview',
        children: [
          {
            path: '',
            loadChildren: () => import('../overview/overview.module').then( m => m.OverviewPageModule)

          }
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: () => import('../map/map.module').then( m => m.MapPageModule)
          }
        ]
      },
      {
        path: 'similar',
        children: [
          {
            path: '',
            loadChildren: () => import('../similar/similar.module').then( m => m.SimilarPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/estate-home/overview',
        pathMatch: 'full'
      }
    ]
  },
  // {
  //   path: '',
  //   redirectTo: '/estate-home',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstateHomePageRoutingModule {}
