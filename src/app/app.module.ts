import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { ListingDetailsPageComponent } from './listing-details-page/listing-details-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MyListingsPageComponent } from './my-listings-page/my-listings-page.component';
import { NewListingsPageComponent } from './new-listings-page/new-listings-page.component';
import { EditListingsPageComponent } from './edit-listings-page/edit-listings-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingPageComponent,
    ListingDetailsPageComponent,
    ContactPageComponent,
    MyListingsPageComponent,
    NewListingsPageComponent,
    EditListingsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
