import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MediaItemComponentComponent } from './media-item-component/media-item-component.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
@NgModule({
	imports: [ BrowserModule ],
	declarations: [ AppComponent, MediaItemComponentComponent, MediaItemListComponent,FavoriteDirective,CategoryListPipe ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
