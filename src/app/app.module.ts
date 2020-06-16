import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PainelProdutoComponent } from './painel-produto/painel-produto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    PainelProdutoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    DialogModule,
    ReactiveFormsModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
