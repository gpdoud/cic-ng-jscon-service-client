import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationComponents } from './app-routing.module';
import { MenuComponent } from './misc/menu/menu.component';
import { MenuitemComponent } from './misc/menu/menuitem.component';
import { SortPipe } from './misc/sort.pipe';
import { SearchPipe } from './misc/search.pipe';

@NgModule({
  declarations: [
    AppComponent, ApplicationComponents, MenuComponent, MenuitemComponent, SortPipe, SearchPipe
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }