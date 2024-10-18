import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';

import { CompComponent } from './insights/comp.component';
import { CardComponent } from './insights/Card/card/card.component';
@NgModule({
  declarations: [
    CompComponent,
    CardComponent 
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    ProgressBarModule,
    ToastModule, 
  ],
  exports: [
    CompComponent, 
    CardModule,
    ButtonModule,
    InputTextModule,
    ProgressBarModule,
    ToastModule, 
  ],
})
export class SharedModule { }
