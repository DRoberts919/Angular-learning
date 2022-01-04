import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MediaItemComponentComponent } from './media-item-component/media-item-component.component';

@NgModule({
	imports: [ BrowserModule ],
	declarations: [ AppComponent, MediaItemComponentComponent ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
