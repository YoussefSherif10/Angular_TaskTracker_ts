import {Component, EventEmitter, Output} from '@angular/core';
import {UiService} from "../../services/ui.service";
import {Task} from "../../Task";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAdd: EventEmitter<Task> = new EventEmitter()
  text!: string;
  day!: string;
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(val => {
      this.showAddTask = val;
    })
  }

  onSubmit(){
    if (!(this.text && this.day))
      return alert("Please fill all the inputs");

    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAdd.emit(newTask);

    // clear the form
    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
