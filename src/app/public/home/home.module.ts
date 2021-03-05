import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';
import { EquipeComponent } from './equipe/equipe.component';
import { MatchComponent } from './match/match.component';
import { ContactComponent } from './contact/contact.component';
import { MenuHomeComponent } from './menu-home/menu-home.component';
import { BannerHomeComponent } from './banner-home/banner-home.component';


@NgModule({
  declarations: [HomeComponent, PresentationComponent, EquipeComponent, MatchComponent, ContactComponent, MenuHomeComponent, BannerHomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
