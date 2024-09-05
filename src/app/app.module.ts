import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AvatarModule, AvatarGroupModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
