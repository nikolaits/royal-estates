import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstateHomePage } from './estate-home.page';

const routes: Routes = [
  {
    path: 'estate-home',
    component: EstateHomePage,
    children: [
      {
        path: 'overview',
        children: [
          {
            path: '',
            loadChildren: '../overview/overview.module#OverviewModule'
          },
        ]
      },
      // {
      //   path: 'overview',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () => import('../overview/overview.module').then( m => m.OverviewPageModule)
      //     },
      //   ]
      // },
      // {
      //   path: 'overview',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () => import('../overview/overview.module').then( m => m.OverviewPageModule)
      //     },
      //   ]
      // },
      {
        path: '',
        redirectTo: '/app/tabs/overview',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstateHomePageRoutingModule {}
