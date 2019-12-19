import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'my-estates',
    pathMatch: 'full'
  },
  {
    path: 'my-estates',
    loadChildren: () => import('./my-estates/my-estates.module').then( m => m.MyEstatesPageModule)
  },
  {
    path: 'locations',
    loadChildren: () => import('./locations/locations.module').then( m => m.LocationsPageModule)
  },
  {
    path: 'estates/:locid/:name',
    loadChildren: () => import('./estates/estates.module').then( m => m.EstatesPageModule)
  },
  {
    path: 'estate-home',
    loadChildren: () => import('./estate-home/estate-home.module').then( m => m.EstateHomePageModule)
  },
  // {
  //   path: 'overview',
  //   loadChildren: () => import('./overview/overview.module').then( m => m.OverviewPageModule)
  // },
  // {
  //   path: 'map',
  //   loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  // },
  // {
  //   path: 'similar',
  //   loadChildren: () => import('./similar/similar.module').then( m => m.SimilarPageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
