import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-hometwo-banner',
    templateUrl: './hometwo-banner.component.html',
    styleUrls: ['./hometwo-banner.component.scss']
})
export class HometwoBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    mainBannerItem = [
        {
            title: 'Medical Lab Components',
            paragraph: 'It has been made by A grade raw material. Also ensured quality tested and complete sterialized before delivery!',
            buttonIcon: 'bx bx-shopping-bag',
            buttonText: 'SHOP OUR PRODUCTS',
            buttonLink: 'shop-full-width-2',
            image: 'assets/img/tripolymer/medical-urin-bottles-1.png'
        },
        {
            title: '20 Liter Jar bottle caps',
            paragraph: 'We always ensure to use the A grade material and quality tested!.',
            buttonIcon: 'bx bx-shopping-bag',
            buttonText: 'SHOP OUR PRODUCTS',
            buttonLink: 'shop-full-width-2',
            image: 'assets/img/tripolymer/jar-bottles-cap-lot-2.png'
        },
        {
            title: 'Water Bottle Thread caps with any size',
            paragraph: 'We always ensure to use the A grade material and quality tested!.',
            buttonIcon: 'bx bx-shopping-bag',
            buttonText: 'SHOP OUR PRODUCTS',
            buttonLink: 'shop-full-width-2',
            image: 'assets/img/tripolymer/thread-cap-4.png'
        }
    ]

    homeSlidesOptions: OwlOptions = {
		loop: true,
		nav: true,
		margin: 5,
		dots: false,
		autoplay: true,
		autoHeight: true,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		autoplayHoverPause: true,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		],
		responsive: {
			0: {
                items: 1
			},
			576: {
                items: 1
			},
			768: {
                items: 1
			},
			992: {
                items: 1
			},
			1200: {
                items: 1
			}
		}
    }

}