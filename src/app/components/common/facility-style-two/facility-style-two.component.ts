import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-facility-style-two',
    templateUrl: './facility-style-two.component.html',
    styleUrls: ['./facility-style-two.component.scss']
})
export class FacilityStyleTwoComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    // tslint:disable-next-line: member-ordering
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
}
