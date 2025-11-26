import { NavLink } from "react-router-dom"

export default function ProfilePopupMenu(){
return(
    <div className='bg-zinc-900/50 rounded-tl-lg rounded-bl-lg'>
        <NavLink
            to={'/profile'}
            className={({isActive}) => `block pl-6 py-3 text-white hover:text-amber-700 transition-colors duration-200 hover:bg-zinc-800 rounded-tl-lg
                        ${isActive ? 'text-amber-700' : 'text-blue-500'}`}>
            View Profile
        </NavLink>

        <NavLink
            to = 'saved'
            className={({isActive}) => `block pl-6 pr-18 py-3 text-white hover:text-amber-700 transition-colors duration-200 hover:bg-zinc-800 rounded-tl-lg
                        ${isActive ? 'text-amber-700' : ''}`}>
            My Hustles
        </NavLink>

        <NavLink
            to = '/saved'
            className={({isActive}) => `block pl-6 pr-18 py-3 text-white hover:text-amber-700 transition-colors duration-200 hover:bg-zinc-800 rounded-tl-lg
                        ${isActive ? 'text-amber-700' : ''}`}>
            Saved
        </NavLink>
    </div>
)
}