import { ActionTypes } from "./action"

export const AppReducer = (props) => {
  const { state, action } = props

  switch (action.actionType) {
    // ================
    //   pure actions
    // ================
    case ActionTypes.OPEN_MODAL:
      if (action.actionObject)
        return { ...state, isOpenModal: true, modal: action.actionObject.modal }
      return { ...state, isOpenModal: true }

    case ActionTypes.CLOSE_MODAL:
      return { ...state, isOpenModal: false }

    case ActionTypes.START_LOADING:
      return {
        ...state,
        isLoading: true,
      }

    case ActionTypes.FINISH_LOADING:
      return { ...state, isLoading: false }

    case ActionTypes.SET_ERROR:
      if (action.actionObject)
        return { ...state, error: action.actionObject.error }
      return { ...state, error: null }

    // ===================
    //   Complex actions
    // ===================
  }
}
