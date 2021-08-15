import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Product } from '../../../models/product';
import { OnlineService } from '../../../services/online.service';

@Component({
	selector: 'app-shop-full-width-page-two',
	templateUrl: './shop-full-width-page-two.component.html',
	styleUrls: ['./shop-full-width-page-two.component.scss']
})
export class ShopFullWidthPageTwoComponent implements OnInit {
	singleProductsItem: Product[] = [];

	constructor(private route: ActivatedRoute,
		private onlineService: OnlineService) { }

	ngOnInit(): void {
		this.resetOption = [this.options[0]];
		this.onlineService.allProductsByCategory(this.route.snapshot.paramMap.get('id')).subscribe(response => {
			this.singleProductsItem = response;
		});
	}

	pageTitle = [
		{
			bgImage: 'assets/img/page-title-bg.jpg',
			title: 'Quality assured'
		}
	]

	/*singleProductsItem = [
		{
			mainImg: 'assets/img/products/medical-urine-bottlle-2.png',
			title: 'Urine collection for lab test',
			newPrice: '5.00',
			oldPrice: '',
			sale: '',
			outOfStock: '',
			detailsLink: 'Urine collection bottle'
		},
		{
			mainImg: 'assets/img/products/medical-tubes-1.png',
			title: 'Blood collection for lab test',
			newPrice: '5.00',
			oldPrice: '',
			sale: '',
			outOfStock: '',
			detailsLink: 'Blood collection bottle'
		}
	]*/

	// For Pagination
	shopFullWidth: number = 1;

	// Category Select
	singleSelect: any = [];
	multiSelect: any = [];
	stringArray: any = [];
	objectsArray: any = [];
	resetOption: any;
	config = {
		displayKey: "name",
		search: true
	};
	options = [
		{
			name: "Default",
		},
		{
			name: "Popularity",
		},
		{
			name: "Latest",
		},
		{
			name: "Price: low to high",
		},
		{
			name: "Price: high to low",
		}
	];
	searchChange($event) {
		console.log($event);
	}
	reset() {
		this.resetOption = [];
	}

}