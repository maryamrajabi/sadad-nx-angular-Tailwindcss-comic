import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loading = new Subject<boolean>();
  changeLoading$ = this.loading.asObservable();

  constructor() { }

  loadingChange(change: boolean): void {
    this.loading.next(change);
  }

}
