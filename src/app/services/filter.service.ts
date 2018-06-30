import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FilterService {

  constructor(private http: HttpClient) { }

  // https://jsonplaceholder.typicode.com/posts/1
  public test(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe(data => {
      console.log(data);
    })
    console.log('dat');
  }

}
