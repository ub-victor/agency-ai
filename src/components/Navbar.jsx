import React from 'react'
import assets from '../assets/assets'
function Navbar({theme, setTheme}) {
    return (
        <div className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70' >
            <img src={theme === "dark" ? assets.logo_dark : assets.logo} className='w-32 sm:w-40' alt='logo'/>
            <div>
                <a href="#" className='sm:hover:border-b'>Home</a>
                <a href="#services" className='sm:hover:border-b'>Services</a>
            </div>
        </div>
        
    )
}

export default Navbar
