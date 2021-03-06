import { Component, OnInit } from '@angular/core';
import { MediaItemService } from '../media-item.service';

@Component({
	selector: 'app-media-item-list',
	templateUrl: './media-item-list.component.html',
	styleUrls: [ './media-item-list.component.css' ]
})
export class MediaItemListComponent implements OnInit {
	mediaItems:any;
  
  

	constructor(private mediaItemService: MediaItemService) {
		
	}

	ngOnInit(){
		this.mediaItems = this.mediaItemService.get();
	}

  onMediaItemDelete(mediaItem: any){
    
    return mediaItem;
  }
}
