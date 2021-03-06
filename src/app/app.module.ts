import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule} from '@angular/http';






import { AppComponent }  from './app.component';
import {NavbarComponent}  from './components/navbar/navbar.component';
import {AboutComponent}  from './components/about/about.component';
import {SearchComponent}  from './components/search/search.component';
import {ArtistComponent}  from './components/artist/artist.component';
import{AlbumComponent}   from './components/album/album.component';


import{AppRouter}  from './app.routes';




@NgModule({
  imports:      [ BrowserModule, AppRouter,FormsModule,HttpModule],
  declarations: [ AppComponent,NavbarComponent,AboutComponent,SearchComponent,ArtistComponent,AlbumComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
