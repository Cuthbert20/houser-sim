import {createStore} from 'redux'

//inital state

const initalState = {
    house_name: '',
    house_address: '',
    city: '',
    state: '',
    zipcode: '',
    image: '',
    mortgage: '',
    rent: ''
}
//ACTION TYPES if we are going to call an action it has to be assigned to a CONST Variable.
export const STEP_ONE = 'STEP_ONE'
export const STEP_TWO = 'STEP_TWO'
export const STEP_THREE = 'STEP_THREE'
export const CANCEL = 'CANCEL'

function reducer(state = initalState, action) {
    console.log(action)
    switch(action.type) {
        case STEP_ONE:
            return {...state,...action.payload}
        case STEP_TWO:
            return {...state,...action.payload}
        case STEP_THREE:
            return {...state,...action.payload}
        case CANCEL:
            return {...state}
        default:
            return state
    }
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())