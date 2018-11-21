import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DisplayingDataComponent} from './component_/displaying-data/displaying-data.component';
import {CustomCompListComponent} from './component_/custom-comp-list/custom-comp-list.component';
import {AsyncNowTimeComponent} from './component_/async-now-time/async-now-time.component';
import {CustomCompListService} from './service_/custom-comp-list.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppService} from './app.service';

@NgModule({
  declarations: [
    AppComponent,

    CustomCompListComponent,
    DisplayingDataComponent,
    AsyncNowTimeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [
    CustomCompListService,
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
