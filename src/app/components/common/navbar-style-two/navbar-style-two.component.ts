import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Category } from 'src/app/models/category';
import { Observable, Subject } from 'rxjs';

@Component({
    selector: 'app-navbar-style-two',
    templateUrl: './navbar-style-two.component.html',
    styleUrls: ['./navbar-style-two.component.scss']
})
export class NavbarStyleTwoComponent implements OnInit {
    categories: Category[] = [];

    constructor(private adminService: AdminService) { }

	private cartCount = new Subject<number>();
  
  	getCartCount(): Observable<number> {
	 console.log("getCartCount is invoked" );
   	 return this.cartCount.asObservable();
    }
    

    ngOnInit(): void {
        this.adminService.allCategories().subscribe(response => { this.categories = response; });
    }

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }
}