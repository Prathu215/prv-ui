import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContentComponent } from './components/content/content.component';
import { GalleryComponent } from './components/gallery/gallery.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ContentComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'blogs', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
