import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { CatService } from './services/cat.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { Grocsservices} from './GroceryList/Grocs.services';
import { Apiservices } from './AngularAPI/api.services';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { AngularApiComponent} from './AngularAPI/api.component';
import { GroceryListComponent} from './GroceryList/Grocs.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { AvatarModule } from "ngx-avatar";

// import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
// import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

import { CatsBreedComponent } from './catsbreed/catsBreed.component';
import { CatBreedService } from './services/catBreed.service';
import { BasicTestingComponent } from './basic-testing/basic-testing.component';
@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    AdminComponent,
    NotFoundComponent,
    CatsBreedComponent,
    AngularApiComponent,
    GroceryListComponent,
    BasicTestingComponent
  ],
  imports: [
    RoutingModule,
    SharedModule,
    HttpModule,
    FormsModule,
    AvatarModule
    // AngularMultiSelectModule,
    // MultiselectDropdownModule
  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    AuthGuardAdmin,
    CatService,
    UserService,
    Grocsservices,
    Apiservices,
    CatBreedService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
