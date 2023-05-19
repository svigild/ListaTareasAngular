import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';
import {Tarea} from '../model/tarea';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Input() tareas: Tarea[];
  @Output() addTaskEvent = new EventEmitter<void>();

  constructor() {
    this.tareas = [
    
    ];
   }

  deleteTask(task: Tarea): void {
    this.tareas.splice(this.tareas.findIndex(t =>task.id === t.id), 1);
  }

  nuevaTarea: string = '';

  addTask(): void {
    if (this.nuevaTarea.trim().length > 0){
      const newTask: Tarea = {
        id: this.tareas.length + 1,
        title: this.nuevaTarea,
        pending: true
      };
      this.tareas.push(newTask);
      this.nuevaTarea = ''; // Limpiar el campo de entrada de texto después de agregar la tarea
    } else {
      alert("No puedes añadir una tarea vacía");
    }
    
  }

  ngOnInit(): void{

  }
}
