import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { initFlowbite } from "flowbite";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(public router: Router) {}
  title = "Colégio Ienec";

  ngOnInit(): void {
    initFlowbite();
  }
}
