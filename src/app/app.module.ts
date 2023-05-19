import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { DetallesTareaComponent } from './detalles-tarea/detalles-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    DetallesTareaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
