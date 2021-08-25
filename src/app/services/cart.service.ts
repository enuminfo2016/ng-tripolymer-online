import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
	providedIn: 'root'
})
export class CartService {

  constructor() { }
 
	addItems(item: Product): void {
		//this.removeItem(item);
		let canItemAdd = true;
		const products: Product[] = JSON.parse(localStorage.getItem("cart_item")) || [];
		for (let i = 0; i < products.length; i++) {
			if (products[i].id === item.id) {
				//products[i].newPrice = products[i].newPrice + item.newPrice;
				//products[i].oldPrice = products[i].oldPrice + item.oldPrice;
				products[i].quantity = products[i].quantity + 1;
				canItemAdd = false;
				break;
			}
		}
		if(canItemAdd){
		 products.push(item);
		}
		setTimeout(() => {
			localStorage.setItem("cart_item", JSON.stringify(products));
			localStorage.setItem("cart_count", JSON.stringify(products.length));
		}, 500);
	}

	getItems(): Product[] {
		const products: Product[] =
			JSON.parse(localStorage.getItem("cart_item")) || [];
		return products;
	}
	
	qtyMinus(item: Product): void {
		const products: Product[] = JSON.parse(localStorage.getItem("cart_item")) || [];
		for (let i = 0; i < products.length; i++) {
			if (products[i].id === item.id) {
				//products[i].newPrice = products[i].newPrice + item.newPrice;
				//products[i].oldPrice = products[i].oldPrice + item.oldPrice;
				products[i].quantity = products[i].quantity - 1;
				break;
			}
		}
		setTimeout(() => {
			localStorage.setItem("cart_item", JSON.stringify(products));
			localStorage.setItem("cart_count", JSON.stringify(products.length));
		}, 500);
		
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
