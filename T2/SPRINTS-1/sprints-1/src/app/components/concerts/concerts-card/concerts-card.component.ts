import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-concerts-card',
  imports: [],
  templateUrl: './concerts-card.component.html',
  styleUrl: './concerts-card.component.css'
})
export class ConcertsCardComponent {
  @Input() concierto!: { title: string, image: string, author: string, date: string, description: string }
}
