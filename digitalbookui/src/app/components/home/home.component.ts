import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BookSearchDTO } from '../../interface/BookSearchDTO';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';
import { BookEntity } from '../../interface/BookEntity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 book:any;
 //books:BookEntity[]=[];
 books:any[]=[];
  homeSearchBook: FormGroup;
  flag: boolean = false;

  constructor(
    private bookService:BookService,
    private router:Router
  ) {
    this.homeSearchBook = new FormGroup({
      authorName: new FormControl("", [Validators.required]),
      category: new FormControl("", [Validators.required]),
      publisher: new FormControl("", [Validators.required]),
      title: new FormControl("", [Validators.required]),
      price: new FormControl("", [Validators.required])
    });
  }

  ngOnInit(): void {
  }
//"Book Found Successfully
  searchBook() {
    console.log("search book values",this.homeSearchBook.value);
    this.bookService.homeSearchBook(this.homeSearchBook.value).subscribe({
      next: (res:any)=>{

        console.log(res);
        console.log(res.resultArray);
        if(res.message === 'Book Found Successfully'){
          this.books = res.resultArray;
          console.log("book obj",this.books);
          this.flag =true;

        //   this.books = [
        //     { title: "Superman", price: 25 },
        //     { title: "Hanuman", price: 28 },
        //     { title: "BalGanesh", price: 12 }
        // ]
       // console.log(this.books[0].bookId);
        //let titles=this.book.map( (item) => item.title);
        //console.log(this.book.map((item)=>item.title))
          //console.log(this.book[0].booId);
          //books:Array<BookSearchDTO> = res.response;
          //this.router.navigate(["/books"]);
        }else{
          alert(res.exception);
        }
    },
    error: (err:any)=>{
        console.log(err)
    }
    })
  }
  subscribeBook(booId:string){
    console.log("got book id",booId);
    sessionStorage.setItem("bookId",booId);
    localStorage.setItem("bookId",booId);
    
    this.router.navigate(["/reader-signIn"]);
  }

}
