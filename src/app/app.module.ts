import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { NavbarComponent } from './navbar.component';
import { ImageListComponent } from './sample/image-list/image-list.component';
import { ImageComponent } from './sample/image-list/image.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    NavbarComponent,
    ImageListComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
