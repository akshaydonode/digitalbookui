import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthorLogin } from '../interface/AuthorLogin';
import { AuthenticateData } from '../interface/AuthenticateData';

@Injectable({
  providedIn: 'root'
})

export class AuthorService {

  // const TOKEN_HEADER_KEY = 'Authorization';


  private url: string = "http://localhost:9090/author/"

  constructor(private http: HttpClient) {
    //headers.set(TOKEN_HEADER_KEY, token);
  }

  // token = {
  //   return this.http.post(this.url + 'authenticate');
  // }

  authenticate(authorLogin: AuthenticateData) {
   
    return this.http.post(this.url + 'authenticate', authorLogin);
  }

  signIn(authorLogin: AuthorLogin) {
   
    return this.http.post(this.url + 'login', authorLogin,this.getHttpHeader());
  }

  signUp(authorLogin: AuthorLogin){
    console.log(this.url + 'signup');
    return this.http.post(this.url + 'signup', authorLogin);
  }

  private getHttpHeader(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders()
        .set(
          'Authorization',
          `Bearer  ${sessionStorage.getItem('token')}`
        )
        .set('Content-Type', 'application/json')
        .set('Cache-control', 'no-cache')
        .set('Cache-control', 'no-store')
        .set('Expires', '0')
        .set('Pragma', 'no-cache'),
    };
  }
}

//   let header = new Headers({ 'Authorization': `Bearer ${token}` });
//     const options = new RequestOptions({
//        headers: header,
//     });
//     return this._http.get(this.ApiURL + "api/Subscriptions/IsClientCreditCardExits/" + companyId + "/", options);    
// }
