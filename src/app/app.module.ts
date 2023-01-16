import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { CardsComponent } from './cards/cards.component';
import { PhotosSectionComponent } from './photos-section/photos-section.component';
import { BuildingLegacySectionComponent } from './building-legacy-section/building-legacy-section.component';
import { TeamPeopleSectionComponent } from './team-people-section/team-people-section.component';
import { BusinessDirectorySectionComponent } from './business-directory-section/business-directory-section.component';
import { BannerComponent } from './banner/banner.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ClientsComponent } from './clients/clients.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainSectionComponent,
    CardsComponent,
    PhotosSectionComponent,
    BuildingLegacySectionComponent,
    TeamPeopleSectionComponent,
    BusinessDirectorySectionComponent,
    BannerComponent,
    TestimonialsComponent,
    ClientsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
