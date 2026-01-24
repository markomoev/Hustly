import { NavLink } from "react-router-dom"

export default function ProfilePopupMenu(){
return(
    <div className='bg-zinc-900/50 rounded-t-lg md:rounded-t-none md:rounded-l-lg flex flex-row md:flex-col overflow-x-auto'>
        <NavLink
            to={'/profile'}
            className={({isActive}) => `block px-4 md:pl-6 md:py-3 py-3 text-white hover:text-amber-700 transition-colors duration-200 hover:bg-zinc-800 rounded-tl-lg whitespace-nowrap
                        ${isActive ? 'text-amber-700' : 'text-blue-500'}`}>
            View Profile
        </NavLink>

        <NavLink
            to = 'saved'
            className={({isActive}) => `block px-4 md:pl-6 md:pr-18 py-3 text-white hover:text-amber-700 transition-colors duration-200 hover:bg-zinc-800 whitespace-nowrap
                        ${isActive ? 'text-amber-700' : ''}`}>
            My Hustles
        </NavLink>

        <NavLink
            to = '/saved'
            className={({isActive}) => `block px-4 md:pl-6 md:pr-18 py-3 text-white hover:text-amber-700 transition-colors duration-200 hover:bg-zinc-800 md:rounded-bl-lg whitespace-nowrap
                        ${isActive ? 'text-amber-700' : ''}`}>
            Saved
        </NavLink>
    </div>
)
}