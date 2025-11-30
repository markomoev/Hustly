export default function MyHustlesTopbar(){
return(
    <div className="w-full flex flex-col gap-6">
        <div className="flex flex-row justify-between items-center">
            <h1 className="text-3xl text-white font-bold tracking-tight">
                My Hustles
            </h1>
            <button className="cursor-pointer px-5 py-2.5 bg-amber-700 hover:bg-amber-600 text-white font-medium rounded-xl transition-colors duration-200 flex items-center gap-2 shadow-lg shadow-amber-900/20">
                <span>+ New Hustle</span>
            </button>
        </div>

        <div className="w-full relative">
            <input 
                type="text" 
                placeholder="Search hustles..."
                className="w-full bg-zinc-900/50 border border-zinc-800 text-white placeholder-zinc-500 rounded-xl px-5 py-3 focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700 transition-all duration-200"
            />
        </div>
    </div>
)
}