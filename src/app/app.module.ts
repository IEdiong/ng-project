import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HektoBannerComponent } from './shared/hekto-banner/hekto-banner.component';
import { HektoNavigationComponent } from './shared/hekto-navigation/hekto-navigation.component';
import { HektoFooterComponent } from './shared/hekto-footer/hekto-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HektoBannerComponent,
    HektoNavigationComponent,
    HektoFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
