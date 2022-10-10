import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookSearchDTO } from '../interface/BookSearchDTO';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url: string = "http://localhost:9090/book/"

  constructor(private http: HttpClient) { }

  homeSearchBook(bookSearchDTO: BookSearchDTO){
    return this.http.post(this.url + 'search',bookSearchDTO);
  }
}
