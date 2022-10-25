import { Action } from '@ngrx/store';
import { ComicsActions, ComicsActionTypes } from './comics.actions';
import { Comic } from '@demo/data-models';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface ComicsData extends EntityState<Comic> {
  error: string;
  selectedComicId: number;
  loading: boolean;
}

export interface ComicsState {
  readonly comics: ComicsData;
}

export const adapter: EntityAdapter<Comic> = createEntityAdapter<Comic>({});

export const initialState: any = adapter.getInitialState({
  error: '',
  selectedComicId: null,
  loading: false
});

export function comicsReducer(
  state = initialState,
  action: ComicsActions
): ComicsData {
  switch (action.type) {
    case ComicsActionTypes.LoadComics:
      return { ...state, loading: true };

    case ComicsActionTypes.LoadComicsSuccess: {
      // @ts-ignore
      return adapter.addAll(action.payload, { ...state, error: '' });
    }

    case ComicsActionTypes.LoadComicsFail: {
      return adapter.removeAll({ ...state, error: action.payload });
    }

    default:
      return state;
  }
}

export const getSelectedComicId = (state: ComicsData) =>
  state.selectedComicId;

export const {
  // select the array of user ids
  selectIds: selectComicIds,

  // select the dictionary of Comics entities
  selectEntities: selectComicEntities,

  // select the array of Comicss
  selectAll: selectAllComics,

  // select the total Comics count
  selectTotal: selectComicsTotal
} = adapter.getSelectors();
