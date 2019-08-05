import {createStore} from 'redux'

//inital state

const initalState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    image: '',
    mortgage: '',
    rent: ''

}
//ACTION TYPES if we are going to call an action it has to be assigned to a CONST Variable.
export const NEW_HOME = 'NEW_HOME'

function reducer(state = initalState, action) {
    switch(action.type) {
        case NEW_HOME:
            var newHome = {}
        default:
            return state
    }
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())