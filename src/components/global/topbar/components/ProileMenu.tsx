import { NavLink } from "react-router-dom"
import UserIcon from './icons/user.png'
import SettingsIcon from './icons/settings.png'

type openStateProp = {
    setIsOpen: (value: boolean) => void;
}

export default function ProfileMenu({setIsOpen}: openStateProp){

return(
    <div 
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className = 'md:w-50 h-auto px-5 py-2 bg-zinc-900/50 rounded-xl flex flex-col gap-2'>
        <NavLink
        className = 'flex flex-row w-full px-1 py-1 gap-2'
        to ={'/profile'}
        
        >
            <img src={UserIcon} alt="User Icon" className = 'mt-1 w-5 h-4' />
            <span className = 'text-white w-full'>Profile</span>
        </NavLink>

        <NavLink
        className = 'flex flex-row px-1 py-1 gap-2'
        to = ""
        
        >
            <img src={SettingsIcon} alt="User Icon" className = 'mt-1 w-5 h-4' />
            <span className = 'text-white w-full'>Settings</span>
        </NavLink>
    </div>
)
}