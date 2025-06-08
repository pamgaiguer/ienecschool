import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-diferenciais',
    templateUrl: './diferenciais.component.html',
    styleUrls: ['./diferenciais.component.scss'],
    standalone: false
})
export class DiferenciaisComponent implements OnInit {
  diferenciaisItens: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getFullDiferenciais().subscribe(data => {
      this.diferenciaisItens = data;
    });
  }
}
