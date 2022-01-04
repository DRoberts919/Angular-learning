import { Component, Directive, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styles: [
		`
      .list-group:first-child{
        border-top-left-radius:0;
        bordertop-right-radius:0;
        boprder-top:0;
      }
    
    `
	]
})
export // dont put a (;) after that last paren to
class AppComponent implements OnInit {
	query: string;
	artists: any;
	currentArtist: any;
	

	showArtist(item: any) {
		this.query = item.name;
		item.highlight = !item.highlight;
		this.currentArtist = item;
	}

	constructor(private http: HttpClient) {
		this.query = '';
	}

	ngOnInit(): void {
		this.http.get<any[]>('../assets/data.json').subscribe((data) => {
			this.artists = data;
		});
	}
}
