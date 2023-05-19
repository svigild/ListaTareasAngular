import { Component, EventEmitter } from '@angular/core';
import { Tarea } from './model/tarea';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lista-tareas';
}
