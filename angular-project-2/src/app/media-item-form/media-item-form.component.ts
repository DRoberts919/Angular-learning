import { Component, Inject, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { MediaItemService } from '../media-item.service';
import { lookupListToken } from '../providers';


@Component({
	selector: 'app-media-item-form',
	templateUrl: './media-item-form.component.html',
	styleUrls: [ './media-item-form.component.css' ]
})
export class MediaItemFormComponent implements OnInit {
	form: any;

	constructor(
		private formBuilder: FormBuilder,
		private mediaItemService: MediaItemService,

		@Inject(lookupListToken) public lookupList:any,
		private router: Router
	) {}

	ngOnInit() {
		this.form = this.formBuilder.group({
			medium: this.formBuilder.control('Movies'),
			name: this.formBuilder.control(
				'',
				Validators.compose([ Validators.required, Validators.pattern('[\\w\\-\\s\\/]+') ])
			),
			category: this.formBuilder.control(''),
			year: this.formBuilder.control('', this.yearValidator)
		});
	}

	yearValidator(control: any) {
		if (control.value.trim().length === 0) {
			return null;
		}
		let year = parseInt(control.value);
		let minYear = 1800;
		let maxYear = 2500;
		if (year >= minYear && year <= maxYear) {
			return null;
		} else {
			return {
				year: {
					min: minYear,
					max: maxYear
				}
			};
		}
	}

	onSubmit(mediaItem:any) {
    // this.mediaItemService.add(mediaItem)
    //   .subscribe(() => {
    //     this.router.navigate(['/', mediaItem.medium]);
    //   });
  }
}
