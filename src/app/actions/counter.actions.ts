import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { createAction } from './createAction';
import { AppState } from '../store/appState';

@Injectable()
export class CounterActions {

    static INCREMENT = 'INCREMENT';
    static DECREMENT = 'DECREMENT';
    static RESET = 'RESET';

    constructor(private store: Store<AppState>) {}

    increment() {
        this.store.dispatch(createAction(CounterActions.INCREMENT));
        console.log(this.store.select(appState => appState));
    }

    decrement() {
        this.store.dispatch(createAction(CounterActions.DECREMENT));
        console.log(this.store.select(appState => appState));
    }

    reset() {
        this.store.dispatch(createAction(CounterActions.RESET));
        console.log(this.store.select(appState => appState));
    }

}