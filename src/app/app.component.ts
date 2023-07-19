import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ShopHiveClient';
  categories: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get("https://localhost:7243/api/Category").subscribe({
      next: response => this.categories = response,
      error: error => console.log(error),
      complete: () => console.log("Request has completed.")
    });
  }
}
