import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { CartService } from '../../../../app/services/cart.service';

@Component({
	selector: 'app-checkout-page',
	templateUrl: './checkout-page.component.html',
	styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
	cartProducts: Product[] = [];
	subTotal: number = 0;
	shipValue: number = 0;
	taxValue: number = 0;
	grandTotal: number = 0;

	constructor(private cartService: CartService) { }

	ngOnInit(): void {
		this.resetOption = [this.options[0]];
		this.cartProducts = this.cartService.getAllItems();
		this.subTotal = 0;
		this.shipValue = 0;
		this.taxValue = 0;
		this.grandTotal = 0;
		for (let i = 0; i < this.cartProducts.length; i++) {
			this.subTotal = this.subTotal + this.cartProducts[i].newPrice * this.cartProducts[i].quantity;
		}
		this.shipValue = this.grandTotal * 2 / 100;
		this.taxValue = this.grandTotal * 18 / 100;
		this.grandTotal = this.subTotal + this.shipValue + this.taxValue;
	}

	pageTitle = [
		{
			bgImage: 'assets/img/page-title-bg.jpg',
			title: 'Checkout'
		}
	]

	// Country Select
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
			name: "India",
		}
	];
	searchChange($event) {
		console.log($event);
	}
	reset() {
		this.resetOption = [];
	}

}