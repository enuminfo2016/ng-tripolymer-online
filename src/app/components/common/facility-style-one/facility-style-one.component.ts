import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-facility-style-one',
    templateUrl: './facility-style-one.component.html',
    styleUrls: ['./facility-style-one.component.scss']
})
export class FacilityStyleOneComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    facilityContent = [
        {
            icon: 'bx bx-shopping-bag',
            title: 'Shop Online',
            paragraph: ''
        },
        {
            icon: 'bx bxs-plane-take-off',
            title: 'Free Shipping',
            paragraph: ''
        },
        {
            icon: 'bx bx-info-square',
            title: 'Return Policy',
            paragraph: ''
        },
        {
            icon: 'bx bx-check-shield',
            title: 'Secured Payments',
            paragraph: ''
        }
    ]
    facilityImage = [
        {
            img: 'assets/img/facility-img.png'
        }
    ]

}