import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comic } from '@demo/data-models';

@Component({
  selector: 'demo-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.scss']
})
export class ComicListComponent {

  @Input() comics: Comic[] = [];
  @Output() filter = new EventEmitter<string>();

  onFilter(category: string) {
    this.filter.emit(category);
  }
}