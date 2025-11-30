import {NavLink} from 'react-router-dom'

import HomeIcon from '../icons/home.png'
import ScheduleIcon from '../icons/schedule.png'
import ProgressIcon from '../icons/progress.png'
import ProjectsIcon from '../icons/projects.png'

// retractable sidebar prop
type SidebarState = {
    isOpen: boolean;
}


export default function SidebarLink({isOpen}: SidebarState){
    // array for all links info
    const links = [
        {to: '/', label: "Home", icon: HomeIcon},
        {to: '/my-hustles', label: "My Hustles", icon: ProjectsIcon},
        {to: '/schedule', label: "Schedule", icon: ScheduleIcon},
        {to: '/progress', label: "Progress", icon: ProgressIcon},
    ]

    const linksDisplay = links.map((l) => {
        return (
            <NavLink
                key={l.label}
                to={l.to}
                className={({ isActive }) =>
                    `group ${isOpen ? 'px-3 pr-5 py-3 justify-start' : 'px-3.5 py-2.5 justify-center'}
                    w-auto whitespace-nowrap flex flex-row items-center gap-4 text-white text-md rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 backdrop-blur-md overflow-hidden
                    ${isActive ? 'border-2 border-amber-700 shadow-lg bg-zinc-900' : 'border-2 border-transparent hover:bg-zinc-800/30'}`
                }
            >
                <img src={l.icon} alt={l.label} className="w-6 h-6 shrink-0 transition-transform duration-300 group-hover:rotate-[-20deg] group-hover:scale-125" />
                <span className={`${isOpen ? 'block opacity-100' : 'hidden opacity-0'} transition-opacity duration-300`}>{l.label}</span>
            </NavLink>
        );
    });

    return (
        <div className="flex flex-col gap-1">
            {linksDisplay}
        </div>
    )
}