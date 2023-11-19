import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { ScrollupComponent } from './Components/scrollup/scrollup.component';
import { AboutComponent } from './Components/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { SkillsComponent } from './Components/skills/skills.component';
import { QualificationsComponent } from './Components/qualifications/qualifications.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { ContactComponent } from './Components/contact/contact.component';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    HeaderComponent,
    FontAwesomeModule,
    HomeComponent,
    ScrollupComponent,
    AboutComponent,
    SkillsComponent,
    QualificationsComponent,
    HttpClientModule,
    PortfolioComponent,
    ContactComponent
  ],
})
export class AppModule {}
