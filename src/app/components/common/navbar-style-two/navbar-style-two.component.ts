import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Category } from 'src/app/models/category';

@Component({
    selector: 'app-navbar-style-two',
    templateUrl: './navbar-style-two.component.html',
    styleUrls: ['./navbar-style-two.component.scss']
})
export class NavbarStyleTwoComponent implements OnInit {
    categories: Category[] = [];

    constructor(private adminService: AdminService) { }

    ngOnInit(): void {
        this.adminService.allCategories().subscribe(response => { this.categories = response; });
    }

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }
}