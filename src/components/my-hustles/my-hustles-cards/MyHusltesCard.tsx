export default function MyHustlesCard({hustle}: any) {
    return (
        <div className="group relative flex flex-col gap-4 p-6 bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-amber-900/5 hover:-translate-y-1 cursor-pointer">
            {/* Header: Title and Status */}
            <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors">  
                        {hustle.title}
                    </h3>
                    <span className="text-xs text-zinc-500 font-medium">Created on Nov 28, 2025</span>
                </div>
                <span className="px-3 py-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full">
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
                    <span className="text-white font-medium">{hustle.initialProgress}</span>
                </div>
                <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-amber-600 rounded-full" 
                        style={{ width: '65%' }}
                    ></div>
                </div>
            </div>

            {/* Footer: Tags/Meta */}
            <div className="flex items-center gap-2 mt-2 pt-4 border-t border-zinc-800/50">
                <span className="px-2.5 py-1 text-xs text-zinc-400 bg-zinc-800 rounded-md">
                    {hustle.category}
                </span>
                <span className="px-2.5 py-1 text-xs text-zinc-400 bg-zinc-800 rounded-md">
                    {hustle.tags}
                </span>
            </div>
        </div>
    )
}