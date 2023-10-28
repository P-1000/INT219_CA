import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { NewComponent } from './component/new/new.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroComponent } from './component/hero/hero.component';
import { ServicesComponent } from './component/services/services.component';
import { TestimonialsComponent } from './component/testimonials/testimonials.component';
import { ContactComponent } from './component/contact/contact.component';
import { AuthComponent } from './component/auth/auth.component';
import {Routes , RouterModule} from '@angular/router';
import { HomelandComponent } from './component/homeland/homeland.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CalComponent } from './component/cal/cal.component';
import { TestComponent } from './component/test/test.component';
import { PageComponent } from './component/dashboard/page/page.component';
import { NavComponent } from './component/dashboard/nav/nav.component';
import { ProfileComponent } from './component/dashboard/profile/profile.component';



const firebaseConfig = {
  apiKey: "AIzaSyDkR4MESgjh20z9yaM1s1AXX99qquDn2ss",
  authDomain: "sanfoundry-sc.firebaseapp.com",
  projectId: "sanfoundry-sc",
  storageBucket: "sanfoundry-sc.appspot.com",
  messagingSenderId: "527997111994",
  appId: "1:527997111994:web:35a22b150a14f2e3c1bc83",
  measurementId: "G-8Q04XQCCSR"
};



const routesConfig: Routes = [
    { path: '', component: HomelandComponent },
    { path: 'login', component: AuthComponent },
    {path : 'dashboard' , component : DashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewComponent,
    HeroComponent,
    ServicesComponent,
    TestimonialsComponent,
    ContactComponent,
    AuthComponent,
    HomelandComponent,
    DashboardComponent,
    CalComponent,
    TestComponent,
    PageComponent,
    NavComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routesConfig),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
