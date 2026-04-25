import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'

function App() {
    const [theme, setTheme] = useState('light')
    return (
        <div className='dark:bg-black relative'>
            <Navbar/>
        </div>
    )
}

export default App
