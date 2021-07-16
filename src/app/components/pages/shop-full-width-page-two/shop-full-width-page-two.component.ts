import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-shop-full-width-page-two',
    templateUrl: './shop-full-width-page-two.component.html',
    styleUrls: ['./shop-full-width-page-two.component.scss']
})
export class ShopFullWidthPageTwoComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        this.resetOption = [this.options[0]];
    }

    pageTitle = [
        {
            bgImage: 'assets/img/page-title-bg.jpg',
            title: 'Quality assured'
        }
    ]
    singleProductsItem = [
        {
            mainImg: 'assets/img/products/medical-urine-4.png',
            title: 'Urine collection for lab test',
            newPrice: '5.00',
            oldPrice: '',
            sale: '',
            outOfStock: '',
            detailsLink: 'Urine collection bottle'
        },
        {
            mainImg: 'assets/img/products/jar-cap-white-1.png',
            title: '20 Liter Jar bottle caps ',
            newPrice: '0.60',
            oldPrice: '',
            sale: 'Sale!',
            outOfStock: '',
            detailsLink: '20 Liter Jar bottle caps White'
        },
        {
            mainImg: 'assets/img/products/thread-cap-4.png',
            title: 'Thread caps for big and small size',
            newPrice: '2.00',
            oldPrice: '',
            sale: '',
            outOfStock: '',
            detailsLink: 'Thread caps for big and small size'
         }
         ,
        {
            mainImg: 'assets/img/products/jar-cap-purple.png',
            title: '20 Liter Jar bottle caps Purple',
            newPrice: '2.00',
            oldPrice: '',
            sale: '',
            outOfStock: '',
            detailsLink: '20 Liter Jar bottle caps Purple'
         },
        {
            mainImg: 'assets/img/products/jar-cap-blue-1.png',
            title: '20 Liter Jar bottle caps Blue',
            newPrice: '2.00',
            oldPrice: '',
            sale: '',
            outOfStock: '',
            detailsLink: '20 Liter Jar bottle caps Blue'
         },
        {
            mainImg: 'assets/img/products/jar-cap-light-green-1.png',
            title: '20 Liter Jar bottle caps Light Green',
            newPrice: '2.00',
            oldPrice: '',
            sale: '',
            outOfStock: '',
            detailsLink: '20 Liter Jar bottle caps Light Green'
         },
        {
            mainImg: 'assets/img/products/jar-cap-green-1.png',
            title: '20 Liter Jar bottle caps Green',
            newPrice: '2.00',
            oldPrice: '',
            sale: '',
            outOfStock: '',
            detailsLink: '20 Liter Jar bottle caps Green'
         },
        {
            mainImg: 'assets/img/products/1-liter-customised-bottle-cap-1.png',
            title: '1 Liter bottle caps ',
            newPrice: '2.00',
            oldPrice: '',
            sale: '',
            outOfStock: '',
            detailsLink: '1 Liter bottle caps '
         },
        {
            mainImg: 'assets/img/products/half-liter-customized-cap-1.png',
            title: '1/2 Liter bottle caps ',
            newPrice: '2.00',
            oldPrice: '',
            sale: '',
            outOfStock: '',
            detailsLink: '1/2 Liter bottle caps '
         }
    ]

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