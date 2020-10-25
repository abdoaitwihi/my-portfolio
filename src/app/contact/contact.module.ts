import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ContactRoutingModule } from './contact-routing.module';



@NgModule({
  declarations: [
    ContactMeComponent,
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
  ]
})
export class ContactModule { }
