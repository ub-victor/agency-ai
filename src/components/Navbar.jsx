import React from 'react'

function Navbar({theme, setTheme}) {
    return (
        <div className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 stricky top-0 z-20 backdrop-blur-xl front-medium bg-white/50 dark:bg-gay-900/70' >
            <img src={theme === "dark" ? ass} alt="" />
        </div>
        
    )
}

export default Navbar
