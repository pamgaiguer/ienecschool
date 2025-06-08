import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-metodologia-ensino',
    templateUrl: './metodologia-ensino.component.html',
    styleUrls: ['./metodologia-ensino.component.scss'],
    standalone: false
})
export class MetodologiaEnsinoComponent implements OnInit {
  metodologiaItens: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getMetodologiasEnsino().subscribe(data => {
      this.metodologiaItens = data;
    });
  }
}
