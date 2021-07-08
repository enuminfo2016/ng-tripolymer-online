import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { BlogGridComponent } from './components/pages/blog-grid/blog-grid.component';
import { BlogRightSidebarComponent } from './components/pages/blog-right-sidebar/blog-right-sidebar.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { CustomerServicePageComponent } from './components/pages/customer-service-page/customer-service-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { GalleryPageComponent } from './components/pages/gallery-page/gallery-page.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoThreeComponent } from './components/pages/home-demo-three/home-demo-three.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { MyAccountPageComponent } from './components/pages/my-account-page/my-account-page.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { OrderTrackingPageComponent } from './components/pages/order-tracking-page/order-tracking-page.component';
import { RoomsPageComponent } from './components/pages/rooms-page/rooms-page.component';
import { ShopFullWidthPageOneComponent } from './components/pages/shop-full-width-page-one/shop-full-width-page-one.component';
import { ShopFullWidthPageTwoComponent } from './components/pages/shop-full-width-page-two/shop-full-width-page-two.component';
import { ShopLeftSidebarPageOneComponent } from './components/pages/shop-left-sidebar-page-one/shop-left-sidebar-page-one.component';
import { ShopLeftSidebarPageTwoComponent } from './components/pages/shop-left-sidebar-page-two/shop-left-sidebar-page-two.component';
import { ShopRightSidebarPageOneComponent } from './components/pages/shop-right-sidebar-page-one/shop-right-sidebar-page-one.component';
import { ShopRightSidebarPageTwoComponent } from './components/pages/shop-right-sidebar-page-two/shop-right-sidebar-page-two.component';
import { SimpleProductPageComponent } from './components/pages/simple-product-page/simple-product-page.component';
import { SliderProductPageComponent } from './components/pages/slider-product-page/slider-product-page.component';
import { StickyProductPageComponent } from './components/pages/sticky-product-page/sticky-product-page.component';
import { WishlistPageComponent } from './components/pages/wishlist-page/wishlist-page.component';

const routes: Routes = [
    {//path: '', component: HomeDemoOneComponent},
        path: '', component: HomeDemoTwoComponent},
    {path: 'index-2', component: HomeDemoTwoComponent},
    {path: 'index-3', component: HomeDemoThreeComponent},
    {path: 'about', component: AboutPageComponent},
    {path: 'shop-full-width-1', component: ShopFullWidthPageOneComponent},
    {path: 'shop-full-width-2', component: ShopFullWidthPageTwoComponent},
    {path: 'shop-left-sidebar-1', component: ShopLeftSidebarPageOneComponent},
    {path: 'shop-left-sidebar-2', component: ShopLeftSidebarPageTwoComponent},
    {path: 'shop-right-sidebar-1', component: ShopRightSidebarPageOneComponent},
    {path: 'shop-right-sidebar-2', component: ShopRightSidebarPageTwoComponent},
    {path: 'simple-product', component: SimpleProductPageComponent},
    {path: 'slider-product', component: SliderProductPageComponent},
    {path: 'sticky-product', component: StickyProductPageComponent},
    {path: 'rooms', component: RoomsPageComponent},
    {path: 'customer-service', component: CustomerServicePageComponent},
    {path: 'profile-authentication', component: MyAccountPageComponent},
    {path: 'order-tracking', component: OrderTrackingPageComponent},
    {path: 'gallery', component: GalleryPageComponent},
    {path: 'cart', component: CartPageComponent},
    {path: 'checkout', component: CheckoutPageComponent},
    {path: 'wishlist', component: WishlistPageComponent},
    {path: 'blog-grid', component: BlogGridComponent},
    {path: 'blog-right-sidebar', component: BlogRightSidebarComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
    {path: 'faq', component: FaqPageComponent},
    {path: 'coming-soon', component: ComingSoonPageComponent},
    {path: 'contact', component: ContactPageComponent},
    // Here add new pages component

    {path: '**', component: NotFoundPageComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }