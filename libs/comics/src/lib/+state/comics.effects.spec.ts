import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as ComicsActions from './comics.actions';
import { ComicsEffects } from './comics.effects';

describe('ComicsEffects', () => {
  let actions: Observable<Action>;
  let effects: ComicsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ComicsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(ComicsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ComicsActions.initComics() });

      const expected = hot('-a-|', {
        a: ComicsActions.loadComicsSuccess({ comics: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
