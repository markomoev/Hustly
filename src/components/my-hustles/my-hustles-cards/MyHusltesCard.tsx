import { Activity, useState } from 'react';
import HustlePopup from '../my-hustle-popups/HustlePopup';

import fileIcon from '../icons/file.png'

export default function MyHustlesCard({hustle}: any) {
    // Format date to remove the day of the week 
    const formattedDate : any = new Date(hustle.created_at).toDateString().split(' ').slice(1).join().replace(",", " ")

    // get the color for specific status
    const getStatusColor = (status: string) => {
        switch(status){
            case 'completed': return 'text-emerald-400 border-emerald-400/20 bg-emerald-400/10';
            case 'paused': return 'text-zinc-400 bg-zinc-800/50 border border-zinc-700';
            default: return 'text-amber-400 border-amber-400/20 bg-amber-400/10';
        }
    }

    // state for existing individual hustle popup
    const [activeHustle, setActiveHustle] = useState<boolean>(false)
    
    return (
    <>
        <Activity mode = {activeHustle ? "visible" : "hidden"}>
            <HustlePopup
                isActive = {setActiveHustle}
                hustle = {hustle}/>
        </Activity>

        <div className="group relative flex flex-col gap-4 p-6 bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-amber-900/5 hover:-translate-y-1 cursor-pointer">
            {/* Header: Title and Status */}
            <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors">  
                        {hustle.title}
                    </h3>
                    <span className="text-xs text-zinc-500 font-medium">{formattedDate}</span>
                </div>
                <span className={`px-3 py-1 text-xs font-medium border rounded-full capitalize ${getStatusColor(hustle.status)}`}>
                    {hustle.status}
                </span>
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-400 line-clamp-2">
                {hustle.description}
            </p>

            {/* Progress Section */}
            <div className="flex flex-col gap-2 mt-2">
                <div className="flex justify-between items-center text-xs">
                    <span className="text-zinc-400">Progress</span>
                    <span className="text-white font-medium">{hustle.initial_progress}%</span>
                </div>
                <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-amber-600 rounded-full" 
                        style={{ width: `${hustle.initial_progress}%` }}
                    ></div>
                </div>
            </div>

            {/* Footer: Tags/Meta */}
            <div className="flex flex-col gap-2 mt-2 pt-4 border-t border-zinc-800/50">
                <div className="flex items-center gap-2">
                    <span className="border border-amber-700 px-2.5 py-1 text-xs text-amber-700 bg-zinc-800 rounded-md">
                        {hustle.category}
                    </span>
                </div>
                
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-1 text-xs text-zinc-400 bg-zinc-800 rounded-md`}>
                            {hustle.tags}
                        </span>
                    </div>

                    {/* File Icon Button */}
                    <button 
                        className="cursor-pointer p-1 hover:bg-zinc-800/50 rounded-lg transition-all shrink-0"
                        onClick={(e) => {
                            e.preventDefault();
                            setActiveHustle(true)
                        }}
                    >
                        <img src={fileIcon} alt="File" className="w-5 h-5 opacity-60 hover:opacity-100 transition-opacity"/>
                    </button>
                </div>
            </div>
        </div>
    </>
    )
}