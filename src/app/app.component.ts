import { Component, OnInit } from "@angular/core";
import { ajax } from "rxjs/ajax";
import { bindCallback, Observable } from "rxjs";
import * as $ from "jquery";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    /*/ajax(`https://api.github.com/users?per_page=5`).subscribe(
      (data) => {
        console.log(data.response);
      }
    );/*/
    $.getJSON("https://jsonplaceholder.typicode.com/posts", (data) =>
      console.log(data)
    );
    const obs$: (url: string) => Observable<any[]> = bindCallback($.getJSON);
    obs$("https://jsonplaceholder.typicode.com/posts").subscribe((data) =>
      console.log(data)
    );
  }
}
