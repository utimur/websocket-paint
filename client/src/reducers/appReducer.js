const SHOW_POPUP = 'SHOW_POPUP'
const HIDE_POPUP = 'HIDE_POPUP'

const defaultState = {
    isPopupVisible: false
}


export default function appReducer(state = defaultState, action) {
    switch (action.type) {
        case SHOW_POPUP: return {...state, isPopupVisible: true}
        case HIDE_POPUP: return {...state, isPopupVisible: false}
        default:
            return state
    }
};

export const showPopup = () => ({type: SHOW_POPUP})
export const hidePopup = () => ({type: HIDE_POPUP})
