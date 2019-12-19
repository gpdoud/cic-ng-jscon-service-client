import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationComponents } from './app-routing.module';
import { MenuComponent } from './misc/menu/menu.component';
import { MenuitemComponent } from './misc/menu/menuitem.component';
import { SortPipe } from './misc/sort.pipe';
import { SearchPipe } from './misc/search.pipe';

import { AppInitService } from './app-init.service';
export function startupServiceFactory(
  appinit: AppInitService
): function {
  return () => appinit.getSettings();
}


@NgModule({
  declarations: [
    AppComponent, ApplicationComponents, MenuComponent, MenuitemComponent, SortPipe, SearchPipe
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AppInitService, { 
      provide: APP_INITIALIZER, 
      useFactory: startupServiceFactory, 
        deps: [AppInitService], 
        multi: true 
    }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }