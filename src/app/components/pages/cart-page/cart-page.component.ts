import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { CartService } from '../../../../app/services/cart.service';

@Component({
	selector: 'app-cart-page',
	templateUrl: './cart-page.component.html',
	styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
	value: number;
	cartProducts: Product[] = [];
	subTotal: number = 0;
	shipValue: number = 0;
	taxValue: number = 0;
	grandTotal: number = 0;

	constructor(private cartService: CartService) { }

	ngOnInit(): void {
		this.getCartProducts();
	}

	pageTitle = [
		{
			bgImage: 'assets/img/page-title-bg.jpg',
			title: 'Cart'
		}
	]

	getCartProducts(): void {
		this.cartProducts = this.cartService.getItems();
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

	removeFromCart(item: Product): void {
		this.cartService.removeItem(item);
		this.getCartProducts();
	}

	quantityChange(qty: string, item: Product): void {
		item.quantity = parseInt(qty);
		this.cartService.addItems(item);
		this.getCartProducts();
	}

	qtyMinus(item: Product): void {
		//item.quantity = item.quantity - 1;
		this.cartService.qtyMinus(item);
		this.getCartProducts();
	}

	qtyPlus(item: Product): void {
		item.quantity = item.quantity + 1;
		this.cartService.addItems(item);
		this.getCartProducts();
	}
}
