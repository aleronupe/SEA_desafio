import { combineReducers } from 'redux';

const cardTypeReducer = (cardType = 'listWorkers', action) => {
    if (action.type === 'CARD_TYPE') {
        return action.payload;
    }
    
    return cardType;
}

const stepStatusReducer = (defaultStatus = false, action) => {
    if (action.type === 'STEP_TYPE'){
        return action.payload;
    }

    return defaultStatus;
}

export const Reducers = combineReducers({
    cardType: cardTypeReducer,
    stepStatus: stepStatusReducer
});