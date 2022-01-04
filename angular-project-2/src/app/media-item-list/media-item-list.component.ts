import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-media-item-list',
	templateUrl: './media-item-list.component.html',
	styleUrls: [ './media-item-list.component.css' ]
})
export class MediaItemListComponent implements OnInit {
	mediaItems = [
		{
			id: 1,
			name: 'Firebug',
			medium: 'Series',
			category: 'Science Fiction',
			year: 2010,
			watchedOn: 1294166565384,
			isFavorite: false
		},
		{
			id: 2,
			name: 'The Small Tall',
			medium: 'Movies',
			category: 'Comdey',
			year: 2015,
			watchedOn: null,
			isFavorite: true
		},
    {
			id: 3,
			name: 'The Redemption',
			medium: 'Movies',
			category: 'Action',
			year: 2016,
			watchedOn: null,
			isFavorite: false
		},
    {
			id: 4,
			name: 'Hoopers',
			medium: 'Series',
			category: 'Drama',
			year: null,
			watchedOn: null,
			isFavorite: true
		}
	];
  medium ='';
  

	constructor() {}

	ngOnInit(): void {}

  onMediaItemDelete(mediaItem: any){
    return null;
    
  }
}
