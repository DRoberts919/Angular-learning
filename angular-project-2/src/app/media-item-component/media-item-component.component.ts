import { Component, OnInit, Input , Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'mw-media-item-component',
  templateUrl: './media-item-component.component.html',
  styleUrls: ['./media-item-component.component.css']
})
export class MediaItemComponentComponent implements OnInit {
  @Input() mediaItem: any;
  @Output() delete = new EventEmitter();

  onDelete(){
    console.log("deleted")
    this.delete.emit(this.mediaItem);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
