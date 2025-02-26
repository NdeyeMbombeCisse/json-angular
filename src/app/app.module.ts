import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { AddUpdateComponent } from './add-update/add-update.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component' ; 

@NgModule({
  declarations: [
    AppComponent,
    AddUpdateComponent,
    DeleteComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
