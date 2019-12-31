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

const fetchWorkersReducer = (initialData = [], action) => {

    if (action.type === 'FETCH_TYPE'){
        console.log('passed here fetch');
        // fetch(action.payload)
        // .then(res => res.json())
        // .then((data) => {
        //   return data;
        // })
        // .catch(console.log)
    }


    return initialData;
}

export const Reducers = combineReducers({
    cardType: cardTypeReducer,
    stepStatus: stepStatusReducer,
    workersList: fetchWorkersReducer
});