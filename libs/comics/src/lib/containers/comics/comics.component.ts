import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comic } from '@demo/data-models';
import { ComicsState, LoadComics } from '@demo/comics';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { getComics } from '../../+state';

@Component({
  selector: 'demo-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss'],
})
export class ComicsComponent implements OnInit {
  comics$: Observable<Comic[]> = new Observable();

  constructor(private router: Router,
              private store: Store<ComicsState>) {}

  ngOnInit() {
    // this.store.dispatch(new LoadComics());
    // this.comics$ = this.store.pipe(select(getComics));
  }
}
