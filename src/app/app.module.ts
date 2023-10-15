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
// import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
// import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {Routes , RouterModule} from '@angular/router';
import { HomelandComponent } from './component/homeland/homeland.component';



// const firebaseConfig = {
//   apiKey: "AIzaSyDkR4MESgjh20z9yaM1s1AXX99qquDn2ss",
//   authDomain: "sanfoundry-sc.firebaseapp.com",
//   projectId: "sanfoundry-sc",
//   storageBucket: "sanfoundry-sc.appspot.com",
//   messagingSenderId: "527997111994",
//   appId: "1:527997111994:web:35a22b150a14f2e3c1bc83",
//   measurementId: "G-8Q04XQCCSR"
// };



const routesConfig: Routes = [
    { path: '', component: HomelandComponent },
    { path: 'login', component: AuthComponent }
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
