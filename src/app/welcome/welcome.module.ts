import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { CreateHomeComponent } from './create-home/create-home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatRadioModule } from '@angular/material/radio';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [WelcomeComponent, CreateHomeComponent, SignUpComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    MatRadioModule,
    SwiperModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class WelcomeModule {}
