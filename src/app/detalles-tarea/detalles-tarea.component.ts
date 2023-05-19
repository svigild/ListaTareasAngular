import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../model/tarea';

@Component({
  selector: 'app-detalles-tarea',
  templateUrl: './detalles-tarea.component.html',
  styleUrls: ['./detalles-tarea.component.css']
})
export class DetallesTareaComponent {
  @Input( ) tareas!: Tarea;
  @Output() deleted = new EventEmitter<Tarea>();

  constructor(){ }

  deleteTask() {
    this.deleted.emit(this.tareas);
  }  

  taskDone() {
    if (this.tareas.pending == false){
      this.tareas.pending = true;
    } else {
      this.tareas.pending = false;
    }
  }

  ngOnInit(): void {

  }
}
