import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FirstComponentComponent } from '../first-component/first-component.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, FirstComponentComponent, WelcomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
