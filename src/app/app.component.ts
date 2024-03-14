import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  items = [
    { title: "Cuksi cicák", content: "MÉG TÖBB CUKI CICA :OOOO", icon: "expand_more" },
    { title: "Noel", content: "bestie <3", icon: "expand_more" },
  ];
}
