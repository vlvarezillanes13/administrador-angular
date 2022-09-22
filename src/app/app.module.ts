import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { PageModule } from './page/page.module';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PageModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
