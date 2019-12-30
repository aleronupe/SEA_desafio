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