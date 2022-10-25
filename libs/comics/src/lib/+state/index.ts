import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromComic from "./comics.reducer";

export const getComicsState = createFeatureSelector<fromComic.ComicsData>('comics');
export const getComics = createSelector(getComicsState, fromComic.selectAllComics);
export const getComicEntnites = createSelector(getComicsState, fromComic.selectComicEntities);
export const getSelectedProductId = createSelector(getComicsState, fromComic.getSelectedComicId);
export const getSelectedProduct = createSelector(getComicEntnites, getSelectedProductId, (comicsDictionary, id) => {
  return  comicsDictionary[id]
});
