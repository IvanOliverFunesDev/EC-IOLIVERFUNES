import { Component, Input } from '@angular/core';
import { ConcertsService } from '../../../services/concerts.service';
import { ConcertsListComponent } from "../concerts-list/concerts-list.component";

@Component({
  selector: 'app-concerts-page',
  imports: [ConcertsListComponent],
  templateUrl: './concerts-page.component.html',
  styleUrl: './concerts-page.component.css'
})
export class ConcertsPageComponent {
  @Input() fetchData: () => { title: string, image: string, author: string, date: string, description: string }[] = () => [];
  @Input() title: string = '';

  constructor(private concertsService: ConcertsService) { }

  getConcertsAll = () => this.concertsService.getConcertsAll();

}
