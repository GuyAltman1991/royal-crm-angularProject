import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './layout/app.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';

@NgModule({
  declarations: [AppComponent, ContactsPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
