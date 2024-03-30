import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-soon',
  templateUrl: './soon.component.html',
  styleUrls: ['./soon.component.scss'],
})
export class SoonComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }
}
