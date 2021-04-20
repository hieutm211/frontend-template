import React from "react"
import { AppAction, AppState } from "."

let lastActionType = 0
export const ActionTypes = {
  OPEN_MODAL: lastActionType++,
  CLOSE_MODAL: lastActionType++,
  START_LOADING: lastActionType++,
  FINISH_LOADING: lastActionType++,
}

export const AppActionWrapper = (props) => {
  const { children } = props
  const { dispatch } = React.useContext(AppState)

  const baseActions = {
    openModal: (modal) => {
      dispatch({
        actionType: ActionTypes.OPEN_MODAL,
        actionObject: { modal },
      })
    },
    closeModal: () => {
      dispatch({ actionType: ActionTypes.CLOSE_MODAL })
    },
    startLoading: () => {
      dispatch({ actionType: ActionTypes.START_LOADING })
    },
    finishLoading: () => {
      dispatch({ actionType: ActionTypes.FINISH_LOADING })
    },
    setError: (error) => {
      dispatch({ actionType: ActionTypes.SET_ERROR, actionObject: { error } })
    },
  }

  const actions = {}

  return (
    <AppAction.Provider value={{ ...baseActions, ...actions }}>
      {children}
    </AppAction.Provider>
  )
}
