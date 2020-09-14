import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent as AlbumListComponent } from '../album/list/list.component';
import { ListComponent as UserListComponent } from '../user/list/list.component';
import { UserComponent } from '../user/user/user.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { LoginComponent } from '../auth/login/login.component';
import { AuthGuard } from '../auth/auth.guard';
import { RegisterComponent } from '../auth/register/register.component';
import { ProfileComponent } from '../profile/profile.component';
import { UserCatsComponent } from '../user-cats/user-cats.component';
import { FavouriteCatsComponent } from '../favourite-cats/favourite-cats.component';
import { CreateCatComponent } from '../createEdit-cat/create/create-cat.component';
import { EditCatComponent } from '../createEdit-cat/edit/edit-cat.component';
import { CatProfileComponent } from '../cat-profile/cat-profile.component';
import { CatArticlesComponent } from '../cat-articles/articles/cat-articles.component';
import { ListComponent as CatArticlesListComponent } from '../cat-articles/list/list.component';
import { SidebarProfileComponent } from '../sidebar/sidebar-profile/sidebar-profile.component';
import { BreedComponent } from '../breeds/breed/breed.component';
import { CatNamesComponent } from '../cat-names/cat-names.component';
import { ListComponent as BreedListComponent } from '../breeds/list/list.component';

const routes: Routes = [
  {
    path: 'album',
    pathMatch: 'full', // когато нямаме нищо след нашия домейн
    component: AlbumListComponent
  },
  {
    path: 'breed',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/breed/list'
      },
      {
        path: 'list',
        component: BreedListComponent
      },
      {
        path: ':id',
        component: BreedComponent
      }
    ]
  },
  {
    path: 'user',
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/user/list'
      },
      {
        path: 'list',
        component: UserListComponent
      },
      {
        path: ':id', // трябва да проверяваме дали е число
        component: UserComponent
      }
    ]
  },
  {
    path: 'login',
    pathMatch: 'full', // когато нямаме нищо след нашия домейн
    component: LoginComponent
  },
  {
    path: 'registration',
    pathMatch: 'full', // когато нямаме нищо след нашия домейн
    component: RegisterComponent
  },
  {
    path: 'profile',
    pathMatch: 'full', // когато нямаме нищо след нашия домейн
    component: ProfileComponent
  },
  {
    path: 'sidebar-profile',
    component: SidebarProfileComponent,
    outlet: 'sidebar'
  },
  {
    path: 'my-cats',
    component: UserCatsComponent
  },
  {
    path: 'favourite-cats',
    component: FavouriteCatsComponent
  },
  {
    path: 'create-cat',
    component: CreateCatComponent
  },
  {
    path: 'edit-cat/:breed_id/:id',
    component: EditCatComponent
  },
  {
    path: 'cat-profile/:breed_id/:id',
    component: CatProfileComponent
  },
  {
    path: 'cat-names',
    component: CatNamesComponent
  },
  {
    path: 'cat-articles',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/cat-articles/list'
      },
      {
        path: 'list',
        component: CatArticlesListComponent
      },
      { path: 'article-1', component: CatArticlesComponent, data: { kind: '1' } },
      { path: 'article-2', component: CatArticlesComponent, data: { kind: '2' } },
      { path: 'article-3', component: CatArticlesComponent, data: { kind: '3' } }
    ]
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

export const AppRoutingModule = RouterModule.forRoot(routes);