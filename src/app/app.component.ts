import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { QualificationsComponent } from './components/qualifications/qualifications.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollupComponent } from './components/scrollup/scrollup.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './components/about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    HttpClientModule,
    RouterOutlet,
    HeaderComponent,
    HomeComponent,
    SkillsComponent,
    QualificationsComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    ScrollupComponent,
    AboutComponent,
  ],
})
export class AppComponent {
  title = 'Portfolio';
}
