import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './root/app.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { SideNavComponent } from './layout/main/side-nav/side-nav.component';
import { LogoComponent } from './layout/header/logo/logo.component';
import { HamburgerComponent } from './layout/header/hamburger/hamburger.component';
import { LeftNavBarLinksComponent } from './layout/header/left-nav-bar-links/left-nav-bar-links.component';
import { RightNavBarLinksComponent } from './layout/header/right-nav-bar-links/right-nav-bar-links.component';
import { DisplayUserConectedComponent } from './layout/header/right-nav-bar-links/display-user-conected/display-user-conected.component';
import { DisplayUserDisconectedComponent } from './layout/header/right-nav-bar-links/display-user-disconected/display-user-disconected.component';

@NgModule({
  declarations: [AppComponent, ContactsPageComponent, FooterComponent, HeaderComponent, MainComponent, SideNavComponent, LogoComponent, HamburgerComponent, LeftNavBarLinksComponent, RightNavBarLinksComponent, DisplayUserConectedComponent, DisplayUserDisconectedComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
