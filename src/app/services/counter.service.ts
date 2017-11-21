import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import {AppState} from '../store/appState';
import {Counter} from '../models/counter.model';

@Injectable()
export class CounterService {

  constructor(private store: Store<AppState>) { }

  getCurrentValue(): Observable<number> {
    return this.store.select(appState => appState.counter.currentValue);
  }

  getCounter(): Observable<Counter> {
    return this.store.select(appState => appState.counter); 
  }

}
