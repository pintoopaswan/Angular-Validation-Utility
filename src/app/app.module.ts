import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { AddZerosDirective } from './directives/add-zeros.directive';
import { FormatAmountDirective } from './directives/format-amount.directive';
import { FormatPhoneNumberDirective } from './directives/format-phone-number.directive'
import {NgxMaskModule} from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    AddZerosDirective,
    FormatAmountDirective,
    FormatPhoneNumberDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
