import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ComicListComponent } from './comic-list/comic-list.component';
import { ComicComponent } from './comic/comic.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicListComponent,
    ComicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
