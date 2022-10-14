import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookSearchDTO } from '../interface/BookSearchDTO';
import { BookCreateEntity } from '../interface/BookCreateEntity';
import { BookBlockDetailsDTO } from '../interface/BookBlockDetailsDTO';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url: string = "http://localhost:9090/book/"

  //authorId:number= +localStorage.getItem("authorID");
  constructor(private http: HttpClient) { }

  homeSearchBook(bookSearchDTO: BookSearchDTO) {
    return this.http.post(this.url + 'search', bookSearchDTO);
  }

  createBook(bookEntity: BookCreateEntity) {
    let authorId = +(bookEntity.authorId);
    return this.http.post(this.url + authorId + '/books', bookEntity)
  }

  getAuthorBooks(authorId: any) {
    console.log("url", `http://localhost:9090/book/books/${authorId}`);
    return this.http.get<any>(`http://localhost:9090/book/books/${authorId}`);
  }

  getReaderBooks(emailID: any) {
    return this.http.get<any>(`http://localhost:9090/book/${emailID}/books`);
  }

  blockBook(bookBlockDetailsDTO: BookBlockDetailsDTO) {
    return this.http.post(this.url + '/block', bookBlockDetailsDTO);
  }
  unBlock(bookBlockDetailsDTO: BookBlockDetailsDTO) {
    return this.http.post(this.url + '/unBlock', bookBlockDetailsDTO);
  }
}
