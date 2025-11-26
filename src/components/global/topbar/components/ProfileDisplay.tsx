import { useState} from 'react'

import ArrowDownIcon from './icons/arrow-down.png'
import ProfileMenu from './ProileMenu'

type nicknameString = {
    nickname: string
}

export default function ProfileDisplay({nickname}: nicknameString){
// state for opened menu
const [isOpen, setIsOpen] = useState(false)

return(
    <div 
        className="w-auto mt-2 flex flex-col relative"
    >
        <div // on hover open the menu   
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className="flex flex-row items-center justify-between px-4 pt-1.5 pb-2 bg-zinc-900 text-zinc-300 rounded-full text-base font-medium transition-colors duration-200 shadow ml-auto border border-amber-700"
        >
            <div className="flex flex-row gap-3 items-center">
                <img
                    src={ArrowDownIcon}
                    alt="Arrow"
                    className={`w-4 h-4 pt-0.5 ${isOpen ? 'transition-transform duration-300 rotate-180' : 'transition-transform duration-300'}`}
                />
                <span className="">{nickname}</span>
            </div>
        </div>
        {/* menu open */}        
        {isOpen && (
            <div 
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className="absolute right-0 top-full pt-2 z-10"
            >
                <ProfileMenu
                    setIsOpen={setIsOpen}/>
            </div>
        )}
    </div>
)
}