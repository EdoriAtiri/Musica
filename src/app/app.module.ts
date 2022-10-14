import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './partials/header/header.component';

import { TopCardComponent } from './components/top-card/top-card.component';
import { ChartsComponent } from './components/charts/charts.component';
import { AlbumCardComponent } from './components/album-card/album-card.component';
import { PlayerComponent } from './components/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TopCardComponent,
    ChartsComponent,
    AlbumCardComponent,
    PlayerComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
