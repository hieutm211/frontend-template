import React from "react"
import { AppActionWrapper } from "state-management/action"
import { AppStateWrapper } from "state-management/state"

function App() {
  return (
    <AppStateWrapper>
      <AppActionWrapper>
        <div className="flex items-center justify-center w-screen h-screen text-6xl font-semibold text-green-900 bg-green-50">
          Hi there!
        </div>
      </AppActionWrapper>
    </AppStateWrapper>
  )
}

export default App
