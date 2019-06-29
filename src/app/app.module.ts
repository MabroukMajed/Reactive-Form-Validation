import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormService } from './service/form.service';

@NgModule({
  declarations: [AppComponent, FormComponent],
  imports: [
    BrowserModule,
    // 1 - For Reactive Form Validation
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // 2 - For Reactive Form Validation
    FormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
