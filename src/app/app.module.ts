import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AlbumModule } from './album/album.module';
import { UserModule } from './user/user.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthModule } from './auth/auth.module';
import { ProfileComponent } from './profile/profile.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './breeds/list/list.component';
import { BreedComponent } from './breeds/breed/breed.component';
// import { FilterPipe } from './album/filter.pipe';
import { LightboxModule } from 'ngx-lightbox';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { UserCatsComponent } from './user-cats/user-cats.component';
import { FavouriteCatsComponent } from './favourite-cats/favourite-cats.component';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { CatCreateEditModule } from './createEdit-cat/catCreateEdit.module';
import { CatProfileComponent } from './cat-profile/cat-profile.component';
import { CatNamesComponent } from './cat-names/cat-names.component';
import { FilterLetterPipe } from './cat-names/filterPipe/filter-letter.pipe';
import { ArticlesModule } from './cat-articles/articles.modules';
import { CarouselArticlesComponent } from './carousel-articles/carousel-articles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ProfileComponent,
    ListComponent,
    BreedComponent,
    UserCatsComponent,
    FavouriteCatsComponent,
    CatProfileComponent,
    CatNamesComponent,
    FilterLetterPipe,
    CarouselArticlesComponent,
    FooterComponent
    //FilterPipe,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule,
    AlbumModule,
    ArticlesModule,
    SidebarModule,
    HttpClientModule,
    AppRoutingModule,
    CatCreateEditModule,
    AuthModule,
    CarouselModule,
    BrowserAnimationsModule,
    LightboxModule,
    AngularFireModule.initializeApp(environment.firebase, 'cats'),
    AngularFireDatabaseModule,
    IconSpriteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
