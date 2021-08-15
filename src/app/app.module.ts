import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { SelectDropDownModule } from 'ngx-select-dropdown';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GalleryPageComponent } from './components/pages/gallery-page/gallery-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { NavbarStyleOneComponent } from './components/common/navbar-style-one/navbar-style-one.component';
import { NavbarStyleTwoComponent } from './components/common/navbar-style-two/navbar-style-two.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { TestimonialsComponent } from './components/common/testimonials/testimonials.component';
import { HomeoneCategoriesComponent } from './components/pages/home-demo-one/homeone-categories/homeone-categories.component';
import { FacilityStyleOneComponent } from './components/common/facility-style-one/facility-style-one.component';
import { DealInThisWeekComponent } from './components/common/deal-in-this-week/deal-in-this-week.component';
import { FacilityStyleTwoComponent } from './components/common/facility-style-two/facility-style-two.component';
import { SubscribeComponent } from './components/common/subscribe/subscribe.component';
import { HometwoBannerComponent } from './components/pages/home-demo-two/hometwo-banner/hometwo-banner.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { OrderTrackingPageComponent } from './components/pages/order-tracking-page/order-tracking-page.component';
import { MyAccountPageComponent } from './components/pages/my-account-page/my-account-page.component';
import { CustomerServicePageComponent } from './components/pages/customer-service-page/customer-service-page.component';
import { UpcomingProductsComponent } from './components/common/upcoming-products/upcoming-products.component';
import { TrendingProductsComponent } from './components/common/trending-products/trending-products.component';
import { PopularProductsComponent } from './components/common/popular-products/popular-products.component';
import { NewProductsComponent } from './components/common/new-products/new-products.component';
import { DiscountComponent } from './components/common/discount/discount.component';
import { StickyProductPageComponent } from './components/pages/sticky-product-page/sticky-product-page.component';
import { SliderProductPageComponent } from './components/pages/slider-product-page/slider-product-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { WishlistPageComponent } from './components/pages/wishlist-page/wishlist-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { VideoComponent } from './components/common/video/video.component';
import { WhyChooseUsComponent } from './components/common/why-choose-us/why-choose-us.component';
import { RoomsPageComponent } from './components/pages/rooms-page/rooms-page.component';
import { ShopFullWidthPageTwoComponent } from './components/pages/shop-full-width-page-two/shop-full-width-page-two.component';
import { AuthGuard } from './services/auth.guard';
import { AuthenticationService } from './services/authentication.service';
import { AdminService } from './services/admin.service';
import { OnlineService } from './services/online.service';

const routes: Routes = [
	{ path: '', component: HomeDemoTwoComponent },
	{ path: 'about', component: AboutPageComponent },
	{ path: 'shop-full-width-2/:id', component: ShopFullWidthPageTwoComponent },
	{ path: 'sticky-product/:id', component: StickyProductPageComponent },
	{ path: 'slider-product/:id', component: SliderProductPageComponent },
	{ path: 'rooms', component: RoomsPageComponent },
	{ path: 'customer-service', component: CustomerServicePageComponent },
	{ path: 'profile-authentication', component: MyAccountPageComponent },
	{ path: 'order-tracking', component: OrderTrackingPageComponent, canActivate: [AuthGuard] },
	{ path: 'gallery', component: GalleryPageComponent },
	{ path: 'cart', component: CartPageComponent },
	{ path: 'checkout', component: CheckoutPageComponent, canActivate: [AuthGuard] },
	{ path: 'wishlist', component: WishlistPageComponent, canActivate: [AuthGuard] },
	{ path: 'faq', component: FaqPageComponent },
	{ path: 'coming-soon', component: ComingSoonPageComponent },
	{ path: 'contact', component: ContactPageComponent },
	{ path: '**', component: NotFoundPageComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		GalleryPageComponent,
		ContactPageComponent,
		HomeDemoTwoComponent,
		NavbarStyleOneComponent,
		NavbarStyleTwoComponent,
		PartnerComponent,
		TestimonialsComponent,
		HomeoneCategoriesComponent,
		FacilityStyleOneComponent,
		DealInThisWeekComponent,
		FacilityStyleTwoComponent,
		SubscribeComponent,
		HometwoBannerComponent,
		FooterComponent,
		NotFoundPageComponent,
		ComingSoonPageComponent,
		FaqPageComponent,
		OrderTrackingPageComponent,
		MyAccountPageComponent,
		CustomerServicePageComponent,
		UpcomingProductsComponent,
		TrendingProductsComponent,
		PopularProductsComponent,
		NewProductsComponent,
		DiscountComponent,
		StickyProductPageComponent,
		CartPageComponent,
		CheckoutPageComponent,
		WishlistPageComponent,
		AboutPageComponent,
		VideoComponent,
		WhyChooseUsComponent,
		ShopFullWidthPageTwoComponent,
		SliderProductPageComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
		BrowserAnimationsModule,
		CarouselModule,
		NgxScrollTopModule,
		HttpClientModule,
		ReactiveFormsModule,
		NgxPaginationModule,
		SelectDropDownModule
	],
	providers: [
		AuthGuard,
		AuthenticationService,
		AdminService,
		OnlineService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
