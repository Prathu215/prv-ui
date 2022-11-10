import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { BannerComponent } from './components/banner/banner.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from './services/app.interceptor';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { EventsComponent } from './components/events/events.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { YouTubePlayerModule } from "@angular/youtube-player";

// Import the library
import { CarouselModule } from 'ngx-owl-carousel-o';
// Needs to import the BrowserAnimationsModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VerticalSliderComponent } from './components/vertical-slider/vertical-slider.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { AdminCommentsComponent } from './components/admin-comments/admin-comments.component';
import { LoginComponent } from './components/login/login.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { AppConfigService } from './services/config.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    GalleryComponent,
    BannerComponent,
    BlogComponent,
    ContactComponent,
    BlogDetailsComponent,
    SpinnerComponent,
    EventsComponent,
    MoviesComponent,
    MovieDetailsComponent,
    VerticalSliderComponent,
    StarRatingComponent,
    AdminCommentsComponent,
    LoginComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    ContactDetailsComponent,
    TestimonialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    YouTubePlayerModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [
    AppConfigService,
    { provide: APP_INITIALIZER, useFactory: (config: AppConfigService) => () => config.load().toPromise(),
    deps: [AppConfigService], multi: true },
    {
    provide : HTTP_INTERCEPTORS,
    useClass : AppInterceptor,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
