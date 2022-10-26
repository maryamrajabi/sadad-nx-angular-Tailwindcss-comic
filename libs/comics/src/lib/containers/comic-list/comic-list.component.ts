import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comic } from '@demo/data-models';
import { ComicsService } from '../../services/comics/comics.service';
import { LoadingService } from '../../../../../loading/src/lib/loading.service';

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


  constructor(private comicService: ComicsService,
              private loadingService: LoadingService) {
  }

  ngOnInit(): void {
    this.loadingService.loadingChange(true);
    this.comicService.getComics().subscribe(data => {
      this.comicList$ = data.data.results;
      this.loadingService.loadingChange(false);
    }, () => {
      this.loadingService.loadingChange(false);
    })
  }

  openLink(link: string) {
    window.open(link, '_blank');
  }

}
