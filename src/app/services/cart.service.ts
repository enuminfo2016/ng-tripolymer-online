import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
	providedIn: 'root'
})
export class CartService {

	constructor() { }

	addItems(item: Product): void {
		this.removeItem(item);
		const products: Product[] = JSON.parse(localStorage.getItem("cart_item")) || [];
		for (let i = 0; i < products.length; i++) {
			if (products[i].id === item.id) {
				products[i].newPrice = products[i].newPrice + item.newPrice;
				products[i].oldPrice = products[i].oldPrice + item.oldPrice;
				break;
			}
		}
		products.push(item);
		setTimeout(() => {
			localStorage.setItem("cart_item", JSON.stringify(products));
		}, 500);
	}

	getItems(): Product[] {
		const products: Product[] =
			JSON.parse(localStorage.getItem("cart_item")) || [];
		return products;
	}

	removeItem(item: Product): void {
		const products: Product[] = JSON.parse(localStorage.getItem("cart_item"));
		for (let i = 0; i < products.length; i++) {
			if (products[i].id === item.id) {
				products.splice(i, 1);
				break;
			}
		}
		setTimeout(() => {
			localStorage.setItem("cart_item", JSON.stringify(products));
		}, 500);
	}
}
