import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { CartService } from '../../../../app/services/cart.service';
import { OnlineService } from '../../../../app/services/online.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
	checkoutForm: FormGroup;
	submitted = false;

	constructor(private onlineService: OnlineService,
		private cartService: CartService,
		private formBuilder: FormBuilder) { }

	ngOnInit(): void {
		this.onlineService.allLocations('Bangalore').subscribe(response => { this.options = response; });
		this.resetOption = [this.options[0]];
		this.cartProducts = this.cartService.getAllItems();
		this.subTotal = 0;
		this.shipValue = 0;
		this.taxValue = 0;
		this.grandTotal = 0;
		for (let i = 0; i < this.cartProducts.length; i++) {
			this.subTotal = this.subTotal + this.cartProducts[i].newPrice * this.cartProducts[i].quantity;
		}
		this.shipValue = this.subTotal * 0.02;
		this.taxValue = this.subTotal * 0.18;
		this.grandTotal = this.subTotal + (this.shipValue + this.taxValue);
		this.checkoutForm = this.formBuilder.group({
			countryName: ['India'],
			firstName: ['', Validators.required ],
			middleName: [''],
			lastName: ['', Validators.required ],
			companyName: ['', Validators.required ],
			addrValue1: ['', Validators.required ],
			addrValue2: ['', Validators.required ],
			addrValue3: [''],
			stateName: ['Karnataka'],
			cityName: ['Bangalore'],
			locationName: ['', Validators.required ],
			pinCode: ['', Validators.required ],
			email: ['', Validators.required ],
			phone: ['', Validators.required ],
			createAnAccount: [true],
			shipToDifferent: [true],
			cartTotal: [this.subTotal],
			shipValue: [this.shipValue],
			taxValue: [this.taxValue],
			payment: ['directBankTransfer', Validators.required]
		});
	}

	pageTitle = [
		{
			bgImage: 'assets/img/page-title-bg.jpg',
			title: 'Checkout'
		}
	]

	// Location Select
	singleSelect: any = [];
	multiSelect: any = [];
	stringArray: any = [];
	objectsArray: any = [];
	resetOption: any;
	config = {
		displayKey: "name",
		search: true
	};
	options = [];
	searchChange($event) {
		console.log($event);
	}
	reset() {
		this.resetOption = [];
	}

}