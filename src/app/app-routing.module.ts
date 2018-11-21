import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DisplayingDataComponent} from './component_/displaying-data/displaying-data.component';
import {CustomCompListComponent} from './component_/custom-comp-list/custom-comp-list.component';
import {AsyncNowTimeComponent} from './component_/async-now-time/async-now-time.component';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {
    path: 'CustomCompList', component: CustomCompListComponent, children: [
      {path: 'DisplayingData', component: DisplayingDataComponent},
      {path: 'AsyncNowTime', component: AsyncNowTimeComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
