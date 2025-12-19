import MyHustlesTopbar from "./MyHustlesTopbar"
import MyHustlesCardsContainer from "./my-hustles-cards/MyHustlesCardsContainer"

import { useState } from "react"
import { SearchContext } from "./SearchContext"

export default function MyHustlesContent(){
    // storing the current search
    const [search, setSearch] = useState<string>("")

return(
    <>
        <SearchContext.Provider value = {{search, setSearch}}>
            <div className = "w-full h-full py-10 px-8 flex flex-col gap-8">
                <div>
                    <MyHustlesTopbar/>
                </div>
                <div className="flex-1">
                    <MyHustlesCardsContainer />
                </div>
            </div>
        </SearchContext.Provider>
    </>
)
}