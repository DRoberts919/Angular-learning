import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArtistItemsComponent } from './artist-items/artist-items.component';
import { SearchArtistsPipe } from './search-artists.pipe';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';

@NgModule({
	declarations: [ AppComponent, ArtistItemsComponent, SearchArtistsPipe, ArtistDetailsComponent ],
	imports: [ BrowserModule, FormsModule, NgbModule, HttpClientModule ],
	providers: [],
	bootstrap: [ AppComponent ],
	
})
export class AppModule {}
