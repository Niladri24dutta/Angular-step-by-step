import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms'
import {ModalModule} from 'ngx-bootstrap/modal'
import {BsDropdownModule} from 'ngx-bootstrap/dropdown'
import {TooltipModule} from 'ngx-bootstrap/tooltip'
import {BsDatepickerModule } from 'ngx-bootstrap';
import {routing} from './app.routes';
import { AppComponent } from './app.component';
import { CustomComponent } from './custom/custom.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
