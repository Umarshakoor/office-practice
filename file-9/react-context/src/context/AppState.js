import React from 'react'
import AppContext from './app-context'
function AppState() {
    return (
        <AppContext.Provider value={{
            message: 'this is from the context'
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppState