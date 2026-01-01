import editIcon from '../icons/hustle-popup/edit.svg'
import closeIcon from '../icons/hustle-popup/close.svg'

import { useState, Activity } from 'react'

import useDeleteHustle from '../../../hooks/my-hustles/my-hustles-edit/useDeleteHustle'

export default function HustlePopup({isActive, hustle} : any) {
    // edit mode
    const [isEditMode, setIsEditMode] = useState<boolean>(false)
    
    // format date to remove the day of the week 
    const formattedDate : any = new Date(hustle.created_at).toDateString().split(' ').slice(1).join().replace(",", " ")

    // get the color for specific status
    const getStatusColor = (status: string) => {
        switch(status){
            case 'completed': return 'text-emerald-400 border-emerald-400/20 bg-emerald-400/10';
            case 'paused': return 'text-zinc-400 bg-zinc-800/50 border border-zinc-700';
            default: return 'text-amber-400 border-amber-400/20 bg-amber-400/10';
        }
    }

    const handleDeleteHustle = async() => {
        const response : any = await useDeleteHustle(hustle.id)
        return {error: null, data: response}
    }
    
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="relative w-full max-w-2xl mx-4 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl">
                
                {/* Header */}
                <div className="flex justify-between items-start px-8 py-6 border-b border-zinc-800">
                    <div className="flex flex-col gap-1 w-full mr-8">
                        <Activity mode={isEditMode ? "visible" : "hidden"}>
                            <input 
                                type="text"
                                defaultValue={hustle.title}
                                className="text-2xl font-bold text-white bg-transparent border-0 border-b border-zinc-800 focus:border-amber-500 focus:ring-0 px-0 py-1 w-full transition-colors placeholder:text-zinc-800 focus:outline-none"
                                placeholder="Hustle Title"
                            />
                        </Activity>
                        <Activity mode={!isEditMode ? "visible" : "hidden"}>
                            <h2 className="text-2xl font-bold text-white">
                                {hustle.title}
                            </h2>
                        </Activity>
                        <span className="text-sm text-zinc-500">
                            {formattedDate}
                        </span>
                    </div>
                    <button
                        type="button"
                        onClick={() => isActive(false)}
                        className="cursor-pointer p-1.5 rounded-lg hover:bg-zinc-800 transition-all duration-200 opacity-60 hover:opacity-100 shrink-0">
                        <img src={closeIcon} alt="" className = '' />
                    </button>
                </div>

                {/* Content */}
                <form className="px-8 py-6 max-h-[70vh] overflow-y-auto flex flex-col gap-8">
                    
                    {/* Status & Category Row */}
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                            <span className="text-zinc-400 text-sm">Status:</span>
                            <Activity mode={isEditMode ? "visible" : "hidden"}>
                                <select 
                                    defaultValue={hustle.status}
                                    className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-amber-500">
                                    <option value="active">Active</option>
                                    <option value="paused">Paused</option>
                                    <option value="completed">Completed</option>
                                </select>
                            </Activity>
                            <Activity mode={!isEditMode ? "visible" : "hidden"}>
                                <span className={`px-3 py-1 text-xs font-medium rounded-full capitalize ${getStatusColor(hustle.status)}`}>
                                    {hustle.status}
                                </span>
                            </Activity>
                        </div>
                        <div className="w-px h-6 bg-zinc-800"></div>
                        <div className="flex items-center gap-2">
                            <span className="text-zinc-400 text-sm">Category:</span>
                            <Activity mode={isEditMode ? "visible" : "hidden"}>
                                <input 
                                    type="text"
                                    defaultValue={hustle.category}
                                    className="text-sm font-medium bg-zinc-800 text-white border border-zinc-700 rounded px-2 py-0.5 focus:outline-none focus:border-amber-500 w-32"
                                />
                            </Activity>
                            <Activity mode={!isEditMode ? "visible" : "hidden"}>
                                <span className="text-amber-500 text-sm font-medium">{hustle.category}</span>
                            </Activity>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="flex flex-col gap-2">
                        <h3 className="text-sm font-medium tracking-wider text-zinc-500">Description</h3>
                        <Activity mode={isEditMode ? "visible" : "hidden"}>
                            <textarea 
                                defaultValue={hustle.description}
                                rows={4}
                                className="text-zinc-300 leading-relaxed bg-zinc-800 border border-zinc-700 rounded-lg p-3 focus:outline-none focus:border-amber-500 w-full resize-none"
                            />
                        </Activity>
                        <Activity mode={!isEditMode ? "visible" : "hidden"}>
                            <p className="text-zinc-300 leading-relaxed">
                                {hustle.description}
                            </p>
                        </Activity>
                    </div>

                    {/* Progress */}
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-between items-center">
                            <h3 className="text-sm font-medium tracking-wider text-zinc-500">Progress</h3>
                            <Activity mode={isEditMode ? "visible" : "hidden"}>
                                <div className="flex items-center gap-2">
                                    <input 
                                        type="number" 
                                        min="0" 
                                        max="100"
                                        defaultValue={hustle.initial_progress}
                                        className="w-16 bg-zinc-800 border border-zinc-700 rounded px-2 py-1 text-white text-right focus:outline-none focus:border-amber-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                    />
                                    <span className="text-zinc-400">%</span>
                                </div>
                            </Activity>
                            <Activity mode={!isEditMode ? "visible" : "hidden"}>
                                <span className="text-white font-bold">{hustle.initial_progress}%</span>
                            </Activity>
                        </div>
                        <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-amber-600 rounded-full" 
                                style={{ width: `${hustle.initial_progress}%` }}
                            ></div>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-sm font-medium tracking-wider text-zinc-500">Tags</h3>
                        <Activity mode={isEditMode ? "visible" : "hidden"}>
                            <input 
                                type="text"
                                defaultValue={hustle.tags}
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-zinc-300 focus:outline-none focus:border-amber-500"
                                placeholder="Separate tags with spaces"
                            />
                        </Activity>
                        <Activity mode={!isEditMode ? "visible" : "hidden"}>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1.5 text-sm text-zinc-400 bg-zinc-800 rounded-lg border border-zinc-700/50">
                                    {hustle.tags}
                                </span>
                            </div>
                        </Activity>
                    </div>

                    {/* Footer / Actions */}
                    <div className="pt-6 mt-2 border-t border-zinc-800 flex justify-end gap-3">
                        <Activity mode={isEditMode ? "visible" : "hidden"}>
                            <div className="w-full flex items-center justify-between">
                                <button 
                                    type="button"
                                    onClick = {() =>  handleDeleteHustle()}
                                    className="cursor-pointer px-4 py-2 text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-xl transition-colors">
                                    Delete
                                </button>
                                <div className="flex items-center gap-3">
                                    <button 
                                        type="button"
                                        onClick={() => setIsEditMode(false)}
                                        className="cursor-pointer px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-xl transition-colors">
                                        Cancel
                                    </button>
                                    <button 
                                        type="submit"
                                        className="cursor-pointer px-4 py-2 text-sm font-medium text-zinc-900 bg-amber-500 hover:bg-amber-400 rounded-xl transition-colors shadow-lg shadow-amber-500/20">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </Activity>
                        
                        <Activity mode={!isEditMode ? "visible" : "hidden"}>
                            <button
                                type="button"
                                onClick={() => setIsEditMode(true)} 
                                className="cursor-pointer group flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-400 bg-zinc-800/50 hover:bg-zinc-800 hover:text-white border border-zinc-700/50 hover:border-zinc-600 rounded-xl transition-all duration-200">
                                <img src={editIcon} alt="Edit Icon" className=''/>
                                Edit Details
                            </button>
                        </Activity>
                    </div>

                </form>
            </div>
        </div>
    )
}
