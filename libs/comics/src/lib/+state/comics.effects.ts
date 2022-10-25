import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ComicsService } from '../services/comics/comics.service';
import { ComicsActionTypes } from '@demo/comics';
import { mergeMap, map, tap, catchError, filter } from 'rxjs/operators';
import * as comicActions from './../+state/comics.actions';
import { of } from 'rxjs';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { Comic } from '@demo/data-models';

@Injectable()
export class ComicsEffects {
  @Effect()
  loadFilteredComics$ = this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    filter((r: RouterNavigationAction) => r.payload.routerState.url.startsWith('/comics')),
    map((r: RouterNavigationAction) => r.payload.routerState.root.queryParams['category']),
    mergeMap((category: string) =>
      this.comicsService
        .getComics(category)
        .pipe(
          map((comics: Comic[]) => new comicActions.LoadComicsSuccess(comics)),
          catchError(error => of(new comicActions.LoadComicsFail(error)))
        )
    )
  );

  @Effect()
  loadComics$ = this.actions$.pipe(
    ofType(ComicsActionTypes.LoadComics),
    mergeMap(() =>
      this.comicsService
        .getComics()
        .pipe(
          map(
            (comics: Comic[]) =>
              new comicActions.LoadComicsSuccess(comics)
          ),
          catchError(error => of(new comicActions.LoadComicsFail(error)))
        )
    )
  );

  constructor(
    private actions$: Actions,
    private comicsService: ComicsService
  ) {}
}
