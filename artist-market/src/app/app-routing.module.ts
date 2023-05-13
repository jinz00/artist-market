import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchArtistComponent } from './search-artist/search-artist.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'HomepageComponent',
  },
/*   {
    path: 'search',
    component: SearchArtistComponent,
  }, */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
