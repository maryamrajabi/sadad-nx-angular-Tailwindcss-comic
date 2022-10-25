import { Action } from '@ngrx/store';

import * as ComicsActions from './comics.actions';
import { ComicsEntity } from './comics.models';
import {
  ComicsState,
  initialComicsState,
  comicsReducer,
} from './comics.reducer';

describe('Comics Reducer', () => {
  const createComicsEntity = (id: string, name = ''): ComicsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Comics actions', () => {
    it('loadComicsSuccess should return the list of known Comics', () => {
      const comics = [
        createComicsEntity('PRODUCT-AAA'),
        createComicsEntity('PRODUCT-zzz'),
      ];
      const action = ComicsActions.loadComicsSuccess({ comics });

      const result: ComicsState = comicsReducer(initialComicsState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = comicsReducer(initialComicsState, action);

      expect(result).toBe(initialComicsState);
    });
  });
});
