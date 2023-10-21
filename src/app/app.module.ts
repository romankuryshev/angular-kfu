import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FakeBackendInterceptor, FakeBackendProvider } from '../shared/fake-backend';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SecondComponent } from './components/second/second.component';

import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { DemoMaterialModule } from './demo-material.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SecondComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule
  ],
  providers: [FakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
