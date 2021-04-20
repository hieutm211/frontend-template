import React from "react"
import { AppState } from "."
import { INITIAL_VALUE_APP_STATE } from "configs/constants"
import { AppReducer } from "./reducer"

export const AppStateWrapper = (props) => {
  const { children } = props
  const [state, dispatch] = React.useReducer(
    AppReducer,
    INITIAL_VALUE_APP_STATE,
  )

  return (
    <AppState.Provider value={{ state, dispatch }}>
      {children}
    </AppState.Provider>
  )
}
