import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { CartService } from '../../../../app/services/cart.service';

@Component({
    selector: 'app-cart-page',
    templateUrl: './cart-page.component.html',
    styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
    cartProducts: Product[] = [];

    constructor(private cartService: CartService) { }

    ngOnInit(): void {
        this.cartProducts = this.cartService.getItems();
    }

    pageTitle = [
        {
            bgImage: 'assets/img/page-title-bg.jpg',
            title: 'Cart'
        }
    ]

    removeFromCart(item: Product): void { this.cartService.deleteItem(item); }

    quantityChange(qty: number, item: Product): void { item.quantity = item.quantity + qty; this.cartService.addItems(item); }

    qtyMinus(item: Product): void { item.quantity = item.quantity - 1; this.cartService.addItems(item); }

    qtyPlus(item: Product): void { item.quantity = item.quantity + 1; this.cartService.addItems(item); }
}