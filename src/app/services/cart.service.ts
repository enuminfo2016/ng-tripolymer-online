import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  addItems(item: Product): void {
    let itemsInCart = [];
    if (localStorage.getItem('cartProducts') == null) {
      itemsInCart.push(item);
    } else {
      itemsInCart = JSON.parse(localStorage.getItem('cartProducts'));
      for (var i in itemsInCart) {
        if (item.id == itemsInCart[i].id) {
          itemsInCart[i].quantity = itemsInCart[i].quantity + item.quantity;
        }
        itemsInCart.push(item);
      }
    }
    console.log("addItems => " + JSON.stringify(itemsInCart));
    localStorage.setItem('cartProducts', JSON.stringify(itemsInCart));
  }

  getItems(): Product[] {
    let itemsInCart = JSON.parse(localStorage.getItem('cartProducts'));
    console.log("getItems => " + itemsInCart);
    return itemsInCart;
  }

  deleteItem(item): void {
    let itemsInCart = [];
    let index;
    itemsInCart = JSON.parse(localStorage.getItem('cartProducts'));
    for (let i in itemsInCart) {
      if (item.id == itemsInCart[i].id) {
        index = i;
      }
    }
    itemsInCart.splice(index, 1);
    console.log("deleteItem => " + itemsInCart);
    localStorage.setItem('cartProducts', JSON.stringify(itemsInCart));
  }
}
