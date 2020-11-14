import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemsComponent } from './items/items/items.component';
import { InformationComponent } from './information/information/information.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', component: ItemsComponent},
  {path: 'info', component: InformationComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: "/not-found"}
];

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
