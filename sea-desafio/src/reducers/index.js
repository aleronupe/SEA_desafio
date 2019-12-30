import { combineReducers } from 'redux';

const cardTypeReducer = (cardType = 'listWorkers', action) => {
    if (action.type === 'CARD_TYPE') {
        console.log(action.payload)
        return action.payload;
    }
    
    return cardType;
}

export const Reducers = combineReducers({
    cardType: cardTypeReducer
});