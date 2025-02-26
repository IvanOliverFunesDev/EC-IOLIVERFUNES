import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ConcertsService } from '../../../services/concerts.service';
import { ConcertsCardComponent } from "../concerts-card/concerts-card.component";

@Component({
  selector: 'app-concerts-list',
  imports: [NgFor, ConcertsCardComponent],
  templateUrl: './concerts-list.component.html',
  styleUrl: './concerts-list.component.css'
})
export class ConcertsListComponent implements OnInit {

  @Input() fetchData: () => { title: string, image: string, author: string, date: string, description: string }[] = () => [];
  @Input() title: string = '';

  conciertos: { title: string, image: string, author: string, date: string, description: string }[] = [];

  constructor(private concertsService: ConcertsService) { }

  ngOnInit() {
    this.conciertos = this.fetchData();
  }


}
