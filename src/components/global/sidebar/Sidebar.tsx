import { useState } from 'react'

import SidebarLink from './components/SidebarLink'
import SidebarLogout from './components/SidebarLogout'

export default function Sidebar(){
    // retractable sidebar
    const [isOpen, setIsOpen] = useState(false)


return (
    <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="h-screen shrink-0 flex flex-col shadow-xl transition-all duration-500 bg-[oklch(16.5%_0_0)] z-50"
        style={{
            width: isOpen ? "14.28%" : "4vw",
            minWidth: isOpen ? "12rem" : "6.5rem"
        }}
    >
        <div className="w-full flex flex-col items-center justify-center pt-8 pb-4">
            <div className="flex w-full items-center justify-center" style={{paddingLeft: 0}}>
                <p className=' text-white text-4xl font-bold mb-2 text-center' style={{marginLeft: 0}}>
                    <span className = 'text-amber-700'>H</span>
                    <span className = {`${isOpen ? 'visible' : 'hidden'}`}>ustly</span>
                </p>
            </div>
            <hr className="border-zinc-800 w-3/4 mt-2" />
        </div>

        <div className="flex-1 flex flex-col justify-between">
            <div className={`w-full ${isOpen ? 'px-3' : 'px-5'} pt-8 flex flex-col gap-2 transition-all duration-300`}>
                <div className = 'w-auto h-auto bg-zinc-900/50 rounded-3xl'>
                    <SidebarLink isOpen={isOpen} />
                </div>
            </div>
            <div className={`w-full pb-8 ${isOpen ? 'px-3' : 'px-5'} items-cented justify-center`}>
                <SidebarLogout isOpen={isOpen}/>
            </div>
        </div>
    </div>
)
}