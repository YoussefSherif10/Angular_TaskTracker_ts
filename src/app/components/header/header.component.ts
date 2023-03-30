import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title : string = 'Task Tracker';

  // life cycle hook has the code that runs when the
  // component is rendered
  ngOnInit() {
  }

  toggleAddTask(){
    console.log('toggle')
  }
}
