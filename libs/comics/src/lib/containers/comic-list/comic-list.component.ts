import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comic } from '@demo/data-models';
import { ComicsService } from '../../services/comics/comics.service';

@Component({
  selector: 'demo-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.scss']
})
export class ComicListComponent {

  @Input() comics: Comic[] = [];
  @Output() filter = new EventEmitter<string>();

  // onFilter(category: string) {
  //   this.filter.emit(category);
  // }


  // features: Feature[] = features;
  comicList$: any;


  constructor(private comicService: ComicsService) {
  }

  ngOnInit(): void {
    this.comicService.getComics().subscribe(data => this.comicList$ = data.data.results)
  }

  openLink(link: string) {
    window.open(link, '_blank');
  }

}
