import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReaderEntity } from '../interface/ReaderEntity';
import { SubscribeEntity } from '../interface/SubscribeEntity';

@Injectable({
  providedIn: 'root'
})
export class ReaderService {

  private url: string = "http://localhost:9090/reader/"

  constructor(private http: HttpClient) { }

  getReader(readerEmail: any) {
    console.log(readerEmail);
    console.log("url", this.url + `getReader/${readerEmail}`);
    return this.http.post<any>(`http://localhost:9090/reader/getReader/`,readerEmail);
  }

  addReader(readerEntity: ReaderEntity) {
    return this.http.post(this.url + 'addReader', readerEntity);
  }

  subscribeBook(subscribeEntity: SubscribeEntity) {
    return this.http.post(this.url+'book/subscribe',subscribeEntity);
  }
 
}
