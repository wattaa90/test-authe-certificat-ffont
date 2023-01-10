import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'test-authe-certificat-ffont';


  public result = "";




  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.httpClient.get('https://localhost:8080/connect'
    , {responseType: 'text'}
    ).subscribe(value => {
      this.result = value;
    })
  }


}
