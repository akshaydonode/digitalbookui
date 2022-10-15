import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  //private url: string = "http://localhost:9090/reader/"

  constructor(private http: HttpClient) { }

  getNotification(){
    let readerId = localStorage.getItem("readerId");
    return this.http.get<any>(`http://localhost:9090/notification/getNotification/${readerId}`);
  }
}
