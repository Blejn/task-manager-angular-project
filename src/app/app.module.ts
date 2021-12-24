import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl'
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



registerLocaleData(localePl);

@NgModule({
  declarations: [ AppComponent],
  imports: [ BrowserModule, FormsModule,FontAwesomeModule ],
  providers: [ {provide: LOCALE_ID, useValue:'pl-PL'}], //information about service
  bootstrap: [AppComponent]  //start component
})
export class AppModule { }
