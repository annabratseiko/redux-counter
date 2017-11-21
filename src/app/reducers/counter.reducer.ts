import { Action } from '@ngrx/store';

import { Counter } from '../models/counter.model';
import { CounterActions } from '../actions/counter.actions';

function setCounterCurrentValue(counter: Counter, currentValue: number): Counter {
    return Object.assign({}, counter, { currentValue });
}

export function counterReducer(
    counter: Counter = { currentValue: 0 },
    action: Action
): Counter {
    switch (action.type) {
        case CounterActions.INCREMENT:
            return setCounterCurrentValue(counter, counter.currentValue + 1);

        case CounterActions.DECREMENT:
            return setCounterCurrentValue(counter, counter.currentValue - 1);

        case CounterActions.RESET:
            return setCounterCurrentValue(counter, 0);

        default:
            return counter;
    }
}