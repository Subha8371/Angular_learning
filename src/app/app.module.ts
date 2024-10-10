import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EditComponent } from './edit/edit.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { SettingsComponent } from './settings/settings.component';
import { FormsModule } from '@angular/forms';
import { ProductlistComponent } from './home/productlist/productlist.component';
import { ProductComponent } from './home/productlist/product/product.component';
import { AboutComponent } from './documentation/about/about.component';
import { NestedcomponentComponent } from './documentation/about/nestedcomponent/nestedcomponent.component';
import { FilterlistComponent } from './home/productlist/filterlist/filterlist.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { NestedcomponentsiblingComponent } from './documentation/about/nestedcomponentsibling/nestedcomponentsibling.component';
import { SearchComponent } from './home/search/search.component';
import { ProductDetailsComponent } from './home/product-details/product-details.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CalendarComponent,
    EditComponent,
    DocumentationComponent,
    SettingsComponent,
    ProductlistComponent,
    ProductComponent,
    AboutComponent,
    NestedcomponentComponent,
    FilterlistComponent,
    NestedcomponentsiblingComponent,
    SearchComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    FormsModule,
    RadioButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
