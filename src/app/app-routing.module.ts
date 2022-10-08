import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCommentsComponent } from './components/admin-comments/admin-comments.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContentComponent } from './components/content/content.component';
import { EventsComponent } from './components/events/events.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LoginComponent } from './components/login/login.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesComponent } from './components/movies/movies.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { AuthGuardService} from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ContentComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'blogs', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blogs/:slug', component: BlogDetailsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movie/:slug', component: MovieDetailsComponent },
  { path: 'comments', component: AdminCommentsComponent, canActivate:[AuthGuardService]},
  { path: 'login', component: LoginComponent},
  { path: 'foods', component: RestaurantComponent},
  { path: 'foods/:slug', component: RestaurantDetailComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
