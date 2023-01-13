import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NavComponent } from './nav/nav.component';
import { NavLinkComponent } from './nav/nav-link.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, NavComponent, NavLinkComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
