export default function NewHustlePopup() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="relative w-full max-w-2xl mx-4 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl">
                {/* Header */}
                <div className="flex justify-between items-center px-8 py-6 border-b border-zinc-800">
                    <h2 className="text-2xl font-bold text-white">Create New Hustle</h2>
                    <button className="text-zinc-400 hover:text-white transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Form Content */}
                <div className="px-8 py-6 max-h-[70vh] overflow-y-auto">
                    <form className="flex flex-col gap-6">
                        {/* Hustle Title */}
                        <div className="flex flex-col gap-2">
                            <label className="text-white text-sm font-medium">Hustle Title *</label>
                            <input
                                type="text"
                                placeholder="Enter hustle title"
                                className="px-4 py-3 bg-zinc-800 text-white placeholder-zinc-500 rounded-xl border border-zinc-700 focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700 transition-all duration-200"
                            />
                        </div>

                        {/* Description */}
                        <div className="flex flex-col gap-2">
                            <label className="text-white text-sm font-medium">Description</label>
                            <textarea
                                placeholder="Describe your hustle..."
                                rows={4}
                                className="px-4 py-3 bg-zinc-800 text-white placeholder-zinc-500 rounded-xl border border-zinc-700 focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700 transition-all duration-200 resize-none"
                            />
                        </div>

                        {/* Status and Category Row */}
                        <div className="flex gap-4">
                            <div className="flex-1 flex flex-col gap-2">
                                <label className="text-white text-sm font-medium">Status</label>
                                <select className="px-4 py-3 bg-zinc-800 text-white rounded-xl border border-zinc-700 focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700 transition-all duration-200">
                                    <option value="active">Active</option>
                                    <option value="paused">Paused</option>
                                    <option value="completed">Completed</option>
                                </select>
                            </div>

                            <div className="flex-1 flex flex-col gap-2">
                                <label className="text-white text-sm font-medium">Category</label>
                                <input
                                    type="text"
                                    placeholder="e.g., Development"
                                    className="px-4 py-3 bg-zinc-800 text-white placeholder-zinc-500 rounded-xl border border-zinc-700 focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700 transition-all duration-200"
                                />
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-col gap-2">
                            <label className="text-white text-sm font-medium">Tags</label>
                            <input
                                type="text"
                                placeholder="React, Node.js, etc. (comma separated)"
                                className="px-4 py-3 bg-zinc-800 text-white placeholder-zinc-500 rounded-xl border border-zinc-700 focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700 transition-all duration-200"
                            />
                        </div>

                        {/* Progress */}
                        <div className="flex flex-col gap-2">
                            <label className="text-white text-sm font-medium">Initial Progress (%)</label>
                            <input
                                type="number"
                                min="0"
                                max="100"
                                placeholder="0"
                                className="px-4 py-3 bg-zinc-800 text-white placeholder-zinc-500 rounded-xl border border-zinc-700 focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700 transition-all duration-200"
                            />
                        </div>
                    </form>
                </div>

                {/* Footer */}
                <div className="flex justify-end gap-3 px-8 py-6 border-t border-zinc-800">
                    <button
                        type="button"
                        className="px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-xl border border-zinc-700 transition-colors duration-200"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-6 py-2.5 bg-amber-700 hover:bg-amber-600 text-white font-medium rounded-xl transition-colors duration-200 shadow-lg shadow-amber-900/20"
                    >
                        Create Hustle
                    </button>
                </div>
            </div>
        </div>
    )
}