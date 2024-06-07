import React, { useState } from 'react'
import AppContext from '../context/app-context'
function HomePage() {
    const { message } = useState(AppContext)
    return (
        <div>
            <h2>h2</h2>
            <p>{message}</p>
        </div>
    )
}

export default HomePage