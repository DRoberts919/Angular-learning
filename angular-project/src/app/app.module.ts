import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArtistItemsComponent } from './artist-items/artist-items.component';

@NgModule({
	declarations: [ AppComponent, ArtistItemsComponent ],
	imports: [ BrowserModule, FormsModule, NgbModule, HttpClientModule ],
	providers: [],
	bootstrap: [ AppComponent ],
	
})
export class AppModule {}
