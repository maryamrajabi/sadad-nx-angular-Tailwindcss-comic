import { Action } from '@ngrx/store';

export enum ComicsActionTypes {
  LoadComics = '[Comics Page] Load Comics',
  LoadComicsSuccess = '[Comics API] Load Comics Success',
  LoadComicsFail = '[Comics API] LoadComics Fail'
}

export class LoadComics implements Action {
  readonly type = ComicsActionTypes.LoadComics;
}
export class LoadComicsSuccess implements Action {
  readonly type = ComicsActionTypes.LoadComicsSuccess;
  constructor(public payload: any) {}
}

export class LoadComicsFail implements Action {
  readonly type = ComicsActionTypes.LoadComicsFail;
  constructor(public payload: any) {}
}

export type ComicsActions = LoadComics | LoadComicsSuccess | LoadComicsFail;
