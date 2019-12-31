export const changeCard = cardType => {
    return {
        type: 'CARD_TYPE',
        payload: cardType
    }
}

export const changeStep = stepStatus => {
    return {
        type: 'STEP_TYPE',
        payload: stepStatus
    }
}

export const fetchWorkers = () => {
    return {
        type: 'FETCH_TYPE',
        payload: 'http://localhost:8080/worker'
    }
}