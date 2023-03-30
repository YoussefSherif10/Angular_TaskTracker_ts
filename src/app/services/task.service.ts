import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Task} from "../Task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = "http://localhost:3000/tasks"

  constructor(private http:HttpClient) { }

  // reading the tasks in async way. just as promises
  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }
}
