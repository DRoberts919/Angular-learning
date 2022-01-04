import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MediaItemComponentComponent } from './media-item-component/media-item-component.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import { lookupListToken,lookupList } from './providers';


@NgModule({
	imports: [ BrowserModule, ReactiveFormsModule ],
	declarations: [
		AppComponent,
		MediaItemComponentComponent,
		MediaItemListComponent,
		FavoriteDirective,
		CategoryListPipe,
		MediaItemFormComponent
	],
	bootstrap: [ AppComponent ],
	providers: [ { provide: lookupListToken, useValue: lookupList } ]
})
export class AppModule {}
